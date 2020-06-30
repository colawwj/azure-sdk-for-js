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
import * as Mappers from "../models/invoicesMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a Invoices. */
export class Invoices {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a Invoices.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the invoices for a billing account for a given start date and end date. The operation is
   * supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft
   * Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param periodStartDate The start date to fetch the invoices. The date should be specified in
   * MM-DD-YYYY format.
   * @param periodEndDate The end date to fetch the invoices. The date should be specified in
   * MM-DD-YYYY format.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesListByBillingAccountResponse>
   */
  listByBillingAccount(billingAccountName: string, periodStartDate: string, periodEndDate: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicesListByBillingAccountResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param periodStartDate The start date to fetch the invoices. The date should be specified in
   * MM-DD-YYYY format.
   * @param periodEndDate The end date to fetch the invoices. The date should be specified in
   * MM-DD-YYYY format.
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, periodStartDate: string, periodEndDate: string, callback: msRest.ServiceCallback<Models.InvoiceListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param periodStartDate The start date to fetch the invoices. The date should be specified in
   * MM-DD-YYYY format.
   * @param periodEndDate The end date to fetch the invoices. The date should be specified in
   * MM-DD-YYYY format.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, periodStartDate: string, periodEndDate: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InvoiceListResult>): void;
  listByBillingAccount(billingAccountName: string, periodStartDate: string, periodEndDate: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InvoiceListResult>, callback?: msRest.ServiceCallback<Models.InvoiceListResult>): Promise<Models.InvoicesListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        periodStartDate,
        periodEndDate,
        options
      },
      listByBillingAccountOperationSpec,
      callback) as Promise<Models.InvoicesListByBillingAccountResponse>;
  }

  /**
   * Lists the invoices for a billing profile for a given start date and end date. The operation is
   * supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft
   * Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param periodStartDate The start date to fetch the invoices. The date should be specified in
   * MM-DD-YYYY format.
   * @param periodEndDate The end date to fetch the invoices. The date should be specified in
   * MM-DD-YYYY format.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesListByBillingProfileResponse>
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, periodStartDate: string, periodEndDate: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicesListByBillingProfileResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param periodStartDate The start date to fetch the invoices. The date should be specified in
   * MM-DD-YYYY format.
   * @param periodEndDate The end date to fetch the invoices. The date should be specified in
   * MM-DD-YYYY format.
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, periodStartDate: string, periodEndDate: string, callback: msRest.ServiceCallback<Models.InvoiceListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param periodStartDate The start date to fetch the invoices. The date should be specified in
   * MM-DD-YYYY format.
   * @param periodEndDate The end date to fetch the invoices. The date should be specified in
   * MM-DD-YYYY format.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, periodStartDate: string, periodEndDate: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InvoiceListResult>): void;
  listByBillingProfile(billingAccountName: string, billingProfileName: string, periodStartDate: string, periodEndDate: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InvoiceListResult>, callback?: msRest.ServiceCallback<Models.InvoiceListResult>): Promise<Models.InvoicesListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        periodStartDate,
        periodEndDate,
        options
      },
      listByBillingProfileOperationSpec,
      callback) as Promise<Models.InvoicesListByBillingProfileResponse>;
  }

  /**
   * Gets an invoice by billing account name and ID. The operation is supported for billing accounts
   * with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesGetResponse>
   */
  get(billingAccountName: string, invoiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicesGetResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param callback The callback
   */
  get(billingAccountName: string, invoiceName: string, callback: msRest.ServiceCallback<Models.Invoice>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountName: string, invoiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Invoice>): void;
  get(billingAccountName: string, invoiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Invoice>, callback?: msRest.ServiceCallback<Models.Invoice>): Promise<Models.InvoicesGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        invoiceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.InvoicesGetResponse>;
  }

  /**
   * Gets an invoice by ID. The operation is supported for billing accounts with agreement type
   * Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesGetByIdResponse>
   */
  getById(invoiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicesGetByIdResponse>;
  /**
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param callback The callback
   */
  getById(invoiceName: string, callback: msRest.ServiceCallback<Models.Invoice>): void;
  /**
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param options The optional parameters
   * @param callback The callback
   */
  getById(invoiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Invoice>): void;
  getById(invoiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Invoice>, callback?: msRest.ServiceCallback<Models.Invoice>): Promise<Models.InvoicesGetByIdResponse> {
    return this.client.sendOperationRequest(
      {
        invoiceName,
        options
      },
      getByIdOperationSpec,
      callback) as Promise<Models.InvoicesGetByIdResponse>;
  }

  /**
   * Gets a URL to download an invoice. The operation is supported for billing accounts with
   * agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param downloadToken Download token with document source and document ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesDownloadInvoiceResponse>
   */
  downloadInvoice(billingAccountName: string, invoiceName: string, downloadToken: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicesDownloadInvoiceResponse> {
    return this.beginDownloadInvoice(billingAccountName,invoiceName,downloadToken,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.InvoicesDownloadInvoiceResponse>;
  }

  /**
   * Lists the invoices for a subscription.
   * @param periodStartDate Invoice period start date.
   * @param periodEndDate Invoice period end date.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesListByBillingSubscriptionResponse>
   */
  listByBillingSubscription(periodStartDate: string, periodEndDate: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicesListByBillingSubscriptionResponse>;
  /**
   * @param periodStartDate Invoice period start date.
   * @param periodEndDate Invoice period end date.
   * @param callback The callback
   */
  listByBillingSubscription(periodStartDate: string, periodEndDate: string, callback: msRest.ServiceCallback<Models.InvoiceListResult>): void;
  /**
   * @param periodStartDate Invoice period start date.
   * @param periodEndDate Invoice period end date.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingSubscription(periodStartDate: string, periodEndDate: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InvoiceListResult>): void;
  listByBillingSubscription(periodStartDate: string, periodEndDate: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InvoiceListResult>, callback?: msRest.ServiceCallback<Models.InvoiceListResult>): Promise<Models.InvoicesListByBillingSubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        periodStartDate,
        periodEndDate,
        options
      },
      listByBillingSubscriptionOperationSpec,
      callback) as Promise<Models.InvoicesListByBillingSubscriptionResponse>;
  }

  /**
   * Gets an invoice by subscription ID and invoice ID.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesGetBySubscriptionAndInvoiceIdResponse>
   */
  getBySubscriptionAndInvoiceId(invoiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicesGetBySubscriptionAndInvoiceIdResponse>;
  /**
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param callback The callback
   */
  getBySubscriptionAndInvoiceId(invoiceName: string, callback: msRest.ServiceCallback<Models.Invoice>): void;
  /**
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param options The optional parameters
   * @param callback The callback
   */
  getBySubscriptionAndInvoiceId(invoiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Invoice>): void;
  getBySubscriptionAndInvoiceId(invoiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Invoice>, callback?: msRest.ServiceCallback<Models.Invoice>): Promise<Models.InvoicesGetBySubscriptionAndInvoiceIdResponse> {
    return this.client.sendOperationRequest(
      {
        invoiceName,
        options
      },
      getBySubscriptionAndInvoiceIdOperationSpec,
      callback) as Promise<Models.InvoicesGetBySubscriptionAndInvoiceIdResponse>;
  }

  /**
   * Gets a URL to download an invoice.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param downloadToken Download token with document source and document ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesDownloadBillingSubscriptionInvoiceResponse>
   */
  downloadBillingSubscriptionInvoice(invoiceName: string, downloadToken: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicesDownloadBillingSubscriptionInvoiceResponse> {
    return this.beginDownloadBillingSubscriptionInvoice(invoiceName,downloadToken,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.InvoicesDownloadBillingSubscriptionInvoiceResponse>;
  }

  /**
   * Gets a URL to download an invoice. The operation is supported for billing accounts with
   * agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param downloadToken Download token with document source and document ID.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDownloadInvoice(billingAccountName: string, invoiceName: string, downloadToken: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        billingAccountName,
        invoiceName,
        downloadToken,
        options
      },
      beginDownloadInvoiceOperationSpec,
      options);
  }

  /**
   * Gets a URL to download an invoice.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param downloadToken Download token with document source and document ID.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDownloadBillingSubscriptionInvoice(invoiceName: string, downloadToken: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        invoiceName,
        downloadToken,
        options
      },
      beginDownloadBillingSubscriptionInvoiceOperationSpec,
      options);
  }

  /**
   * Lists the invoices for a billing account for a given start date and end date. The operation is
   * supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft
   * Customer Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesListByBillingAccountNextResponse>
   */
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicesListByBillingAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InvoiceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InvoiceListResult>): void;
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InvoiceListResult>, callback?: msRest.ServiceCallback<Models.InvoiceListResult>): Promise<Models.InvoicesListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingAccountNextOperationSpec,
      callback) as Promise<Models.InvoicesListByBillingAccountNextResponse>;
  }

  /**
   * Lists the invoices for a billing profile for a given start date and end date. The operation is
   * supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft
   * Customer Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesListByBillingProfileNextResponse>
   */
  listByBillingProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicesListByBillingProfileNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingProfileNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InvoiceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfileNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InvoiceListResult>): void;
  listByBillingProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InvoiceListResult>, callback?: msRest.ServiceCallback<Models.InvoiceListResult>): Promise<Models.InvoicesListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingProfileNextOperationSpec,
      callback) as Promise<Models.InvoicesListByBillingProfileNextResponse>;
  }

  /**
   * Lists the invoices for a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicesListByBillingSubscriptionNextResponse>
   */
  listByBillingSubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicesListByBillingSubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingSubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InvoiceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingSubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InvoiceListResult>): void;
  listByBillingSubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InvoiceListResult>, callback?: msRest.ServiceCallback<Models.InvoiceListResult>): Promise<Models.InvoicesListByBillingSubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingSubscriptionNextOperationSpec,
      callback) as Promise<Models.InvoicesListByBillingSubscriptionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByBillingAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.periodStartDate,
    Parameters.periodEndDate
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoices",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.periodStartDate,
    Parameters.periodEndDate
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.invoiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Invoice
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/default/invoices/{invoiceName}",
  urlParameters: [
    Parameters.invoiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Invoice
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingSubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/default/billingSubscriptions/{subscriptionId}/invoices",
  urlParameters: [
    Parameters.subscriptionId
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
      bodyMapper: Mappers.InvoiceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getBySubscriptionAndInvoiceIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/default/billingSubscriptions/{subscriptionId}/invoices/{invoiceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.invoiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Invoice
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDownloadInvoiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}/download",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.invoiceName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.downloadToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DownloadUrl,
      headersMapper: Mappers.InvoicesDownloadInvoiceHeaders
    },
    202: {
      headersMapper: Mappers.InvoicesDownloadInvoiceHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.InvoicesDownloadInvoiceHeaders
    }
  },
  serializer
};

const beginDownloadBillingSubscriptionInvoiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/default/billingSubscriptions/{subscriptionId}/invoices/{invoiceName}/download",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.invoiceName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.downloadToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DownloadUrl,
      headersMapper: Mappers.InvoicesDownloadBillingSubscriptionInvoiceHeaders
    },
    202: {
      headersMapper: Mappers.InvoicesDownloadBillingSubscriptionInvoiceHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.InvoicesDownloadBillingSubscriptionInvoiceHeaders
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
      bodyMapper: Mappers.InvoiceListResult
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingSubscriptionNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.InvoiceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
