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
import * as Mappers from "../models/metricBaselineMappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";

/** Class representing a MetricBaseline. */
export class MetricBaseline {
  private readonly client: MonitorManagementClientContext;

  /**
   * Create a MetricBaseline.
   * @param {MonitorManagementClientContext} client Reference to the service client.
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * **Gets the baseline values for a specific metric**.
   * @param resourceUri The identifier of the resource. It has the following structure:
   * subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}.
   * For example:
   * subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
   * @param metricName The name of the metric to retrieve the baseline for.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetricBaselineGetResponse>
   */
  get(resourceUri: string, metricName: string, options?: Models.MetricBaselineGetOptionalParams): Promise<Models.MetricBaselineGetResponse>;
  /**
   * @param resourceUri The identifier of the resource. It has the following structure:
   * subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}.
   * For example:
   * subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
   * @param metricName The name of the metric to retrieve the baseline for.
   * @param callback The callback
   */
  get(resourceUri: string, metricName: string, callback: msRest.ServiceCallback<Models.BaselineResponse>): void;
  /**
   * @param resourceUri The identifier of the resource. It has the following structure:
   * subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}.
   * For example:
   * subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
   * @param metricName The name of the metric to retrieve the baseline for.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceUri: string, metricName: string, options: Models.MetricBaselineGetOptionalParams, callback: msRest.ServiceCallback<Models.BaselineResponse>): void;
  get(resourceUri: string, metricName: string, options?: Models.MetricBaselineGetOptionalParams | msRest.ServiceCallback<Models.BaselineResponse>, callback?: msRest.ServiceCallback<Models.BaselineResponse>): Promise<Models.MetricBaselineGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        metricName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MetricBaselineGetResponse>;
  }

  /**
   * **Lists the baseline values for a resource**.
   * @param resourceUri The identifier of the resource. It has the following structure:
   * subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}.
   * For example:
   * subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
   * @param timeSeriesInformation Information that need to be specified to calculate a baseline on a
   * time series.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetricBaselineCalculateBaselineResponse>
   */
  calculateBaseline(resourceUri: string, timeSeriesInformation: Models.TimeSeriesInformation, options?: msRest.RequestOptionsBase): Promise<Models.MetricBaselineCalculateBaselineResponse>;
  /**
   * @param resourceUri The identifier of the resource. It has the following structure:
   * subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}.
   * For example:
   * subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
   * @param timeSeriesInformation Information that need to be specified to calculate a baseline on a
   * time series.
   * @param callback The callback
   */
  calculateBaseline(resourceUri: string, timeSeriesInformation: Models.TimeSeriesInformation, callback: msRest.ServiceCallback<Models.CalculateBaselineResponse>): void;
  /**
   * @param resourceUri The identifier of the resource. It has the following structure:
   * subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}.
   * For example:
   * subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
   * @param timeSeriesInformation Information that need to be specified to calculate a baseline on a
   * time series.
   * @param options The optional parameters
   * @param callback The callback
   */
  calculateBaseline(resourceUri: string, timeSeriesInformation: Models.TimeSeriesInformation, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CalculateBaselineResponse>): void;
  calculateBaseline(resourceUri: string, timeSeriesInformation: Models.TimeSeriesInformation, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CalculateBaselineResponse>, callback?: msRest.ServiceCallback<Models.CalculateBaselineResponse>): Promise<Models.MetricBaselineCalculateBaselineResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        timeSeriesInformation,
        options
      },
      calculateBaselineOperationSpec,
      callback) as Promise<Models.MetricBaselineCalculateBaselineResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceUri}/providers/Microsoft.Insights/baseline/{metricName}",
  urlParameters: [
    Parameters.resourceUri,
    Parameters.metricName
  ],
  queryParameters: [
    Parameters.timespan,
    Parameters.interval,
    Parameters.aggregation,
    Parameters.sensitivities,
    Parameters.resultType,
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BaselineResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const calculateBaselineOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "{resourceUri}/providers/microsoft.insights/calculatebaseline",
  urlParameters: [
    Parameters.resourceUri
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "timeSeriesInformation",
    mapper: {
      ...Mappers.TimeSeriesInformation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CalculateBaselineResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
