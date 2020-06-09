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
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";

/** Class representing a PrivateLinkResources. */
export class PrivateLinkResources {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Create a PrivateLinkResources.
   * @param {CosmosDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the private link resources that need to be created for a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesListByDatabaseAccountResponse>
   */
  listByDatabaseAccount(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkResourcesListByDatabaseAccountResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param callback The callback
   */
  listByDatabaseAccount(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabaseAccount(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  listByDatabaseAccount(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): Promise<Models.PrivateLinkResourcesListByDatabaseAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listByDatabaseAccountOperationSpec,
      callback) as Promise<Models.PrivateLinkResourcesListByDatabaseAccountResponse>;
  }

  /**
   * Gets the private link resources that need to be created for a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param groupName The name of the private link resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesGetResponse>
   */
  get(resourceGroupName: string, accountName: string, groupName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkResourcesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param groupName The name of the private link resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, groupName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResource>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param groupName The name of the private link resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, groupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResource>): void;
  get(resourceGroupName: string, accountName: string, groupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResource>, callback?: msRest.ServiceCallback<Models.PrivateLinkResource>): Promise<Models.PrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        groupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateLinkResourcesGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByDatabaseAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion1
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

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources/{groupName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.groupName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
