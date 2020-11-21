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
import * as Mappers from "../models/billingPermissionsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a BillingPermissions. */
export class BillingPermissions {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a BillingPermissions.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the billing permissions the caller has for a customer.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingPermissionsListByCustomerResponse>
   */
  listByCustomer(billingAccountName: string, customerName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingPermissionsListByCustomerResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param callback The callback
   */
  listByCustomer(billingAccountName: string, customerName: string, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCustomer(billingAccountName: string, customerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  listByCustomer(billingAccountName: string, customerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingPermissionsListResult>, callback?: msRest.ServiceCallback<Models.BillingPermissionsListResult>): Promise<Models.BillingPermissionsListByCustomerResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        customerName,
        options
      },
      listByCustomerOperationSpec,
      callback) as Promise<Models.BillingPermissionsListByCustomerResponse>;
  }

  /**
   * Lists the billing permissions the caller has on a billing account.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingPermissionsListByBillingAccountResponse>
   */
  listByBillingAccount(billingAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingPermissionsListByBillingAccountResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  listByBillingAccount(billingAccountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingPermissionsListResult>, callback?: msRest.ServiceCallback<Models.BillingPermissionsListResult>): Promise<Models.BillingPermissionsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listByBillingAccountOperationSpec,
      callback) as Promise<Models.BillingPermissionsListByBillingAccountResponse>;
  }

  /**
   * Lists the billing permissions the caller has on an invoice section.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingPermissionsListByInvoiceSectionsResponse>
   */
  listByInvoiceSections(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingPermissionsListByInvoiceSectionsResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param callback The callback
   */
  listByInvoiceSections(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInvoiceSections(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  listByInvoiceSections(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingPermissionsListResult>, callback?: msRest.ServiceCallback<Models.BillingPermissionsListResult>): Promise<Models.BillingPermissionsListByInvoiceSectionsResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        options
      },
      listByInvoiceSectionsOperationSpec,
      callback) as Promise<Models.BillingPermissionsListByInvoiceSectionsResponse>;
  }

  /**
   * Lists the billing permissions the caller has on a billing profile.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingPermissionsListByBillingProfileResponse>
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingPermissionsListByBillingProfileResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingPermissionsListResult>, callback?: msRest.ServiceCallback<Models.BillingPermissionsListResult>): Promise<Models.BillingPermissionsListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        options
      },
      listByBillingProfileOperationSpec,
      callback) as Promise<Models.BillingPermissionsListByBillingProfileResponse>;
  }

  /**
   * Lists the billing permissions the caller has for a customer.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingPermissionsListByCustomerNextResponse>
   */
  listByCustomerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingPermissionsListByCustomerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByCustomerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCustomerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  listByCustomerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingPermissionsListResult>, callback?: msRest.ServiceCallback<Models.BillingPermissionsListResult>): Promise<Models.BillingPermissionsListByCustomerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByCustomerNextOperationSpec,
      callback) as Promise<Models.BillingPermissionsListByCustomerNextResponse>;
  }

  /**
   * Lists the billing permissions the caller has on a billing account.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingPermissionsListByBillingAccountNextResponse>
   */
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingPermissionsListByBillingAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingPermissionsListResult>, callback?: msRest.ServiceCallback<Models.BillingPermissionsListResult>): Promise<Models.BillingPermissionsListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingAccountNextOperationSpec,
      callback) as Promise<Models.BillingPermissionsListByBillingAccountNextResponse>;
  }

  /**
   * Lists the billing permissions the caller has on an invoice section.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingPermissionsListByInvoiceSectionsNextResponse>
   */
  listByInvoiceSectionsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingPermissionsListByInvoiceSectionsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByInvoiceSectionsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInvoiceSectionsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  listByInvoiceSectionsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingPermissionsListResult>, callback?: msRest.ServiceCallback<Models.BillingPermissionsListResult>): Promise<Models.BillingPermissionsListByInvoiceSectionsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByInvoiceSectionsNextOperationSpec,
      callback) as Promise<Models.BillingPermissionsListByInvoiceSectionsNextResponse>;
  }

  /**
   * Lists the billing permissions the caller has on a billing profile.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingPermissionsListByBillingProfileNextResponse>
   */
  listByBillingProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingPermissionsListByBillingProfileNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingProfileNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfileNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  listByBillingProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingPermissionsListResult>, callback?: msRest.ServiceCallback<Models.BillingPermissionsListResult>): Promise<Models.BillingPermissionsListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingProfileNextOperationSpec,
      callback) as Promise<Models.BillingPermissionsListByBillingProfileNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByCustomerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/billingPermissions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.customerName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingPermissionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingPermissions",
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
      bodyMapper: Mappers.BillingPermissionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByInvoiceSectionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingPermissions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingPermissionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingPermissions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingPermissionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByCustomerNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingPermissionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingAccountNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingPermissionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByInvoiceSectionsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingPermissionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingProfileNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingPermissionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
