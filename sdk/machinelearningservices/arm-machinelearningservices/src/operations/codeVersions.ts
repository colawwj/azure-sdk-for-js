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
import * as Mappers from "../models/codeVersionsMappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspacesContext } from "../azureMachineLearningWorkspacesContext";

/** Class representing a CodeVersions. */
export class CodeVersions {
  private readonly client: AzureMachineLearningWorkspacesContext;

  /**
   * Create a CodeVersions.
   * @param {AzureMachineLearningWorkspacesContext} client Reference to the service client.
   */
  constructor(client: AzureMachineLearningWorkspacesContext) {
    this.client = client;
  }

  /**
   * @summary Create or update version.
   * @param name Container name.
   * @param version Version identifier.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.CodeVersionsCreateOrUpdateResponse>
   */
  createOrUpdate(name: string, version: string, resourceGroupName: string, workspaceName: string, options?: Models.CodeVersionsCreateOrUpdateOptionalParams): Promise<Models.CodeVersionsCreateOrUpdateResponse>;
  /**
   * @param name Container name.
   * @param version Version identifier.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  createOrUpdate(name: string, version: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.CodeVersionResource>): void;
  /**
   * @param name Container name.
   * @param version Version identifier.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(name: string, version: string, resourceGroupName: string, workspaceName: string, options: Models.CodeVersionsCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.CodeVersionResource>): void;
  createOrUpdate(name: string, version: string, resourceGroupName: string, workspaceName: string, options?: Models.CodeVersionsCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.CodeVersionResource>, callback?: msRest.ServiceCallback<Models.CodeVersionResource>): Promise<Models.CodeVersionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        version,
        resourceGroupName,
        workspaceName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.CodeVersionsCreateOrUpdateResponse>;
  }

  /**
   * @summary Get version.
   * @param name Container name.
   * @param version Version identifier.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.CodeVersionsGetResponse>
   */
  get(name: string, version: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.CodeVersionsGetResponse>;
  /**
   * @param name Container name.
   * @param version Version identifier.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  get(name: string, version: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.CodeVersionResource>): void;
  /**
   * @param name Container name.
   * @param version Version identifier.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(name: string, version: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CodeVersionResource>): void;
  get(name: string, version: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CodeVersionResource>, callback?: msRest.ServiceCallback<Models.CodeVersionResource>): Promise<Models.CodeVersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        version,
        resourceGroupName,
        workspaceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CodeVersionsGetResponse>;
  }

  /**
   * @summary Delete version.
   * @param name Container name.
   * @param version Version identifier.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(name: string, version: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param name Container name.
   * @param version Version identifier.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  deleteMethod(name: string, version: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param name Container name.
   * @param version Version identifier.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(name: string, version: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(name: string, version: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        version,
        resourceGroupName,
        workspaceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * @summary List versions.
   * @param name Container name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.CodeVersionsListResponse>
   */
  list(name: string, resourceGroupName: string, workspaceName: string, options?: Models.CodeVersionsListOptionalParams): Promise<Models.CodeVersionsListResponse>;
  /**
   * @param name Container name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  list(name: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.CodeVersionResourceArmPaginatedResult>): void;
  /**
   * @param name Container name.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(name: string, resourceGroupName: string, workspaceName: string, options: Models.CodeVersionsListOptionalParams, callback: msRest.ServiceCallback<Models.CodeVersionResourceArmPaginatedResult>): void;
  list(name: string, resourceGroupName: string, workspaceName: string, options?: Models.CodeVersionsListOptionalParams | msRest.ServiceCallback<Models.CodeVersionResourceArmPaginatedResult>, callback?: msRest.ServiceCallback<Models.CodeVersionResourceArmPaginatedResult>): Promise<Models.CodeVersionsListResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        resourceGroupName,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.CodeVersionsListResponse>;
  }

  /**
   * @summary List versions.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CodeVersionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.CodeVersionsListNextOptionalParams): Promise<Models.CodeVersionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CodeVersionResourceArmPaginatedResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.CodeVersionsListNextOptionalParams, callback: msRest.ServiceCallback<Models.CodeVersionResourceArmPaginatedResult>): void;
  listNext(nextPageLink: string, options?: Models.CodeVersionsListNextOptionalParams | msRest.ServiceCallback<Models.CodeVersionResourceArmPaginatedResult>, callback?: msRest.ServiceCallback<Models.CodeVersionResourceArmPaginatedResult>): Promise<Models.CodeVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.CodeVersionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes/{name}/versions/{version}",
  urlParameters: [
    Parameters.name,
    Parameters.version0,
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
    mapper: Mappers.Body
  },
  responses: {
    200: {
      bodyMapper: Mappers.CodeVersionResource
    },
    201: {
      bodyMapper: Mappers.CodeVersionResource
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes/{name}/versions/{version}",
  urlParameters: [
    Parameters.name,
    Parameters.version0,
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
      bodyMapper: Mappers.CodeVersionResource
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes/{name}/versions/{version}",
  urlParameters: [
    Parameters.name,
    Parameters.version0,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes/{name}/versions",
  urlParameters: [
    Parameters.name,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CodeVersionResourceArmPaginatedResult
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
    Parameters.skip
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CodeVersionResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};
