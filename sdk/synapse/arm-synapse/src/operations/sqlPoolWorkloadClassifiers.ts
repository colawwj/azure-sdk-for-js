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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/sqlPoolWorkloadClassifiersMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a SqlPoolWorkloadClassifiers. */
export class SqlPoolWorkloadClassifiers {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a SqlPoolWorkloadClassifiers.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a workload classifier
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolWorkloadClassifiersGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolWorkloadClassifiersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier.
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, callback: msRest.ServiceCallback<Models.WorkloadClassifier>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkloadClassifier>): void;
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkloadClassifier>, callback?: msRest.ServiceCallback<Models.WorkloadClassifier>): Promise<Models.SqlPoolWorkloadClassifiersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        workloadGroupName,
        workloadClassifierName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SqlPoolWorkloadClassifiersGetResponse>;
  }

  /**
   * Creates or updates a workload classifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier to create/update.
   * @param parameters The properties of the workload classifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolWorkloadClassifiersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, parameters: Models.WorkloadClassifier, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolWorkloadClassifiersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,workspaceName,sqlPoolName,workloadGroupName,workloadClassifierName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SqlPoolWorkloadClassifiersCreateOrUpdateResponse>;
  }

  /**
   * Deletes a workload classifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,workspaceName,sqlPoolName,workloadGroupName,workloadClassifierName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the list of workload classifiers for a workload group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group from which to receive the classifiers
   * from.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolWorkloadClassifiersListByWorkloadGroupResponse>
   */
  listByWorkloadGroup(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolWorkloadClassifiersListByWorkloadGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group from which to receive the classifiers
   * from.
   * @param callback The callback
   */
  listByWorkloadGroup(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, callback: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group from which to receive the classifiers
   * from.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkloadGroup(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): void;
  listByWorkloadGroup(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkloadClassifierListResult>, callback?: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): Promise<Models.SqlPoolWorkloadClassifiersListByWorkloadGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        workloadGroupName,
        options
      },
      listByWorkloadGroupOperationSpec,
      callback) as Promise<Models.SqlPoolWorkloadClassifiersListByWorkloadGroupResponse>;
  }

  /**
   * Creates or updates a workload classifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier to create/update.
   * @param parameters The properties of the workload classifier.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, parameters: Models.WorkloadClassifier, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        workloadGroupName,
        workloadClassifierName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a workload classifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        workloadGroupName,
        workloadClassifierName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets the list of workload classifiers for a workload group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolWorkloadClassifiersListByWorkloadGroupNextResponse>
   */
  listByWorkloadGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolWorkloadClassifiersListByWorkloadGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByWorkloadGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkloadGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): void;
  listByWorkloadGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkloadClassifierListResult>, callback?: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): Promise<Models.SqlPoolWorkloadClassifiersListByWorkloadGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByWorkloadGroupNextOperationSpec,
      callback) as Promise<Models.SqlPoolWorkloadClassifiersListByWorkloadGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.workloadGroupName,
    Parameters.workloadClassifierName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkloadGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}/workloadClassifiers",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.workloadGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifierListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.workloadGroupName,
    Parameters.workloadClassifierName
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
      ...Mappers.WorkloadClassifier,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    201: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.workloadGroupName,
    Parameters.workloadClassifierName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkloadGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifierListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
