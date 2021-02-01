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
import * as Mappers from "../models/privateEndpointOperationsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a PrivateEndpointOperations. */
export class PrivateEndpointOperations {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a PrivateEndpointOperations.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * @summary Gets the operation status for a private endpoint connection.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param operationId Operation id
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointGetOperationStatusResponse>
   */
  getOperationStatus(vaultName: string, resourceGroupName: string, privateEndpointConnectionName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointGetOperationStatusResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param operationId Operation id
   * @param callback The callback
   */
  getOperationStatus(vaultName: string, resourceGroupName: string, privateEndpointConnectionName: string, operationId: string, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param operationId Operation id
   * @param options The optional parameters
   * @param callback The callback
   */
  getOperationStatus(vaultName: string, resourceGroupName: string, privateEndpointConnectionName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  getOperationStatus(vaultName: string, resourceGroupName: string, privateEndpointConnectionName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.PrivateEndpointGetOperationStatusResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        privateEndpointConnectionName,
        operationId,
        options
      },
      getOperationStatusOperationSpec,
      callback) as Promise<Models.PrivateEndpointGetOperationStatusResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}/operationsStatus/{operationId}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.privateEndpointConnectionName,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};
