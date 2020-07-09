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
import * as Mappers from "../models/recommendedElasticPoolsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a RecommendedElasticPools. */
export class RecommendedElasticPools {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a RecommendedElasticPools.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a recommended elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param recommendedElasticPoolName The name of the recommended elastic pool to be retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecommendedElasticPoolsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, recommendedElasticPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.RecommendedElasticPoolsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param recommendedElasticPoolName The name of the recommended elastic pool to be retrieved.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, recommendedElasticPoolName: string, callback: msRest.ServiceCallback<Models.RecommendedElasticPool>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param recommendedElasticPoolName The name of the recommended elastic pool to be retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, recommendedElasticPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecommendedElasticPool>): void;
  get(resourceGroupName: string, serverName: string, recommendedElasticPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecommendedElasticPool>, callback?: msRest.ServiceCallback<Models.RecommendedElasticPool>): Promise<Models.RecommendedElasticPoolsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        recommendedElasticPoolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RecommendedElasticPoolsGetResponse>;
  }

  /**
   * Returns recommended elastic pools.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecommendedElasticPoolsListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.RecommendedElasticPoolsListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.RecommendedElasticPoolListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecommendedElasticPoolListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecommendedElasticPoolListResult>, callback?: msRest.ServiceCallback<Models.RecommendedElasticPoolListResult>): Promise<Models.RecommendedElasticPoolsListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.RecommendedElasticPoolsListByServerResponse>;
  }

  /**
   * Returns recommended elastic pool metrics.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param recommendedElasticPoolName The name of the recommended elastic pool to be retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecommendedElasticPoolsListMetricsResponse>
   */
  listMetrics(resourceGroupName: string, serverName: string, recommendedElasticPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.RecommendedElasticPoolsListMetricsResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param recommendedElasticPoolName The name of the recommended elastic pool to be retrieved.
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, serverName: string, recommendedElasticPoolName: string, callback: msRest.ServiceCallback<Models.RecommendedElasticPoolListMetricsResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param recommendedElasticPoolName The name of the recommended elastic pool to be retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, serverName: string, recommendedElasticPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecommendedElasticPoolListMetricsResult>): void;
  listMetrics(resourceGroupName: string, serverName: string, recommendedElasticPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecommendedElasticPoolListMetricsResult>, callback?: msRest.ServiceCallback<Models.RecommendedElasticPoolListMetricsResult>): Promise<Models.RecommendedElasticPoolsListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        recommendedElasticPoolName,
        options
      },
      listMetricsOperationSpec,
      callback) as Promise<Models.RecommendedElasticPoolsListMetricsResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/recommendedElasticPools/{recommendedElasticPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.recommendedElasticPoolName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecommendedElasticPool
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/recommendedElasticPools",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecommendedElasticPoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/recommendedElasticPools/{recommendedElasticPoolName}/metrics",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.recommendedElasticPoolName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecommendedElasticPoolListMetricsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
