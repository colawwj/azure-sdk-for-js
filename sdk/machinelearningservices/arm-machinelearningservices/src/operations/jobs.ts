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
import * as Mappers from "../models/jobsMappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspacesContext } from "../azureMachineLearningWorkspacesContext";

/** Class representing a Jobs. */
export class Jobs {
  private readonly client: AzureMachineLearningWorkspacesContext;

  /**
   * Create a Jobs.
   * @param {AzureMachineLearningWorkspacesContext} client Reference to the service client.
   */
  constructor(client: AzureMachineLearningWorkspacesContext) {
    this.client = client;
  }

  /**
   * @summary Creates and executes a Job.
   * @param id The name and identifier for the Job.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsCreateOrUpdateResponse>
   */
  createOrUpdate(id: string, resourceGroupName: string, workspaceName: string, options?: Models.JobsCreateOrUpdateOptionalParams): Promise<Models.JobsCreateOrUpdateResponse>;
  /**
   * @param id The name and identifier for the Job.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  createOrUpdate(id: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.JobBaseResource>): void;
  /**
   * @param id The name and identifier for the Job.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(id: string, resourceGroupName: string, workspaceName: string, options: Models.JobsCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.JobBaseResource>): void;
  createOrUpdate(id: string, resourceGroupName: string, workspaceName: string, options?: Models.JobsCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.JobBaseResource>, callback?: msRest.ServiceCallback<Models.JobBaseResource>): Promise<Models.JobsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        resourceGroupName,
        workspaceName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.JobsCreateOrUpdateResponse>;
  }

  /**
   * @summary Gets a Job by name/id.
   * @param id The name and identifier for the Job.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsGetResponse>
   */
  get(id: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.JobsGetResponse>;
  /**
   * @param id The name and identifier for the Job.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  get(id: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.JobBaseResource>): void;
  /**
   * @param id The name and identifier for the Job.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(id: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobBaseResource>): void;
  get(id: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobBaseResource>, callback?: msRest.ServiceCallback<Models.JobBaseResource>): Promise<Models.JobsGetResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        resourceGroupName,
        workspaceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.JobsGetResponse>;
  }

  /**
   * @summary Deletes a Job.
   * @param id The name and identifier for the Job.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(id: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param id The name and identifier for the Job.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  deleteMethod(id: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param id The name and identifier for the Job.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(id: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(id: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        resourceGroupName,
        workspaceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * @summary Lists Jobs in the workspace.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsListResponse>
   */
  list(resourceGroupName: string, workspaceName: string, options?: Models.JobsListOptionalParams): Promise<Models.JobsListResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.JobBaseResourceArmPaginatedResult>): void;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, options: Models.JobsListOptionalParams, callback: msRest.ServiceCallback<Models.JobBaseResourceArmPaginatedResult>): void;
  list(resourceGroupName: string, workspaceName: string, options?: Models.JobsListOptionalParams | msRest.ServiceCallback<Models.JobBaseResourceArmPaginatedResult>, callback?: msRest.ServiceCallback<Models.JobBaseResourceArmPaginatedResult>): Promise<Models.JobsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.JobsListResponse>;
  }

  /**
   * @summary Cancels a Job.
   * @param id The name and identifier for the Job.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  cancel(id: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param id The name and identifier for the Job.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  cancel(id: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param id The name and identifier for the Job.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  cancel(id: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  cancel(id: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        resourceGroupName,
        workspaceName,
        options
      },
      cancelOperationSpec,
      callback);
  }

  /**
   * @summary Polls a Job operation.
   * @param id The name and identifier for the Job.
   * @param operationId The operation ID of the async operation to be polled
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  poll(id: string, operationId: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param id The name and identifier for the Job.
   * @param operationId The operation ID of the async operation to be polled
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  poll(id: string, operationId: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param id The name and identifier for the Job.
   * @param operationId The operation ID of the async operation to be polled
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  poll(id: string, operationId: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  poll(id: string, operationId: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        operationId,
        resourceGroupName,
        workspaceName,
        options
      },
      pollOperationSpec,
      callback);
  }

  /**
   * @summary Lists Jobs in the workspace.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.JobsListNextOptionalParams): Promise<Models.JobsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JobBaseResourceArmPaginatedResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.JobsListNextOptionalParams, callback: msRest.ServiceCallback<Models.JobBaseResourceArmPaginatedResult>): void;
  listNext(nextPageLink: string, options?: Models.JobsListNextOptionalParams | msRest.ServiceCallback<Models.JobBaseResourceArmPaginatedResult>, callback?: msRest.ServiceCallback<Models.JobBaseResourceArmPaginatedResult>): Promise<Models.JobsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.JobsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/jobs/{id}",
  urlParameters: [
    Parameters.id,
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
    mapper: Mappers.JobBaseResource
  },
  responses: {
    200: {
      bodyMapper: Mappers.JobBaseResource
    },
    201: {
      bodyMapper: Mappers.JobBaseResource
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/jobs/{id}",
  urlParameters: [
    Parameters.id,
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
      bodyMapper: Mappers.JobBaseResource
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/jobs/{id}",
  urlParameters: [
    Parameters.id,
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

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/jobs",
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
      bodyMapper: Mappers.JobBaseResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const cancelOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/jobs/{id}/cancel",
  urlParameters: [
    Parameters.id,
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
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const pollOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/jobs/{id}/operationresults/{operationId}",
  urlParameters: [
    Parameters.id,
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
    200: {},
    202: {},
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
      bodyMapper: Mappers.JobBaseResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};
