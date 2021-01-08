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
import * as Mappers from "../models/storageAccountsMappers";
import * as Parameters from "../models/parameters";
import { DataBoxEdgeManagementClientContext } from "../dataBoxEdgeManagementClientContext";

/** Class representing a StorageAccounts. */
export class StorageAccounts {
  private readonly client: DataBoxEdgeManagementClientContext;

  /**
   * Create a StorageAccounts.
   * @param {DataBoxEdgeManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataBoxEdgeManagementClientContext) {
    this.client = client;
  }

  /**
   * @summary Lists all the StorageAccounts in a Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageAccountsListByDataBoxEdgeDeviceResponse>
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageAccountsListByDataBoxEdgeDeviceResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.StorageAccountList>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccountList>): void;
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageAccountList>, callback?: msRest.ServiceCallback<Models.StorageAccountList>): Promise<Models.StorageAccountsListByDataBoxEdgeDeviceResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      listByDataBoxEdgeDeviceOperationSpec,
      callback) as Promise<Models.StorageAccountsListByDataBoxEdgeDeviceResponse>;
  }

  /**
   * @summary Gets a StorageAccount by name.
   * @param deviceName The device name.
   * @param storageAccountName The storage account name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageAccountsGetResponse>
   */
  get(deviceName: string, storageAccountName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageAccountsGetResponse>;
  /**
   * @param deviceName The device name.
   * @param storageAccountName The storage account name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  get(deviceName: string, storageAccountName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.StorageAccount>): void;
  /**
   * @param deviceName The device name.
   * @param storageAccountName The storage account name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(deviceName: string, storageAccountName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccount>): void;
  get(deviceName: string, storageAccountName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageAccount>, callback?: msRest.ServiceCallback<Models.StorageAccount>): Promise<Models.StorageAccountsGetResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        storageAccountName,
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.StorageAccountsGetResponse>;
  }

  /**
   * @summary Creates a new StorageAccount or updates an existing StorageAccount on the device.
   * @param deviceName The device name.
   * @param storageAccountName The StorageAccount name.
   * @param storageAccount The StorageAccount properties.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageAccountsCreateOrUpdateResponse>
   */
  createOrUpdate(deviceName: string, storageAccountName: string, storageAccount: Models.StorageAccount, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageAccountsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(deviceName,storageAccountName,storageAccount,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.StorageAccountsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the StorageAccount on the Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param storageAccountName The StorageAccount name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(deviceName: string, storageAccountName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(deviceName,storageAccountName,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * @summary Creates a new StorageAccount or updates an existing StorageAccount on the device.
   * @param deviceName The device name.
   * @param storageAccountName The StorageAccount name.
   * @param storageAccount The StorageAccount properties.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(deviceName: string, storageAccountName: string, storageAccount: Models.StorageAccount, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        storageAccountName,
        storageAccount,
        resourceGroupName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the StorageAccount on the Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param storageAccountName The StorageAccount name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(deviceName: string, storageAccountName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        storageAccountName,
        resourceGroupName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * @summary Lists all the StorageAccounts in a Data Box Edge/Data Box Gateway device.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageAccountsListByDataBoxEdgeDeviceNextResponse>
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageAccountsListByDataBoxEdgeDeviceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.StorageAccountList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccountList>): void;
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageAccountList>, callback?: msRest.ServiceCallback<Models.StorageAccountList>): Promise<Models.StorageAccountsListByDataBoxEdgeDeviceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByDataBoxEdgeDeviceNextOperationSpec,
      callback) as Promise<Models.StorageAccountsListByDataBoxEdgeDeviceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByDataBoxEdgeDeviceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts",
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
      bodyMapper: Mappers.StorageAccountList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.storageAccountName,
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
      bodyMapper: Mappers.StorageAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.storageAccountName,
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
    parameterPath: "storageAccount",
    mapper: {
      ...Mappers.StorageAccount,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.StorageAccount
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.storageAccountName,
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
      bodyMapper: Mappers.StorageAccountList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
