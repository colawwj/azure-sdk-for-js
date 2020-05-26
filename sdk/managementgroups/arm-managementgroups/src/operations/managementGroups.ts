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
import * as Mappers from "../models/managementGroupsMappers";
import * as Parameters from "../models/parameters";
import { ManagementGroupsAPIContext } from "../managementGroupsAPIContext";

/** Class representing a ManagementGroups. */
export class ManagementGroups {
  private readonly client: ManagementGroupsAPIContext;

  /**
   * Create a ManagementGroups.
   * @param {ManagementGroupsAPIContext} client Reference to the service client.
   */
  constructor(client: ManagementGroupsAPIContext) {
    this.client = client;
  }

  /**
   * List management groups for the authenticated user.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagementGroupsListResponse>
   */
  list(options?: Models.ManagementGroupsListOptionalParams): Promise<Models.ManagementGroupsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ManagementGroupListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.ManagementGroupsListOptionalParams, callback: msRest.ServiceCallback<Models.ManagementGroupListResult>): void;
  list(options?: Models.ManagementGroupsListOptionalParams | msRest.ServiceCallback<Models.ManagementGroupListResult>, callback?: msRest.ServiceCallback<Models.ManagementGroupListResult>): Promise<Models.ManagementGroupsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ManagementGroupsListResponse>;
  }

  /**
   * Get the details of the management group.
   * @param groupId Management Group ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagementGroupsGetResponse>
   */
  get(groupId: string, options?: Models.ManagementGroupsGetOptionalParams): Promise<Models.ManagementGroupsGetResponse>;
  /**
   * @param groupId Management Group ID.
   * @param callback The callback
   */
  get(groupId: string, callback: msRest.ServiceCallback<Models.ManagementGroup>): void;
  /**
   * @param groupId Management Group ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(groupId: string, options: Models.ManagementGroupsGetOptionalParams, callback: msRest.ServiceCallback<Models.ManagementGroup>): void;
  get(groupId: string, options?: Models.ManagementGroupsGetOptionalParams | msRest.ServiceCallback<Models.ManagementGroup>, callback?: msRest.ServiceCallback<Models.ManagementGroup>): Promise<Models.ManagementGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        groupId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagementGroupsGetResponse>;
  }

  /**
   * Create or update a management group.
   * If a management group is already created and a subsequent create request is issued with
   * different properties, the management group properties will be updated.
   * @param groupId Management Group ID.
   * @param createManagementGroupRequest Management group creation parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagementGroupsCreateOrUpdateResponse>
   */
  createOrUpdate(groupId: string, createManagementGroupRequest: Models.CreateManagementGroupRequest, options?: Models.ManagementGroupsCreateOrUpdateOptionalParams): Promise<Models.ManagementGroupsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(groupId,createManagementGroupRequest,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagementGroupsCreateOrUpdateResponse>;
  }

  /**
   * Update a management group.
   * @param groupId Management Group ID.
   * @param patchGroupRequest Management group patch parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagementGroupsUpdateResponse>
   */
  update(groupId: string, patchGroupRequest: Models.PatchManagementGroupRequest, options?: Models.ManagementGroupsUpdateOptionalParams): Promise<Models.ManagementGroupsUpdateResponse>;
  /**
   * @param groupId Management Group ID.
   * @param patchGroupRequest Management group patch parameters.
   * @param callback The callback
   */
  update(groupId: string, patchGroupRequest: Models.PatchManagementGroupRequest, callback: msRest.ServiceCallback<Models.ManagementGroup>): void;
  /**
   * @param groupId Management Group ID.
   * @param patchGroupRequest Management group patch parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(groupId: string, patchGroupRequest: Models.PatchManagementGroupRequest, options: Models.ManagementGroupsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.ManagementGroup>): void;
  update(groupId: string, patchGroupRequest: Models.PatchManagementGroupRequest, options?: Models.ManagementGroupsUpdateOptionalParams | msRest.ServiceCallback<Models.ManagementGroup>, callback?: msRest.ServiceCallback<Models.ManagementGroup>): Promise<Models.ManagementGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        groupId,
        patchGroupRequest,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ManagementGroupsUpdateResponse>;
  }

  /**
   * Delete management group.
   * If a management group contains child resources, the request will fail.
   * @param groupId Management Group ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagementGroupsDeleteResponse>
   */
  deleteMethod(groupId: string, options?: Models.ManagementGroupsDeleteMethodOptionalParams): Promise<Models.ManagementGroupsDeleteResponse> {
    return this.beginDeleteMethod(groupId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagementGroupsDeleteResponse>;
  }

  /**
   * List all entities that descend from a management group.
   * @param groupId Management Group ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagementGroupsGetDescendantsResponse>
   */
  getDescendants(groupId: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagementGroupsGetDescendantsResponse>;
  /**
   * @param groupId Management Group ID.
   * @param callback The callback
   */
  getDescendants(groupId: string, callback: msRest.ServiceCallback<Models.DescendantListResult>): void;
  /**
   * @param groupId Management Group ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  getDescendants(groupId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DescendantListResult>): void;
  getDescendants(groupId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DescendantListResult>, callback?: msRest.ServiceCallback<Models.DescendantListResult>): Promise<Models.ManagementGroupsGetDescendantsResponse> {
    return this.client.sendOperationRequest(
      {
        groupId,
        options
      },
      getDescendantsOperationSpec,
      callback) as Promise<Models.ManagementGroupsGetDescendantsResponse>;
  }

  /**
   * Create or update a management group.
   * If a management group is already created and a subsequent create request is issued with
   * different properties, the management group properties will be updated.
   * @param groupId Management Group ID.
   * @param createManagementGroupRequest Management group creation parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(groupId: string, createManagementGroupRequest: Models.CreateManagementGroupRequest, options?: Models.ManagementGroupsBeginCreateOrUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        groupId,
        createManagementGroupRequest,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete management group.
   * If a management group contains child resources, the request will fail.
   * @param groupId Management Group ID.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(groupId: string, options?: Models.ManagementGroupsBeginDeleteMethodOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        groupId,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List management groups for the authenticated user.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagementGroupsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.ManagementGroupsListNextOptionalParams): Promise<Models.ManagementGroupsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagementGroupListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.ManagementGroupsListNextOptionalParams, callback: msRest.ServiceCallback<Models.ManagementGroupListResult>): void;
  listNext(nextPageLink: string, options?: Models.ManagementGroupsListNextOptionalParams | msRest.ServiceCallback<Models.ManagementGroupListResult>, callback?: msRest.ServiceCallback<Models.ManagementGroupListResult>): Promise<Models.ManagementGroupsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ManagementGroupsListNextResponse>;
  }

  /**
   * List all entities that descend from a management group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagementGroupsGetDescendantsNextResponse>
   */
  getDescendantsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagementGroupsGetDescendantsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  getDescendantsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DescendantListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  getDescendantsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DescendantListResult>): void;
  getDescendantsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DescendantListResult>, callback?: msRest.ServiceCallback<Models.DescendantListResult>): Promise<Models.ManagementGroupsGetDescendantsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      getDescendantsNextOperationSpec,
      callback) as Promise<Models.ManagementGroupsGetDescendantsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Management/managementGroups",
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skiptoken
  ],
  headerParameters: [
    Parameters.cacheControl,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagementGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Management/managementGroups/{groupId}",
  urlParameters: [
    Parameters.groupId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.recurse,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.cacheControl,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagementGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "providers/Microsoft.Management/managementGroups/{groupId}",
  urlParameters: [
    Parameters.groupId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.cacheControl,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "patchGroupRequest",
    mapper: {
      ...Mappers.PatchManagementGroupRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagementGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getDescendantsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Management/managementGroups/{groupId}/descendants",
  urlParameters: [
    Parameters.groupId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skiptoken,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DescendantListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "providers/Microsoft.Management/managementGroups/{groupId}",
  urlParameters: [
    Parameters.groupId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.cacheControl,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "createManagementGroupRequest",
    mapper: {
      ...Mappers.CreateManagementGroupRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagementGroup,
      headersMapper: Mappers.ManagementGroupsCreateOrUpdateHeaders
    },
    202: {
      bodyMapper: Mappers.AzureAsyncOperationResults,
      headersMapper: Mappers.ManagementGroupsCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "providers/Microsoft.Management/managementGroups/{groupId}",
  urlParameters: [
    Parameters.groupId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.cacheControl,
    Parameters.acceptLanguage
  ],
  responses: {
    202: {
      bodyMapper: Mappers.AzureAsyncOperationResults,
      headersMapper: Mappers.ManagementGroupsDeleteHeaders
    },
    204: {
      headersMapper: Mappers.ManagementGroupsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
    Parameters.cacheControl,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagementGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getDescendantsNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.DescendantListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
