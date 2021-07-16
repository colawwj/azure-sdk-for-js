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
import * as Mappers from "../models/streamingPoliciesMappers";
import * as Parameters from "../models/parameters";
import { AzureMediaServicesContext } from "../azureMediaServicesContext";

/** Class representing a StreamingPolicies. */
export class StreamingPolicies {
  private readonly client: AzureMediaServicesContext;

  /**
   * Create a StreamingPolicies.
   * @param {AzureMediaServicesContext} client Reference to the service client.
   */
  constructor(client: AzureMediaServicesContext) {
    this.client = client;
  }

  /**
   * Lists the Streaming Policies in the account
   * @summary List Streaming Policies
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param [options] The optional parameters
   * @returns Promise<Models.StreamingPoliciesListResponse>
   */
  list(resourceGroupName: string, accountName: string, options?: Models.StreamingPoliciesListOptionalParams): Promise<Models.StreamingPoliciesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.StreamingPolicyCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, options: Models.StreamingPoliciesListOptionalParams, callback: msRest.ServiceCallback<Models.StreamingPolicyCollection>): void;
  list(resourceGroupName: string, accountName: string, options?: Models.StreamingPoliciesListOptionalParams | msRest.ServiceCallback<Models.StreamingPolicyCollection>, callback?: msRest.ServiceCallback<Models.StreamingPolicyCollection>): Promise<Models.StreamingPoliciesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.StreamingPoliciesListResponse>;
  }

  /**
   * Get the details of a Streaming Policy in the Media Services account
   * @summary Get a Streaming Policy
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param streamingPolicyName The Streaming Policy name.
   * @param [options] The optional parameters
   * @returns Promise<Models.StreamingPoliciesGetResponse>
   */
  get(resourceGroupName: string, accountName: string, streamingPolicyName: string, options?: msRest.RequestOptionsBase): Promise<Models.StreamingPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param streamingPolicyName The Streaming Policy name.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, streamingPolicyName: string, callback: msRest.ServiceCallback<Models.StreamingPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param streamingPolicyName The Streaming Policy name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, streamingPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StreamingPolicy>): void;
  get(resourceGroupName: string, accountName: string, streamingPolicyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StreamingPolicy>, callback?: msRest.ServiceCallback<Models.StreamingPolicy>): Promise<Models.StreamingPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        streamingPolicyName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.StreamingPoliciesGetResponse>;
  }

  /**
   * Create a Streaming Policy in the Media Services account
   * @summary Create a Streaming Policy
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param streamingPolicyName The Streaming Policy name.
   * @param parameters The request parameters
   * @param [options] The optional parameters
   * @returns Promise<Models.StreamingPoliciesCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, streamingPolicyName: string, parameters: Models.StreamingPolicy, options?: msRest.RequestOptionsBase): Promise<Models.StreamingPoliciesCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param streamingPolicyName The Streaming Policy name.
   * @param parameters The request parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, streamingPolicyName: string, parameters: Models.StreamingPolicy, callback: msRest.ServiceCallback<Models.StreamingPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param streamingPolicyName The Streaming Policy name.
   * @param parameters The request parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, streamingPolicyName: string, parameters: Models.StreamingPolicy, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StreamingPolicy>): void;
  create(resourceGroupName: string, accountName: string, streamingPolicyName: string, parameters: Models.StreamingPolicy, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StreamingPolicy>, callback?: msRest.ServiceCallback<Models.StreamingPolicy>): Promise<Models.StreamingPoliciesCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        streamingPolicyName,
        parameters,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.StreamingPoliciesCreateResponse>;
  }

  /**
   * Deletes a Streaming Policy in the Media Services account
   * @summary Delete a Streaming Policy
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param streamingPolicyName The Streaming Policy name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, streamingPolicyName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param streamingPolicyName The Streaming Policy name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, streamingPolicyName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param streamingPolicyName The Streaming Policy name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, streamingPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, streamingPolicyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        streamingPolicyName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists the Streaming Policies in the account
   * @summary List Streaming Policies
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.StreamingPoliciesListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.StreamingPoliciesListNextOptionalParams): Promise<Models.StreamingPoliciesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.StreamingPolicyCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.StreamingPoliciesListNextOptionalParams, callback: msRest.ServiceCallback<Models.StreamingPolicyCollection>): void;
  listNext(nextPageLink: string, options?: Models.StreamingPoliciesListNextOptionalParams | msRest.ServiceCallback<Models.StreamingPolicyCollection>, callback?: msRest.ServiceCallback<Models.StreamingPolicyCollection>): Promise<Models.StreamingPoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.StreamingPoliciesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingPolicies",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StreamingPolicyCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingPolicies/{streamingPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.streamingPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StreamingPolicy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingPolicies/{streamingPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.streamingPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.StreamingPolicy,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.StreamingPolicy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingPolicies/{streamingPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.streamingPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
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
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StreamingPolicyCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
