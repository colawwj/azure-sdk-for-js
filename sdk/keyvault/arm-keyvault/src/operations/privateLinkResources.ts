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
import * as Mappers from "../models/privateLinkResourcesMappers";
import * as Parameters from "../models/parameters";
import { KeyVaultManagementClientContext } from "../keyVaultManagementClientContext";

/** Class representing a PrivateLinkResources. */
export class PrivateLinkResources {
  private readonly client: KeyVaultManagementClientContext;

  /**
   * Create a PrivateLinkResources.
   * @param {KeyVaultManagementClientContext} client Reference to the service client.
   */
  constructor(client: KeyVaultManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the private link resources supported for the key vault.
   * @param resourceGroupName Name of the resource group that contains the key vault.
   * @param vaultName The name of the key vault.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesListByVaultResponse>
   */
  listByVault(resourceGroupName: string, vaultName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkResourcesListByVaultResponse>;
  /**
   * @param resourceGroupName Name of the resource group that contains the key vault.
   * @param vaultName The name of the key vault.
   * @param callback The callback
   */
  listByVault(resourceGroupName: string, vaultName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group that contains the key vault.
   * @param vaultName The name of the key vault.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByVault(resourceGroupName: string, vaultName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  listByVault(resourceGroupName: string, vaultName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): Promise<Models.PrivateLinkResourcesListByVaultResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vaultName,
        options
      },
      listByVaultOperationSpec,
      callback) as Promise<Models.PrivateLinkResourcesListByVaultResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByVaultOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateLinkResources",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName0
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
