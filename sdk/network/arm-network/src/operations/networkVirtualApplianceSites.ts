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
import * as Mappers from "../models/networkVirtualApplianceSitesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a NetworkVirtualApplianceSites. */
export class NetworkVirtualApplianceSites {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a NetworkVirtualApplianceSites.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified site for Virtual Appliances.
   * @param resourceGroupName The name of the resource group.
   * @param siteName The name of the site.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, siteName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,siteName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified Virtual Appliance Site.
   * @param resourceGroupName The name of the resource group.
   * @param siteName The name of the site.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkVirtualApplianceSitesGetResponse>
   */
  get(resourceGroupName: string, siteName: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkVirtualApplianceSitesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param siteName The name of the site.
   * @param callback The callback
   */
  get(resourceGroupName: string, siteName: string, callback: msRest.ServiceCallback<Models.NetworkVirtualApplianceSite>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param siteName The name of the site.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, siteName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkVirtualApplianceSite>): void;
  get(resourceGroupName: string, siteName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkVirtualApplianceSite>, callback?: msRest.ServiceCallback<Models.NetworkVirtualApplianceSite>): Promise<Models.NetworkVirtualApplianceSitesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        siteName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.NetworkVirtualApplianceSitesGetResponse>;
  }

  /**
   * Creates or updates the specified Network Virtual Appliance Site.
   * @param resourceGroupName The name of the resource group.
   * @param siteName The name of the site.
   * @param parameters Parameters supplied to the create or update Network Virtual Appliance Site
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkVirtualApplianceSitesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, siteName: string, parameters: Models.NetworkVirtualApplianceSite, options?: msRest.RequestOptionsBase): Promise<Models.NetworkVirtualApplianceSitesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,siteName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.NetworkVirtualApplianceSitesCreateOrUpdateResponse>;
  }

  /**
   * Lists all Network Virtual Appliance Sites in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkVirtualApplianceSitesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkVirtualApplianceSitesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>, callback?: msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>): Promise<Models.NetworkVirtualApplianceSitesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.NetworkVirtualApplianceSitesListByResourceGroupResponse>;
  }

  /**
   * Gets all Virtual Appliance sites in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkVirtualApplianceSitesListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.NetworkVirtualApplianceSitesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>, callback?: msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>): Promise<Models.NetworkVirtualApplianceSitesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.NetworkVirtualApplianceSitesListResponse>;
  }

  /**
   * Deletes the specified site for Virtual Appliances.
   * @param resourceGroupName The name of the resource group.
   * @param siteName The name of the site.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, siteName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        siteName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates the specified Network Virtual Appliance Site.
   * @param resourceGroupName The name of the resource group.
   * @param siteName The name of the site.
   * @param parameters Parameters supplied to the create or update Network Virtual Appliance Site
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, siteName: string, parameters: Models.NetworkVirtualApplianceSite, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        siteName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Lists all Network Virtual Appliance Sites in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkVirtualApplianceSitesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkVirtualApplianceSitesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>, callback?: msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>): Promise<Models.NetworkVirtualApplianceSitesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.NetworkVirtualApplianceSitesListByResourceGroupNextResponse>;
  }

  /**
   * Gets all Virtual Appliance sites in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkVirtualApplianceSitesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkVirtualApplianceSitesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>, callback?: msRest.ServiceCallback<Models.VirtualApplianceSiteListResult>): Promise<Models.NetworkVirtualApplianceSitesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.NetworkVirtualApplianceSitesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualApplianceSites/{siteName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.siteName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkVirtualApplianceSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualApplianceSites",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualApplianceSiteListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualApplianceSites",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualApplianceSiteListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualApplianceSites/{siteName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.siteName,
    Parameters.subscriptionId
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

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualApplianceSites/{siteName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.siteName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.NetworkVirtualApplianceSite,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NetworkVirtualApplianceSite
    },
    201: {
      bodyMapper: Mappers.NetworkVirtualApplianceSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.VirtualApplianceSiteListResult
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
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualApplianceSiteListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
