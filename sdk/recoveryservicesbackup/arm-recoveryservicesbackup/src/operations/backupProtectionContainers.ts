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
import * as Mappers from "../models/backupProtectionContainersMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a BackupProtectionContainers. */
export class BackupProtectionContainers {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a BackupProtectionContainers.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Lists the containers registered to Recovery Services Vault.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupProtectionContainersListResponse>
   */
  list(vaultName: string, resourceGroupName: string, options?: Models.BackupProtectionContainersListOptionalParams): Promise<Models.BackupProtectionContainersListResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.ProtectionContainerResourceList>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, options: Models.BackupProtectionContainersListOptionalParams, callback: msRest.ServiceCallback<Models.ProtectionContainerResourceList>): void;
  list(vaultName: string, resourceGroupName: string, options?: Models.BackupProtectionContainersListOptionalParams | msRest.ServiceCallback<Models.ProtectionContainerResourceList>, callback?: msRest.ServiceCallback<Models.ProtectionContainerResourceList>): Promise<Models.BackupProtectionContainersListResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BackupProtectionContainersListResponse>;
  }

  /**
   * Lists the containers registered to Recovery Services Vault.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupProtectionContainersListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.BackupProtectionContainersListNextOptionalParams): Promise<Models.BackupProtectionContainersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProtectionContainerResourceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.BackupProtectionContainersListNextOptionalParams, callback: msRest.ServiceCallback<Models.ProtectionContainerResourceList>): void;
  listNext(nextPageLink: string, options?: Models.BackupProtectionContainersListNextOptionalParams | msRest.ServiceCallback<Models.ProtectionContainerResourceList>, callback?: msRest.ServiceCallback<Models.ProtectionContainerResourceList>): Promise<Models.BackupProtectionContainersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.BackupProtectionContainersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupProtectionContainers",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
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
      bodyMapper: Mappers.ProtectionContainerResourceList
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
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
