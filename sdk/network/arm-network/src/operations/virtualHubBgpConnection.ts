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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualHubBgpConnectionMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a VirtualHubBgpConnection. */
export class VirtualHubBgpConnection {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a VirtualHubBgpConnection.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the details of a Virtual Hub Bgp Connection.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualHubBgpConnectionGetResponse>
   */
  get(resourceGroupName: string, virtualHubName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualHubBgpConnectionGetResponse>;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the connection.
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualHubName: string, connectionName: string, callback: msRest.ServiceCallback<Models.BgpConnection>): void;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the connection.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualHubName: string, connectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BgpConnection>): void;
  get(resourceGroupName: string, virtualHubName: string, connectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BgpConnection>, callback?: msRest.ServiceCallback<Models.BgpConnection>): Promise<Models.VirtualHubBgpConnectionGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualHubName,
        connectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualHubBgpConnectionGetResponse>;
  }

  /**
   * Creates a VirtualHubBgpConnection resource if it doesn't exist else updates the existing
   * VirtualHubBgpConnection.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the connection.
   * @param parameters Parameters of Bgp connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualHubBgpConnectionCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, virtualHubName: string, connectionName: string, parameters: Models.BgpConnection, options?: msRest.RequestOptionsBase): Promise<Models.VirtualHubBgpConnectionCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,virtualHubName,connectionName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualHubBgpConnectionCreateOrUpdateResponse>;
  }

  /**
   * Deletes a VirtualHubBgpConnection.
   * @param resourceGroupName The resource group name of the VirtualHubBgpConnection.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the connection.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, virtualHubName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,virtualHubName,connectionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a VirtualHubBgpConnection resource if it doesn't exist else updates the existing
   * VirtualHubBgpConnection.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the connection.
   * @param parameters Parameters of Bgp connection.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, virtualHubName: string, connectionName: string, parameters: Models.BgpConnection, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualHubName,
        connectionName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a VirtualHubBgpConnection.
   * @param resourceGroupName The resource group name of the VirtualHubBgpConnection.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the connection.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, virtualHubName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualHubName,
        connectionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/bgpConnections/{connectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualHubName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BgpConnection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/bgpConnections/{connectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualHubName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.BgpConnection,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BgpConnection
    },
    201: {
      bodyMapper: Mappers.BgpConnection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/bgpConnections/{connectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualHubName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
