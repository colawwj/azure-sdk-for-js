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
import * as Mappers from "../models/workspaceSettingsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a WorkspaceSettings. */
export class WorkspaceSettings {
  private readonly client: SecurityCenterContext;

  /**
   * Create a WorkspaceSettings.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Settings about where we should store your security data and logs. If the result is empty, it
   * means that no custom-workspace configuration was set
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceSettingsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceSettingsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.WorkspaceSettingList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkspaceSettingList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkspaceSettingList>, callback?: msRest.ServiceCallback<Models.WorkspaceSettingList>): Promise<Models.WorkspaceSettingsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.WorkspaceSettingsListResponse>;
  }

  /**
   * Settings about where we should store your security data and logs. If the result is empty, it
   * means that no custom-workspace configuration was set
   * @param workspaceSettingName Name of the security setting
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceSettingsGetResponse>
   */
  get(workspaceSettingName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceSettingsGetResponse>;
  /**
   * @param workspaceSettingName Name of the security setting
   * @param callback The callback
   */
  get(workspaceSettingName: string, callback: msRest.ServiceCallback<Models.WorkspaceSetting>): void;
  /**
   * @param workspaceSettingName Name of the security setting
   * @param options The optional parameters
   * @param callback The callback
   */
  get(workspaceSettingName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkspaceSetting>): void;
  get(workspaceSettingName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkspaceSetting>, callback?: msRest.ServiceCallback<Models.WorkspaceSetting>): Promise<Models.WorkspaceSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceSettingName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WorkspaceSettingsGetResponse>;
  }

  /**
   * creating settings about where we should store your security data and logs
   * @param workspaceSettingName Name of the security setting
   * @param workspaceSetting Security data setting object
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceSettingsCreateResponse>
   */
  create(workspaceSettingName: string, workspaceSetting: Models.WorkspaceSetting, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceSettingsCreateResponse>;
  /**
   * @param workspaceSettingName Name of the security setting
   * @param workspaceSetting Security data setting object
   * @param callback The callback
   */
  create(workspaceSettingName: string, workspaceSetting: Models.WorkspaceSetting, callback: msRest.ServiceCallback<Models.WorkspaceSetting>): void;
  /**
   * @param workspaceSettingName Name of the security setting
   * @param workspaceSetting Security data setting object
   * @param options The optional parameters
   * @param callback The callback
   */
  create(workspaceSettingName: string, workspaceSetting: Models.WorkspaceSetting, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkspaceSetting>): void;
  create(workspaceSettingName: string, workspaceSetting: Models.WorkspaceSetting, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkspaceSetting>, callback?: msRest.ServiceCallback<Models.WorkspaceSetting>): Promise<Models.WorkspaceSettingsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceSettingName,
        workspaceSetting,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.WorkspaceSettingsCreateResponse>;
  }

  /**
   * Settings about where we should store your security data and logs
   * @param workspaceSettingName Name of the security setting
   * @param workspaceSetting Security data setting object
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceSettingsUpdateResponse>
   */
  update(workspaceSettingName: string, workspaceSetting: Models.WorkspaceSetting, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceSettingsUpdateResponse>;
  /**
   * @param workspaceSettingName Name of the security setting
   * @param workspaceSetting Security data setting object
   * @param callback The callback
   */
  update(workspaceSettingName: string, workspaceSetting: Models.WorkspaceSetting, callback: msRest.ServiceCallback<Models.WorkspaceSetting>): void;
  /**
   * @param workspaceSettingName Name of the security setting
   * @param workspaceSetting Security data setting object
   * @param options The optional parameters
   * @param callback The callback
   */
  update(workspaceSettingName: string, workspaceSetting: Models.WorkspaceSetting, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkspaceSetting>): void;
  update(workspaceSettingName: string, workspaceSetting: Models.WorkspaceSetting, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkspaceSetting>, callback?: msRest.ServiceCallback<Models.WorkspaceSetting>): Promise<Models.WorkspaceSettingsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceSettingName,
        workspaceSetting,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.WorkspaceSettingsUpdateResponse>;
  }

  /**
   * Deletes the custom workspace settings for this subscription. new VMs will report to the default
   * workspace
   * @param workspaceSettingName Name of the security setting
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(workspaceSettingName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param workspaceSettingName Name of the security setting
   * @param callback The callback
   */
  deleteMethod(workspaceSettingName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param workspaceSettingName Name of the security setting
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(workspaceSettingName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(workspaceSettingName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceSettingName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Settings about where we should store your security data and logs. If the result is empty, it
   * means that no custom-workspace configuration was set
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceSettingsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceSettingsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WorkspaceSettingList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkspaceSettingList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkspaceSettingList>, callback?: msRest.ServiceCallback<Models.WorkspaceSettingList>): Promise<Models.WorkspaceSettingsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.WorkspaceSettingsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings",
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
      bodyMapper: Mappers.WorkspaceSettingList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.workspaceSettingName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceSetting
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.workspaceSettingName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "workspaceSetting",
    mapper: {
      ...Mappers.WorkspaceSetting,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceSetting
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.workspaceSettingName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "workspaceSetting",
    mapper: {
      ...Mappers.WorkspaceSetting,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceSetting
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.workspaceSettingName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
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
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceSettingList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
