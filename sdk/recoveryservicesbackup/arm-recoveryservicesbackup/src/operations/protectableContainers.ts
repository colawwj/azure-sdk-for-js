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
import * as Mappers from "../models/protectableContainersMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a ProtectableContainers. */
export class ProtectableContainers {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a ProtectableContainers.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Lists the containers that can be registered to Recovery Services Vault.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName
   * @param [options] The optional parameters
   * @returns Promise<Models.ProtectableContainersListResponse>
   */
  list(vaultName: string, resourceGroupName: string, fabricName: string, options?: Models.ProtectableContainersListOptionalParams): Promise<Models.ProtectableContainersListResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, fabricName: string, callback: msRest.ServiceCallback<Models.ProtectableContainerResourceList>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName
   * @param options The optional parameters
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, fabricName: string, options: Models.ProtectableContainersListOptionalParams, callback: msRest.ServiceCallback<Models.ProtectableContainerResourceList>): void;
  list(vaultName: string, resourceGroupName: string, fabricName: string, options?: Models.ProtectableContainersListOptionalParams | msRest.ServiceCallback<Models.ProtectableContainerResourceList>, callback?: msRest.ServiceCallback<Models.ProtectableContainerResourceList>): Promise<Models.ProtectableContainersListResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ProtectableContainersListResponse>;
  }

  /**
   * Lists the containers that can be registered to Recovery Services Vault.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProtectableContainersListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.ProtectableContainersListNextOptionalParams): Promise<Models.ProtectableContainersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProtectableContainerResourceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.ProtectableContainersListNextOptionalParams, callback: msRest.ServiceCallback<Models.ProtectableContainerResourceList>): void;
  listNext(nextPageLink: string, options?: Models.ProtectableContainersListNextOptionalParams | msRest.ServiceCallback<Models.ProtectableContainerResourceList>, callback?: msRest.ServiceCallback<Models.ProtectableContainerResourceList>): Promise<Models.ProtectableContainersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ProtectableContainersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectableContainers",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName
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
      bodyMapper: Mappers.ProtectableContainerResourceList
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse
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
      bodyMapper: Mappers.ProtectableContainerResourceList
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};
