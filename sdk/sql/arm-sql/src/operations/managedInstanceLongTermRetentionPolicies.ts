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
import * as Mappers from "../models/managedInstanceLongTermRetentionPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ManagedInstanceLongTermRetentionPolicies. */
export class ManagedInstanceLongTermRetentionPolicies {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ManagedInstanceLongTermRetentionPolicies.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a managed database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceLongTermRetentionPoliciesGetResponse>
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceLongTermRetentionPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, callback: msRest.ServiceCallback<Models.ManagedInstanceLongTermRetentionPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceLongTermRetentionPolicy>): void;
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceLongTermRetentionPolicy>, callback?: msRest.ServiceCallback<Models.ManagedInstanceLongTermRetentionPolicy>): Promise<Models.ManagedInstanceLongTermRetentionPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagedInstanceLongTermRetentionPoliciesGetResponse>;
  }

  /**
   * Sets a managed database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters The long term retention policy info.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.ManagedInstanceLongTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,managedInstanceName,databaseName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Gets a database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceLongTermRetentionPoliciesListByDatabaseResponse>
   */
  listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceLongTermRetentionPoliciesListByDatabaseResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, callback: msRest.ServiceCallback<Models.ManagedInstanceLongTermRetentionPolicyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceLongTermRetentionPolicyListResult>): void;
  listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceLongTermRetentionPolicyListResult>, callback?: msRest.ServiceCallback<Models.ManagedInstanceLongTermRetentionPolicyListResult>): Promise<Models.ManagedInstanceLongTermRetentionPoliciesListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options
      },
      listByDatabaseOperationSpec,
      callback) as Promise<Models.ManagedInstanceLongTermRetentionPoliciesListByDatabaseResponse>;
  }

  /**
   * Sets a managed database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters The long term retention policy info.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.ManagedInstanceLongTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets a database's long term retention policy.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceLongTermRetentionPoliciesListByDatabaseNextResponse>
   */
  listByDatabaseNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceLongTermRetentionPoliciesListByDatabaseNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByDatabaseNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagedInstanceLongTermRetentionPolicyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabaseNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceLongTermRetentionPolicyListResult>): void;
  listByDatabaseNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceLongTermRetentionPolicyListResult>, callback?: msRest.ServiceCallback<Models.ManagedInstanceLongTermRetentionPolicyListResult>): Promise<Models.ManagedInstanceLongTermRetentionPoliciesListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByDatabaseNextOperationSpec,
      callback) as Promise<Models.ManagedInstanceLongTermRetentionPoliciesListByDatabaseNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/backupLongTermRetentionPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.policyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDatabaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/backupLongTermRetentionPolicies",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/backupLongTermRetentionPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.policyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ManagedInstanceLongTermRetentionPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionPolicy
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDatabaseNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
