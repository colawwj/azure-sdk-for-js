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
import * as Mappers from "../models/deviceOperationsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a DeviceOperations. */
export class DeviceOperations {
  private readonly client: SecurityCenterContext;

  /**
   * Create a DeviceOperations.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Get device.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param deviceId Identifier of the device.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeviceGetResponse>
   */
  get(resourceGroupName: string, solutionName: string, deviceId: string, options?: msRest.RequestOptionsBase): Promise<Models.DeviceGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param deviceId Identifier of the device.
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, deviceId: string, callback: msRest.ServiceCallback<Models.Device>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param deviceId Identifier of the device.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, deviceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Device>): void;
  get(resourceGroupName: string, solutionName: string, deviceId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Device>, callback?: msRest.ServiceCallback<Models.Device>): Promise<Models.DeviceGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        deviceId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DeviceGetResponse>;
  }

  /**
   * Update existing device name, type, operating system, purdue level, device criticality and notes.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param deviceId Identifier of the device.
   * @param deviceData The device data
   * @param [options] The optional parameters
   * @returns Promise<Models.DeviceUpdateResponse>
   */
  update(resourceGroupName: string, solutionName: string, deviceId: string, deviceData: Models.Device, options?: msRest.RequestOptionsBase): Promise<Models.DeviceUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param deviceId Identifier of the device.
   * @param deviceData The device data
   * @param callback The callback
   */
  update(resourceGroupName: string, solutionName: string, deviceId: string, deviceData: Models.Device, callback: msRest.ServiceCallback<Models.Device>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param deviceId Identifier of the device.
   * @param deviceData The device data
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, solutionName: string, deviceId: string, deviceData: Models.Device, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Device>): void;
  update(resourceGroupName: string, solutionName: string, deviceId: string, deviceData: Models.Device, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Device>, callback?: msRest.ServiceCallback<Models.Device>): Promise<Models.DeviceUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        deviceId,
        deviceData,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.DeviceUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/devices/{deviceId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName,
    Parameters.deviceId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Device
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/devices/{deviceId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName,
    Parameters.deviceId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "deviceData",
    mapper: {
      ...Mappers.Device,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Device
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
