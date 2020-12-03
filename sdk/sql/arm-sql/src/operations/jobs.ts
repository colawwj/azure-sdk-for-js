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
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a Jobs. */
export class Jobs {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a Jobs.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of jobs.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsListByAgentResponse>
   */
  listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, options?: msRest.RequestOptionsBase): Promise<Models.JobsListByAgentResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param callback The callback
   */
  listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, callback: msRest.ServiceCallback<Models.JobListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobListResult>): void;
  listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobListResult>, callback?: msRest.ServiceCallback<Models.JobListResult>): Promise<Models.JobsListByAgentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        options
      },
      listByAgentOperationSpec,
      callback) as Promise<Models.JobsListByAgentResponse>;
  }

  /**
   * Gets a job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<Models.JobsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, callback: msRest.ServiceCallback<Models.Job>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Job>): void;
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Job>, callback?: msRest.ServiceCallback<Models.Job>): Promise<Models.JobsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.JobsGetResponse>;
  }

  /**
   * Creates or updates a job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param parameters The requested job state.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, parameters: Models.Job, options?: msRest.RequestOptionsBase): Promise<Models.JobsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param parameters The requested job state.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, parameters: Models.Job, callback: msRest.ServiceCallback<Models.Job>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param parameters The requested job state.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, parameters: Models.Job, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Job>): void;
  createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, parameters: Models.Job, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Job>, callback?: msRest.ServiceCallback<Models.Job>): Promise<Models.JobsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.JobsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to delete.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets a list of jobs.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsListByAgentNextResponse>
   */
  listByAgentNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.JobsListByAgentNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAgentNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JobListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAgentNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobListResult>): void;
  listByAgentNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobListResult>, callback?: msRest.ServiceCallback<Models.JobListResult>): Promise<Models.JobsListByAgentNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAgentNextOperationSpec,
      callback) as Promise<Models.JobsListByAgentNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByAgentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Job,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    201: {
      bodyMapper: Mappers.Job
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByAgentNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
