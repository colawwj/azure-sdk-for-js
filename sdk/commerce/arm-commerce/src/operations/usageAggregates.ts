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
import * as Mappers from "../models/usageAggregatesMappers";
import * as Parameters from "../models/parameters";
import { UsageManagementClientContext } from "../usageManagementClientContext";

/** Class representing a UsageAggregates. */
export class UsageAggregates {
  private readonly client: UsageManagementClientContext;

  /**
   * Create a UsageAggregates.
   * @param {UsageManagementClientContext} client Reference to the service client.
   */
  constructor(client: UsageManagementClientContext) {
    this.client = client;
  }

  /**
   * Query aggregated Azure subscription consumption data for a date range. Nit.
   * @param reportedStartTime The start of the time range to retrieve data for.
   * @param reportedEndTime The end of the time range to retrieve data for.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsageAggregatesListResponse>
   */
  list(reportedStartTime: Date | string, reportedEndTime: Date | string, options?: Models.UsageAggregatesListOptionalParams): Promise<Models.UsageAggregatesListResponse>;
  /**
   * @param reportedStartTime The start of the time range to retrieve data for.
   * @param reportedEndTime The end of the time range to retrieve data for.
   * @param callback The callback
   */
  list(reportedStartTime: Date | string, reportedEndTime: Date | string, callback: msRest.ServiceCallback<Models.UsageAggregationListResult>): void;
  /**
   * @param reportedStartTime The start of the time range to retrieve data for.
   * @param reportedEndTime The end of the time range to retrieve data for.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(reportedStartTime: Date | string, reportedEndTime: Date | string, options: Models.UsageAggregatesListOptionalParams, callback: msRest.ServiceCallback<Models.UsageAggregationListResult>): void;
  list(reportedStartTime: Date | string, reportedEndTime: Date | string, options?: Models.UsageAggregatesListOptionalParams | msRest.ServiceCallback<Models.UsageAggregationListResult>, callback?: msRest.ServiceCallback<Models.UsageAggregationListResult>): Promise<Models.UsageAggregatesListResponse> {
    return this.client.sendOperationRequest(
      {
        reportedStartTime,
        reportedEndTime,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.UsageAggregatesListResponse>;
  }

  /**
   * Query aggregated Azure subscription consumption data for a date range. Nit.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsageAggregatesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.UsageAggregatesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.UsageAggregationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsageAggregationListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UsageAggregationListResult>, callback?: msRest.ServiceCallback<Models.UsageAggregationListResult>): Promise<Models.UsageAggregatesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.UsageAggregatesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Commerce/UsageAggregates",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.reportedStartTime,
    Parameters.reportedEndTime,
    Parameters.showDetails,
    Parameters.aggregationGranularity,
    Parameters.continuationToken,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UsageAggregationListResult
    },
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UsageAggregationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
