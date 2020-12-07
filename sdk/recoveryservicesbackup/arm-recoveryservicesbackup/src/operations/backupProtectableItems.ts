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
import * as Mappers from "../models/backupProtectableItemsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a BackupProtectableItems. */
export class BackupProtectableItems {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a BackupProtectableItems.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Provides a pageable list of protectable objects within your subscription according to the query
   * filter and the
   * pagination parameters.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupProtectableItemsListResponse>
   */
  list(vaultName: string, resourceGroupName: string, options?: Models.BackupProtectableItemsListOptionalParams): Promise<Models.BackupProtectableItemsListResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.WorkloadProtectableItemResourceList>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, options: Models.BackupProtectableItemsListOptionalParams, callback: msRest.ServiceCallback<Models.WorkloadProtectableItemResourceList>): void;
  list(vaultName: string, resourceGroupName: string, options?: Models.BackupProtectableItemsListOptionalParams | msRest.ServiceCallback<Models.WorkloadProtectableItemResourceList>, callback?: msRest.ServiceCallback<Models.WorkloadProtectableItemResourceList>): Promise<Models.BackupProtectableItemsListResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BackupProtectableItemsListResponse>;
  }

  /**
   * Provides a pageable list of protectable objects within your subscription according to the query
   * filter and the
   * pagination parameters.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupProtectableItemsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.BackupProtectableItemsListNextOptionalParams): Promise<Models.BackupProtectableItemsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WorkloadProtectableItemResourceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.BackupProtectableItemsListNextOptionalParams, callback: msRest.ServiceCallback<Models.WorkloadProtectableItemResourceList>): void;
  listNext(nextPageLink: string, options?: Models.BackupProtectableItemsListNextOptionalParams | msRest.ServiceCallback<Models.WorkloadProtectableItemResourceList>, callback?: msRest.ServiceCallback<Models.WorkloadProtectableItemResourceList>): Promise<Models.BackupProtectableItemsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.BackupProtectableItemsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupProtectableItems",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadProtectableItemResourceList
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
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadProtectableItemResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
