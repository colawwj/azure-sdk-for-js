/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * Returns whether or not Serial Console is disabled.
 * @summary Serial Console GET Result
 */
export interface SerialConsoleStatus {
  /**
   * Whether or not Serial Console is disabled.
   */
  disabled?: boolean;
}

/**
 * Returns whether or not Serial Console is disabled.
 * @summary Serial Console Disable Result
 */
export interface DisableSerialConsoleResult {
  /**
   * Whether or not Serial Console is disabled.
   */
  disabled?: boolean;
}

/**
 * Returns whether or not Serial Console is disabled (enabled).
 * @summary Serial Console Enable Result
 */
export interface EnableSerialConsoleResult {
  /**
   * Whether or not Serial Console is disabled (enabled).
   */
  disabled?: boolean;
}

/**
 * An interface representing SerialConsoleOperationsValueItemDisplay.
 */
export interface SerialConsoleOperationsValueItemDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * An interface representing SerialConsoleOperationsValueItem.
 */
export interface SerialConsoleOperationsValueItem {
  name?: string;
  isDataAction?: string;
  display?: SerialConsoleOperationsValueItemDisplay;
}

/**
 * Serial Console operations
 * @summary Serial Console operations
 */
export interface SerialConsoleOperations {
  /**
   * A list of Serial Console operations
   */
  value?: SerialConsoleOperationsValueItem[];
}

/**
 * Error saying that the provided subscription could not be found
 * @summary Serial Console subscription not found
 */
export interface GetSerialConsoleSubscriptionNotFound {
  /**
   * Error code
   */
  code?: string;
  /**
   * Subscription not found message
   */
  message?: string;
}

/**
 * The Resource model definition.
 */
export interface Resource extends BaseResource {
  /**
   * Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Resource name
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource type
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The resource model definition for a ARM proxy resource. It will have everything other than
 * required location and tags
 */
export interface ProxyResource extends Resource {
}

/**
 * Represents the serial port of the parent resource.
 * @summary Serial port
 */
export interface SerialPort extends ProxyResource {
  /**
   * Specifies whether the port is enabled for a serial console connection. Possible values
   * include: 'enabled', 'disabled'
   */
  state?: SerialPortState;
}

/**
 * The list serial ports operation response.
 * @summary Serial port list result
 */
export interface SerialPortListResult {
  /**
   * The list of serial ports.
   */
  value?: SerialPort[];
}

/**
 * Returns a connection string to the serial port of the resource.
 * @summary Serial port connect result
 */
export interface SerialPortConnectResult {
  /**
   * Connection string to the serial port of the resource.
   */
  connectionString?: string;
}

/**
 * An interface representing MicrosoftSerialConsoleClientOptions.
 */
export interface MicrosoftSerialConsoleClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * Defines values for SerialPortState.
 * Possible values include: 'enabled', 'disabled'
 * @readonly
 * @enum {string}
 */
export type SerialPortState = 'enabled' | 'disabled';

/**
 * Contains response data for the listOperations operation.
 */
export type ListOperationsResponse = SerialConsoleOperations & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SerialConsoleOperations;
    };
};

/**
 * Contains response data for the getConsoleStatus operation.
 */
export type GetConsoleStatusResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the disableConsole operation.
 */
export type DisableConsoleResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the enableConsole operation.
 */
export type EnableConsoleResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SerialPortsListResponse = SerialPortListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SerialPortListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SerialPortsGetResponse = SerialPort & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SerialPort;
    };
};

/**
 * Contains response data for the create operation.
 */
export type SerialPortsCreateResponse = SerialPort & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SerialPort;
    };
};

/**
 * Contains response data for the listBySubscriptions operation.
 */
export type SerialPortsListBySubscriptionsResponse = SerialPortListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SerialPortListResult;
    };
};

/**
 * Contains response data for the connect operation.
 */
export type SerialPortsConnectResponse = SerialPortConnectResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SerialPortConnectResult;
    };
};
