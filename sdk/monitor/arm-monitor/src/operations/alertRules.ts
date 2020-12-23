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
import * as Mappers from "../models/alertRulesMappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";

/** Class representing a AlertRules. */
export class AlertRules {
  private readonly client: MonitorManagementClientContext;

  /**
   * Create a AlertRules.
   * @param {MonitorManagementClientContext} client Reference to the service client.
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a classic metric alert rule.
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to create or update.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertRulesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, ruleName: string, parameters: Models.AlertRuleResource, options?: msRest.RequestOptionsBase): Promise<Models.AlertRulesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to create or update.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, ruleName: string, parameters: Models.AlertRuleResource, callback: msRest.ServiceCallback<Models.AlertRuleResource>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to create or update.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, ruleName: string, parameters: Models.AlertRuleResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertRuleResource>): void;
  createOrUpdate(resourceGroupName: string, ruleName: string, parameters: Models.AlertRuleResource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertRuleResource>, callback?: msRest.ServiceCallback<Models.AlertRuleResource>): Promise<Models.AlertRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ruleName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.AlertRulesCreateOrUpdateResponse>;
  }

  /**
   * Deletes a classic metric alert rule
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, ruleName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, ruleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ruleName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets a classic metric alert rule
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertRulesGetResponse>
   */
  get(resourceGroupName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertRulesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param callback The callback
   */
  get(resourceGroupName: string, ruleName: string, callback: msRest.ServiceCallback<Models.AlertRuleResource>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertRuleResource>): void;
  get(resourceGroupName: string, ruleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertRuleResource>, callback?: msRest.ServiceCallback<Models.AlertRuleResource>): Promise<Models.AlertRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ruleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AlertRulesGetResponse>;
  }

  /**
   * Updates an existing classic metric AlertRuleResource. To update other fields use the
   * CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param alertRulesResource Parameters supplied to the operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertRulesUpdateResponse>
   */
  update(resourceGroupName: string, ruleName: string, alertRulesResource: Models.AlertRuleResourcePatch, options?: msRest.RequestOptionsBase): Promise<Models.AlertRulesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param alertRulesResource Parameters supplied to the operation.
   * @param callback The callback
   */
  update(resourceGroupName: string, ruleName: string, alertRulesResource: Models.AlertRuleResourcePatch, callback: msRest.ServiceCallback<Models.AlertRuleResource>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param alertRulesResource Parameters supplied to the operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, ruleName: string, alertRulesResource: Models.AlertRuleResourcePatch, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertRuleResource>): void;
  update(resourceGroupName: string, ruleName: string, alertRulesResource: Models.AlertRuleResourcePatch, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertRuleResource>, callback?: msRest.ServiceCallback<Models.AlertRuleResource>): Promise<Models.AlertRulesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ruleName,
        alertRulesResource,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.AlertRulesUpdateResponse>;
  }

  /**
   * List the classic metric alert rules within a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertRulesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertRulesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AlertRuleResourceCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertRuleResourceCollection>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertRuleResourceCollection>, callback?: msRest.ServiceCallback<Models.AlertRuleResourceCollection>): Promise<Models.AlertRulesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.AlertRulesListByResourceGroupResponse>;
  }

  /**
   * List the classic metric alert rules within a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertRulesListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.AlertRulesListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.AlertRuleResourceCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertRuleResourceCollection>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertRuleResourceCollection>, callback?: msRest.ServiceCallback<Models.AlertRuleResourceCollection>): Promise<Models.AlertRulesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.AlertRulesListBySubscriptionResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.ruleName,
    Parameters.subscriptionId
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
      ...Mappers.AlertRuleResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleResource
    },
    201: {
      bodyMapper: Mappers.AlertRuleResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.ruleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
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

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.ruleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ruleName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "alertRulesResource",
    mapper: {
      ...Mappers.AlertRuleResourcePatch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleResource
    },
    201: {
      bodyMapper: Mappers.AlertRuleResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/microsoft.insights/alertrules",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
