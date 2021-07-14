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
import * as Mappers from "../models/firewallRulesMappers";
import * as Parameters from "../models/parameters";
import { PostgreSQLManagementClientContext } from "../postgreSQLManagementClientContext";

/** Class representing a FirewallRules. */
export class FirewallRules {
  private readonly client: PostgreSQLManagementClientContext;

  /**
   * Create a FirewallRules.
   * @param {PostgreSQLManagementClientContext} client Reference to the service client.
   */
  constructor(client: PostgreSQLManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a new firewall rule or updates an existing firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the server firewall rule.
   * @param parameters The required parameters for creating or updating a firewall rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallRulesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, firewallRuleName: string, parameters: Models.FirewallRule, options?: msRest.RequestOptionsBase): Promise<Models.FirewallRulesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,firewallRuleName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.FirewallRulesCreateOrUpdateResponse>;
  }

  /**
   * Deletes a server firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the server firewall rule.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, firewallRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serverName,firewallRuleName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets information about a server firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the server firewall rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallRulesGetResponse>
   */
  get(resourceGroupName: string, serverName: string, firewallRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.FirewallRulesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the server firewall rule.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, firewallRuleName: string, callback: msRest.ServiceCallback<Models.FirewallRule>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the server firewall rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, firewallRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FirewallRule>): void;
  get(resourceGroupName: string, serverName: string, firewallRuleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FirewallRule>, callback?: msRest.ServiceCallback<Models.FirewallRule>): Promise<Models.FirewallRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        firewallRuleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FirewallRulesGetResponse>;
  }

  /**
   * List all the firewall rules in a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallRulesListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.FirewallRulesListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.FirewallRuleListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FirewallRuleListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FirewallRuleListResult>, callback?: msRest.ServiceCallback<Models.FirewallRuleListResult>): Promise<Models.FirewallRulesListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.FirewallRulesListByServerResponse>;
  }

  /**
   * Creates a new firewall rule or updates an existing firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the server firewall rule.
   * @param parameters The required parameters for creating or updating a firewall rule.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, firewallRuleName: string, parameters: Models.FirewallRule, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        firewallRuleName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a server firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the server firewall rule.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serverName: string, firewallRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        firewallRuleName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/firewallRules/{firewallRuleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.firewallRuleName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FirewallRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/firewallRules",
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
  responses: {
    200: {
      bodyMapper: Mappers.FirewallRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/firewallRules/{firewallRuleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.firewallRuleName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.FirewallRule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FirewallRule
    },
    201: {
      bodyMapper: Mappers.FirewallRule
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/firewallRules/{firewallRuleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.firewallRuleName
  ],
  queryParameters: [
    Parameters.apiVersion0
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
