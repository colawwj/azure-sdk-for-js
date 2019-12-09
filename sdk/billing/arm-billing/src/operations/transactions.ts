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
import * as Mappers from "../models/transactionsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a Transactions. */
export class Transactions {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a Transactions.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the transactions by customer id for given start date and end date.
   * @param billingAccountName billing Account Id.
   * @param customerName Customer name.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param [options] The optional parameters
   * @returns Promise<Models.TransactionsListByCustomerResponse>
   */
  listByCustomer(billingAccountName: string, customerName: string, periodStartDate: string, periodEndDate: string, options?: Models.TransactionsListByCustomerOptionalParams): Promise<Models.TransactionsListByCustomerResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param customerName Customer name.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param callback The callback
   */
  listByCustomer(billingAccountName: string, customerName: string, periodStartDate: string, periodEndDate: string, callback: msRest.ServiceCallback<Models.TransactionListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param customerName Customer name.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCustomer(billingAccountName: string, customerName: string, periodStartDate: string, periodEndDate: string, options: Models.TransactionsListByCustomerOptionalParams, callback: msRest.ServiceCallback<Models.TransactionListResult>): void;
  listByCustomer(billingAccountName: string, customerName: string, periodStartDate: string, periodEndDate: string, options?: Models.TransactionsListByCustomerOptionalParams | msRest.ServiceCallback<Models.TransactionListResult>, callback?: msRest.ServiceCallback<Models.TransactionListResult>): Promise<Models.TransactionsListByCustomerResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        customerName,
        periodStartDate,
        periodEndDate,
        options
      },
      listByCustomerOperationSpec,
      callback) as Promise<Models.TransactionsListByCustomerResponse>;
  }

  /**
   * Lists the transactions by billing account name for given start and end date.
   * @param billingAccountName billing Account Id.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param [options] The optional parameters
   * @returns Promise<Models.TransactionsListByBillingAccountResponse>
   */
  listByBillingAccount(billingAccountName: string, periodStartDate: string, periodEndDate: string, options?: Models.TransactionsListByBillingAccountOptionalParams): Promise<Models.TransactionsListByBillingAccountResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, periodStartDate: string, periodEndDate: string, callback: msRest.ServiceCallback<Models.TransactionListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, periodStartDate: string, periodEndDate: string, options: Models.TransactionsListByBillingAccountOptionalParams, callback: msRest.ServiceCallback<Models.TransactionListResult>): void;
  listByBillingAccount(billingAccountName: string, periodStartDate: string, periodEndDate: string, options?: Models.TransactionsListByBillingAccountOptionalParams | msRest.ServiceCallback<Models.TransactionListResult>, callback?: msRest.ServiceCallback<Models.TransactionListResult>): Promise<Models.TransactionsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        periodStartDate,
        periodEndDate,
        options
      },
      listByBillingAccountOperationSpec,
      callback) as Promise<Models.TransactionsListByBillingAccountResponse>;
  }

  /**
   * Lists the transactions by billing profile name for given start date and end date.
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param [options] The optional parameters
   * @returns Promise<Models.TransactionsListByBillingProfileResponse>
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, periodStartDate: string, periodEndDate: string, options?: Models.TransactionsListByBillingProfileOptionalParams): Promise<Models.TransactionsListByBillingProfileResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, periodStartDate: string, periodEndDate: string, callback: msRest.ServiceCallback<Models.TransactionListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, periodStartDate: string, periodEndDate: string, options: Models.TransactionsListByBillingProfileOptionalParams, callback: msRest.ServiceCallback<Models.TransactionListResult>): void;
  listByBillingProfile(billingAccountName: string, billingProfileName: string, periodStartDate: string, periodEndDate: string, options?: Models.TransactionsListByBillingProfileOptionalParams | msRest.ServiceCallback<Models.TransactionListResult>, callback?: msRest.ServiceCallback<Models.TransactionListResult>): Promise<Models.TransactionsListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        periodStartDate,
        periodEndDate,
        options
      },
      listByBillingProfileOperationSpec,
      callback) as Promise<Models.TransactionsListByBillingProfileResponse>;
  }

  /**
   * Lists the transactions by invoice section name for given start date and end date.
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param [options] The optional parameters
   * @returns Promise<Models.TransactionsListByInvoiceSectionResponse>
   */
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, periodStartDate: string, periodEndDate: string, options?: Models.TransactionsListByInvoiceSectionOptionalParams): Promise<Models.TransactionsListByInvoiceSectionResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param callback The callback
   */
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, periodStartDate: string, periodEndDate: string, callback: msRest.ServiceCallback<Models.TransactionListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, periodStartDate: string, periodEndDate: string, options: Models.TransactionsListByInvoiceSectionOptionalParams, callback: msRest.ServiceCallback<Models.TransactionListResult>): void;
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, periodStartDate: string, periodEndDate: string, options?: Models.TransactionsListByInvoiceSectionOptionalParams | msRest.ServiceCallback<Models.TransactionListResult>, callback?: msRest.ServiceCallback<Models.TransactionListResult>): Promise<Models.TransactionsListByInvoiceSectionResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        periodStartDate,
        periodEndDate,
        options
      },
      listByInvoiceSectionOperationSpec,
      callback) as Promise<Models.TransactionsListByInvoiceSectionResponse>;
  }

  /**
   * Get the transaction.
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param transactionName Transaction name.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param [options] The optional parameters
   * @returns Promise<Models.TransactionsGetResponse>
   */
  get(billingAccountName: string, billingProfileName: string, transactionName: string, periodStartDate: string, periodEndDate: string, options?: msRest.RequestOptionsBase): Promise<Models.TransactionsGetResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param transactionName Transaction name.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param callback The callback
   */
  get(billingAccountName: string, billingProfileName: string, transactionName: string, periodStartDate: string, periodEndDate: string, callback: msRest.ServiceCallback<Models.Transaction>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param transactionName Transaction name.
   * @param periodStartDate Start date
   * @param periodEndDate End date
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountName: string, billingProfileName: string, transactionName: string, periodStartDate: string, periodEndDate: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Transaction>): void;
  get(billingAccountName: string, billingProfileName: string, transactionName: string, periodStartDate: string, periodEndDate: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Transaction>, callback?: msRest.ServiceCallback<Models.Transaction>): Promise<Models.TransactionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        transactionName,
        periodStartDate,
        periodEndDate,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TransactionsGetResponse>;
  }

  /**
   * Lists the transactions by customer id for given start date and end date.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TransactionsListByCustomerNextResponse>
   */
  listByCustomerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TransactionsListByCustomerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByCustomerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TransactionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCustomerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TransactionListResult>): void;
  listByCustomerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TransactionListResult>, callback?: msRest.ServiceCallback<Models.TransactionListResult>): Promise<Models.TransactionsListByCustomerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByCustomerNextOperationSpec,
      callback) as Promise<Models.TransactionsListByCustomerNextResponse>;
  }

  /**
   * Lists the transactions by billing account name for given start and end date.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TransactionsListByBillingAccountNextResponse>
   */
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TransactionsListByBillingAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TransactionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TransactionListResult>): void;
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TransactionListResult>, callback?: msRest.ServiceCallback<Models.TransactionListResult>): Promise<Models.TransactionsListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingAccountNextOperationSpec,
      callback) as Promise<Models.TransactionsListByBillingAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByCustomerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/transactions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.customerName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.periodStartDate,
    Parameters.periodEndDate,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TransactionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/transactions",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.periodStartDate,
    Parameters.periodEndDate,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TransactionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/transactions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.periodStartDate,
    Parameters.periodEndDate,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TransactionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByInvoiceSectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transactions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.periodStartDate,
    Parameters.periodEndDate,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TransactionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/transactions/{transactionName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.transactionName
  ],
  queryParameters: [
    Parameters.periodStartDate,
    Parameters.periodEndDate,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Transaction
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TransactionListResult
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TransactionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
