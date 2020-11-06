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
import * as Mappers from "../models/configurationProfilePreferencesMappers";
import * as Parameters from "../models/parameters";
import { AutomanageClientContext } from "../automanageClientContext";

/** Class representing a ConfigurationProfilePreferences. */
export class ConfigurationProfilePreferences {
  private readonly client: AutomanageClientContext;

  /**
   * Create a ConfigurationProfilePreferences.
   * @param {AutomanageClientContext} client Reference to the service client.
   */
  constructor(client: AutomanageClientContext) {
    this.client = client;
  }

  /**
   * Creates a configuration profile preference
   * @param configurationProfilePreferenceName Name of the configuration profile preference.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters supplied to create or update configuration profile preference.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConfigurationProfilePreferencesCreateOrUpdateResponse>
   */
  createOrUpdate(configurationProfilePreferenceName: string, resourceGroupName: string, parameters: Models.ConfigurationProfilePreference, options?: msRest.RequestOptionsBase): Promise<Models.ConfigurationProfilePreferencesCreateOrUpdateResponse>;
  /**
   * @param configurationProfilePreferenceName Name of the configuration profile preference.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters supplied to create or update configuration profile preference.
   * @param callback The callback
   */
  createOrUpdate(configurationProfilePreferenceName: string, resourceGroupName: string, parameters: Models.ConfigurationProfilePreference, callback: msRest.ServiceCallback<Models.ConfigurationProfilePreference>): void;
  /**
   * @param configurationProfilePreferenceName Name of the configuration profile preference.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters supplied to create or update configuration profile preference.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(configurationProfilePreferenceName: string, resourceGroupName: string, parameters: Models.ConfigurationProfilePreference, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConfigurationProfilePreference>): void;
  createOrUpdate(configurationProfilePreferenceName: string, resourceGroupName: string, parameters: Models.ConfigurationProfilePreference, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConfigurationProfilePreference>, callback?: msRest.ServiceCallback<Models.ConfigurationProfilePreference>): Promise<Models.ConfigurationProfilePreferencesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        configurationProfilePreferenceName,
        resourceGroupName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ConfigurationProfilePreferencesCreateOrUpdateResponse>;
  }

  /**
   * Get information about a configuration profile preference
   * @param configurationProfilePreferenceName The configuration profile preference name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConfigurationProfilePreferencesGetResponse>
   */
  get(configurationProfilePreferenceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ConfigurationProfilePreferencesGetResponse>;
  /**
   * @param configurationProfilePreferenceName The configuration profile preference name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  get(configurationProfilePreferenceName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.ConfigurationProfilePreference>): void;
  /**
   * @param configurationProfilePreferenceName The configuration profile preference name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(configurationProfilePreferenceName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConfigurationProfilePreference>): void;
  get(configurationProfilePreferenceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConfigurationProfilePreference>, callback?: msRest.ServiceCallback<Models.ConfigurationProfilePreference>): Promise<Models.ConfigurationProfilePreferencesGetResponse> {
    return this.client.sendOperationRequest(
      {
        configurationProfilePreferenceName,
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ConfigurationProfilePreferencesGetResponse>;
  }

  /**
   * Delete a configuration profile preference
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configurationProfilePreferenceName Name of the configuration profile preference
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, configurationProfilePreferenceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configurationProfilePreferenceName Name of the configuration profile preference
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, configurationProfilePreferenceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configurationProfilePreferenceName Name of the configuration profile preference
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, configurationProfilePreferenceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, configurationProfilePreferenceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        configurationProfilePreferenceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Updates a configuration profile preference
   * @param configurationProfilePreferenceName Name of the configuration profile preference.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters supplied to create or update configuration profile preference.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConfigurationProfilePreferencesUpdateResponse>
   */
  update(configurationProfilePreferenceName: string, resourceGroupName: string, parameters: Models.ConfigurationProfilePreferenceUpdate, options?: msRest.RequestOptionsBase): Promise<Models.ConfigurationProfilePreferencesUpdateResponse>;
  /**
   * @param configurationProfilePreferenceName Name of the configuration profile preference.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters supplied to create or update configuration profile preference.
   * @param callback The callback
   */
  update(configurationProfilePreferenceName: string, resourceGroupName: string, parameters: Models.ConfigurationProfilePreferenceUpdate, callback: msRest.ServiceCallback<Models.ConfigurationProfilePreference>): void;
  /**
   * @param configurationProfilePreferenceName Name of the configuration profile preference.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters supplied to create or update configuration profile preference.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(configurationProfilePreferenceName: string, resourceGroupName: string, parameters: Models.ConfigurationProfilePreferenceUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConfigurationProfilePreference>): void;
  update(configurationProfilePreferenceName: string, resourceGroupName: string, parameters: Models.ConfigurationProfilePreferenceUpdate, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConfigurationProfilePreference>, callback?: msRest.ServiceCallback<Models.ConfigurationProfilePreference>): Promise<Models.ConfigurationProfilePreferencesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        configurationProfilePreferenceName,
        resourceGroupName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ConfigurationProfilePreferencesUpdateResponse>;
  }

  /**
   * Retrieve a list of configuration profile preferences within a given resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConfigurationProfilePreferencesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ConfigurationProfilePreferencesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ConfigurationProfilePreferenceList>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConfigurationProfilePreferenceList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConfigurationProfilePreferenceList>, callback?: msRest.ServiceCallback<Models.ConfigurationProfilePreferenceList>): Promise<Models.ConfigurationProfilePreferencesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ConfigurationProfilePreferencesListByResourceGroupResponse>;
  }

  /**
   * Retrieve a list of configuration profile preferences within a subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.ConfigurationProfilePreferencesListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.ConfigurationProfilePreferencesListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.ConfigurationProfilePreferenceList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConfigurationProfilePreferenceList>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConfigurationProfilePreferenceList>, callback?: msRest.ServiceCallback<Models.ConfigurationProfilePreferenceList>): Promise<Models.ConfigurationProfilePreferencesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.ConfigurationProfilePreferencesListBySubscriptionResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfilePreferences/{configurationProfilePreferenceName}",
  urlParameters: [
    Parameters.configurationProfilePreferenceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
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
      ...Mappers.ConfigurationProfilePreference,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationProfilePreference
    },
    201: {
      bodyMapper: Mappers.ConfigurationProfilePreference
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfilePreferences/{configurationProfilePreferenceName}",
  urlParameters: [
    Parameters.configurationProfilePreferenceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationProfilePreference
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfilePreferences/{configurationProfilePreferenceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.configurationProfilePreferenceName,
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
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfilePreferences/{configurationProfilePreferenceName}",
  urlParameters: [
    Parameters.configurationProfilePreferenceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
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
      ...Mappers.ConfigurationProfilePreferenceUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationProfilePreference
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfilePreferences",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationProfilePreferenceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Automanage/configurationProfilePreferences",
  urlParameters: [
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
      bodyMapper: Mappers.ConfigurationProfilePreferenceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
