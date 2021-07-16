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
import * as Mappers from "../models/capacityReservationGroupsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a CapacityReservationGroups. */
export class CapacityReservationGroups {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a CapacityReservationGroups.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * The operation to create or update a capacity reservation group. When updating a capacity
   * reservation group, only tags may be modified. Please refer to https://aka.ms/CapacityReservation
   * for more details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param parameters Parameters supplied to the Create capacity reservation Group.
   * @param [options] The optional parameters
   * @returns Promise<Models.CapacityReservationGroupsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, capacityReservationGroupName: string, parameters: Models.CapacityReservationGroup, options?: msRest.RequestOptionsBase): Promise<Models.CapacityReservationGroupsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param parameters Parameters supplied to the Create capacity reservation Group.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, capacityReservationGroupName: string, parameters: Models.CapacityReservationGroup, callback: msRest.ServiceCallback<Models.CapacityReservationGroup>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param parameters Parameters supplied to the Create capacity reservation Group.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, capacityReservationGroupName: string, parameters: Models.CapacityReservationGroup, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CapacityReservationGroup>): void;
  createOrUpdate(resourceGroupName: string, capacityReservationGroupName: string, parameters: Models.CapacityReservationGroup, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CapacityReservationGroup>, callback?: msRest.ServiceCallback<Models.CapacityReservationGroup>): Promise<Models.CapacityReservationGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        capacityReservationGroupName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.CapacityReservationGroupsCreateOrUpdateResponse>;
  }

  /**
   * The operation to update a capacity reservation group. When updating a capacity reservation
   * group, only tags may be modified.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param parameters Parameters supplied to the Update capacity reservation Group operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CapacityReservationGroupsUpdateResponse>
   */
  update(resourceGroupName: string, capacityReservationGroupName: string, parameters: Models.CapacityReservationGroupUpdate, options?: msRest.RequestOptionsBase): Promise<Models.CapacityReservationGroupsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param parameters Parameters supplied to the Update capacity reservation Group operation.
   * @param callback The callback
   */
  update(resourceGroupName: string, capacityReservationGroupName: string, parameters: Models.CapacityReservationGroupUpdate, callback: msRest.ServiceCallback<Models.CapacityReservationGroup>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param parameters Parameters supplied to the Update capacity reservation Group operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, capacityReservationGroupName: string, parameters: Models.CapacityReservationGroupUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CapacityReservationGroup>): void;
  update(resourceGroupName: string, capacityReservationGroupName: string, parameters: Models.CapacityReservationGroupUpdate, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CapacityReservationGroup>, callback?: msRest.ServiceCallback<Models.CapacityReservationGroup>): Promise<Models.CapacityReservationGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        capacityReservationGroupName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.CapacityReservationGroupsUpdateResponse>;
  }

  /**
   * The operation to delete a capacity reservation group. This operation is allowed only if all the
   * associated resources are disassociated from the reservation group and all capacity reservations
   * under the reservation group have also been deleted. Please refer to
   * https://aka.ms/CapacityReservation for more details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, capacityReservationGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, capacityReservationGroupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, capacityReservationGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, capacityReservationGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        capacityReservationGroupName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * The operation that retrieves information about a capacity reservation group.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param [options] The optional parameters
   * @returns Promise<Models.CapacityReservationGroupsGetResponse>
   */
  get(resourceGroupName: string, capacityReservationGroupName: string, options?: Models.CapacityReservationGroupsGetOptionalParams): Promise<Models.CapacityReservationGroupsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param callback The callback
   */
  get(resourceGroupName: string, capacityReservationGroupName: string, callback: msRest.ServiceCallback<Models.CapacityReservationGroup>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, capacityReservationGroupName: string, options: Models.CapacityReservationGroupsGetOptionalParams, callback: msRest.ServiceCallback<Models.CapacityReservationGroup>): void;
  get(resourceGroupName: string, capacityReservationGroupName: string, options?: Models.CapacityReservationGroupsGetOptionalParams | msRest.ServiceCallback<Models.CapacityReservationGroup>, callback?: msRest.ServiceCallback<Models.CapacityReservationGroup>): Promise<Models.CapacityReservationGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        capacityReservationGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CapacityReservationGroupsGetResponse>;
  }

  /**
   * Lists all of the capacity reservation groups in the specified resource group. Use the nextLink
   * property in the response to get the next page of capacity reservation groups.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.CapacityReservationGroupsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: Models.CapacityReservationGroupsListByResourceGroupOptionalParams): Promise<Models.CapacityReservationGroupsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.CapacityReservationGroupListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: Models.CapacityReservationGroupsListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.CapacityReservationGroupListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.CapacityReservationGroupsListByResourceGroupOptionalParams | msRest.ServiceCallback<Models.CapacityReservationGroupListResult>, callback?: msRest.ServiceCallback<Models.CapacityReservationGroupListResult>): Promise<Models.CapacityReservationGroupsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.CapacityReservationGroupsListByResourceGroupResponse>;
  }

  /**
   * Lists all of the capacity reservation groups in the subscription. Use the nextLink property in
   * the response to get the next page of capacity reservation groups.
   * @param [options] The optional parameters
   * @returns Promise<Models.CapacityReservationGroupsListBySubscriptionResponse>
   */
  listBySubscription(options?: Models.CapacityReservationGroupsListBySubscriptionOptionalParams): Promise<Models.CapacityReservationGroupsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.CapacityReservationGroupListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: Models.CapacityReservationGroupsListBySubscriptionOptionalParams, callback: msRest.ServiceCallback<Models.CapacityReservationGroupListResult>): void;
  listBySubscription(options?: Models.CapacityReservationGroupsListBySubscriptionOptionalParams | msRest.ServiceCallback<Models.CapacityReservationGroupListResult>, callback?: msRest.ServiceCallback<Models.CapacityReservationGroupListResult>): Promise<Models.CapacityReservationGroupsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.CapacityReservationGroupsListBySubscriptionResponse>;
  }

  /**
   * Lists all of the capacity reservation groups in the specified resource group. Use the nextLink
   * property in the response to get the next page of capacity reservation groups.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CapacityReservationGroupsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: Models.CapacityReservationGroupsListByResourceGroupNextOptionalParams): Promise<Models.CapacityReservationGroupsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CapacityReservationGroupListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: Models.CapacityReservationGroupsListByResourceGroupNextOptionalParams, callback: msRest.ServiceCallback<Models.CapacityReservationGroupListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: Models.CapacityReservationGroupsListByResourceGroupNextOptionalParams | msRest.ServiceCallback<Models.CapacityReservationGroupListResult>, callback?: msRest.ServiceCallback<Models.CapacityReservationGroupListResult>): Promise<Models.CapacityReservationGroupsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.CapacityReservationGroupsListByResourceGroupNextResponse>;
  }

  /**
   * Lists all of the capacity reservation groups in the subscription. Use the nextLink property in
   * the response to get the next page of capacity reservation groups.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CapacityReservationGroupsListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: Models.CapacityReservationGroupsListBySubscriptionNextOptionalParams): Promise<Models.CapacityReservationGroupsListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CapacityReservationGroupListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: Models.CapacityReservationGroupsListBySubscriptionNextOptionalParams, callback: msRest.ServiceCallback<Models.CapacityReservationGroupListResult>): void;
  listBySubscriptionNext(nextPageLink: string, options?: Models.CapacityReservationGroupsListBySubscriptionNextOptionalParams | msRest.ServiceCallback<Models.CapacityReservationGroupListResult>, callback?: msRest.ServiceCallback<Models.CapacityReservationGroupListResult>): Promise<Models.CapacityReservationGroupsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.CapacityReservationGroupsListBySubscriptionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.capacityReservationGroupName,
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
      ...Mappers.CapacityReservationGroup,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroup
    },
    201: {
      bodyMapper: Mappers.CapacityReservationGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.capacityReservationGroupName,
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
      ...Mappers.CapacityReservationGroupUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.capacityReservationGroupName,
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
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.capacityReservationGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.expand2,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/capacityReservationGroups",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroupListResult
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
    Parameters.apiVersion0,
    Parameters.expand3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
