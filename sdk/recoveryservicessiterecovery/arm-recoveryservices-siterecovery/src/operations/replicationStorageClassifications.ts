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
import * as Mappers from "../models/replicationStorageClassificationsMappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClientContext } from "../siteRecoveryManagementClientContext";

/** Class representing a ReplicationStorageClassifications. */
export class ReplicationStorageClassifications {
  private readonly client: SiteRecoveryManagementClientContext;

  /**
   * Create a ReplicationStorageClassifications.
   * @param {SiteRecoveryManagementClientContext} client Reference to the service client.
   */
  constructor(client: SiteRecoveryManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the storage classifications available in the specified fabric.
   * @summary Gets the list of storage classification objects under a fabric.
   * @param fabricName Site name of interest.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationStorageClassificationsListByReplicationFabricsResponse>
   */
  listByReplicationFabrics(fabricName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationStorageClassificationsListByReplicationFabricsResponse>;
  /**
   * @param fabricName Site name of interest.
   * @param callback The callback
   */
  listByReplicationFabrics(fabricName: string, callback: msRest.ServiceCallback<Models.StorageClassificationCollection>): void;
  /**
   * @param fabricName Site name of interest.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationFabrics(fabricName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageClassificationCollection>): void;
  listByReplicationFabrics(fabricName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageClassificationCollection>, callback?: msRest.ServiceCallback<Models.StorageClassificationCollection>): Promise<Models.ReplicationStorageClassificationsListByReplicationFabricsResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        options
      },
      listByReplicationFabricsOperationSpec,
      callback) as Promise<Models.ReplicationStorageClassificationsListByReplicationFabricsResponse>;
  }

  /**
   * Gets the details of the specified storage classification.
   * @summary Gets the details of a storage classification.
   * @param fabricName Fabric name.
   * @param storageClassificationName Storage classification name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationStorageClassificationsGetResponse>
   */
  get(fabricName: string, storageClassificationName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationStorageClassificationsGetResponse>;
  /**
   * @param fabricName Fabric name.
   * @param storageClassificationName Storage classification name.
   * @param callback The callback
   */
  get(fabricName: string, storageClassificationName: string, callback: msRest.ServiceCallback<Models.StorageClassification>): void;
  /**
   * @param fabricName Fabric name.
   * @param storageClassificationName Storage classification name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(fabricName: string, storageClassificationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageClassification>): void;
  get(fabricName: string, storageClassificationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageClassification>, callback?: msRest.ServiceCallback<Models.StorageClassification>): Promise<Models.ReplicationStorageClassificationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        storageClassificationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ReplicationStorageClassificationsGetResponse>;
  }

  /**
   * Lists the storage classifications in the vault.
   * @summary Gets the list of storage classification objects under a vault.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationStorageClassificationsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ReplicationStorageClassificationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.StorageClassificationCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageClassificationCollection>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageClassificationCollection>, callback?: msRest.ServiceCallback<Models.StorageClassificationCollection>): Promise<Models.ReplicationStorageClassificationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ReplicationStorageClassificationsListResponse>;
  }

  /**
   * Lists the storage classifications available in the specified fabric.
   * @summary Gets the list of storage classification objects under a fabric.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationStorageClassificationsListByReplicationFabricsNextResponse>
   */
  listByReplicationFabricsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationStorageClassificationsListByReplicationFabricsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByReplicationFabricsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.StorageClassificationCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationFabricsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageClassificationCollection>): void;
  listByReplicationFabricsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageClassificationCollection>, callback?: msRest.ServiceCallback<Models.StorageClassificationCollection>): Promise<Models.ReplicationStorageClassificationsListByReplicationFabricsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByReplicationFabricsNextOperationSpec,
      callback) as Promise<Models.ReplicationStorageClassificationsListByReplicationFabricsNextResponse>;
  }

  /**
   * Lists the storage classifications in the vault.
   * @summary Gets the list of storage classification objects under a vault.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationStorageClassificationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationStorageClassificationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.StorageClassificationCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageClassificationCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageClassificationCollection>, callback?: msRest.ServiceCallback<Models.StorageClassificationCollection>): Promise<Models.ReplicationStorageClassificationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ReplicationStorageClassificationsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByReplicationFabricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageClassificationCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.storageClassificationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageClassification
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationStorageClassifications",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.StorageClassificationCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByReplicationFabricsNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.StorageClassificationCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
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
      bodyMapper: Mappers.StorageClassificationCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
