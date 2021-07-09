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
import * as Mappers from "../models/virtualNetworkGatewayNatRulesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a VirtualNetworkGatewayNatRules. */
export class VirtualNetworkGatewayNatRules {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a VirtualNetworkGatewayNatRules.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the details of a nat rule.
   * @param resourceGroupName The resource group name of the Virtual Network Gateway.
   * @param virtualNetworkGatewayName The name of the gateway.
   * @param natRuleName The name of the nat rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkGatewayNatRulesGetResponse>
   */
  get(resourceGroupName: string, virtualNetworkGatewayName: string, natRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayNatRulesGetResponse>;
  /**
   * @param resourceGroupName The resource group name of the Virtual Network Gateway.
   * @param virtualNetworkGatewayName The name of the gateway.
   * @param natRuleName The name of the nat rule.
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualNetworkGatewayName: string, natRuleName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayNatRule>): void;
  /**
   * @param resourceGroupName The resource group name of the Virtual Network Gateway.
   * @param virtualNetworkGatewayName The name of the gateway.
   * @param natRuleName The name of the nat rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualNetworkGatewayName: string, natRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayNatRule>): void;
  get(resourceGroupName: string, virtualNetworkGatewayName: string, natRuleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkGatewayNatRule>, callback?: msRest.ServiceCallback<Models.VirtualNetworkGatewayNatRule>): Promise<Models.VirtualNetworkGatewayNatRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualNetworkGatewayName,
        natRuleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualNetworkGatewayNatRulesGetResponse>;
  }

  /**
   * Creates a nat rule to a scalable virtual network gateway if it doesn't exist else updates the
   * existing nat rules.
   * @param resourceGroupName The resource group name of the Virtual Network Gateway.
   * @param virtualNetworkGatewayName The name of the gateway.
   * @param natRuleName The name of the nat rule.
   * @param natRuleParameters Parameters supplied to create or Update a Nat Rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkGatewayNatRulesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, virtualNetworkGatewayName: string, natRuleName: string, natRuleParameters: Models.VirtualNetworkGatewayNatRule, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayNatRulesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,virtualNetworkGatewayName,natRuleName,natRuleParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualNetworkGatewayNatRulesCreateOrUpdateResponse>;
  }

  /**
   * Deletes a nat rule.
   * @param resourceGroupName The resource group name of the Virtual Network Gateway.
   * @param virtualNetworkGatewayName The name of the gateway.
   * @param natRuleName The name of the nat rule.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, virtualNetworkGatewayName: string, natRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,virtualNetworkGatewayName,natRuleName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Retrieves all nat rules for a particular virtual network gateway.
   * @param resourceGroupName The resource group name of the virtual network gateway.
   * @param virtualNetworkGatewayName The name of the gateway.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkGatewayNatRulesListByVirtualNetworkGatewayResponse>
   */
  listByVirtualNetworkGateway(resourceGroupName: string, virtualNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayNatRulesListByVirtualNetworkGatewayResponse>;
  /**
   * @param resourceGroupName The resource group name of the virtual network gateway.
   * @param virtualNetworkGatewayName The name of the gateway.
   * @param callback The callback
   */
  listByVirtualNetworkGateway(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<Models.ListVirtualNetworkGatewayNatRulesResult>): void;
  /**
   * @param resourceGroupName The resource group name of the virtual network gateway.
   * @param virtualNetworkGatewayName The name of the gateway.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByVirtualNetworkGateway(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVirtualNetworkGatewayNatRulesResult>): void;
  listByVirtualNetworkGateway(resourceGroupName: string, virtualNetworkGatewayName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListVirtualNetworkGatewayNatRulesResult>, callback?: msRest.ServiceCallback<Models.ListVirtualNetworkGatewayNatRulesResult>): Promise<Models.VirtualNetworkGatewayNatRulesListByVirtualNetworkGatewayResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualNetworkGatewayName,
        options
      },
      listByVirtualNetworkGatewayOperationSpec,
      callback) as Promise<Models.VirtualNetworkGatewayNatRulesListByVirtualNetworkGatewayResponse>;
  }

  /**
   * Creates a nat rule to a scalable virtual network gateway if it doesn't exist else updates the
   * existing nat rules.
   * @param resourceGroupName The resource group name of the Virtual Network Gateway.
   * @param virtualNetworkGatewayName The name of the gateway.
   * @param natRuleName The name of the nat rule.
   * @param natRuleParameters Parameters supplied to create or Update a Nat Rule.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, virtualNetworkGatewayName: string, natRuleName: string, natRuleParameters: Models.VirtualNetworkGatewayNatRule, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualNetworkGatewayName,
        natRuleName,
        natRuleParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a nat rule.
   * @param resourceGroupName The resource group name of the Virtual Network Gateway.
   * @param virtualNetworkGatewayName The name of the gateway.
   * @param natRuleName The name of the nat rule.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, virtualNetworkGatewayName: string, natRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualNetworkGatewayName,
        natRuleName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Retrieves all nat rules for a particular virtual network gateway.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkGatewayNatRulesListByVirtualNetworkGatewayNextResponse>
   */
  listByVirtualNetworkGatewayNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayNatRulesListByVirtualNetworkGatewayNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByVirtualNetworkGatewayNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListVirtualNetworkGatewayNatRulesResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByVirtualNetworkGatewayNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVirtualNetworkGatewayNatRulesResult>): void;
  listByVirtualNetworkGatewayNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListVirtualNetworkGatewayNatRulesResult>, callback?: msRest.ServiceCallback<Models.ListVirtualNetworkGatewayNatRulesResult>): Promise<Models.VirtualNetworkGatewayNatRulesListByVirtualNetworkGatewayNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByVirtualNetworkGatewayNextOperationSpec,
      callback) as Promise<Models.VirtualNetworkGatewayNatRulesListByVirtualNetworkGatewayNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/natRules/{natRuleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualNetworkGatewayName,
    Parameters.natRuleName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkGatewayNatRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByVirtualNetworkGatewayOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/natRules",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualNetworkGatewayName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListVirtualNetworkGatewayNatRulesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/natRules/{natRuleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualNetworkGatewayName,
    Parameters.natRuleName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "natRuleParameters",
    mapper: {
      ...Mappers.VirtualNetworkGatewayNatRule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkGatewayNatRule
    },
    201: {
      bodyMapper: Mappers.VirtualNetworkGatewayNatRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/natRules/{natRuleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualNetworkGatewayName,
    Parameters.natRuleName
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

const listByVirtualNetworkGatewayNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListVirtualNetworkGatewayNatRulesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
