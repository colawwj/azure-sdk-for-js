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
import * as Mappers from "../models/iotAlertsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a IotAlerts. */
export class IotAlerts {
  private readonly client: SecurityCenterContext;

  /**
   * Create a IotAlerts.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * List IoT alerts
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotAlertsListResponse>
   */
  list(resourceGroupName: string, solutionName: string, options?: Models.IotAlertsListOptionalParams): Promise<Models.IotAlertsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param callback The callback
   */
  list(resourceGroupName: string, solutionName: string, callback: msRest.ServiceCallback<Models.IotAlertList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, solutionName: string, options: Models.IotAlertsListOptionalParams, callback: msRest.ServiceCallback<Models.IotAlertList>): void;
  list(resourceGroupName: string, solutionName: string, options?: Models.IotAlertsListOptionalParams | msRest.ServiceCallback<Models.IotAlertList>, callback?: msRest.ServiceCallback<Models.IotAlertList>): Promise<Models.IotAlertsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.IotAlertsListResponse>;
  }

  /**
   * Get IoT alert
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotAlertId Id of the alert
   * @param [options] The optional parameters
   * @returns Promise<Models.IotAlertsGetResponse>
   */
  get(resourceGroupName: string, solutionName: string, iotAlertId: string, options?: msRest.RequestOptionsBase): Promise<Models.IotAlertsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotAlertId Id of the alert
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, iotAlertId: string, callback: msRest.ServiceCallback<Models.IotAlert>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotAlertId Id of the alert
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, iotAlertId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotAlert>): void;
  get(resourceGroupName: string, solutionName: string, iotAlertId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotAlert>, callback?: msRest.ServiceCallback<Models.IotAlert>): Promise<Models.IotAlertsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        iotAlertId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IotAlertsGetResponse>;
  }

  /**
   * List IoT alerts
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotAlertsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.IotAlertsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IotAlertList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotAlertList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotAlertList>, callback?: msRest.ServiceCallback<Models.IotAlertList>): Promise<Models.IotAlertsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.IotAlertsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/iotAlerts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  queryParameters: [
    Parameters.apiVersion3,
    Parameters.minStartTimeUtc,
    Parameters.maxStartTimeUtc,
    Parameters.alertType0,
    Parameters.limit,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotAlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/iotAlerts/{iotAlertId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName,
    Parameters.iotAlertId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotAlert
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotAlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
