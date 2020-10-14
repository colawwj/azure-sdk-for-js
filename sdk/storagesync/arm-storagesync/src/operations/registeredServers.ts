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
import * as Mappers from "../models/registeredServersMappers";
import * as Parameters from "../models/parameters";
import { StorageSyncManagementClientContext } from "../storageSyncManagementClientContext";

/** Class representing a RegisteredServers. */
export class RegisteredServers {
  private readonly client: StorageSyncManagementClientContext;

  /**
   * Create a RegisteredServers.
   * @param {StorageSyncManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageSyncManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a given registered server list.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.RegisteredServersListByStorageSyncServiceResponse>
   */
  listByStorageSyncService(resourceGroupName: string, storageSyncServiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.RegisteredServersListByStorageSyncServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param callback The callback
   */
  listByStorageSyncService(resourceGroupName: string, storageSyncServiceName: string, callback: msRest.ServiceCallback<Models.RegisteredServerArray>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByStorageSyncService(resourceGroupName: string, storageSyncServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RegisteredServerArray>): void;
  listByStorageSyncService(resourceGroupName: string, storageSyncServiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RegisteredServerArray>, callback?: msRest.ServiceCallback<Models.RegisteredServerArray>): Promise<Models.RegisteredServersListByStorageSyncServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        options
      },
      listByStorageSyncServiceOperationSpec,
      callback) as Promise<Models.RegisteredServersListByStorageSyncServiceResponse>;
  }

  /**
   * Get a given registered server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId GUID identifying the on-premises server.
   * @param [options] The optional parameters
   * @returns Promise<Models.RegisteredServersGetResponse>
   */
  get(resourceGroupName: string, storageSyncServiceName: string, serverId: string, options?: msRest.RequestOptionsBase): Promise<Models.RegisteredServersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId GUID identifying the on-premises server.
   * @param callback The callback
   */
  get(resourceGroupName: string, storageSyncServiceName: string, serverId: string, callback: msRest.ServiceCallback<Models.RegisteredServer>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId GUID identifying the on-premises server.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, storageSyncServiceName: string, serverId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RegisteredServer>): void;
  get(resourceGroupName: string, storageSyncServiceName: string, serverId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RegisteredServer>, callback?: msRest.ServiceCallback<Models.RegisteredServer>): Promise<Models.RegisteredServersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        serverId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RegisteredServersGetResponse>;
  }

  /**
   * Add a new registered server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId GUID identifying the on-premises server.
   * @param parameters Body of Registered Server object.
   * @param [options] The optional parameters
   * @returns Promise<Models.RegisteredServersCreateResponse>
   */
  create(resourceGroupName: string, storageSyncServiceName: string, serverId: string, parameters: Models.RegisteredServerCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.RegisteredServersCreateResponse> {
    return this.beginCreate(resourceGroupName,storageSyncServiceName,serverId,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RegisteredServersCreateResponse>;
  }

  /**
   * Delete the given registered server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId GUID identifying the on-premises server.
   * @param [options] The optional parameters
   * @returns Promise<Models.RegisteredServersDeleteResponse>
   */
  deleteMethod(resourceGroupName: string, storageSyncServiceName: string, serverId: string, options?: msRest.RequestOptionsBase): Promise<Models.RegisteredServersDeleteResponse> {
    return this.beginDeleteMethod(resourceGroupName,storageSyncServiceName,serverId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RegisteredServersDeleteResponse>;
  }

  /**
   * Triggers Server certificate rollover.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId Server Id
   * @param parameters Body of Trigger Rollover request.
   * @param [options] The optional parameters
   * @returns Promise<Models.RegisteredServersTriggerRolloverResponse>
   */
  triggerRollover(resourceGroupName: string, storageSyncServiceName: string, serverId: string, parameters: Models.TriggerRolloverRequest, options?: msRest.RequestOptionsBase): Promise<Models.RegisteredServersTriggerRolloverResponse> {
    return this.beginTriggerRollover(resourceGroupName,storageSyncServiceName,serverId,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RegisteredServersTriggerRolloverResponse>;
  }

  /**
   * Add a new registered server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId GUID identifying the on-premises server.
   * @param parameters Body of Registered Server object.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, storageSyncServiceName: string, serverId: string, parameters: Models.RegisteredServerCreateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        serverId,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Delete the given registered server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId GUID identifying the on-premises server.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, storageSyncServiceName: string, serverId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        serverId,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Triggers Server certificate rollover.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId Server Id
   * @param parameters Body of Trigger Rollover request.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginTriggerRollover(resourceGroupName: string, storageSyncServiceName: string, serverId: string, parameters: Models.TriggerRolloverRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        serverId,
        parameters,
        options
      },
      beginTriggerRolloverOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByStorageSyncServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RegisteredServerArray,
      headersMapper: Mappers.RegisteredServersListByStorageSyncServiceHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.RegisteredServersListByStorageSyncServiceHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.serverId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RegisteredServer,
      headersMapper: Mappers.RegisteredServersGetHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.RegisteredServersGetHeaders
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.serverId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RegisteredServerCreateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RegisteredServer,
      headersMapper: Mappers.RegisteredServersCreateHeaders
    },
    202: {
      headersMapper: Mappers.RegisteredServersCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.RegisteredServersCreateHeaders
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.serverId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.RegisteredServersDeleteHeaders
    },
    202: {
      headersMapper: Mappers.RegisteredServersDeleteHeaders
    },
    204: {
      headersMapper: Mappers.RegisteredServersDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.RegisteredServersDeleteHeaders
    }
  },
  serializer
};

const beginTriggerRolloverOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}/triggerRollover",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.serverId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TriggerRolloverRequest,
      required: true
    }
  },
  responses: {
    200: {
      headersMapper: Mappers.RegisteredServersTriggerRolloverHeaders
    },
    202: {
      headersMapper: Mappers.RegisteredServersTriggerRolloverHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.RegisteredServersTriggerRolloverHeaders
    }
  },
  serializer
};
