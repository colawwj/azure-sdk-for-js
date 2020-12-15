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
import * as Mappers from "../models/containersMappers";
import * as Parameters from "../models/parameters";
import { ContainerInstanceManagementClientContext } from "../containerInstanceManagementClientContext";

/** Class representing a Containers. */
export class Containers {
  private readonly client: ContainerInstanceManagementClientContext;

  /**
   * Create a Containers.
   * @param {ContainerInstanceManagementClientContext} client Reference to the service client.
   */
  constructor(client: ContainerInstanceManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the logs for a specified container instance in a specified resource group and container
   * group.
   * @summary Get the logs for a specified container instance.
   * @param resourceGroupName The name of the resource group.
   * @param containerGroupName The name of the container group.
   * @param containerName The name of the container instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainersListLogsResponse>
   */
  listLogs(resourceGroupName: string, containerGroupName: string, containerName: string, options?: Models.ContainersListLogsOptionalParams): Promise<Models.ContainersListLogsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param containerGroupName The name of the container group.
   * @param containerName The name of the container instance.
   * @param callback The callback
   */
  listLogs(resourceGroupName: string, containerGroupName: string, containerName: string, callback: msRest.ServiceCallback<Models.Logs>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param containerGroupName The name of the container group.
   * @param containerName The name of the container instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listLogs(resourceGroupName: string, containerGroupName: string, containerName: string, options: Models.ContainersListLogsOptionalParams, callback: msRest.ServiceCallback<Models.Logs>): void;
  listLogs(resourceGroupName: string, containerGroupName: string, containerName: string, options?: Models.ContainersListLogsOptionalParams | msRest.ServiceCallback<Models.Logs>, callback?: msRest.ServiceCallback<Models.Logs>): Promise<Models.ContainersListLogsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        containerGroupName,
        containerName,
        options
      },
      listLogsOperationSpec,
      callback) as Promise<Models.ContainersListLogsResponse>;
  }

  /**
   * Executes a command for a specific container instance in a specified resource group and container
   * group.
   * @summary Executes a command in a specific container instance.
   * @param resourceGroupName The name of the resource group.
   * @param containerGroupName The name of the container group.
   * @param containerName The name of the container instance.
   * @param containerExecRequest The request for the exec command.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainersExecuteCommandResponse>
   */
  executeCommand(resourceGroupName: string, containerGroupName: string, containerName: string, containerExecRequest: Models.ContainerExecRequest, options?: msRest.RequestOptionsBase): Promise<Models.ContainersExecuteCommandResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param containerGroupName The name of the container group.
   * @param containerName The name of the container instance.
   * @param containerExecRequest The request for the exec command.
   * @param callback The callback
   */
  executeCommand(resourceGroupName: string, containerGroupName: string, containerName: string, containerExecRequest: Models.ContainerExecRequest, callback: msRest.ServiceCallback<Models.ContainerExecResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param containerGroupName The name of the container group.
   * @param containerName The name of the container instance.
   * @param containerExecRequest The request for the exec command.
   * @param options The optional parameters
   * @param callback The callback
   */
  executeCommand(resourceGroupName: string, containerGroupName: string, containerName: string, containerExecRequest: Models.ContainerExecRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContainerExecResponse>): void;
  executeCommand(resourceGroupName: string, containerGroupName: string, containerName: string, containerExecRequest: Models.ContainerExecRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ContainerExecResponse>, callback?: msRest.ServiceCallback<Models.ContainerExecResponse>): Promise<Models.ContainersExecuteCommandResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        containerGroupName,
        containerName,
        containerExecRequest,
        options
      },
      executeCommandOperationSpec,
      callback) as Promise<Models.ContainersExecuteCommandResponse>;
  }

  /**
   * Attach to the output stream of a specific container instance in a specified resource group and
   * container group.
   * @summary Attach to the output of a specific container instance.
   * @param resourceGroupName The name of the resource group.
   * @param containerGroupName The name of the container group.
   * @param containerName The name of the container instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainersAttachResponse>
   */
  attach(resourceGroupName: string, containerGroupName: string, containerName: string, options?: msRest.RequestOptionsBase): Promise<Models.ContainersAttachResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param containerGroupName The name of the container group.
   * @param containerName The name of the container instance.
   * @param callback The callback
   */
  attach(resourceGroupName: string, containerGroupName: string, containerName: string, callback: msRest.ServiceCallback<Models.ContainerAttachResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param containerGroupName The name of the container group.
   * @param containerName The name of the container instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  attach(resourceGroupName: string, containerGroupName: string, containerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContainerAttachResponse>): void;
  attach(resourceGroupName: string, containerGroupName: string, containerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ContainerAttachResponse>, callback?: msRest.ServiceCallback<Models.ContainerAttachResponse>): Promise<Models.ContainersAttachResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        containerGroupName,
        containerName,
        options
      },
      attachOperationSpec,
      callback) as Promise<Models.ContainersAttachResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listLogsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/containers/{containerName}/logs",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerGroupName,
    Parameters.containerName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.tail,
    Parameters.timestamps
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Logs
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const executeCommandOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/containers/{containerName}/exec",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerGroupName,
    Parameters.containerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "containerExecRequest",
    mapper: {
      ...Mappers.ContainerExecRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ContainerExecResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const attachOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/containers/{containerName}/attach",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerGroupName,
    Parameters.containerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContainerAttachResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
