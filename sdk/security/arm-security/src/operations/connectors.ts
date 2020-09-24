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
import * as Mappers from "../models/connectorsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a Connectors. */
export class Connectors {
  private readonly client: SecurityCenterContext;

  /**
   * Create a Connectors.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Cloud accounts connectors of a subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectorsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ConnectorsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ConnectorSettingList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectorSettingList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConnectorSettingList>, callback?: msRest.ServiceCallback<Models.ConnectorSettingList>): Promise<Models.ConnectorsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ConnectorsListResponse>;
  }

  /**
   * Details of a specific cloud account connector
   * @param connectorName Name of the cloud account connector
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectorsGetResponse>
   */
  get(connectorName: string, options?: msRest.RequestOptionsBase): Promise<Models.ConnectorsGetResponse>;
  /**
   * @param connectorName Name of the cloud account connector
   * @param callback The callback
   */
  get(connectorName: string, callback: msRest.ServiceCallback<Models.ConnectorSetting>): void;
  /**
   * @param connectorName Name of the cloud account connector
   * @param options The optional parameters
   * @param callback The callback
   */
  get(connectorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectorSetting>): void;
  get(connectorName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConnectorSetting>, callback?: msRest.ServiceCallback<Models.ConnectorSetting>): Promise<Models.ConnectorsGetResponse> {
    return this.client.sendOperationRequest(
      {
        connectorName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ConnectorsGetResponse>;
  }

  /**
   * Create a cloud account connector or update an existing one. Connect to your AWS cloud account
   * using either account credentials or role-based authentication.
   * @param connectorName Name of the cloud account connector
   * @param connectorSetting Settings for the cloud account connector
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectorsCreateOrUpdateResponse>
   */
  createOrUpdate(connectorName: string, connectorSetting: Models.ConnectorSetting, options?: msRest.RequestOptionsBase): Promise<Models.ConnectorsCreateOrUpdateResponse>;
  /**
   * @param connectorName Name of the cloud account connector
   * @param connectorSetting Settings for the cloud account connector
   * @param callback The callback
   */
  createOrUpdate(connectorName: string, connectorSetting: Models.ConnectorSetting, callback: msRest.ServiceCallback<Models.ConnectorSetting>): void;
  /**
   * @param connectorName Name of the cloud account connector
   * @param connectorSetting Settings for the cloud account connector
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(connectorName: string, connectorSetting: Models.ConnectorSetting, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectorSetting>): void;
  createOrUpdate(connectorName: string, connectorSetting: Models.ConnectorSetting, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConnectorSetting>, callback?: msRest.ServiceCallback<Models.ConnectorSetting>): Promise<Models.ConnectorsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        connectorName,
        connectorSetting,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ConnectorsCreateOrUpdateResponse>;
  }

  /**
   * Delete a cloud account connector from a subscription
   * @param connectorName Name of the cloud account connector
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(connectorName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param connectorName Name of the cloud account connector
   * @param callback The callback
   */
  deleteMethod(connectorName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param connectorName Name of the cloud account connector
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(connectorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(connectorName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        connectorName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Cloud accounts connectors of a subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectorsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ConnectorsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ConnectorSettingList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectorSettingList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConnectorSettingList>, callback?: msRest.ServiceCallback<Models.ConnectorSettingList>): Promise<Models.ConnectorsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ConnectorsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/connectors",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConnectorSettingList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/connectors/{connectorName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.connectorName
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConnectorSetting
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/connectors/{connectorName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.connectorName
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "connectorSetting",
    mapper: {
      ...Mappers.ConnectorSetting,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ConnectorSetting
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/connectors/{connectorName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.connectorName
  ],
  queryParameters: [
    Parameters.apiVersion8
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConnectorSettingList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
