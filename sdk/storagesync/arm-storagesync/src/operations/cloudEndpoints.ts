/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/cloudEndpointsMappers";
import * as Parameters from "../models/parameters";
import { StorageSyncManagementClientContext } from "../storageSyncManagementClientContext";

/** Class representing a CloudEndpoints. */
export class CloudEndpoints {
  private readonly client: StorageSyncManagementClientContext;

  /**
   * Create a CloudEndpoints.
   * @param {StorageSyncManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageSyncManagementClientContext) {
    this.client = client;
  }

  /**
   * Create a new CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param parameters Body of Cloud Endpoint resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudEndpointsCreateResponse>
   */
  create(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, parameters: Models.CloudEndpointCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.CloudEndpointsCreateResponse> {
    return this.beginCreate(resourceGroupName,storageSyncServiceName,syncGroupName,cloudEndpointName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CloudEndpointsCreateResponse>;
  }

  /**
   * Get a given CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudEndpointsGetResponse>
   */
  get(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, options?: msRest.RequestOptionsBase): Promise<Models.CloudEndpointsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param callback The callback
   */
  get(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, callback: msRest.ServiceCallback<Models.CloudEndpoint>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CloudEndpoint>): void;
  get(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CloudEndpoint>, callback?: msRest.ServiceCallback<Models.CloudEndpoint>): Promise<Models.CloudEndpointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        syncGroupName,
        cloudEndpointName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CloudEndpointsGetResponse>;
  }

  /**
   * Delete a given CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudEndpointsDeleteResponse>
   */
  deleteMethod(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, options?: msRest.RequestOptionsBase): Promise<Models.CloudEndpointsDeleteResponse> {
    return this.beginDeleteMethod(resourceGroupName,storageSyncServiceName,syncGroupName,cloudEndpointName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CloudEndpointsDeleteResponse>;
  }

  /**
   * Get a CloudEndpoint List.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudEndpointsListBySyncGroupResponse>
   */
  listBySyncGroup(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.CloudEndpointsListBySyncGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param callback The callback
   */
  listBySyncGroup(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, callback: msRest.ServiceCallback<Models.CloudEndpointArray>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySyncGroup(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CloudEndpointArray>): void;
  listBySyncGroup(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CloudEndpointArray>, callback?: msRest.ServiceCallback<Models.CloudEndpointArray>): Promise<Models.CloudEndpointsListBySyncGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        syncGroupName,
        options
      },
      listBySyncGroupOperationSpec,
      callback) as Promise<Models.CloudEndpointsListBySyncGroupResponse>;
  }

  /**
   * Pre Backup a given CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param parameters Body of Backup request.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudEndpointsPreBackupResponse>
   */
  preBackup(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, parameters: Models.BackupRequest, options?: msRest.RequestOptionsBase): Promise<Models.CloudEndpointsPreBackupResponse> {
    return this.beginPreBackup(resourceGroupName,storageSyncServiceName,syncGroupName,cloudEndpointName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CloudEndpointsPreBackupResponse>;
  }

  /**
   * Post Backup a given CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param parameters Body of Backup request.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudEndpointsPostBackupResponse>
   */
  postBackup(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, parameters: Models.BackupRequest, options?: msRest.RequestOptionsBase): Promise<Models.CloudEndpointsPostBackupResponse> {
    return this.beginPostBackup(resourceGroupName,storageSyncServiceName,syncGroupName,cloudEndpointName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CloudEndpointsPostBackupResponse>;
  }

  /**
   * Pre Restore a given CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param parameters Body of Cloud Endpoint object.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudEndpointsPreRestoreResponse>
   */
  preRestore(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, parameters: Models.PreRestoreRequest, options?: msRest.RequestOptionsBase): Promise<Models.CloudEndpointsPreRestoreResponse> {
    return this.beginPreRestore(resourceGroupName,storageSyncServiceName,syncGroupName,cloudEndpointName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CloudEndpointsPreRestoreResponse>;
  }

  /**
   * Restore Heartbeat a given CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudEndpointsRestoreheartbeatResponse>
   */
  restoreheartbeat(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, options?: msRest.RequestOptionsBase): Promise<Models.CloudEndpointsRestoreheartbeatResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param callback The callback
   */
  restoreheartbeat(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param options The optional parameters
   * @param callback The callback
   */
  restoreheartbeat(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  restoreheartbeat(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.CloudEndpointsRestoreheartbeatResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        syncGroupName,
        cloudEndpointName,
        options
      },
      restoreheartbeatOperationSpec,
      callback) as Promise<Models.CloudEndpointsRestoreheartbeatResponse>;
  }

  /**
   * Post Restore a given CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param parameters Body of Cloud Endpoint object.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudEndpointsPostRestoreResponse>
   */
  postRestore(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, parameters: Models.PostRestoreRequest, options?: msRest.RequestOptionsBase): Promise<Models.CloudEndpointsPostRestoreResponse> {
    return this.beginPostRestore(resourceGroupName,storageSyncServiceName,syncGroupName,cloudEndpointName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CloudEndpointsPostRestoreResponse>;
  }

  /**
   * Triggers detection of changes performed on Azure File share connected to the specified Azure
   * File Sync Cloud Endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param parameters Trigger Change Detection Action parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudEndpointsTriggerChangeDetectionResponse>
   */
  triggerChangeDetection(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, parameters: Models.TriggerChangeDetectionParameters, options?: msRest.RequestOptionsBase): Promise<Models.CloudEndpointsTriggerChangeDetectionResponse> {
    return this.beginTriggerChangeDetection(resourceGroupName,storageSyncServiceName,syncGroupName,cloudEndpointName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CloudEndpointsTriggerChangeDetectionResponse>;
  }

  /**
   * Create a new CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param parameters Body of Cloud Endpoint resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, parameters: Models.CloudEndpointCreateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        syncGroupName,
        cloudEndpointName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Delete a given CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        syncGroupName,
        cloudEndpointName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Pre Backup a given CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param parameters Body of Backup request.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPreBackup(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, parameters: Models.BackupRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        syncGroupName,
        cloudEndpointName,
        parameters,
        options
      },
      beginPreBackupOperationSpec,
      options);
  }

  /**
   * Post Backup a given CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param parameters Body of Backup request.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPostBackup(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, parameters: Models.BackupRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        syncGroupName,
        cloudEndpointName,
        parameters,
        options
      },
      beginPostBackupOperationSpec,
      options);
  }

  /**
   * Pre Restore a given CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param parameters Body of Cloud Endpoint object.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPreRestore(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, parameters: Models.PreRestoreRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        syncGroupName,
        cloudEndpointName,
        parameters,
        options
      },
      beginPreRestoreOperationSpec,
      options);
  }

  /**
   * Post Restore a given CloudEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param parameters Body of Cloud Endpoint object.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPostRestore(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, parameters: Models.PostRestoreRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        syncGroupName,
        cloudEndpointName,
        parameters,
        options
      },
      beginPostRestoreOperationSpec,
      options);
  }

  /**
   * Triggers detection of changes performed on Azure File share connected to the specified Azure
   * File Sync Cloud Endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param cloudEndpointName Name of Cloud Endpoint object.
   * @param parameters Trigger Change Detection Action parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginTriggerChangeDetection(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, parameters: Models.TriggerChangeDetectionParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        syncGroupName,
        cloudEndpointName,
        parameters,
        options
      },
      beginTriggerChangeDetectionOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.syncGroupName,
    Parameters.cloudEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudEndpoint,
      headersMapper: Mappers.CloudEndpointsGetHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.CloudEndpointsGetHeaders
    }
  },
  serializer
};

const listBySyncGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.syncGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudEndpointArray,
      headersMapper: Mappers.CloudEndpointsListBySyncGroupHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.CloudEndpointsListBySyncGroupHeaders
    }
  },
  serializer
};

const restoreheartbeatOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/restoreheartbeat",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.syncGroupName,
    Parameters.cloudEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.CloudEndpointsRestoreheartbeatHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.CloudEndpointsRestoreheartbeatHeaders
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.syncGroupName,
    Parameters.cloudEndpointName
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
      ...Mappers.CloudEndpointCreateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CloudEndpoint,
      headersMapper: Mappers.CloudEndpointsCreateHeaders
    },
    202: {
      headersMapper: Mappers.CloudEndpointsCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.CloudEndpointsCreateHeaders
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.syncGroupName,
    Parameters.cloudEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.CloudEndpointsDeleteHeaders
    },
    202: {
      headersMapper: Mappers.CloudEndpointsDeleteHeaders
    },
    204: {
      headersMapper: Mappers.CloudEndpointsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.CloudEndpointsDeleteHeaders
    }
  },
  serializer
};

const beginPreBackupOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/prebackup",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.syncGroupName,
    Parameters.cloudEndpointName
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
      ...Mappers.BackupRequest,
      required: true
    }
  },
  responses: {
    200: {
      headersMapper: Mappers.CloudEndpointsPreBackupHeaders
    },
    202: {
      headersMapper: Mappers.CloudEndpointsPreBackupHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.CloudEndpointsPreBackupHeaders
    }
  },
  serializer
};

const beginPostBackupOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/postbackup",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.syncGroupName,
    Parameters.cloudEndpointName
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
      ...Mappers.BackupRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PostBackupResponse,
      headersMapper: Mappers.CloudEndpointsPostBackupHeaders
    },
    202: {
      headersMapper: Mappers.CloudEndpointsPostBackupHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.CloudEndpointsPostBackupHeaders
    }
  },
  serializer
};

const beginPreRestoreOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/prerestore",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.syncGroupName,
    Parameters.cloudEndpointName
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
      ...Mappers.PreRestoreRequest,
      required: true
    }
  },
  responses: {
    200: {
      headersMapper: Mappers.CloudEndpointsPreRestoreHeaders
    },
    202: {
      headersMapper: Mappers.CloudEndpointsPreRestoreHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.CloudEndpointsPreRestoreHeaders
    }
  },
  serializer
};

const beginPostRestoreOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/postrestore",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.syncGroupName,
    Parameters.cloudEndpointName
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
      ...Mappers.PostRestoreRequest,
      required: true
    }
  },
  responses: {
    200: {
      headersMapper: Mappers.CloudEndpointsPostRestoreHeaders
    },
    202: {
      headersMapper: Mappers.CloudEndpointsPostRestoreHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.CloudEndpointsPostRestoreHeaders
    }
  },
  serializer
};

const beginTriggerChangeDetectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/triggerChangeDetection",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.syncGroupName,
    Parameters.cloudEndpointName
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
      ...Mappers.TriggerChangeDetectionParameters,
      required: true
    }
  },
  responses: {
    200: {
      headersMapper: Mappers.CloudEndpointsTriggerChangeDetectionHeaders
    },
    202: {
      headersMapper: Mappers.CloudEndpointsTriggerChangeDetectionHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError,
      headersMapper: Mappers.CloudEndpointsTriggerChangeDetectionHeaders
    }
  },
  serializer
};
