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
import * as Mappers from "../models/elasticPoolsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ElasticPools. */
export class ElasticPools {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ElasticPools.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns elastic pool  metrics.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param filter An OData filter expression that describes a subset of metrics to return.
   * @param [options] The optional parameters
   * @returns Promise<Models.ElasticPoolsListMetricsResponse>
   */
  listMetrics(resourceGroupName: string, serverName: string, elasticPoolName: string, filter: string, options?: msRest.RequestOptionsBase): Promise<Models.ElasticPoolsListMetricsResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param filter An OData filter expression that describes a subset of metrics to return.
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, serverName: string, elasticPoolName: string, filter: string, callback: msRest.ServiceCallback<Models.MetricListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param filter An OData filter expression that describes a subset of metrics to return.
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, serverName: string, elasticPoolName: string, filter: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricListResult>): void;
  listMetrics(resourceGroupName: string, serverName: string, elasticPoolName: string, filter: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MetricListResult>, callback?: msRest.ServiceCallback<Models.MetricListResult>): Promise<Models.ElasticPoolsListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        elasticPoolName,
        filter,
        options
      },
      listMetricsOperationSpec,
      callback) as Promise<Models.ElasticPoolsListMetricsResponse>;
  }

  /**
   * Returns elastic pool metric definitions.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param [options] The optional parameters
   * @returns Promise<Models.ElasticPoolsListMetricDefinitionsResponse>
   */
  listMetricDefinitions(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.ElasticPoolsListMetricDefinitionsResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param callback The callback
   */
  listMetricDefinitions(resourceGroupName: string, serverName: string, elasticPoolName: string, callback: msRest.ServiceCallback<Models.MetricDefinitionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetricDefinitions(resourceGroupName: string, serverName: string, elasticPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricDefinitionListResult>): void;
  listMetricDefinitions(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MetricDefinitionListResult>, callback?: msRest.ServiceCallback<Models.MetricDefinitionListResult>): Promise<Models.ElasticPoolsListMetricDefinitionsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        elasticPoolName,
        options
      },
      listMetricDefinitionsOperationSpec,
      callback) as Promise<Models.ElasticPoolsListMetricDefinitionsResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metrics",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listMetricDefinitionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metricDefinitions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
