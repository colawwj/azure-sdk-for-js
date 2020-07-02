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
import * as Mappers from "../models/jobExecutionsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a JobExecutions. */
export class JobExecutions {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a JobExecutions.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all executions in a job agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobExecutionsListByAgentResponse>
   */
  listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, options?: Models.JobExecutionsListByAgentOptionalParams): Promise<Models.JobExecutionsListByAgentResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param callback The callback
   */
  listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, options: Models.JobExecutionsListByAgentOptionalParams, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, options?: Models.JobExecutionsListByAgentOptionalParams | msRest.ServiceCallback<Models.JobExecutionListResult>, callback?: msRest.ServiceCallback<Models.JobExecutionListResult>): Promise<Models.JobExecutionsListByAgentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        options
      },
      listByAgentOperationSpec,
      callback) as Promise<Models.JobExecutionsListByAgentResponse>;
  }

  /**
   * Requests cancellation of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param jobExecutionId The id of the job execution to cancel.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  cancel(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param jobExecutionId The id of the job execution to cancel.
   * @param callback The callback
   */
  cancel(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param jobExecutionId The id of the job execution to cancel.
   * @param options The optional parameters
   * @param callback The callback
   */
  cancel(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  cancel(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        options
      },
      cancelOperationSpec,
      callback);
  }

  /**
   * Starts an elastic job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobExecutionsCreateResponse>
   */
  create(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<Models.JobExecutionsCreateResponse> {
    return this.beginCreate(resourceGroupName,serverName,jobAgentName,jobName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.JobExecutionsCreateResponse>;
  }

  /**
   * Lists a job's executions.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobExecutionsListByJobResponse>
   */
  listByJob(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: Models.JobExecutionsListByJobOptionalParams): Promise<Models.JobExecutionsListByJobResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param callback The callback
   */
  listByJob(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByJob(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options: Models.JobExecutionsListByJobOptionalParams, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  listByJob(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: Models.JobExecutionsListByJobOptionalParams | msRest.ServiceCallback<Models.JobExecutionListResult>, callback?: msRest.ServiceCallback<Models.JobExecutionListResult>): Promise<Models.JobExecutionsListByJobResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        options
      },
      listByJobOperationSpec,
      callback) as Promise<Models.JobExecutionsListByJobResponse>;
  }

  /**
   * Gets a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param jobExecutionId The id of the job execution
   * @param [options] The optional parameters
   * @returns Promise<Models.JobExecutionsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: msRest.RequestOptionsBase): Promise<Models.JobExecutionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param jobExecutionId The id of the job execution
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, callback: msRest.ServiceCallback<Models.JobExecution>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param jobExecutionId The id of the job execution
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobExecution>): void;
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobExecution>, callback?: msRest.ServiceCallback<Models.JobExecution>): Promise<Models.JobExecutionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.JobExecutionsGetResponse>;
  }

  /**
   * Creates or updates a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The job execution id to create the job execution under.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobExecutionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: msRest.RequestOptionsBase): Promise<Models.JobExecutionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,jobAgentName,jobName,jobExecutionId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.JobExecutionsCreateOrUpdateResponse>;
  }

  /**
   * Starts an elastic job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Creates or updates a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The job execution id to create the job execution under.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Lists all executions in a job agent.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobExecutionsListByAgentNextResponse>
   */
  listByAgentNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.JobExecutionsListByAgentNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAgentNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAgentNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  listByAgentNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobExecutionListResult>, callback?: msRest.ServiceCallback<Models.JobExecutionListResult>): Promise<Models.JobExecutionsListByAgentNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAgentNextOperationSpec,
      callback) as Promise<Models.JobExecutionsListByAgentNextResponse>;
  }

  /**
   * Lists a job's executions.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobExecutionsListByJobNextResponse>
   */
  listByJobNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.JobExecutionsListByJobNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByJobNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByJobNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  listByJobNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobExecutionListResult>, callback?: msRest.ServiceCallback<Models.JobExecutionListResult>): Promise<Models.JobExecutionsListByJobNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByJobNextOperationSpec,
      callback) as Promise<Models.JobExecutionsListByJobNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByAgentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/executions",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.skip,
    Parameters.top,
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const cancelOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/cancel",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByJobOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.skip,
    Parameters.top,
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobExecution
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/start",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobExecution
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobExecution
    },
    201: {
      bodyMapper: Mappers.JobExecution
    },
    202: {},
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByJobNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
