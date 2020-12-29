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
import * as Mappers from "../models/jitNetworkAccessPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a JitNetworkAccessPolicies. */
export class JitNetworkAccessPolicies {
  private readonly client: SecurityCenterContext;

  /**
   * Create a JitNetworkAccessPolicies.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Policies for protecting resources using Just-in-Time access control.
   * @param [options] The optional parameters
   * @returns Promise<Models.JitNetworkAccessPoliciesListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.JitNetworkAccessPoliciesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>, callback?: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): Promise<Models.JitNetworkAccessPoliciesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.JitNetworkAccessPoliciesListResponse>;
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription,
   * location
   * @param [options] The optional parameters
   * @returns Promise<Models.JitNetworkAccessPoliciesListByRegionResponse>
   */
  listByRegion(options?: msRest.RequestOptionsBase): Promise<Models.JitNetworkAccessPoliciesListByRegionResponse>;
  /**
   * @param callback The callback
   */
  listByRegion(callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listByRegion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  listByRegion(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>, callback?: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): Promise<Models.JitNetworkAccessPoliciesListByRegionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listByRegionOperationSpec,
      callback) as Promise<Models.JitNetworkAccessPoliciesListByRegionResponse>;
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription,
   * location
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.JitNetworkAccessPoliciesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.JitNetworkAccessPoliciesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>, callback?: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): Promise<Models.JitNetworkAccessPoliciesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.JitNetworkAccessPoliciesListByResourceGroupResponse>;
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription,
   * location
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.JitNetworkAccessPoliciesListByResourceGroupAndRegionResponse>
   */
  listByResourceGroupAndRegion(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.JitNetworkAccessPoliciesListByResourceGroupAndRegionResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  listByResourceGroupAndRegion(resourceGroupName: string, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupAndRegion(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  listByResourceGroupAndRegion(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>, callback?: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): Promise<Models.JitNetworkAccessPoliciesListByResourceGroupAndRegionResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupAndRegionOperationSpec,
      callback) as Promise<Models.JitNetworkAccessPoliciesListByResourceGroupAndRegionResponse>;
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription,
   * location
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.JitNetworkAccessPoliciesGetResponse>
   */
  get(resourceGroupName: string, jitNetworkAccessPolicyName: string, options?: msRest.RequestOptionsBase): Promise<Models.JitNetworkAccessPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param callback The callback
   */
  get(resourceGroupName: string, jitNetworkAccessPolicyName: string, callback: msRest.ServiceCallback<Models.JitNetworkAccessPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, jitNetworkAccessPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JitNetworkAccessPolicy>): void;
  get(resourceGroupName: string, jitNetworkAccessPolicyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JitNetworkAccessPolicy>, callback?: msRest.ServiceCallback<Models.JitNetworkAccessPolicy>): Promise<Models.JitNetworkAccessPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jitNetworkAccessPolicyName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.JitNetworkAccessPoliciesGetResponse>;
  }

  /**
   * Create a policy for protecting resources using Just-in-Time access control
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param body
   * @param [options] The optional parameters
   * @returns Promise<Models.JitNetworkAccessPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, jitNetworkAccessPolicyName: string, body: Models.JitNetworkAccessPolicy, options?: msRest.RequestOptionsBase): Promise<Models.JitNetworkAccessPoliciesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param body
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, jitNetworkAccessPolicyName: string, body: Models.JitNetworkAccessPolicy, callback: msRest.ServiceCallback<Models.JitNetworkAccessPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param body
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, jitNetworkAccessPolicyName: string, body: Models.JitNetworkAccessPolicy, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JitNetworkAccessPolicy>): void;
  createOrUpdate(resourceGroupName: string, jitNetworkAccessPolicyName: string, body: Models.JitNetworkAccessPolicy, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JitNetworkAccessPolicy>, callback?: msRest.ServiceCallback<Models.JitNetworkAccessPolicy>): Promise<Models.JitNetworkAccessPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jitNetworkAccessPolicyName,
        body,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.JitNetworkAccessPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Delete a Just-in-Time access control policy.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, jitNetworkAccessPolicyName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, jitNetworkAccessPolicyName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, jitNetworkAccessPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, jitNetworkAccessPolicyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jitNetworkAccessPolicyName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Initiate a JIT access from a specific Just-in-Time policy configuration.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param body
   * @param [options] The optional parameters
   * @returns Promise<Models.JitNetworkAccessPoliciesInitiateResponse>
   */
  initiate(resourceGroupName: string, jitNetworkAccessPolicyName: string, body: Models.JitNetworkAccessPolicyInitiateRequest, options?: msRest.RequestOptionsBase): Promise<Models.JitNetworkAccessPoliciesInitiateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param body
   * @param callback The callback
   */
  initiate(resourceGroupName: string, jitNetworkAccessPolicyName: string, body: Models.JitNetworkAccessPolicyInitiateRequest, callback: msRest.ServiceCallback<Models.JitNetworkAccessRequest>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param body
   * @param options The optional parameters
   * @param callback The callback
   */
  initiate(resourceGroupName: string, jitNetworkAccessPolicyName: string, body: Models.JitNetworkAccessPolicyInitiateRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JitNetworkAccessRequest>): void;
  initiate(resourceGroupName: string, jitNetworkAccessPolicyName: string, body: Models.JitNetworkAccessPolicyInitiateRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JitNetworkAccessRequest>, callback?: msRest.ServiceCallback<Models.JitNetworkAccessRequest>): Promise<Models.JitNetworkAccessPoliciesInitiateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jitNetworkAccessPolicyName,
        body,
        options
      },
      initiateOperationSpec,
      callback) as Promise<Models.JitNetworkAccessPoliciesInitiateResponse>;
  }

  /**
   * Policies for protecting resources using Just-in-Time access control.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JitNetworkAccessPoliciesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.JitNetworkAccessPoliciesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>, callback?: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): Promise<Models.JitNetworkAccessPoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.JitNetworkAccessPoliciesListNextResponse>;
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription,
   * location
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JitNetworkAccessPoliciesListByRegionNextResponse>
   */
  listByRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.JitNetworkAccessPoliciesListByRegionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByRegionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByRegionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  listByRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>, callback?: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): Promise<Models.JitNetworkAccessPoliciesListByRegionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByRegionNextOperationSpec,
      callback) as Promise<Models.JitNetworkAccessPoliciesListByRegionNextResponse>;
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription,
   * location
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JitNetworkAccessPoliciesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.JitNetworkAccessPoliciesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>, callback?: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): Promise<Models.JitNetworkAccessPoliciesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.JitNetworkAccessPoliciesListByResourceGroupNextResponse>;
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription,
   * location
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JitNetworkAccessPoliciesListByResourceGroupAndRegionNextResponse>
   */
  listByResourceGroupAndRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.JitNetworkAccessPoliciesListByResourceGroupAndRegionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupAndRegionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupAndRegionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): void;
  listByResourceGroupAndRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>, callback?: msRest.ServiceCallback<Models.JitNetworkAccessPoliciesList>): Promise<Models.JitNetworkAccessPoliciesListByResourceGroupAndRegionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupAndRegionNextOperationSpec,
      callback) as Promise<Models.JitNetworkAccessPoliciesListByResourceGroupAndRegionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/jitNetworkAccessPolicies",
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
      bodyMapper: Mappers.JitNetworkAccessPoliciesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByRegionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies",
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
      bodyMapper: Mappers.JitNetworkAccessPoliciesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/jitNetworkAccessPolicies",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JitNetworkAccessPoliciesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupAndRegionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.JitNetworkAccessPoliciesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies/{jitNetworkAccessPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.jitNetworkAccessPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JitNetworkAccessPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies/{jitNetworkAccessPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.jitNetworkAccessPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.JitNetworkAccessPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.JitNetworkAccessPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies/{jitNetworkAccessPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.jitNetworkAccessPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion6
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

const initiateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies/{jitNetworkAccessPolicyName}/{jitNetworkAccessPolicyInitiateType}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.jitNetworkAccessPolicyName,
    Parameters.jitNetworkAccessPolicyInitiateType
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.JitNetworkAccessPolicyInitiateRequest,
      required: true
    }
  },
  responses: {
    202: {
      bodyMapper: Mappers.JitNetworkAccessRequest
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
      bodyMapper: Mappers.JitNetworkAccessPoliciesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByRegionNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.JitNetworkAccessPoliciesList
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
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JitNetworkAccessPoliciesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupAndRegionNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.JitNetworkAccessPoliciesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
