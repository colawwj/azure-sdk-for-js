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
import * as Mappers from "../models/billingRoleDefinitionsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a BillingRoleDefinitions. */
export class BillingRoleDefinitions {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a BillingRoleDefinitions.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the definition for a role on a billing account. The operation is supported for billing
   * accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingRoleDefinitionName The ID that uniquely identifies a role definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingRoleDefinitionsGetByBillingAccountResponse>
   */
  getByBillingAccount(billingAccountName: string, billingRoleDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingRoleDefinitionsGetByBillingAccountResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingRoleDefinitionName The ID that uniquely identifies a role definition.
   * @param callback The callback
   */
  getByBillingAccount(billingAccountName: string, billingRoleDefinitionName: string, callback: msRest.ServiceCallback<Models.BillingRoleDefinition>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingRoleDefinitionName The ID that uniquely identifies a role definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  getByBillingAccount(billingAccountName: string, billingRoleDefinitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingRoleDefinition>): void;
  getByBillingAccount(billingAccountName: string, billingRoleDefinitionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingRoleDefinition>, callback?: msRest.ServiceCallback<Models.BillingRoleDefinition>): Promise<Models.BillingRoleDefinitionsGetByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingRoleDefinitionName,
        options
      },
      getByBillingAccountOperationSpec,
      callback) as Promise<Models.BillingRoleDefinitionsGetByBillingAccountResponse>;
  }

  /**
   * Gets the definition for a role on an invoice section. The operation is supported only for
   * billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param billingRoleDefinitionName The ID that uniquely identifies a role definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingRoleDefinitionsGetByInvoiceSectionResponse>
   */
  getByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, billingRoleDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingRoleDefinitionsGetByInvoiceSectionResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param billingRoleDefinitionName The ID that uniquely identifies a role definition.
   * @param callback The callback
   */
  getByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, billingRoleDefinitionName: string, callback: msRest.ServiceCallback<Models.BillingRoleDefinition>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param billingRoleDefinitionName The ID that uniquely identifies a role definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  getByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, billingRoleDefinitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingRoleDefinition>): void;
  getByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, billingRoleDefinitionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingRoleDefinition>, callback?: msRest.ServiceCallback<Models.BillingRoleDefinition>): Promise<Models.BillingRoleDefinitionsGetByInvoiceSectionResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        billingRoleDefinitionName,
        options
      },
      getByInvoiceSectionOperationSpec,
      callback) as Promise<Models.BillingRoleDefinitionsGetByInvoiceSectionResponse>;
  }

  /**
   * Gets the definition for a role on a billing profile. The operation is supported for billing
   * accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param billingRoleDefinitionName The ID that uniquely identifies a role definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingRoleDefinitionsGetByBillingProfileResponse>
   */
  getByBillingProfile(billingAccountName: string, billingProfileName: string, billingRoleDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingRoleDefinitionsGetByBillingProfileResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param billingRoleDefinitionName The ID that uniquely identifies a role definition.
   * @param callback The callback
   */
  getByBillingProfile(billingAccountName: string, billingProfileName: string, billingRoleDefinitionName: string, callback: msRest.ServiceCallback<Models.BillingRoleDefinition>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param billingRoleDefinitionName The ID that uniquely identifies a role definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  getByBillingProfile(billingAccountName: string, billingProfileName: string, billingRoleDefinitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingRoleDefinition>): void;
  getByBillingProfile(billingAccountName: string, billingProfileName: string, billingRoleDefinitionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingRoleDefinition>, callback?: msRest.ServiceCallback<Models.BillingRoleDefinition>): Promise<Models.BillingRoleDefinitionsGetByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        billingRoleDefinitionName,
        options
      },
      getByBillingProfileOperationSpec,
      callback) as Promise<Models.BillingRoleDefinitionsGetByBillingProfileResponse>;
  }

  /**
   * Lists the role definitions for a billing account. The operation is supported for billing
   * accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingRoleDefinitionsListByBillingAccountResponse>
   */
  listByBillingAccount(billingAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingRoleDefinitionsListByBillingAccountResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  listByBillingAccount(billingAccountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>, callback?: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): Promise<Models.BillingRoleDefinitionsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listByBillingAccountOperationSpec,
      callback) as Promise<Models.BillingRoleDefinitionsListByBillingAccountResponse>;
  }

  /**
   * Lists the role definitions for an invoice section. The operation is supported for billing
   * accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingRoleDefinitionsListByInvoiceSectionResponse>
   */
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingRoleDefinitionsListByInvoiceSectionResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param callback The callback
   */
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>, callback?: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): Promise<Models.BillingRoleDefinitionsListByInvoiceSectionResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        options
      },
      listByInvoiceSectionOperationSpec,
      callback) as Promise<Models.BillingRoleDefinitionsListByInvoiceSectionResponse>;
  }

  /**
   * Lists the role definitions for a billing profile. The operation is supported for billing
   * accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingRoleDefinitionsListByBillingProfileResponse>
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingRoleDefinitionsListByBillingProfileResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>, callback?: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): Promise<Models.BillingRoleDefinitionsListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        options
      },
      listByBillingProfileOperationSpec,
      callback) as Promise<Models.BillingRoleDefinitionsListByBillingProfileResponse>;
  }

  /**
   * Lists the role definitions for a billing account. The operation is supported for billing
   * accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingRoleDefinitionsListByBillingAccountNextResponse>
   */
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingRoleDefinitionsListByBillingAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>, callback?: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): Promise<Models.BillingRoleDefinitionsListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingAccountNextOperationSpec,
      callback) as Promise<Models.BillingRoleDefinitionsListByBillingAccountNextResponse>;
  }

  /**
   * Lists the role definitions for an invoice section. The operation is supported for billing
   * accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingRoleDefinitionsListByInvoiceSectionNextResponse>
   */
  listByInvoiceSectionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingRoleDefinitionsListByInvoiceSectionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByInvoiceSectionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInvoiceSectionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  listByInvoiceSectionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>, callback?: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): Promise<Models.BillingRoleDefinitionsListByInvoiceSectionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByInvoiceSectionNextOperationSpec,
      callback) as Promise<Models.BillingRoleDefinitionsListByInvoiceSectionNextResponse>;
  }

  /**
   * Lists the role definitions for a billing profile. The operation is supported for billing
   * accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingRoleDefinitionsListByBillingProfileNextResponse>
   */
  listByBillingProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingRoleDefinitionsListByBillingProfileNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingProfileNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfileNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  listByBillingProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>, callback?: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): Promise<Models.BillingRoleDefinitionsListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingProfileNextOperationSpec,
      callback) as Promise<Models.BillingRoleDefinitionsListByBillingProfileNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getByBillingAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleDefinitions/{billingRoleDefinitionName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingRoleDefinitionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getByInvoiceSectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleDefinitions/{billingRoleDefinitionName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
    Parameters.billingRoleDefinitionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getByBillingProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleDefinitions/{billingRoleDefinitionName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.billingRoleDefinitionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleDefinitions",
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
      bodyMapper: Mappers.BillingRoleDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByInvoiceSectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleDefinitions",
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
      bodyMapper: Mappers.BillingRoleDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleDefinitions",
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
      bodyMapper: Mappers.BillingRoleDefinitionListResult
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
      bodyMapper: Mappers.BillingRoleDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByInvoiceSectionNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.BillingRoleDefinitionListResult
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
      bodyMapper: Mappers.BillingRoleDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
