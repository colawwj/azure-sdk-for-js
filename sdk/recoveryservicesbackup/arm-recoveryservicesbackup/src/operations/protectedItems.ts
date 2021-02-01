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
import * as Mappers from "../models/protectedItemsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a ProtectedItems. */
export class ProtectedItems {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a ProtectedItems.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Provides the details of the backed up item. This is an asynchronous operation. To know the
   * status of the operation,
   * call the GetItemOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item name whose details are to be fetched.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProtectedItemsGetResponse>
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, options?: Models.ProtectedItemsGetOptionalParams): Promise<Models.ProtectedItemsGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item name whose details are to be fetched.
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, callback: msRest.ServiceCallback<Models.ProtectedItemResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item name whose details are to be fetched.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, options: Models.ProtectedItemsGetOptionalParams, callback: msRest.ServiceCallback<Models.ProtectedItemResource>): void;
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, options?: Models.ProtectedItemsGetOptionalParams | msRest.ServiceCallback<Models.ProtectedItemResource>, callback?: msRest.ServiceCallback<Models.ProtectedItemResource>): Promise<Models.ProtectedItemsGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProtectedItemsGetResponse>;
  }

  /**
   * Enables backup of an item or to modifies the backup policy information of an already backed up
   * item. This is an
   * asynchronous operation. To know the status of the operation, call the GetItemOperationResult
   * API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backup item.
   * @param containerName Container name associated with the backup item.
   * @param protectedItemName Item name to be backed up.
   * @param parameters resource backed up item
   * @param [options] The optional parameters
   * @returns Promise<Models.ProtectedItemsCreateOrUpdateResponse>
   */
  createOrUpdate(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, parameters: Models.ProtectedItemResource, options?: msRest.RequestOptionsBase): Promise<Models.ProtectedItemsCreateOrUpdateResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backup item.
   * @param containerName Container name associated with the backup item.
   * @param protectedItemName Item name to be backed up.
   * @param parameters resource backed up item
   * @param callback The callback
   */
  createOrUpdate(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, parameters: Models.ProtectedItemResource, callback: msRest.ServiceCallback<Models.ProtectedItemResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backup item.
   * @param containerName Container name associated with the backup item.
   * @param protectedItemName Item name to be backed up.
   * @param parameters resource backed up item
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, parameters: Models.ProtectedItemResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProtectedItemResource>): void;
  createOrUpdate(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, parameters: Models.ProtectedItemResource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProtectedItemResource>, callback?: msRest.ServiceCallback<Models.ProtectedItemResource>): Promise<Models.ProtectedItemsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ProtectedItemsCreateOrUpdateResponse>;
  }

  /**
   * Used to disable backup of an item within a container. This is an asynchronous operation. To know
   * the status of the
   * request, call the GetItemOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item to be deleted.
   * @param callback The callback
   */
  deleteMethod(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item to be deleted.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
    Parameters.protectedItemName
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProtectedItemResource
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
    Parameters.protectedItemName
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
      ...Mappers.ProtectedItemResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ProtectedItemResource
    },
    202: {},
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
    Parameters.protectedItemName
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
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};
