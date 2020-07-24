/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/queryKeysMappers";
import * as Parameters from "../models/parameters";
import { SearchManagementClientContext } from "../searchManagementClientContext";

/** Class representing a QueryKeys. */
export class QueryKeys {
  private readonly client: SearchManagementClientContext;

  /**
   * Create a QueryKeys.
   * @param {SearchManagementClientContext} client Reference to the service client.
   */
  constructor(client: SearchManagementClientContext) {
    this.client = client;
  }

  /**
   * Generates a new query key for the specified Search service. You can create up to 50 query keys
   * per service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param name The name of the new query API key.
   * @param [options] The optional parameters
   * @returns Promise<Models.QueryKeysCreateResponse>
   */
  create(resourceGroupName: string, searchServiceName: string, name: string, options?: Models.QueryKeysCreateOptionalParams): Promise<Models.QueryKeysCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param name The name of the new query API key.
   * @param callback The callback
   */
  create(resourceGroupName: string, searchServiceName: string, name: string, callback: msRest.ServiceCallback<Models.QueryKey>): void;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param name The name of the new query API key.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, searchServiceName: string, name: string, options: Models.QueryKeysCreateOptionalParams, callback: msRest.ServiceCallback<Models.QueryKey>): void;
  create(resourceGroupName: string, searchServiceName: string, name: string, options?: Models.QueryKeysCreateOptionalParams | msRest.ServiceCallback<Models.QueryKey>, callback?: msRest.ServiceCallback<Models.QueryKey>): Promise<Models.QueryKeysCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        searchServiceName,
        name,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.QueryKeysCreateResponse>;
  }

  /**
   * Returns the list of query API keys for the given Azure Cognitive Search service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.QueryKeysListBySearchServiceResponse>
   */
  listBySearchService(resourceGroupName: string, searchServiceName: string, options?: Models.QueryKeysListBySearchServiceOptionalParams): Promise<Models.QueryKeysListBySearchServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param callback The callback
   */
  listBySearchService(resourceGroupName: string, searchServiceName: string, callback: msRest.ServiceCallback<Models.ListQueryKeysResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySearchService(resourceGroupName: string, searchServiceName: string, options: Models.QueryKeysListBySearchServiceOptionalParams, callback: msRest.ServiceCallback<Models.ListQueryKeysResult>): void;
  listBySearchService(resourceGroupName: string, searchServiceName: string, options?: Models.QueryKeysListBySearchServiceOptionalParams | msRest.ServiceCallback<Models.ListQueryKeysResult>, callback?: msRest.ServiceCallback<Models.ListQueryKeysResult>): Promise<Models.QueryKeysListBySearchServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        searchServiceName,
        options
      },
      listBySearchServiceOperationSpec,
      callback) as Promise<Models.QueryKeysListBySearchServiceResponse>;
  }

  /**
   * Deletes the specified query key. Unlike admin keys, query keys are not regenerated. The process
   * for regenerating a query key is to delete and then recreate it.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param key The query key to be deleted. Query keys are identified by value, not by name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, searchServiceName: string, key: string, options?: Models.QueryKeysDeleteMethodOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param key The query key to be deleted. Query keys are identified by value, not by name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, searchServiceName: string, key: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param key The query key to be deleted. Query keys are identified by value, not by name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, searchServiceName: string, key: string, options: Models.QueryKeysDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, searchServiceName: string, key: string, options?: Models.QueryKeysDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        searchServiceName,
        key,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Returns the list of query API keys for the given Azure Cognitive Search service.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.QueryKeysListBySearchServiceNextResponse>
   */
  listBySearchServiceNext(nextPageLink: string, options?: Models.QueryKeysListBySearchServiceNextOptionalParams): Promise<Models.QueryKeysListBySearchServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySearchServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListQueryKeysResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySearchServiceNext(nextPageLink: string, options: Models.QueryKeysListBySearchServiceNextOptionalParams, callback: msRest.ServiceCallback<Models.ListQueryKeysResult>): void;
  listBySearchServiceNext(nextPageLink: string, options?: Models.QueryKeysListBySearchServiceNextOptionalParams | msRest.ServiceCallback<Models.ListQueryKeysResult>, callback?: msRest.ServiceCallback<Models.ListQueryKeysResult>): Promise<Models.QueryKeysListBySearchServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySearchServiceNextOperationSpec,
      callback) as Promise<Models.QueryKeysListBySearchServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/createQueryKey/{name}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.QueryKey
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySearchServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/listQueryKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListQueryKeysResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/deleteQueryKey/{key}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.key,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId
  ],
  responses: {
    200: {},
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySearchServiceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListQueryKeysResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
