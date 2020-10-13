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
import * as Models from "../models";
import * as Mappers from "../models/adaptiveApplicationControlsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a AdaptiveApplicationControls. */
export class AdaptiveApplicationControls {
  private readonly client: SecurityCenterContext;

  /**
   * Create a AdaptiveApplicationControls.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Gets a list of application control machine groups for the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.AdaptiveApplicationControlsListResponse>
   */
  list(options?: Models.AdaptiveApplicationControlsListOptionalParams): Promise<Models.AdaptiveApplicationControlsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.AdaptiveApplicationControlGroups>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.AdaptiveApplicationControlsListOptionalParams, callback: msRest.ServiceCallback<Models.AdaptiveApplicationControlGroups>): void;
  list(options?: Models.AdaptiveApplicationControlsListOptionalParams | msRest.ServiceCallback<Models.AdaptiveApplicationControlGroups>, callback?: msRest.ServiceCallback<Models.AdaptiveApplicationControlGroups>): Promise<Models.AdaptiveApplicationControlsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AdaptiveApplicationControlsListResponse>;
  }

  /**
   * Gets an application control VM/server group.
   * @param groupName Name of an application control machine group
   * @param [options] The optional parameters
   * @returns Promise<Models.AdaptiveApplicationControlsGetResponse>
   */
  get(groupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AdaptiveApplicationControlsGetResponse>;
  /**
   * @param groupName Name of an application control machine group
   * @param callback The callback
   */
  get(groupName: string, callback: msRest.ServiceCallback<Models.AdaptiveApplicationControlGroup>): void;
  /**
   * @param groupName Name of an application control machine group
   * @param options The optional parameters
   * @param callback The callback
   */
  get(groupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AdaptiveApplicationControlGroup>): void;
  get(groupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AdaptiveApplicationControlGroup>, callback?: msRest.ServiceCallback<Models.AdaptiveApplicationControlGroup>): Promise<Models.AdaptiveApplicationControlsGetResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AdaptiveApplicationControlsGetResponse>;
  }

  /**
   * Update an application control machine group
   * @param groupName Name of an application control machine group
   * @param body
   * @param [options] The optional parameters
   * @returns Promise<Models.AdaptiveApplicationControlsPutResponse>
   */
  put(groupName: string, body: Models.AdaptiveApplicationControlGroup, options?: msRest.RequestOptionsBase): Promise<Models.AdaptiveApplicationControlsPutResponse>;
  /**
   * @param groupName Name of an application control machine group
   * @param body
   * @param callback The callback
   */
  put(groupName: string, body: Models.AdaptiveApplicationControlGroup, callback: msRest.ServiceCallback<Models.AdaptiveApplicationControlGroup>): void;
  /**
   * @param groupName Name of an application control machine group
   * @param body
   * @param options The optional parameters
   * @param callback The callback
   */
  put(groupName: string, body: Models.AdaptiveApplicationControlGroup, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AdaptiveApplicationControlGroup>): void;
  put(groupName: string, body: Models.AdaptiveApplicationControlGroup, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AdaptiveApplicationControlGroup>, callback?: msRest.ServiceCallback<Models.AdaptiveApplicationControlGroup>): Promise<Models.AdaptiveApplicationControlsPutResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        body,
        options
      },
      putOperationSpec,
      callback) as Promise<Models.AdaptiveApplicationControlsPutResponse>;
  }

  /**
   * Delete an application control machine group
   * @param groupName Name of an application control machine group
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(groupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param groupName Name of an application control machine group
   * @param callback The callback
   */
  deleteMethod(groupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param groupName Name of an application control machine group
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(groupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(groupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/applicationWhitelistings",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion7,
    Parameters.includePathRecommendations,
    Parameters.summary
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AdaptiveApplicationControlGroups
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/applicationWhitelistings/{groupName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.groupName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AdaptiveApplicationControlGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const putOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/applicationWhitelistings/{groupName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.groupName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.AdaptiveApplicationControlGroup,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AdaptiveApplicationControlGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/applicationWhitelistings/{groupName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.groupName
  ],
  queryParameters: [
    Parameters.apiVersion7
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
