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
import * as Mappers from "../models/protectionPolicyOperationStatusesMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a ProtectionPolicyOperationStatuses. */
export class ProtectionPolicyOperationStatuses {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a ProtectionPolicyOperationStatuses.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Provides the status of the asynchronous operations like backup, restore. The status can be in
   * progress, completed
   * or failed. You can refer to the Operation Status enum for all the possible states of an
   * operation. Some operations
   * create jobs. This method returns the list of jobs associated with operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param policyName Backup policy name whose operation's status needs to be fetched.
   * @param operationId Operation ID which represents an operation whose status needs to be fetched.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProtectionPolicyOperationStatusesGetResponse>
   */
  get(vaultName: string, resourceGroupName: string, policyName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.ProtectionPolicyOperationStatusesGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param policyName Backup policy name whose operation's status needs to be fetched.
   * @param operationId Operation ID which represents an operation whose status needs to be fetched.
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, policyName: string, operationId: string, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param policyName Backup policy name whose operation's status needs to be fetched.
   * @param operationId Operation ID which represents an operation whose status needs to be fetched.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, policyName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  get(vaultName: string, resourceGroupName: string, policyName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.ProtectionPolicyOperationStatusesGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        policyName,
        operationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProtectionPolicyOperationStatusesGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupPolicies/{policyName}/operations/{operationId}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.policyName,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
