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
import * as Mappers from "../models/environmentContainersMappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspacesContext } from "../azureMachineLearningWorkspacesContext";

/** Class representing a EnvironmentContainers. */
export class EnvironmentContainers {
  private readonly client: AzureMachineLearningWorkspacesContext;

  /**
   * Create a EnvironmentContainers.
   * @param {AzureMachineLearningWorkspacesContext} client Reference to the service client.
   */
  constructor(client: AzureMachineLearningWorkspacesContext) {
    this.client = client;
  }

  /**
   * @summary Create or update container.
   * @param name Container name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentContainersCreateOrUpdateResponse>
   */
  createOrUpdate(name: string, resourceGroupName: string, workspaceName: string, options?: Models.EnvironmentContainersCreateOrUpdateOptionalParams): Promise<Models.EnvironmentContainersCreateOrUpdateResponse>;
  /**
   * @param name Container name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  createOrUpdate(name: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.EnvironmentContainerResource>): void;
  /**
   * @param name Container name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(name: string, resourceGroupName: string, workspaceName: string, options: Models.EnvironmentContainersCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.EnvironmentContainerResource>): void;
  createOrUpdate(name: string, resourceGroupName: string, workspaceName: string, options?: Models.EnvironmentContainersCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.EnvironmentContainerResource>, callback?: msRest.ServiceCallback<Models.EnvironmentContainerResource>): Promise<Models.EnvironmentContainersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        resourceGroupName,
        workspaceName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.EnvironmentContainersCreateOrUpdateResponse>;
  }

  /**
   * @summary Get container.
   * @param name Container name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentContainersGetResponse>
   */
  get(name: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.EnvironmentContainersGetResponse>;
  /**
   * @param name Container name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  get(name: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.EnvironmentContainerResource>): void;
  /**
   * @param name Container name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(name: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EnvironmentContainerResource>): void;
  get(name: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EnvironmentContainerResource>, callback?: msRest.ServiceCallback<Models.EnvironmentContainerResource>): Promise<Models.EnvironmentContainersGetResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        resourceGroupName,
        workspaceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.EnvironmentContainersGetResponse>;
  }

  /**
   * @summary Delete container.
   * @param name Container name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(name: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param name Container name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  deleteMethod(name: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param name Container name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(name: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(name: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        resourceGroupName,
        workspaceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * @summary List containers.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentContainersListResponse>
   */
  list(resourceGroupName: string, workspaceName: string, options?: Models.EnvironmentContainersListOptionalParams): Promise<Models.EnvironmentContainersListResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.EnvironmentContainerResourceArmPaginatedResult>): void;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, options: Models.EnvironmentContainersListOptionalParams, callback: msRest.ServiceCallback<Models.EnvironmentContainerResourceArmPaginatedResult>): void;
  list(resourceGroupName: string, workspaceName: string, options?: Models.EnvironmentContainersListOptionalParams | msRest.ServiceCallback<Models.EnvironmentContainerResourceArmPaginatedResult>, callback?: msRest.ServiceCallback<Models.EnvironmentContainerResourceArmPaginatedResult>): Promise<Models.EnvironmentContainersListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.EnvironmentContainersListResponse>;
  }

  /**
   * @summary List containers.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentContainersListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.EnvironmentContainersListNextOptionalParams): Promise<Models.EnvironmentContainersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.EnvironmentContainerResourceArmPaginatedResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.EnvironmentContainersListNextOptionalParams, callback: msRest.ServiceCallback<Models.EnvironmentContainerResourceArmPaginatedResult>): void;
  listNext(nextPageLink: string, options?: Models.EnvironmentContainersListNextOptionalParams | msRest.ServiceCallback<Models.EnvironmentContainerResourceArmPaginatedResult>, callback?: msRest.ServiceCallback<Models.EnvironmentContainerResourceArmPaginatedResult>): Promise<Models.EnvironmentContainersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.EnvironmentContainersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}",
  urlParameters: [
    Parameters.name0,
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
    mapper: Mappers.EnvironmentContainerResource
  },
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentContainerResource
    },
    201: {
      bodyMapper: Mappers.EnvironmentContainerResource
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}",
  urlParameters: [
    Parameters.name0,
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
      bodyMapper: Mappers.EnvironmentContainerResource
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}",
  urlParameters: [
    Parameters.name0,
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
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments",
  urlParameters: [
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
      bodyMapper: Mappers.EnvironmentContainerResourceArmPaginatedResult
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
      bodyMapper: Mappers.EnvironmentContainerResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};
