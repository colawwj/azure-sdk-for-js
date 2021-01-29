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
import * as Mappers from "../models/disasterRecoveryConfigsMappers";
import * as Parameters from "../models/parameters";
import { ServiceBusManagementClientContext } from "../serviceBusManagementClientContext";

/** Class representing a DisasterRecoveryConfigs. */
export class DisasterRecoveryConfigs {
  private readonly client: ServiceBusManagementClientContext;

  /**
   * Create a DisasterRecoveryConfigs.
   * @param {ServiceBusManagementClientContext} client Reference to the service client.
   */
  constructor(client: ServiceBusManagementClientContext) {
    this.client = client;
  }

  /**
   * Check the give namespace name availability.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param parameters Parameters to check availability of the given namespace name
   * @param [options] The optional parameters
   * @returns Promise<Models.DisasterRecoveryConfigsCheckNameAvailabilityMethodResponse>
   */
  checkNameAvailabilityMethod(resourceGroupName: string, namespaceName: string, parameters: Models.CheckNameAvailability, options?: msRest.RequestOptionsBase): Promise<Models.DisasterRecoveryConfigsCheckNameAvailabilityMethodResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param parameters Parameters to check availability of the given namespace name
   * @param callback The callback
   */
  checkNameAvailabilityMethod(resourceGroupName: string, namespaceName: string, parameters: Models.CheckNameAvailability, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param parameters Parameters to check availability of the given namespace name
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailabilityMethod(resourceGroupName: string, namespaceName: string, parameters: Models.CheckNameAvailability, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
  checkNameAvailabilityMethod(resourceGroupName: string, namespaceName: string, parameters: Models.CheckNameAvailability, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckNameAvailabilityResult>, callback?: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): Promise<Models.DisasterRecoveryConfigsCheckNameAvailabilityMethodResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        parameters,
        options
      },
      checkNameAvailabilityMethodOperationSpec,
      callback) as Promise<Models.DisasterRecoveryConfigsCheckNameAvailabilityMethodResponse>;
  }

  /**
   * Gets all Alias(Disaster Recovery configurations)
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param [options] The optional parameters
   * @returns Promise<Models.DisasterRecoveryConfigsListResponse>
   */
  list(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.DisasterRecoveryConfigsListResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param callback The callback
   */
  list(resourceGroupName: string, namespaceName: string, callback: msRest.ServiceCallback<Models.ArmDisasterRecoveryListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, namespaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArmDisasterRecoveryListResult>): void;
  list(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ArmDisasterRecoveryListResult>, callback?: msRest.ServiceCallback<Models.ArmDisasterRecoveryListResult>): Promise<Models.DisasterRecoveryConfigsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DisasterRecoveryConfigsListResponse>;
  }

  /**
   * Creates or updates a new Alias(Disaster Recovery configuration)
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param parameters Parameters required to create an Alias(Disaster Recovery configuration)
   * @param [options] The optional parameters
   * @returns Promise<Models.DisasterRecoveryConfigsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, alias: string, parameters: Models.ArmDisasterRecovery, options?: msRest.RequestOptionsBase): Promise<Models.DisasterRecoveryConfigsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param parameters Parameters required to create an Alias(Disaster Recovery configuration)
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, alias: string, parameters: Models.ArmDisasterRecovery, callback: msRest.ServiceCallback<Models.ArmDisasterRecovery>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param parameters Parameters required to create an Alias(Disaster Recovery configuration)
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, alias: string, parameters: Models.ArmDisasterRecovery, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArmDisasterRecovery>): void;
  createOrUpdate(resourceGroupName: string, namespaceName: string, alias: string, parameters: Models.ArmDisasterRecovery, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ArmDisasterRecovery>, callback?: msRest.ServiceCallback<Models.ArmDisasterRecovery>): Promise<Models.DisasterRecoveryConfigsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        alias,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.DisasterRecoveryConfigsCreateOrUpdateResponse>;
  }

  /**
   * Deletes an Alias(Disaster Recovery configuration)
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, alias: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, alias: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, alias: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, namespaceName: string, alias: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        alias,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieves Alias(Disaster Recovery configuration) for primary or secondary namespace
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param [options] The optional parameters
   * @returns Promise<Models.DisasterRecoveryConfigsGetResponse>
   */
  get(resourceGroupName: string, namespaceName: string, alias: string, options?: msRest.RequestOptionsBase): Promise<Models.DisasterRecoveryConfigsGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, alias: string, callback: msRest.ServiceCallback<Models.ArmDisasterRecovery>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, alias: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArmDisasterRecovery>): void;
  get(resourceGroupName: string, namespaceName: string, alias: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ArmDisasterRecovery>, callback?: msRest.ServiceCallback<Models.ArmDisasterRecovery>): Promise<Models.DisasterRecoveryConfigsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        alias,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DisasterRecoveryConfigsGetResponse>;
  }

  /**
   * This operation disables the Disaster Recovery and stops replicating changes from primary to
   * secondary namespaces
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  breakPairing(resourceGroupName: string, namespaceName: string, alias: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param callback The callback
   */
  breakPairing(resourceGroupName: string, namespaceName: string, alias: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The optional parameters
   * @param callback The callback
   */
  breakPairing(resourceGroupName: string, namespaceName: string, alias: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  breakPairing(resourceGroupName: string, namespaceName: string, alias: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        alias,
        options
      },
      breakPairingOperationSpec,
      callback);
  }

  /**
   * Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  failOver(resourceGroupName: string, namespaceName: string, alias: string, options?: Models.DisasterRecoveryConfigsFailOverOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param callback The callback
   */
  failOver(resourceGroupName: string, namespaceName: string, alias: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The optional parameters
   * @param callback The callback
   */
  failOver(resourceGroupName: string, namespaceName: string, alias: string, options: Models.DisasterRecoveryConfigsFailOverOptionalParams, callback: msRest.ServiceCallback<void>): void;
  failOver(resourceGroupName: string, namespaceName: string, alias: string, options?: Models.DisasterRecoveryConfigsFailOverOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        alias,
        options
      },
      failOverOperationSpec,
      callback);
  }

  /**
   * Gets the authorization rules for a namespace.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param [options] The optional parameters
   * @returns Promise<Models.DisasterRecoveryConfigsListAuthorizationRulesResponse>
   */
  listAuthorizationRules(resourceGroupName: string, namespaceName: string, alias: string, options?: msRest.RequestOptionsBase): Promise<Models.DisasterRecoveryConfigsListAuthorizationRulesResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param callback The callback
   */
  listAuthorizationRules(resourceGroupName: string, namespaceName: string, alias: string, callback: msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The optional parameters
   * @param callback The callback
   */
  listAuthorizationRules(resourceGroupName: string, namespaceName: string, alias: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>): void;
  listAuthorizationRules(resourceGroupName: string, namespaceName: string, alias: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>, callback?: msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>): Promise<Models.DisasterRecoveryConfigsListAuthorizationRulesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        alias,
        options
      },
      listAuthorizationRulesOperationSpec,
      callback) as Promise<Models.DisasterRecoveryConfigsListAuthorizationRulesResponse>;
  }

  /**
   * Gets an authorization rule for a namespace by rule name.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisasterRecoveryConfigsGetAuthorizationRuleResponse>
   */
  getAuthorizationRule(resourceGroupName: string, namespaceName: string, alias: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.DisasterRecoveryConfigsGetAuthorizationRuleResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param callback The callback
   */
  getAuthorizationRule(resourceGroupName: string, namespaceName: string, alias: string, authorizationRuleName: string, callback: msRest.ServiceCallback<Models.SBAuthorizationRule>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAuthorizationRule(resourceGroupName: string, namespaceName: string, alias: string, authorizationRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SBAuthorizationRule>): void;
  getAuthorizationRule(resourceGroupName: string, namespaceName: string, alias: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SBAuthorizationRule>, callback?: msRest.ServiceCallback<Models.SBAuthorizationRule>): Promise<Models.DisasterRecoveryConfigsGetAuthorizationRuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        alias,
        authorizationRuleName,
        options
      },
      getAuthorizationRuleOperationSpec,
      callback) as Promise<Models.DisasterRecoveryConfigsGetAuthorizationRuleResponse>;
  }

  /**
   * Gets the primary and secondary connection strings for the namespace.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisasterRecoveryConfigsListKeysResponse>
   */
  listKeys(resourceGroupName: string, namespaceName: string, alias: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.DisasterRecoveryConfigsListKeysResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, namespaceName: string, alias: string, authorizationRuleName: string, callback: msRest.ServiceCallback<Models.AccessKeys>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, namespaceName: string, alias: string, authorizationRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessKeys>): void;
  listKeys(resourceGroupName: string, namespaceName: string, alias: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccessKeys>, callback?: msRest.ServiceCallback<Models.AccessKeys>): Promise<Models.DisasterRecoveryConfigsListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        alias,
        authorizationRuleName,
        options
      },
      listKeysOperationSpec,
      callback) as Promise<Models.DisasterRecoveryConfigsListKeysResponse>;
  }

  /**
   * Gets all Alias(Disaster Recovery configurations)
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisasterRecoveryConfigsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DisasterRecoveryConfigsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ArmDisasterRecoveryListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArmDisasterRecoveryListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ArmDisasterRecoveryListResult>, callback?: msRest.ServiceCallback<Models.ArmDisasterRecoveryListResult>): Promise<Models.DisasterRecoveryConfigsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DisasterRecoveryConfigsListNextResponse>;
  }

  /**
   * Gets the authorization rules for a namespace.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisasterRecoveryConfigsListAuthorizationRulesNextResponse>
   */
  listAuthorizationRulesNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DisasterRecoveryConfigsListAuthorizationRulesNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAuthorizationRulesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAuthorizationRulesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>): void;
  listAuthorizationRulesNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>, callback?: msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>): Promise<Models.DisasterRecoveryConfigsListAuthorizationRulesNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAuthorizationRulesNextOperationSpec,
      callback) as Promise<Models.DisasterRecoveryConfigsListAuthorizationRulesNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkNameAvailabilityMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/CheckNameAvailability",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CheckNameAvailability,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ArmDisasterRecoveryListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName0,
    Parameters.alias,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ArmDisasterRecovery,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ArmDisasterRecovery
    },
    201: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName0,
    Parameters.alias,
    Parameters.subscriptionId
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName0,
    Parameters.alias,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ArmDisasterRecovery
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const breakPairingOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/breakPairing",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName0,
    Parameters.alias,
    Parameters.subscriptionId
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const failOverOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/failover",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName0,
    Parameters.alias,
    Parameters.subscriptionId
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
      "parameters"
    ],
    mapper: Mappers.FailoverProperties
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listAuthorizationRulesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName0,
    Parameters.alias,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SBAuthorizationRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getAuthorizationRuleOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules/{authorizationRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName0,
    Parameters.alias,
    Parameters.authorizationRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SBAuthorizationRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules/{authorizationRuleName}/listKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName0,
    Parameters.alias,
    Parameters.authorizationRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccessKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ArmDisasterRecoveryListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listAuthorizationRulesNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SBAuthorizationRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
