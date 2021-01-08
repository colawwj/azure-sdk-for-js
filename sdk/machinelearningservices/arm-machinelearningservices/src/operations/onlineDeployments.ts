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
import * as Mappers from "../models/onlineDeploymentsMappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspacesContext } from "../azureMachineLearningWorkspacesContext";

/** Class representing a OnlineDeployments. */
export class OnlineDeployments {
  private readonly client: AzureMachineLearningWorkspacesContext;

  /**
   * Create a OnlineDeployments.
   * @param {AzureMachineLearningWorkspacesContext} client Reference to the service client.
   */
  constructor(client: AzureMachineLearningWorkspacesContext) {
    this.client = client;
  }

  /**
   * @summary List Inference Endpoint Deployments.
   * @param endpointName Inference endpoint name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.OnlineDeploymentsListResponse>
   */
  list(endpointName: string, resourceGroupName: string, workspaceName: string, options?: Models.OnlineDeploymentsListOptionalParams): Promise<Models.OnlineDeploymentsListResponse>;
  /**
   * @param endpointName Inference endpoint name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  list(endpointName: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.OnlineDeploymentPropertiesTrackedResourceArmPaginatedResult>): void;
  /**
   * @param endpointName Inference endpoint name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(endpointName: string, resourceGroupName: string, workspaceName: string, options: Models.OnlineDeploymentsListOptionalParams, callback: msRest.ServiceCallback<Models.OnlineDeploymentPropertiesTrackedResourceArmPaginatedResult>): void;
  list(endpointName: string, resourceGroupName: string, workspaceName: string, options?: Models.OnlineDeploymentsListOptionalParams | msRest.ServiceCallback<Models.OnlineDeploymentPropertiesTrackedResourceArmPaginatedResult>, callback?: msRest.ServiceCallback<Models.OnlineDeploymentPropertiesTrackedResourceArmPaginatedResult>): Promise<Models.OnlineDeploymentsListResponse> {
    return this.client.sendOperationRequest(
      {
        endpointName,
        resourceGroupName,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.OnlineDeploymentsListResponse>;
  }

  /**
   * @summary Delete Inference Endpoint Deployment.
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  deleteMethod(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        endpointName,
        deploymentName,
        resourceGroupName,
        workspaceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * @summary Get Inference Deployment Deployment.
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.OnlineDeploymentsGetResponse>
   */
  get(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.OnlineDeploymentsGetResponse>;
  /**
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  get(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.OnlineDeploymentPropertiesTrackedResource>): void;
  /**
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OnlineDeploymentPropertiesTrackedResource>): void;
  get(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OnlineDeploymentPropertiesTrackedResource>, callback?: msRest.ServiceCallback<Models.OnlineDeploymentPropertiesTrackedResource>): Promise<Models.OnlineDeploymentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        endpointName,
        deploymentName,
        resourceGroupName,
        workspaceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.OnlineDeploymentsGetResponse>;
  }

  /**
   * @summary Create or update Inference Endpoint Deployment.
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.OnlineDeploymentsCreateOrUpdateResponse>
   */
  createOrUpdate(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, options?: Models.OnlineDeploymentsCreateOrUpdateOptionalParams): Promise<Models.OnlineDeploymentsCreateOrUpdateResponse>;
  /**
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  createOrUpdate(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, options: Models.OnlineDeploymentsCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<any>): void;
  createOrUpdate(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, options?: Models.OnlineDeploymentsCreateOrUpdateOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.OnlineDeploymentsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        endpointName,
        deploymentName,
        resourceGroupName,
        workspaceName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.OnlineDeploymentsCreateOrUpdateResponse>;
  }

  /**
   * @summary Polls an Endpoint operation.
   * @param endpointName Inference endpoint name.
   * @param deploymentName The name and identifier for the endpoint.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.OnlineDeploymentsGetLogsResponse>
   */
  getLogs(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, options?: Models.OnlineDeploymentsGetLogsOptionalParams): Promise<Models.OnlineDeploymentsGetLogsResponse>;
  /**
   * @param endpointName Inference endpoint name.
   * @param deploymentName The name and identifier for the endpoint.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  getLogs(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.DeploymentLogs>): void;
  /**
   * @param endpointName Inference endpoint name.
   * @param deploymentName The name and identifier for the endpoint.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  getLogs(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, options: Models.OnlineDeploymentsGetLogsOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentLogs>): void;
  getLogs(endpointName: string, deploymentName: string, resourceGroupName: string, workspaceName: string, options?: Models.OnlineDeploymentsGetLogsOptionalParams | msRest.ServiceCallback<Models.DeploymentLogs>, callback?: msRest.ServiceCallback<Models.DeploymentLogs>): Promise<Models.OnlineDeploymentsGetLogsResponse> {
    return this.client.sendOperationRequest(
      {
        endpointName,
        deploymentName,
        resourceGroupName,
        workspaceName,
        options
      },
      getLogsOperationSpec,
      callback) as Promise<Models.OnlineDeploymentsGetLogsResponse>;
  }

  /**
   * @summary Polls an Endpoint operation.
   * @param endpointName Inference endpoint name.
   * @param deploymentName The name and identifier for the endpoint.
   * @param operationId The operation ID of the async operation to be polled
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.OnlineDeploymentsPollResponse>
   */
  poll(endpointName: string, deploymentName: string, operationId: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.OnlineDeploymentsPollResponse>;
  /**
   * @param endpointName Inference endpoint name.
   * @param deploymentName The name and identifier for the endpoint.
   * @param operationId The operation ID of the async operation to be polled
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  poll(endpointName: string, deploymentName: string, operationId: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param endpointName Inference endpoint name.
   * @param deploymentName The name and identifier for the endpoint.
   * @param operationId The operation ID of the async operation to be polled
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  poll(endpointName: string, deploymentName: string, operationId: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  poll(endpointName: string, deploymentName: string, operationId: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.OnlineDeploymentsPollResponse> {
    return this.client.sendOperationRequest(
      {
        endpointName,
        deploymentName,
        operationId,
        resourceGroupName,
        workspaceName,
        options
      },
      pollOperationSpec,
      callback) as Promise<Models.OnlineDeploymentsPollResponse>;
  }

  /**
   * @summary List Inference Endpoint Deployments.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OnlineDeploymentsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.OnlineDeploymentsListNextOptionalParams): Promise<Models.OnlineDeploymentsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OnlineDeploymentPropertiesTrackedResourceArmPaginatedResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.OnlineDeploymentsListNextOptionalParams, callback: msRest.ServiceCallback<Models.OnlineDeploymentPropertiesTrackedResourceArmPaginatedResult>): void;
  listNext(nextPageLink: string, options?: Models.OnlineDeploymentsListNextOptionalParams | msRest.ServiceCallback<Models.OnlineDeploymentPropertiesTrackedResourceArmPaginatedResult>, callback?: msRest.ServiceCallback<Models.OnlineDeploymentPropertiesTrackedResourceArmPaginatedResult>): Promise<Models.OnlineDeploymentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.OnlineDeploymentsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/deployments",
  urlParameters: [
    Parameters.endpointName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skiptoken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OnlineDeploymentPropertiesTrackedResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/deployments/{deploymentName}",
  urlParameters: [
    Parameters.endpointName,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/deployments/{deploymentName}",
  urlParameters: [
    Parameters.endpointName,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OnlineDeploymentPropertiesTrackedResource
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/deployments/{deploymentName}",
  urlParameters: [
    Parameters.endpointName,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.OnlineDeploymentPropertiesTrackedResource
  },
  responses: {
    200: {
      bodyMapper: Mappers.OnlineDeploymentPropertiesTrackedResource
    },
    202: {
      bodyMapper: Mappers.OnlineDeploymentPropertiesTrackedResourceLongRunningOperationResponse
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const getLogsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/deployments/{deploymentName}/getLogs",
  urlParameters: [
    Parameters.endpointName,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.DeploymentLogsRequest
  },
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentLogs
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const pollOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/deployments/{deploymentName}/operationresults/{operationId}",
  urlParameters: [
    Parameters.endpointName,
    Parameters.deploymentName,
    Parameters.operationId,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OnlineDeploymentPropertiesTrackedResource
    },
    202: {
      bodyMapper: Mappers.OnlineDeploymentPropertiesTrackedResourceLongRunningOperationResponse
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
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
    Parameters.apiVersion,
    Parameters.skiptoken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OnlineDeploymentPropertiesTrackedResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};
