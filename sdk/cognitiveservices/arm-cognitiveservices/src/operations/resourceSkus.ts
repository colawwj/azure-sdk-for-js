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
import * as Mappers from "../models/resourceSkusMappers";
import * as Parameters from "../models/parameters";
import { CognitiveServicesManagementClientContext } from "../cognitiveServicesManagementClientContext";

/** Class representing a ResourceSkus. */
export class ResourceSkus {
  private readonly client: CognitiveServicesManagementClientContext;

  /**
   * Create a ResourceSkus.
   * @param {CognitiveServicesManagementClientContext} client Reference to the service client.
   */
  constructor(client: CognitiveServicesManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the list of Microsoft.CognitiveServices SKUs available for your Subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceSkusListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ResourceSkusListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ResourceSkusResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceSkusResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceSkusResult>, callback?: msRest.ServiceCallback<Models.ResourceSkusResult>): Promise<Models.ResourceSkusListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ResourceSkusListResponse>;
  }

  /**
   * Gets the list of Microsoft.CognitiveServices SKUs available for your Subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceSkusListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ResourceSkusListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceSkusResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceSkusResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceSkusResult>, callback?: msRest.ServiceCallback<Models.ResourceSkusResult>): Promise<Models.ResourceSkusListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ResourceSkusListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/skus",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSkusResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
      bodyMapper: Mappers.ResourceSkusResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
