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
import * as Mappers from "../models/baselinesMappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";

/** Class representing a Baselines. */
export class Baselines {
  private readonly client: MonitorManagementClientContext;

  /**
   * Create a Baselines.
   * @param {MonitorManagementClientContext} client Reference to the service client.
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * **Lists the metric baseline values for a resource**.
   * @param resourceUri The identifier of the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.BaselinesListResponse>
   */
  list(resourceUri: string, options?: Models.BaselinesListOptionalParams): Promise<Models.BaselinesListResponse>;
  /**
   * @param resourceUri The identifier of the resource.
   * @param callback The callback
   */
  list(resourceUri: string, callback: msRest.ServiceCallback<Models.MetricBaselinesResponse>): void;
  /**
   * @param resourceUri The identifier of the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceUri: string, options: Models.BaselinesListOptionalParams, callback: msRest.ServiceCallback<Models.MetricBaselinesResponse>): void;
  list(resourceUri: string, options?: Models.BaselinesListOptionalParams | msRest.ServiceCallback<Models.MetricBaselinesResponse>, callback?: msRest.ServiceCallback<Models.MetricBaselinesResponse>): Promise<Models.BaselinesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BaselinesListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceUri}/providers/Microsoft.Insights/metricBaselines",
  urlParameters: [
    Parameters.resourceUri
  ],
  queryParameters: [
    Parameters.metricnames,
    Parameters.metricnamespace,
    Parameters.timespan,
    Parameters.interval,
    Parameters.aggregation,
    Parameters.sensitivities,
    Parameters.filter1,
    Parameters.resultType,
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricBaselinesResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
