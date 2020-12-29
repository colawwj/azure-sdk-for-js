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
import * as Mappers from "../models/serverParametersMappers";
import * as Parameters from "../models/parameters";
import { MariaDBManagementClientContext } from "../mariaDBManagementClientContext";

/** Class representing a ServerParameters. */
export class ServerParameters {
  private readonly client: MariaDBManagementClientContext;

  /**
   * Create a ServerParameters.
   * @param {MariaDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: MariaDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Update a list of configurations in a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param value The parameters for updating a list of server configuration.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerParametersListUpdateConfigurationsResponse>
   */
  listUpdateConfigurations(resourceGroupName: string, serverName: string, value: Models.ConfigurationListResult, options?: msRest.RequestOptionsBase): Promise<Models.ServerParametersListUpdateConfigurationsResponse> {
    return this.beginListUpdateConfigurations(resourceGroupName,serverName,value,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ServerParametersListUpdateConfigurationsResponse>;
  }

  /**
   * Update a list of configurations in a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param value The parameters for updating a list of server configuration.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginListUpdateConfigurations(resourceGroupName: string, serverName: string, value: Models.ConfigurationListResult, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        value,
        options
      },
      beginListUpdateConfigurationsOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginListUpdateConfigurationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBForMariaDB/servers/{serverName}/updateConfigurations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "value",
    mapper: {
      ...Mappers.ConfigurationListResult,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationListResult
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
