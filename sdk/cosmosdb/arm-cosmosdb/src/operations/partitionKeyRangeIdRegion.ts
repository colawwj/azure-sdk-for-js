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
import * as Mappers from "../models/partitionKeyRangeIdRegionMappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";

/** Class representing a PartitionKeyRangeIdRegion. */
export class PartitionKeyRangeIdRegion {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Create a PartitionKeyRangeIdRegion.
   * @param {CosmosDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given partition key range id and
   * region.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param region Cosmos DB region, with spaces between words and each word capitalized.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param partitionKeyRangeId Partition Key Range Id for which to get data.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param [options] The optional parameters
   * @returns Promise<Models.PartitionKeyRangeIdRegionListMetricsResponse>
   */
  listMetrics(resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, partitionKeyRangeId: string, filter: string, options?: msRest.RequestOptionsBase): Promise<Models.PartitionKeyRangeIdRegionListMetricsResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param region Cosmos DB region, with spaces between words and each word capitalized.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param partitionKeyRangeId Partition Key Range Id for which to get data.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, partitionKeyRangeId: string, filter: string, callback: msRest.ServiceCallback<Models.PartitionMetricListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param region Cosmos DB region, with spaces between words and each word capitalized.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param partitionKeyRangeId Partition Key Range Id for which to get data.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, partitionKeyRangeId: string, filter: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PartitionMetricListResult>): void;
  listMetrics(resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, partitionKeyRangeId: string, filter: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PartitionMetricListResult>, callback?: msRest.ServiceCallback<Models.PartitionMetricListResult>): Promise<Models.PartitionKeyRangeIdRegionListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        region,
        databaseRid,
        collectionRid,
        partitionKeyRangeId,
        filter,
        options
      },
      listMetricsOperationSpec,
      callback) as Promise<Models.PartitionKeyRangeIdRegionListMetricsResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/databases/{databaseRid}/collections/{collectionRid}/partitionKeyRangeId/{partitionKeyRangeId}/metrics",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.region,
    Parameters.databaseRid,
    Parameters.collectionRid,
    Parameters.partitionKeyRangeId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartitionMetricListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
