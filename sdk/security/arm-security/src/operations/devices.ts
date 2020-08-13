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
import * as Mappers from "../models/devicesMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a Devices. */
export class Devices {
  private readonly client: SecurityCenterContext;

  /**
   * Create a Devices.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Get list of the devices.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesListResponse>
   */
  list(resourceGroupName: string, solutionName: string, options?: Models.DevicesListOptionalParams): Promise<Models.DevicesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param callback The callback
   */
  list(resourceGroupName: string, solutionName: string, callback: msRest.ServiceCallback<Models.DeviceList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, solutionName: string, options: Models.DevicesListOptionalParams, callback: msRest.ServiceCallback<Models.DeviceList>): void;
  list(resourceGroupName: string, solutionName: string, options?: Models.DevicesListOptionalParams | msRest.ServiceCallback<Models.DeviceList>, callback?: msRest.ServiceCallback<Models.DeviceList>): Promise<Models.DevicesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DevicesListResponse>;
  }

  /**
   * Get list of the devices.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DevicesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeviceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeviceList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DeviceList>, callback?: msRest.ServiceCallback<Models.DeviceList>): Promise<Models.DevicesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DevicesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/devices",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  queryParameters: [
    Parameters.apiVersion3,
    Parameters.limit,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeviceList
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
      bodyMapper: Mappers.DeviceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
