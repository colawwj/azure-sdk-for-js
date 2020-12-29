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
import * as Mappers from "../models/topologyMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a Topology. */
export class Topology {
  private readonly client: SecurityCenterContext;

  /**
   * Create a Topology.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Gets a list that allows to build a topology view of a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopologyListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.TopologyListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.TopologyList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TopologyList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TopologyList>, callback?: msRest.ServiceCallback<Models.TopologyList>): Promise<Models.TopologyListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.TopologyListResponse>;
  }

  /**
   * Gets a list that allows to build a topology view of a subscription and location.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopologyListByHomeRegionResponse>
   */
  listByHomeRegion(options?: msRest.RequestOptionsBase): Promise<Models.TopologyListByHomeRegionResponse>;
  /**
   * @param callback The callback
   */
  listByHomeRegion(callback: msRest.ServiceCallback<Models.TopologyList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHomeRegion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TopologyList>): void;
  listByHomeRegion(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TopologyList>, callback?: msRest.ServiceCallback<Models.TopologyList>): Promise<Models.TopologyListByHomeRegionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listByHomeRegionOperationSpec,
      callback) as Promise<Models.TopologyListByHomeRegionResponse>;
  }

  /**
   * Gets a specific topology component.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param topologyResourceName Name of a topology resources collection.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopologyGetResponse>
   */
  get(resourceGroupName: string, topologyResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.TopologyGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param topologyResourceName Name of a topology resources collection.
   * @param callback The callback
   */
  get(resourceGroupName: string, topologyResourceName: string, callback: msRest.ServiceCallback<Models.TopologyResource>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param topologyResourceName Name of a topology resources collection.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, topologyResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TopologyResource>): void;
  get(resourceGroupName: string, topologyResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TopologyResource>, callback?: msRest.ServiceCallback<Models.TopologyResource>): Promise<Models.TopologyGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        topologyResourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TopologyGetResponse>;
  }

  /**
   * Gets a list that allows to build a topology view of a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopologyListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TopologyListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TopologyList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TopologyList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TopologyList>, callback?: msRest.ServiceCallback<Models.TopologyList>): Promise<Models.TopologyListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.TopologyListNextResponse>;
  }

  /**
   * Gets a list that allows to build a topology view of a subscription and location.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopologyListByHomeRegionNextResponse>
   */
  listByHomeRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TopologyListByHomeRegionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByHomeRegionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TopologyList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHomeRegionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TopologyList>): void;
  listByHomeRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TopologyList>, callback?: msRest.ServiceCallback<Models.TopologyList>): Promise<Models.TopologyListByHomeRegionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByHomeRegionNextOperationSpec,
      callback) as Promise<Models.TopologyListByHomeRegionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/topologies",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TopologyList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHomeRegionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/topologies",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TopologyList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/topologies/{topologyResourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.topologyResourceName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TopologyResource
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
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TopologyList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHomeRegionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TopologyList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
