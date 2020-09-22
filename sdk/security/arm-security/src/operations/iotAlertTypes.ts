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
import * as Mappers from "../models/iotAlertTypesMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a IotAlertTypes. */
export class IotAlertTypes {
  private readonly client: SecurityCenterContext;

  /**
   * Create a IotAlertTypes.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * List IoT alert types
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotAlertTypesListResponse>
   */
  list(resourceGroupName: string, solutionName: string, options?: msRest.RequestOptionsBase): Promise<Models.IotAlertTypesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param callback The callback
   */
  list(resourceGroupName: string, solutionName: string, callback: msRest.ServiceCallback<Models.IotAlertTypeList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, solutionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotAlertTypeList>): void;
  list(resourceGroupName: string, solutionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotAlertTypeList>, callback?: msRest.ServiceCallback<Models.IotAlertTypeList>): Promise<Models.IotAlertTypesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.IotAlertTypesListResponse>;
  }

  /**
   * Get IoT alert type
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotAlertTypeName Name of the alert type
   * @param [options] The optional parameters
   * @returns Promise<Models.IotAlertTypesGetResponse>
   */
  get(resourceGroupName: string, solutionName: string, iotAlertTypeName: string, options?: msRest.RequestOptionsBase): Promise<Models.IotAlertTypesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotAlertTypeName Name of the alert type
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, iotAlertTypeName: string, callback: msRest.ServiceCallback<Models.IotAlertType>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotAlertTypeName Name of the alert type
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, iotAlertTypeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotAlertType>): void;
  get(resourceGroupName: string, solutionName: string, iotAlertTypeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotAlertType>, callback?: msRest.ServiceCallback<Models.IotAlertType>): Promise<Models.IotAlertTypesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        iotAlertTypeName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IotAlertTypesGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/iotAlertTypes",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotAlertTypeList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/iotAlertTypes/{iotAlertTypeName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName,
    Parameters.iotAlertTypeName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotAlertType
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
