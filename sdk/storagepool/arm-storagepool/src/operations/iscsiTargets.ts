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
import * as Mappers from "../models/iscsiTargetsMappers";
import * as Parameters from "../models/parameters";
import { StoragePoolManagementContext } from "../storagePoolManagementContext";

/** Class representing a IscsiTargets. */
export class IscsiTargets {
  private readonly client: StoragePoolManagementContext;

  /**
   * Create a IscsiTargets.
   * @param {StoragePoolManagementContext} client Reference to the service client.
   */
  constructor(client: StoragePoolManagementContext) {
    this.client = client;
  }

  /**
   * Get iSCSI Targets in a Disk Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param diskPoolName The name of the Disk Pool.
   * @param [options] The optional parameters
   * @returns Promise<Models.IscsiTargetsListByDiskPoolResponse>
   */
  listByDiskPool(resourceGroupName: string, diskPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.IscsiTargetsListByDiskPoolResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param diskPoolName The name of the Disk Pool.
   * @param callback The callback
   */
  listByDiskPool(resourceGroupName: string, diskPoolName: string, callback: msRest.ServiceCallback<Models.IscsiTargetList>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param diskPoolName The name of the Disk Pool.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDiskPool(resourceGroupName: string, diskPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IscsiTargetList>): void;
  listByDiskPool(resourceGroupName: string, diskPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IscsiTargetList>, callback?: msRest.ServiceCallback<Models.IscsiTargetList>): Promise<Models.IscsiTargetsListByDiskPoolResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        diskPoolName,
        options
      },
      listByDiskPoolOperationSpec,
      callback) as Promise<Models.IscsiTargetsListByDiskPoolResponse>;
  }

  /**
   * Create or Update an iSCSI Target.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param diskPoolName The name of the Disk Pool.
   * @param iscsiTargetName The name of the iSCSI target.
   * @param iscsiTargetCreatePayload Request payload for iSCSI target create operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IscsiTargetsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, diskPoolName: string, iscsiTargetName: string, iscsiTargetCreatePayload: Models.IscsiTargetCreate, options?: msRest.RequestOptionsBase): Promise<Models.IscsiTargetsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,diskPoolName,iscsiTargetName,iscsiTargetCreatePayload,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.IscsiTargetsCreateOrUpdateResponse>;
  }

  /**
   * Update an iSCSI target.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param diskPoolName The name of the Disk Pool.
   * @param iscsiTargetName The name of the iSCSI target.
   * @param tpgs List of iSCSI target portal groups.
   * @param [options] The optional parameters
   * @returns Promise<Models.IscsiTargetsUpdateResponse>
   */
  update(resourceGroupName: string, diskPoolName: string, iscsiTargetName: string, tpgs: Models.TargetPortalGroupUpdate[], options?: msRest.RequestOptionsBase): Promise<Models.IscsiTargetsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,diskPoolName,iscsiTargetName,tpgs,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.IscsiTargetsUpdateResponse>;
  }

  /**
   * Delete an iSCSI Target.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param diskPoolName The name of the Disk Pool.
   * @param iscsiTargetName The name of the iSCSI target.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, diskPoolName: string, iscsiTargetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,diskPoolName,iscsiTargetName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Get an iSCSI Target.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param diskPoolName The name of the Disk Pool.
   * @param iscsiTargetName The name of the iSCSI target.
   * @param [options] The optional parameters
   * @returns Promise<Models.IscsiTargetsGetResponse>
   */
  get(resourceGroupName: string, diskPoolName: string, iscsiTargetName: string, options?: msRest.RequestOptionsBase): Promise<Models.IscsiTargetsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param diskPoolName The name of the Disk Pool.
   * @param iscsiTargetName The name of the iSCSI target.
   * @param callback The callback
   */
  get(resourceGroupName: string, diskPoolName: string, iscsiTargetName: string, callback: msRest.ServiceCallback<Models.IscsiTarget>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param diskPoolName The name of the Disk Pool.
   * @param iscsiTargetName The name of the iSCSI target.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, diskPoolName: string, iscsiTargetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IscsiTarget>): void;
  get(resourceGroupName: string, diskPoolName: string, iscsiTargetName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IscsiTarget>, callback?: msRest.ServiceCallback<Models.IscsiTarget>): Promise<Models.IscsiTargetsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        diskPoolName,
        iscsiTargetName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IscsiTargetsGetResponse>;
  }

  /**
   * Create or Update an iSCSI Target.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param diskPoolName The name of the Disk Pool.
   * @param iscsiTargetName The name of the iSCSI target.
   * @param iscsiTargetCreatePayload Request payload for iSCSI target create operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, diskPoolName: string, iscsiTargetName: string, iscsiTargetCreatePayload: Models.IscsiTargetCreate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskPoolName,
        iscsiTargetName,
        iscsiTargetCreatePayload,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Update an iSCSI target.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param diskPoolName The name of the Disk Pool.
   * @param iscsiTargetName The name of the iSCSI target.
   * @param tpgs List of iSCSI target portal groups.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, diskPoolName: string, iscsiTargetName: string, tpgs: Models.TargetPortalGroupUpdate[], options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskPoolName,
        iscsiTargetName,
        tpgs,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Delete an iSCSI Target.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param diskPoolName The name of the Disk Pool.
   * @param iscsiTargetName The name of the iSCSI target.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, diskPoolName: string, iscsiTargetName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskPoolName,
        iscsiTargetName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Get iSCSI Targets in a Disk Pool.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IscsiTargetsListByDiskPoolNextResponse>
   */
  listByDiskPoolNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.IscsiTargetsListByDiskPoolNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByDiskPoolNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IscsiTargetList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDiskPoolNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IscsiTargetList>): void;
  listByDiskPoolNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IscsiTargetList>, callback?: msRest.ServiceCallback<Models.IscsiTargetList>): Promise<Models.IscsiTargetsListByDiskPoolNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByDiskPoolNextOperationSpec,
      callback) as Promise<Models.IscsiTargetsListByDiskPoolNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByDiskPoolOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/iscsiTargets",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IscsiTargetList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/iscsiTargets/{iscsiTargetName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskPoolName,
    Parameters.iscsiTargetName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IscsiTarget
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/iscsiTargets/{iscsiTargetName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskPoolName,
    Parameters.iscsiTargetName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "iscsiTargetCreatePayload",
    mapper: {
      ...Mappers.IscsiTargetCreate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IscsiTarget
    },
    202: {
      bodyMapper: Mappers.IscsiTarget
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/iscsiTargets/{iscsiTargetName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskPoolName,
    Parameters.iscsiTargetName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      tpgs: "tpgs"
    },
    mapper: {
      ...Mappers.IscsiTargetUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IscsiTarget
    },
    202: {
      bodyMapper: Mappers.IscsiTarget
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/iscsiTargets/{iscsiTargetName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskPoolName,
    Parameters.iscsiTargetName
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
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByDiskPoolNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.IscsiTargetList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
