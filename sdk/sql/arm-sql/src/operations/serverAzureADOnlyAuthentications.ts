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
import * as Mappers from "../models/serverAzureADOnlyAuthenticationsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ServerAzureADOnlyAuthentications. */
export class ServerAzureADOnlyAuthentications {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ServerAzureADOnlyAuthentications.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a specific Azure Active Directory only authentication property.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerAzureADOnlyAuthenticationsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerAzureADOnlyAuthenticationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.ServerAzureADOnlyAuthentication>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerAzureADOnlyAuthentication>): void;
  get(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerAzureADOnlyAuthentication>, callback?: msRest.ServiceCallback<Models.ServerAzureADOnlyAuthentication>): Promise<Models.ServerAzureADOnlyAuthenticationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServerAzureADOnlyAuthenticationsGetResponse>;
  }

  /**
   * Sets Server Active Directory only authentication property or updates an existing server Active
   * Directory only authentication property.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The required parameters for creating or updating an Active Directory only
   * authentication property.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerAzureADOnlyAuthenticationsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, parameters: Models.ServerAzureADOnlyAuthentication, options?: msRest.RequestOptionsBase): Promise<Models.ServerAzureADOnlyAuthenticationsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ServerAzureADOnlyAuthenticationsCreateOrUpdateResponse>;
  }

  /**
   * Deletes an existing server Active Directory only authentication property.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serverName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets a list of server Azure Active Directory only authentications.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerAzureADOnlyAuthenticationsListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerAzureADOnlyAuthenticationsListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.AzureADOnlyAuthListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureADOnlyAuthListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureADOnlyAuthListResult>, callback?: msRest.ServiceCallback<Models.AzureADOnlyAuthListResult>): Promise<Models.ServerAzureADOnlyAuthenticationsListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.ServerAzureADOnlyAuthenticationsListByServerResponse>;
  }

  /**
   * Sets Server Active Directory only authentication property or updates an existing server Active
   * Directory only authentication property.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The required parameters for creating or updating an Active Directory only
   * authentication property.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, parameters: Models.ServerAzureADOnlyAuthentication, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an existing server Active Directory only authentication property.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets a list of server Azure Active Directory only authentications.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerAzureADOnlyAuthenticationsListByServerNextResponse>
   */
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerAzureADOnlyAuthenticationsListByServerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AzureADOnlyAuthListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureADOnlyAuthListResult>): void;
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureADOnlyAuthListResult>, callback?: msRest.ServiceCallback<Models.AzureADOnlyAuthListResult>): Promise<Models.ServerAzureADOnlyAuthenticationsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServerNextOperationSpec,
      callback) as Promise<Models.ServerAzureADOnlyAuthenticationsListByServerNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/azureADOnlyAuthentications/{authenticationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.authenticationName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerAzureADOnlyAuthentication
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/azureADOnlyAuthentications",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureADOnlyAuthListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/azureADOnlyAuthentications/{authenticationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.authenticationName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ServerAzureADOnlyAuthentication,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServerAzureADOnlyAuthentication
    },
    201: {
      bodyMapper: Mappers.ServerAzureADOnlyAuthentication
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/azureADOnlyAuthentications/{authenticationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.authenticationName
  ],
  queryParameters: [
    Parameters.apiVersion1
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

const listByServerNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureADOnlyAuthListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
