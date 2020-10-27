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
import * as Mappers from "../models/iotDefenderSettingsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a IotDefenderSettings. */
export class IotDefenderSettings {
  private readonly client: SecurityCenterContext;

  /**
   * Create a IotDefenderSettings.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * List IoT Defender Settings
   * @param [options] The optional parameters
   * @returns Promise<Models.IotDefenderSettingsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.IotDefenderSettingsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.IotDefenderSettingsList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotDefenderSettingsList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotDefenderSettingsList>, callback?: msRest.ServiceCallback<Models.IotDefenderSettingsList>): Promise<Models.IotDefenderSettingsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.IotDefenderSettingsListResponse>;
  }

  /**
   * Get IoT Defender Settings
   * @param [options] The optional parameters
   * @returns Promise<Models.IotDefenderSettingsGetResponse>
   */
  get(options?: msRest.RequestOptionsBase): Promise<Models.IotDefenderSettingsGetResponse>;
  /**
   * @param callback The callback
   */
  get(callback: msRest.ServiceCallback<Models.IotDefenderSettingsModel>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotDefenderSettingsModel>): void;
  get(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotDefenderSettingsModel>, callback?: msRest.ServiceCallback<Models.IotDefenderSettingsModel>): Promise<Models.IotDefenderSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IotDefenderSettingsGetResponse>;
  }

  /**
   * Create or update IoT Defender settings
   * @param iotDefenderSettingsModel The IoT defender settings model
   * @param [options] The optional parameters
   * @returns Promise<Models.IotDefenderSettingsCreateOrUpdateResponse>
   */
  createOrUpdate(iotDefenderSettingsModel: Models.IotDefenderSettingsModel, options?: msRest.RequestOptionsBase): Promise<Models.IotDefenderSettingsCreateOrUpdateResponse>;
  /**
   * @param iotDefenderSettingsModel The IoT defender settings model
   * @param callback The callback
   */
  createOrUpdate(iotDefenderSettingsModel: Models.IotDefenderSettingsModel, callback: msRest.ServiceCallback<Models.IotDefenderSettingsModel>): void;
  /**
   * @param iotDefenderSettingsModel The IoT defender settings model
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(iotDefenderSettingsModel: Models.IotDefenderSettingsModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotDefenderSettingsModel>): void;
  createOrUpdate(iotDefenderSettingsModel: Models.IotDefenderSettingsModel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotDefenderSettingsModel>, callback?: msRest.ServiceCallback<Models.IotDefenderSettingsModel>): Promise<Models.IotDefenderSettingsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        iotDefenderSettingsModel,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.IotDefenderSettingsCreateOrUpdateResponse>;
  }

  /**
   * Delete IoT Defender settings
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  deleteMethod(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Information about downloadable packages
   * @param [options] The optional parameters
   * @returns Promise<Models.IotDefenderSettingsPackageDownloadsMethodResponse>
   */
  packageDownloadsMethod(options?: msRest.RequestOptionsBase): Promise<Models.IotDefenderSettingsPackageDownloadsMethodResponse>;
  /**
   * @param callback The callback
   */
  packageDownloadsMethod(callback: msRest.ServiceCallback<Models.PackageDownloads>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  packageDownloadsMethod(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PackageDownloads>): void;
  packageDownloadsMethod(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PackageDownloads>, callback?: msRest.ServiceCallback<Models.PackageDownloads>): Promise<Models.IotDefenderSettingsPackageDownloadsMethodResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      packageDownloadsMethodOperationSpec,
      callback) as Promise<Models.IotDefenderSettingsPackageDownloadsMethodResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/iotDefenderSettings",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotDefenderSettingsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/iotDefenderSettings/default",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotDefenderSettingsModel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/iotDefenderSettings/default",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "iotDefenderSettingsModel",
    mapper: {
      ...Mappers.IotDefenderSettingsModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IotDefenderSettingsModel
    },
    201: {
      bodyMapper: Mappers.IotDefenderSettingsModel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/iotDefenderSettings/default",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion9
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

const packageDownloadsMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/iotDefenderSettings/default/packageDownloads",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PackageDownloads
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
