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
import * as Mappers from "../models/discoveredSecuritySolutionsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a DiscoveredSecuritySolutions. */
export class DiscoveredSecuritySolutions {
  private readonly client: SecurityCenterContext;

  /**
   * Create a DiscoveredSecuritySolutions.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Gets a list of discovered Security Solutions for the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiscoveredSecuritySolutionsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.DiscoveredSecuritySolutionsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>, callback?: msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>): Promise<Models.DiscoveredSecuritySolutionsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DiscoveredSecuritySolutionsListResponse>;
  }

  /**
   * Gets a list of discovered Security Solutions for the subscription and location.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiscoveredSecuritySolutionsListByHomeRegionResponse>
   */
  listByHomeRegion(options?: msRest.RequestOptionsBase): Promise<Models.DiscoveredSecuritySolutionsListByHomeRegionResponse>;
  /**
   * @param callback The callback
   */
  listByHomeRegion(callback: msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHomeRegion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>): void;
  listByHomeRegion(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>, callback?: msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>): Promise<Models.DiscoveredSecuritySolutionsListByHomeRegionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listByHomeRegionOperationSpec,
      callback) as Promise<Models.DiscoveredSecuritySolutionsListByHomeRegionResponse>;
  }

  /**
   * Gets a specific discovered Security Solution.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param discoveredSecuritySolutionName Name of a discovered security solution.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiscoveredSecuritySolutionsGetResponse>
   */
  get(resourceGroupName: string, discoveredSecuritySolutionName: string, options?: msRest.RequestOptionsBase): Promise<Models.DiscoveredSecuritySolutionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param discoveredSecuritySolutionName Name of a discovered security solution.
   * @param callback The callback
   */
  get(resourceGroupName: string, discoveredSecuritySolutionName: string, callback: msRest.ServiceCallback<Models.DiscoveredSecuritySolution>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param discoveredSecuritySolutionName Name of a discovered security solution.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, discoveredSecuritySolutionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiscoveredSecuritySolution>): void;
  get(resourceGroupName: string, discoveredSecuritySolutionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiscoveredSecuritySolution>, callback?: msRest.ServiceCallback<Models.DiscoveredSecuritySolution>): Promise<Models.DiscoveredSecuritySolutionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        discoveredSecuritySolutionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DiscoveredSecuritySolutionsGetResponse>;
  }

  /**
   * Gets a list of discovered Security Solutions for the subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiscoveredSecuritySolutionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DiscoveredSecuritySolutionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>, callback?: msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>): Promise<Models.DiscoveredSecuritySolutionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DiscoveredSecuritySolutionsListNextResponse>;
  }

  /**
   * Gets a list of discovered Security Solutions for the subscription and location.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiscoveredSecuritySolutionsListByHomeRegionNextResponse>
   */
  listByHomeRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DiscoveredSecuritySolutionsListByHomeRegionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByHomeRegionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHomeRegionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>): void;
  listByHomeRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>, callback?: msRest.ServiceCallback<Models.DiscoveredSecuritySolutionList>): Promise<Models.DiscoveredSecuritySolutionsListByHomeRegionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByHomeRegionNextOperationSpec,
      callback) as Promise<Models.DiscoveredSecuritySolutionsListByHomeRegionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/discoveredSecuritySolutions",
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
      bodyMapper: Mappers.DiscoveredSecuritySolutionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHomeRegionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/discoveredSecuritySolutions",
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
      bodyMapper: Mappers.DiscoveredSecuritySolutionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/discoveredSecuritySolutions/{discoveredSecuritySolutionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.discoveredSecuritySolutionName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiscoveredSecuritySolution
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
      bodyMapper: Mappers.DiscoveredSecuritySolutionList
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
      bodyMapper: Mappers.DiscoveredSecuritySolutionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
