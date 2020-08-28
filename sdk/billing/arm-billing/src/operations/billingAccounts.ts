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
import * as Mappers from "../models/billingAccountsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a BillingAccounts. */
export class BillingAccounts {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a BillingAccounts.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the billing accounts that a user has access to.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingAccountsListResponse>
   */
  list(options?: Models.BillingAccountsListOptionalParams): Promise<Models.BillingAccountsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.BillingAccountListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.BillingAccountsListOptionalParams, callback: msRest.ServiceCallback<Models.BillingAccountListResult>): void;
  list(options?: Models.BillingAccountsListOptionalParams | msRest.ServiceCallback<Models.BillingAccountListResult>, callback?: msRest.ServiceCallback<Models.BillingAccountListResult>): Promise<Models.BillingAccountsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BillingAccountsListResponse>;
  }

  /**
   * Gets a billing account by its ID.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingAccountsGetResponse>
   */
  get(billingAccountName: string, options?: Models.BillingAccountsGetOptionalParams): Promise<Models.BillingAccountsGetResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param callback The callback
   */
  get(billingAccountName: string, callback: msRest.ServiceCallback<Models.BillingAccount>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountName: string, options: Models.BillingAccountsGetOptionalParams, callback: msRest.ServiceCallback<Models.BillingAccount>): void;
  get(billingAccountName: string, options?: Models.BillingAccountsGetOptionalParams | msRest.ServiceCallback<Models.BillingAccount>, callback?: msRest.ServiceCallback<Models.BillingAccount>): Promise<Models.BillingAccountsGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BillingAccountsGetResponse>;
  }

  /**
   * Updates the properties of a billing account. Currently, displayName and address can be updated.
   * The operation is supported only for billing accounts with agreement type Microsoft Customer
   * Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the update billing account operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingAccountsUpdateResponse>
   */
  update(billingAccountName: string, parameters: Models.BillingAccountUpdateRequest, options?: msRest.RequestOptionsBase): Promise<Models.BillingAccountsUpdateResponse> {
    return this.beginUpdate(billingAccountName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.BillingAccountsUpdateResponse>;
  }

  /**
   * Lists the invoice sections for which the user has permission to create Azure subscriptions. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer
   * Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionResponse>
   */
  listInvoiceSectionsByCreateSubscriptionPermission(billingAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param callback The callback
   */
  listInvoiceSectionsByCreateSubscriptionPermission(billingAccountName: string, callback: msRest.ServiceCallback<Models.InvoiceSectionListWithCreateSubPermissionResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listInvoiceSectionsByCreateSubscriptionPermission(billingAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InvoiceSectionListWithCreateSubPermissionResult>): void;
  listInvoiceSectionsByCreateSubscriptionPermission(billingAccountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InvoiceSectionListWithCreateSubPermissionResult>, callback?: msRest.ServiceCallback<Models.InvoiceSectionListWithCreateSubPermissionResult>): Promise<Models.BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listInvoiceSectionsByCreateSubscriptionPermissionOperationSpec,
      callback) as Promise<Models.BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionResponse>;
  }

  /**
   * Updates the properties of a billing account. Currently, displayName and address can be updated.
   * The operation is supported only for billing accounts with agreement type Microsoft Customer
   * Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the update billing account operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(billingAccountName: string, parameters: Models.BillingAccountUpdateRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        billingAccountName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Lists the billing accounts that a user has access to.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingAccountsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingAccountsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BillingAccountListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingAccountListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingAccountListResult>, callback?: msRest.ServiceCallback<Models.BillingAccountListResult>): Promise<Models.BillingAccountsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.BillingAccountsListNextResponse>;
  }

  /**
   * Lists the invoice sections for which the user has permission to create Azure subscriptions. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer
   * Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionNextResponse>
   */
  listInvoiceSectionsByCreateSubscriptionPermissionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listInvoiceSectionsByCreateSubscriptionPermissionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InvoiceSectionListWithCreateSubPermissionResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listInvoiceSectionsByCreateSubscriptionPermissionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InvoiceSectionListWithCreateSubPermissionResult>): void;
  listInvoiceSectionsByCreateSubscriptionPermissionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InvoiceSectionListWithCreateSubPermissionResult>, callback?: msRest.ServiceCallback<Models.InvoiceSectionListWithCreateSubPermissionResult>): Promise<Models.BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listInvoiceSectionsByCreateSubscriptionPermissionNextOperationSpec,
      callback) as Promise<Models.BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts",
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingAccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingAccount
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listInvoiceSectionsByCreateSubscriptionPermissionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/listInvoiceSectionsWithCreateSubscriptionPermission",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceSectionListWithCreateSubPermissionResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}",
  urlParameters: [
    Parameters.billingAccountName
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
      ...Mappers.BillingAccountUpdateRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BillingAccount
    },
    202: {},
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
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingAccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listInvoiceSectionsByCreateSubscriptionPermissionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
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
      bodyMapper: Mappers.InvoiceSectionListWithCreateSubPermissionResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
