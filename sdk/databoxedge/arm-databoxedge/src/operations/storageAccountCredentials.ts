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
import * as Mappers from "../models/storageAccountCredentialsMappers";
import * as Parameters from "../models/parameters";
import { DataBoxEdgeManagementClientContext } from "../dataBoxEdgeManagementClientContext";

/** Class representing a StorageAccountCredentials. */
export class StorageAccountCredentials {
  private readonly client: DataBoxEdgeManagementClientContext;

  /**
   * Create a StorageAccountCredentials.
   * @param {DataBoxEdgeManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataBoxEdgeManagementClientContext) {
    this.client = client;
  }

  /**
   * @summary Gets all the storage account credentials in a Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageAccountCredentialsListByDataBoxEdgeDeviceResponse>
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageAccountCredentialsListByDataBoxEdgeDeviceResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.StorageAccountCredentialList>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccountCredentialList>): void;
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageAccountCredentialList>, callback?: msRest.ServiceCallback<Models.StorageAccountCredentialList>): Promise<Models.StorageAccountCredentialsListByDataBoxEdgeDeviceResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      listByDataBoxEdgeDeviceOperationSpec,
      callback) as Promise<Models.StorageAccountCredentialsListByDataBoxEdgeDeviceResponse>;
  }

  /**
   * Gets the properties of the specified storage account credential.
   * @param deviceName The device name.
   * @param name The storage account credential name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageAccountCredentialsGetResponse>
   */
  get(deviceName: string, name: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageAccountCredentialsGetResponse>;
  /**
   * @param deviceName The device name.
   * @param name The storage account credential name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  get(deviceName: string, name: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.StorageAccountCredential>): void;
  /**
   * @param deviceName The device name.
   * @param name The storage account credential name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(deviceName: string, name: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccountCredential>): void;
  get(deviceName: string, name: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageAccountCredential>, callback?: msRest.ServiceCallback<Models.StorageAccountCredential>): Promise<Models.StorageAccountCredentialsGetResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        name,
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.StorageAccountCredentialsGetResponse>;
  }

  /**
   * Creates or updates the storage account credential.
   * @param deviceName The device name.
   * @param name The storage account credential name.
   * @param storageAccountCredential The storage account credential.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageAccountCredentialsCreateOrUpdateResponse>
   */
  createOrUpdate(deviceName: string, name: string, storageAccountCredential: Models.StorageAccountCredential, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageAccountCredentialsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(deviceName,name,storageAccountCredential,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.StorageAccountCredentialsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the storage account credential.
   * @param deviceName The device name.
   * @param name The storage account credential name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(deviceName: string, name: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(deviceName,name,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates the storage account credential.
   * @param deviceName The device name.
   * @param name The storage account credential name.
   * @param storageAccountCredential The storage account credential.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(deviceName: string, name: string, storageAccountCredential: Models.StorageAccountCredential, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        name,
        storageAccountCredential,
        resourceGroupName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the storage account credential.
   * @param deviceName The device name.
   * @param name The storage account credential name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(deviceName: string, name: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        name,
        resourceGroupName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * @summary Gets all the storage account credentials in a Data Box Edge/Data Box Gateway device.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageAccountCredentialsListByDataBoxEdgeDeviceNextResponse>
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageAccountCredentialsListByDataBoxEdgeDeviceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.StorageAccountCredentialList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccountCredentialList>): void;
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageAccountCredentialList>, callback?: msRest.ServiceCallback<Models.StorageAccountCredentialList>): Promise<Models.StorageAccountCredentialsListByDataBoxEdgeDeviceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByDataBoxEdgeDeviceNextOperationSpec,
      callback) as Promise<Models.StorageAccountCredentialsListByDataBoxEdgeDeviceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByDataBoxEdgeDeviceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials",
  urlParameters: [
    Parameters.deviceName,
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
      bodyMapper: Mappers.StorageAccountCredentialList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.name,
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
      bodyMapper: Mappers.StorageAccountCredential
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.name,
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
    parameterPath: "storageAccountCredential",
    mapper: {
      ...Mappers.StorageAccountCredential,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.StorageAccountCredential
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.name,
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
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDataBoxEdgeDeviceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.StorageAccountCredentialList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};