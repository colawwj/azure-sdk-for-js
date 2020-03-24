/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/loadBalancerBackendAddressPoolsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a LoadBalancerBackendAddressPools. */
export class LoadBalancerBackendAddressPools {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a LoadBalancerBackendAddressPools.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the load balancer backed address pools.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoadBalancerBackendAddressPoolsListResponse>
   */
  list(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancerBackendAddressPoolsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param callback The callback
   */
  list(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.LoadBalancerBackendAddressPoolListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerBackendAddressPoolListResult>): void;
  list(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LoadBalancerBackendAddressPoolListResult>, callback?: msRest.ServiceCallback<Models.LoadBalancerBackendAddressPoolListResult>): Promise<Models.LoadBalancerBackendAddressPoolsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LoadBalancerBackendAddressPoolsListResponse>;
  }

  /**
   * Gets load balancer backend address pool.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoadBalancerBackendAddressPoolsGetResponse>
   */
  get(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancerBackendAddressPoolsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool.
   * @param callback The callback
   */
  get(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, callback: msRest.ServiceCallback<Models.BackendAddressPool>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackendAddressPool>): void;
  get(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackendAddressPool>, callback?: msRest.ServiceCallback<Models.BackendAddressPool>): Promise<Models.LoadBalancerBackendAddressPoolsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        backendAddressPoolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LoadBalancerBackendAddressPoolsGetResponse>;
  }

  /**
   * Creates or updates a load balancer backend address pool.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool
   * @param parameters Parameters supplied to the create or update load balancer backend address pool
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoadBalancerBackendAddressPoolsPutResponse>
   */
  put(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, parameters: Models.BackendAddressPool, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancerBackendAddressPoolsPutResponse> {
    return this.beginPut(resourceGroupName,loadBalancerName,backendAddressPoolName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LoadBalancerBackendAddressPoolsPutResponse>;
  }

  /**
   * Creates or updates a load balancer backend address pool.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool
   * @param parameters Parameters supplied to the create or update load balancer backend address pool
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPut(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, parameters: Models.BackendAddressPool, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        loadBalancerName,
        backendAddressPoolName,
        parameters,
        options
      },
      beginPutOperationSpec,
      options);
  }

  /**
   * Gets all the load balancer backed address pools.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoadBalancerBackendAddressPoolsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancerBackendAddressPoolsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoadBalancerBackendAddressPoolListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerBackendAddressPoolListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LoadBalancerBackendAddressPoolListResult>, callback?: msRest.ServiceCallback<Models.LoadBalancerBackendAddressPoolListResult>): Promise<Models.LoadBalancerBackendAddressPoolsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.LoadBalancerBackendAddressPoolsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
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
      bodyMapper: Mappers.LoadBalancerBackendAddressPoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools/{backendAddressPoolName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
    Parameters.backendAddressPoolName,
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
      bodyMapper: Mappers.BackendAddressPool
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginPutOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools/{backendAddressPoolName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
    Parameters.backendAddressPoolName,
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
      ...Mappers.BackendAddressPool,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BackendAddressPool
    },
    201: {
      bodyMapper: Mappers.BackendAddressPool
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LoadBalancerBackendAddressPoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
