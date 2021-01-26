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
import * as Mappers from "../models/subscriptionPolicyMappers";
import * as Parameters from "../models/parameters";
import { SubscriptionClientContext } from "../subscriptionClientContext";

/** Class representing a SubscriptionPolicy. */
export class SubscriptionPolicy {
  private readonly client: SubscriptionClientContext;

  /**
   * Create a SubscriptionPolicy.
   * @param {SubscriptionClientContext} client Reference to the service client.
   */
  constructor(client: SubscriptionClientContext) {
    this.client = client;
  }

  /**
   * Create or Update Subscription tenant policy for user's tenant.
   * @param body
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionPolicyAddUpdatePolicyForTenantResponse>
   */
  addUpdatePolicyForTenant(body: Models.PutTenantPolicyRequestProperties, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionPolicyAddUpdatePolicyForTenantResponse>;
  /**
   * @param body
   * @param callback The callback
   */
  addUpdatePolicyForTenant(body: Models.PutTenantPolicyRequestProperties, callback: msRest.ServiceCallback<Models.GetTenantPolicyResponse>): void;
  /**
   * @param body
   * @param options The optional parameters
   * @param callback The callback
   */
  addUpdatePolicyForTenant(body: Models.PutTenantPolicyRequestProperties, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GetTenantPolicyResponse>): void;
  addUpdatePolicyForTenant(body: Models.PutTenantPolicyRequestProperties, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GetTenantPolicyResponse>, callback?: msRest.ServiceCallback<Models.GetTenantPolicyResponse>): Promise<Models.SubscriptionPolicyAddUpdatePolicyForTenantResponse> {
    return this.client.sendOperationRequest(
      {
        body,
        options
      },
      addUpdatePolicyForTenantOperationSpec,
      callback) as Promise<Models.SubscriptionPolicyAddUpdatePolicyForTenantResponse>;
  }

  /**
   * Get the subscription tenant policy for the user's tenant.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionPolicyGetPolicyForTenantResponse>
   */
  getPolicyForTenant(options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionPolicyGetPolicyForTenantResponse>;
  /**
   * @param callback The callback
   */
  getPolicyForTenant(callback: msRest.ServiceCallback<Models.GetTenantPolicyResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getPolicyForTenant(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GetTenantPolicyResponse>): void;
  getPolicyForTenant(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GetTenantPolicyResponse>, callback?: msRest.ServiceCallback<Models.GetTenantPolicyResponse>): Promise<Models.SubscriptionPolicyGetPolicyForTenantResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPolicyForTenantOperationSpec,
      callback) as Promise<Models.SubscriptionPolicyGetPolicyForTenantResponse>;
  }

  /**
   * Get the subscription tenant policy for the user's tenant.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionPolicyListPolicyForTenantResponse>
   */
  listPolicyForTenant(options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionPolicyListPolicyForTenantResponse>;
  /**
   * @param callback The callback
   */
  listPolicyForTenant(callback: msRest.ServiceCallback<Models.GetTenantPolicyListResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listPolicyForTenant(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GetTenantPolicyListResponse>): void;
  listPolicyForTenant(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GetTenantPolicyListResponse>, callback?: msRest.ServiceCallback<Models.GetTenantPolicyListResponse>): Promise<Models.SubscriptionPolicyListPolicyForTenantResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listPolicyForTenantOperationSpec,
      callback) as Promise<Models.SubscriptionPolicyListPolicyForTenantResponse>;
  }

  /**
   * Get the subscription tenant policy for the user's tenant.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionPolicyListPolicyForTenantNextResponse>
   */
  listPolicyForTenantNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionPolicyListPolicyForTenantNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listPolicyForTenantNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.GetTenantPolicyListResponse>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listPolicyForTenantNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GetTenantPolicyListResponse>): void;
  listPolicyForTenantNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GetTenantPolicyListResponse>, callback?: msRest.ServiceCallback<Models.GetTenantPolicyListResponse>): Promise<Models.SubscriptionPolicyListPolicyForTenantNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listPolicyForTenantNextOperationSpec,
      callback) as Promise<Models.SubscriptionPolicyListPolicyForTenantNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const addUpdatePolicyForTenantOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "providers/Microsoft.Subscription/policies/default",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.PutTenantPolicyRequestProperties,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.GetTenantPolicyResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  serializer
};

const getPolicyForTenantOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Subscription/policies/default",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GetTenantPolicyResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  serializer
};

const listPolicyForTenantOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Subscription/policies",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GetTenantPolicyListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  serializer
};

const listPolicyForTenantNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GetTenantPolicyListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  serializer
};
