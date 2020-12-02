/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/labAccountsMappers";
import * as Parameters from "../models/parameters";
import { ManagedLabsClientContext } from "../managedLabsClientContext";

/** Class representing a LabAccounts. */
export class LabAccounts {
  private readonly client: ManagedLabsClientContext;

  /**
   * Create a LabAccounts.
   * @param {ManagedLabsClientContext} client Reference to the service client.
   */
  constructor(client: ManagedLabsClientContext) {
    this.client = client;
  }

  /**
   * List lab accounts in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabAccountsListBySubscriptionResponse>
   */
  listBySubscription(options?: Models.LabAccountsListBySubscriptionOptionalParams): Promise<Models.LabAccountsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: Models.LabAccountsListBySubscriptionOptionalParams, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>): void;
  listBySubscription(options?: Models.LabAccountsListBySubscriptionOptionalParams | msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>): Promise<Models.LabAccountsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.LabAccountsListBySubscriptionResponse>;
  }

  /**
   * List lab accounts in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabAccountsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: Models.LabAccountsListByResourceGroupOptionalParams): Promise<Models.LabAccountsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: Models.LabAccountsListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.LabAccountsListByResourceGroupOptionalParams | msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>): Promise<Models.LabAccountsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.LabAccountsListByResourceGroupResponse>;
  }

  /**
   * Get lab account
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabAccountsGetResponse>
   */
  get(resourceGroupName: string, labAccountName: string, options?: Models.LabAccountsGetOptionalParams): Promise<Models.LabAccountsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param callback The callback
   */
  get(resourceGroupName: string, labAccountName: string, callback: msRest.ServiceCallback<Models.LabAccount>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, labAccountName: string, options: Models.LabAccountsGetOptionalParams, callback: msRest.ServiceCallback<Models.LabAccount>): void;
  get(resourceGroupName: string, labAccountName: string, options?: Models.LabAccountsGetOptionalParams | msRest.ServiceCallback<Models.LabAccount>, callback?: msRest.ServiceCallback<Models.LabAccount>): Promise<Models.LabAccountsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LabAccountsGetResponse>;
  }

  /**
   * Create or replace an existing Lab Account.
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labAccount Represents a lab account.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabAccountsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, labAccountName: string, labAccount: Models.LabAccount, options?: msRest.RequestOptionsBase): Promise<Models.LabAccountsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labAccount Represents a lab account.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, labAccountName: string, labAccount: Models.LabAccount, callback: msRest.ServiceCallback<Models.LabAccount>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labAccount Represents a lab account.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, labAccountName: string, labAccount: Models.LabAccount, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LabAccount>): void;
  createOrUpdate(resourceGroupName: string, labAccountName: string, labAccount: Models.LabAccount, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LabAccount>, callback?: msRest.ServiceCallback<Models.LabAccount>): Promise<Models.LabAccountsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        labAccount,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.LabAccountsCreateOrUpdateResponse>;
  }

  /**
   * Delete lab account. This operation can take a while to complete
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, labAccountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,labAccountName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Modify properties of lab accounts.
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labAccount Represents a lab account.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabAccountsUpdateResponse>
   */
  update(resourceGroupName: string, labAccountName: string, labAccount: Models.LabAccountFragment, options?: msRest.RequestOptionsBase): Promise<Models.LabAccountsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labAccount Represents a lab account.
   * @param callback The callback
   */
  update(resourceGroupName: string, labAccountName: string, labAccount: Models.LabAccountFragment, callback: msRest.ServiceCallback<Models.LabAccount>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labAccount Represents a lab account.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, labAccountName: string, labAccount: Models.LabAccountFragment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LabAccount>): void;
  update(resourceGroupName: string, labAccountName: string, labAccount: Models.LabAccountFragment, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LabAccount>, callback?: msRest.ServiceCallback<Models.LabAccount>): Promise<Models.LabAccountsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        labAccount,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.LabAccountsUpdateResponse>;
  }

  /**
   * Create a lab in a lab account.
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param createLabProperties Properties for creating a managed lab and a default environment
   * setting
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  createLab(resourceGroupName: string, labAccountName: string, createLabProperties: Models.CreateLabProperties, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param createLabProperties Properties for creating a managed lab and a default environment
   * setting
   * @param callback The callback
   */
  createLab(resourceGroupName: string, labAccountName: string, createLabProperties: Models.CreateLabProperties, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param createLabProperties Properties for creating a managed lab and a default environment
   * setting
   * @param options The optional parameters
   * @param callback The callback
   */
  createLab(resourceGroupName: string, labAccountName: string, createLabProperties: Models.CreateLabProperties, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  createLab(resourceGroupName: string, labAccountName: string, createLabProperties: Models.CreateLabProperties, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        createLabProperties,
        options
      },
      createLabOperationSpec,
      callback);
  }

  /**
   * Get regional availability information for each size category configured under a lab account
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabAccountsGetRegionalAvailabilityResponse>
   */
  getRegionalAvailability(resourceGroupName: string, labAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.LabAccountsGetRegionalAvailabilityResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param callback The callback
   */
  getRegionalAvailability(resourceGroupName: string, labAccountName: string, callback: msRest.ServiceCallback<Models.GetRegionalAvailabilityResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param options The optional parameters
   * @param callback The callback
   */
  getRegionalAvailability(resourceGroupName: string, labAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GetRegionalAvailabilityResponse>): void;
  getRegionalAvailability(resourceGroupName: string, labAccountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GetRegionalAvailabilityResponse>, callback?: msRest.ServiceCallback<Models.GetRegionalAvailabilityResponse>): Promise<Models.LabAccountsGetRegionalAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        options
      },
      getRegionalAvailabilityOperationSpec,
      callback) as Promise<Models.LabAccountsGetRegionalAvailabilityResponse>;
  }

  /**
   * Delete lab account. This operation can take a while to complete
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, labAccountName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labAccountName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List lab accounts in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabAccountsListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: Models.LabAccountsListBySubscriptionNextOptionalParams): Promise<Models.LabAccountsListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: Models.LabAccountsListBySubscriptionNextOptionalParams, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>): void;
  listBySubscriptionNext(nextPageLink: string, options?: Models.LabAccountsListBySubscriptionNextOptionalParams | msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>): Promise<Models.LabAccountsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.LabAccountsListBySubscriptionNextResponse>;
  }

  /**
   * List lab accounts in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabAccountsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: Models.LabAccountsListByResourceGroupNextOptionalParams): Promise<Models.LabAccountsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: Models.LabAccountsListByResourceGroupNextOptionalParams, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>): void;
  listByResourceGroupNext(nextPageLink: string, options?: Models.LabAccountsListByResourceGroupNextOptionalParams | msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationLabAccount>): Promise<Models.LabAccountsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.LabAccountsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.LabServices/labaccounts",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResponseWithContinuationLabAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResponseWithContinuationLabAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LabAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "labAccount",
    mapper: {
      ...Mappers.LabAccount,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.LabAccount
    },
    201: {
      bodyMapper: Mappers.LabAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "labAccount",
    mapper: {
      ...Mappers.LabAccountFragment,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.LabAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createLabOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/createLab",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "createLabProperties",
    mapper: {
      ...Mappers.CreateLabProperties,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getRegionalAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/getRegionalAvailability",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GetRegionalAvailabilityResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
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
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResponseWithContinuationLabAccount
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
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResponseWithContinuationLabAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
