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
import * as Mappers from "../models/hcxEnterpriseSitesMappers";
import * as Parameters from "../models/parameters";
import { AvsClientContext } from "../avsClientContext";

/** Class representing a HcxEnterpriseSites. */
export class HcxEnterpriseSites {
  private readonly client: AvsClientContext;

  /**
   * Create a HcxEnterpriseSites.
   * @param {AvsClientContext} client Reference to the service client.
   */
  constructor(client: AvsClientContext) {
    this.client = client;
  }

  /**
   * @summary List HCX Enterprise Sites in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.HcxEnterpriseSitesListResponse>
   */
  list(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase): Promise<Models.HcxEnterpriseSitesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param callback The callback
   */
  list(resourceGroupName: string, privateCloudName: string, callback: msRest.ServiceCallback<Models.HcxEnterpriseSiteList>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, privateCloudName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HcxEnterpriseSiteList>): void;
  list(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HcxEnterpriseSiteList>, callback?: msRest.ServiceCallback<Models.HcxEnterpriseSiteList>): Promise<Models.HcxEnterpriseSitesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.HcxEnterpriseSitesListResponse>;
  }

  /**
   * @summary Get an HCX Enterprise Site by name in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param hcxEnterpriseSiteName Name of the HCX Enterprise Site in the private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.HcxEnterpriseSitesGetResponse>
   */
  get(resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: msRest.RequestOptionsBase): Promise<Models.HcxEnterpriseSitesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param hcxEnterpriseSiteName Name of the HCX Enterprise Site in the private cloud
   * @param callback The callback
   */
  get(resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, callback: msRest.ServiceCallback<Models.HcxEnterpriseSite>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param hcxEnterpriseSiteName Name of the HCX Enterprise Site in the private cloud
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HcxEnterpriseSite>): void;
  get(resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HcxEnterpriseSite>, callback?: msRest.ServiceCallback<Models.HcxEnterpriseSite>): Promise<Models.HcxEnterpriseSitesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        hcxEnterpriseSiteName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.HcxEnterpriseSitesGetResponse>;
  }

  /**
   * @summary Create or update an HCX Enterprise Site in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName The name of the private cloud.
   * @param hcxEnterpriseSiteName Name of the HCX Enterprise Site in the private cloud
   * @param hcxEnterpriseSite The HCX Enterprise Site
   * @param [options] The optional parameters
   * @returns Promise<Models.HcxEnterpriseSitesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, hcxEnterpriseSite: any, options?: msRest.RequestOptionsBase): Promise<Models.HcxEnterpriseSitesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName The name of the private cloud.
   * @param hcxEnterpriseSiteName Name of the HCX Enterprise Site in the private cloud
   * @param hcxEnterpriseSite The HCX Enterprise Site
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, hcxEnterpriseSite: any, callback: msRest.ServiceCallback<Models.HcxEnterpriseSite>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName The name of the private cloud.
   * @param hcxEnterpriseSiteName Name of the HCX Enterprise Site in the private cloud
   * @param hcxEnterpriseSite The HCX Enterprise Site
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, hcxEnterpriseSite: any, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HcxEnterpriseSite>): void;
  createOrUpdate(resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, hcxEnterpriseSite: any, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HcxEnterpriseSite>, callback?: msRest.ServiceCallback<Models.HcxEnterpriseSite>): Promise<Models.HcxEnterpriseSitesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        hcxEnterpriseSiteName,
        hcxEnterpriseSite,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.HcxEnterpriseSitesCreateOrUpdateResponse>;
  }

  /**
   * @summary Delete an HCX Enterprise Site in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param hcxEnterpriseSiteName Name of the HCX Enterprise Site in the private cloud
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param hcxEnterpriseSiteName Name of the HCX Enterprise Site in the private cloud
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param hcxEnterpriseSiteName Name of the HCX Enterprise Site in the private cloud
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        hcxEnterpriseSiteName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * @summary List HCX Enterprise Sites in a private cloud
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.HcxEnterpriseSitesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.HcxEnterpriseSitesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.HcxEnterpriseSiteList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HcxEnterpriseSiteList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HcxEnterpriseSiteList>, callback?: msRest.ServiceCallback<Models.HcxEnterpriseSiteList>): Promise<Models.HcxEnterpriseSitesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.HcxEnterpriseSitesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HcxEnterpriseSiteList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.hcxEnterpriseSiteName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HcxEnterpriseSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.hcxEnterpriseSiteName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "hcxEnterpriseSite",
    mapper: {
      required: true,
      serializedName: "hcxEnterpriseSite",
      type: {
        name: "Object"
      }
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.HcxEnterpriseSite
    },
    201: {
      bodyMapper: Mappers.HcxEnterpriseSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.hcxEnterpriseSiteName
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
      bodyMapper: Mappers.HcxEnterpriseSiteList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
