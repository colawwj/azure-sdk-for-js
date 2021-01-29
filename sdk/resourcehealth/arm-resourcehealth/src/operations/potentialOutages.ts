/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/potentialOutagesMappers";
import * as Parameters from "../models/parameters";
import { MicrosoftResourceHealthContext } from "../microsoftResourceHealthContext";

/** Class representing a PotentialOutages. */
export class PotentialOutages {
  private readonly client: MicrosoftResourceHealthContext;

  /**
   * Create a PotentialOutages.
   * @param {MicrosoftResourceHealthContext} client Reference to the service client.
   */
  constructor(client: MicrosoftResourceHealthContext) {
    this.client = client;
  }

  /**
   * Gets Azure services' potential outages.
   * @param [options] The optional parameters
   * @returns Promise<Models.PotentialOutagesGetResponse>
   */
  get(options?: msRest.RequestOptionsBase): Promise<Models.PotentialOutagesGetResponse>;
  /**
   * @param callback The callback
   */
  get(callback: msRest.ServiceCallback<Models.PotentialOutagesGetResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PotentialOutagesGetResult>): void;
  get(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PotentialOutagesGetResult>, callback?: msRest.ServiceCallback<Models.PotentialOutagesGetResult>): Promise<Models.PotentialOutagesGetResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PotentialOutagesGetResponse>;
  }

  /**
   * Lists Azure services' potential outages.
   * @param [options] The optional parameters
   * @returns Promise<Models.PotentialOutagesListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.PotentialOutagesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.PotentialOutageListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PotentialOutageListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PotentialOutageListResult>, callback?: msRest.ServiceCallback<Models.PotentialOutageListResult>): Promise<Models.PotentialOutagesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PotentialOutagesListResponse>;
  }

  /**
   * Lists Azure services' potential outages.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PotentialOutagesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PotentialOutagesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PotentialOutageListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PotentialOutageListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PotentialOutageListResult>, callback?: msRest.ServiceCallback<Models.PotentialOutageListResult>): Promise<Models.PotentialOutagesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PotentialOutagesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.ResourceHealth/potentialOutages/default",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PotentialOutagesGetResult
    },
    default: {
      bodyMapper: Mappers.WrappedErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.ResourceHealth/potentialOutages",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PotentialOutageListResult
    },
    default: {
      bodyMapper: Mappers.WrappedErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PotentialOutageListResult
    },
    default: {
      bodyMapper: Mappers.WrappedErrorResponse
    }
  },
  serializer
};
