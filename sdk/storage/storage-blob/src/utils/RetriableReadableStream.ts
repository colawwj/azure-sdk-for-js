// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { TransferProgressEvent } from "@azure/core-http";
import { Readable } from "stream";

export type ReadableStreamGetter = (offset: number) => Promise<NodeJS.ReadableStream>;

export interface RetriableReadableStreamOptions {
  /**
   * Max retry count (>=0), undefined or invalid value means no retry
   *
   * @type {number}
   * @memberof RetriableReadableStreamOptions
   */
  maxRetryRequests?: number;

  /**
   * Read progress event handler
   *
   * @memberof RetriableReadableStreamOptions
   */
  onProgress?: (progress: TransferProgressEvent) => void;

  /**
   * Debug purpose only. Used to inject an unexpected end to existing internal stream,
   * to test stream retry works well or not.
   *
   * When assign it to true, for next incoming "data" event of internal stream,
   * RetriableReadableStream will try to emit an "end" event to existing internal
   * stream to force it end and start retry from the breaking point.
   * The value will then update to "undefined", once the injection works.
   *
   * @type {boolean}
   * @memberof RetriableReadableStreamOptions
   */
  doInjectErrorOnce?: boolean;

  /**
   * A threshold, not a limit. Dictates the amount of data that a stream buffers before it stops asking for more data.
   *
   * @type {number}
   * @memberof RetriableReadableStreamOptions
   */
  highWaterMark?: number;
}

/**
 * ONLY AVAILABLE IN NODE.JS RUNTIME.
 *
 * A Node.js ReadableStream will internally retry when internal ReadableStream unexpected ends.
 *
 * @class RetriableReadableStream
 * @extends {Readable}
 */
export class RetriableReadableStream extends Readable {
  private start: number;
  private offset: number;
  private end: number;
  private getter: ReadableStreamGetter;
  private source: NodeJS.ReadableStream;
  private retries: number = 0;
  private maxRetryRequests: number;
  private onProgress?: (progress: TransferProgressEvent) => void;
  private options: RetriableReadableStreamOptions;

  /**
   * Creates an instance of RetriableReadableStream.
   *
   * @param {NodeJS.ReadableStream} source The current ReadableStream returned from getter
   * @param {ReadableStreamGetter} getter A method calling downloading request returning
   *                                      a new ReadableStream from specified offset
   * @param {number} offset Offset position in original data source to read
   * @param {number} count How much data in original data source to read
   * @param {RetriableReadableStreamOptions} [options={}]
   * @memberof RetriableReadableStream
   */
  public constructor(
    source: NodeJS.ReadableStream,
    getter: ReadableStreamGetter,
    offset: number,
    count: number,
    options: RetriableReadableStreamOptions = {}
  ) {
    super({ highWaterMark: options.highWaterMark });
    this.getter = getter;
    this.source = source;
    this.start = offset;
    this.offset = offset;
    this.end = offset + count - 1;
    this.maxRetryRequests =
      options.maxRetryRequests && options.maxRetryRequests >= 0 ? options.maxRetryRequests : 0;
    this.onProgress = options.onProgress;
    this.options = options;

    this.setSourceEventHandlers();
  }

  public _read() {
    this.source.resume();
  }

  private setSourceEventHandlers() {
    this.source.on("data", this.sourceDataHandler);
    this.source.on("end", this.sourceErrorOrEndHandler);
    this.source.on("error", this.sourceErrorOrEndHandler);
  }

  private removeSourceEventHandlers() {
    this.source.removeListener("data", this.sourceDataHandler);
    this.source.removeListener("end", this.sourceErrorOrEndHandler);
    this.source.removeListener("error", this.sourceErrorOrEndHandler);
  }

  private sourceDataHandler = (data: Buffer) => {
    if (this.options.doInjectErrorOnce) {
      this.options.doInjectErrorOnce = undefined;
      this.source.pause();
      this.source.removeAllListeners("data");
      this.source.emit("end");
      return;
    }

    // console.log(
    //   `Offset: ${this.offset}, Received ${data.length} from internal stream`
    // );
    this.offset += data.length;
    if (this.onProgress) {
      this.onProgress({ loadedBytes: this.offset - this.start });
    }
    if (!this.push(data)) {
      this.source.pause();
    }
  };

  private sourceErrorOrEndHandler = (err?: Error) => {
    if (err && err.name === "AbortError") {
      this.destroy(err);
      return;
    }

    // console.log(
    //   `Source stream emits end or error, offset: ${
    //     this.offset
    //   }, dest end : ${this.end}`
    // );
    this.removeSourceEventHandlers();
    if (this.offset - 1 === this.end) {
      this.push(null);
    } else if (this.offset <= this.end) {
      // console.log(
      //   `retries: ${this.retries}, max retries: ${this.maxRetries}`
      // );
      if (this.retries < this.maxRetryRequests) {
        this.retries += 1;
        this.getter(this.offset)
          .then((newSource) => {
            this.source = newSource;
            this.setSourceEventHandlers();
          })
          .catch((error) => {
            this.destroy(error);
          });
      } else {
        this.destroy(
          new Error(
            // tslint:disable-next-line:max-line-length
            `Data corruption failure: received less data than required and reached maxRetires limitation. Received data offset: ${this
              .offset - 1}, data needed offset: ${this.end}, retries: ${
              this.retries
            }, max retries: ${this.maxRetryRequests}`
          )
        );
      }
    } else {
      this.destroy(
        new Error(
          `Data corruption failure: Received more data than original request, data needed offset is ${
            this.end
          }, received offset: ${this.offset - 1}`
        )
      );
    }
  };

  _destroy(error: Error | null, callback: (error?: Error) => void): void {
    // remove listener from source and release source
    this.removeSourceEventHandlers();
    (this.source as Readable).destroy();

    callback(error === null ? undefined : error);
  }
}
