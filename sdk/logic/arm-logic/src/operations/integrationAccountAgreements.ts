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
import * as Mappers from "../models/integrationAccountAgreementsMappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";

/** Class representing a IntegrationAccountAgreements. */
export class IntegrationAccountAgreements {
  private readonly client: LogicManagementClientContext;

  /**
   * Create a IntegrationAccountAgreements.
   * @param {LogicManagementClientContext} client Reference to the service client.
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of integration account agreements.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountAgreementsListResponse>
   */
  list(resourceGroupName: string, integrationAccountName: string, options?: Models.IntegrationAccountAgreementsListOptionalParams): Promise<Models.IntegrationAccountAgreementsListResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param callback The callback
   */
  list(resourceGroupName: string, integrationAccountName: string, callback: msRest.ServiceCallback<Models.IntegrationAccountAgreementListResult>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, integrationAccountName: string, options: Models.IntegrationAccountAgreementsListOptionalParams, callback: msRest.ServiceCallback<Models.IntegrationAccountAgreementListResult>): void;
  list(resourceGroupName: string, integrationAccountName: string, options?: Models.IntegrationAccountAgreementsListOptionalParams | msRest.ServiceCallback<Models.IntegrationAccountAgreementListResult>, callback?: msRest.ServiceCallback<Models.IntegrationAccountAgreementListResult>): Promise<Models.IntegrationAccountAgreementsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.IntegrationAccountAgreementsListResponse>;
  }

  /**
   * Gets an integration account agreement.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountAgreementsGetResponse>
   */
  get(resourceGroupName: string, integrationAccountName: string, agreementName: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountAgreementsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param callback The callback
   */
  get(resourceGroupName: string, integrationAccountName: string, agreementName: string, callback: msRest.ServiceCallback<Models.IntegrationAccountAgreement>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, integrationAccountName: string, agreementName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccountAgreement>): void;
  get(resourceGroupName: string, integrationAccountName: string, agreementName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationAccountAgreement>, callback?: msRest.ServiceCallback<Models.IntegrationAccountAgreement>): Promise<Models.IntegrationAccountAgreementsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        agreementName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IntegrationAccountAgreementsGetResponse>;
  }

  /**
   * Creates or updates an integration account agreement.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param agreement The integration account agreement.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountAgreementsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, agreementName: string, agreement: Models.IntegrationAccountAgreement, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountAgreementsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param agreement The integration account agreement.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, agreementName: string, agreement: Models.IntegrationAccountAgreement, callback: msRest.ServiceCallback<Models.IntegrationAccountAgreement>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param agreement The integration account agreement.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, agreementName: string, agreement: Models.IntegrationAccountAgreement, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccountAgreement>): void;
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, agreementName: string, agreement: Models.IntegrationAccountAgreement, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationAccountAgreement>, callback?: msRest.ServiceCallback<Models.IntegrationAccountAgreement>): Promise<Models.IntegrationAccountAgreementsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        agreementName,
        agreement,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.IntegrationAccountAgreementsCreateOrUpdateResponse>;
  }

  /**
   * Deletes an integration account agreement.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, integrationAccountName: string, agreementName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, integrationAccountName: string, agreementName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, integrationAccountName: string, agreementName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, integrationAccountName: string, agreementName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        agreementName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Get the content callback url.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param listContentCallbackUrlParameter
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountAgreementsListContentCallbackUrlResponse>
   */
  listContentCallbackUrl(resourceGroupName: string, integrationAccountName: string, agreementName: string, listContentCallbackUrlParameter: Models.GetCallbackUrlParameters, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountAgreementsListContentCallbackUrlResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param listContentCallbackUrlParameter
   * @param callback The callback
   */
  listContentCallbackUrl(resourceGroupName: string, integrationAccountName: string, agreementName: string, listContentCallbackUrlParameter: Models.GetCallbackUrlParameters, callback: msRest.ServiceCallback<Models.WorkflowTriggerCallbackUrl>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param listContentCallbackUrlParameter
   * @param options The optional parameters
   * @param callback The callback
   */
  listContentCallbackUrl(resourceGroupName: string, integrationAccountName: string, agreementName: string, listContentCallbackUrlParameter: Models.GetCallbackUrlParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowTriggerCallbackUrl>): void;
  listContentCallbackUrl(resourceGroupName: string, integrationAccountName: string, agreementName: string, listContentCallbackUrlParameter: Models.GetCallbackUrlParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkflowTriggerCallbackUrl>, callback?: msRest.ServiceCallback<Models.WorkflowTriggerCallbackUrl>): Promise<Models.IntegrationAccountAgreementsListContentCallbackUrlResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        agreementName,
        listContentCallbackUrlParameter,
        options
      },
      listContentCallbackUrlOperationSpec,
      callback) as Promise<Models.IntegrationAccountAgreementsListContentCallbackUrlResponse>;
  }

  /**
   * Gets a list of integration account agreements.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountAgreementsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountAgreementsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IntegrationAccountAgreementListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccountAgreementListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationAccountAgreementListResult>, callback?: msRest.ServiceCallback<Models.IntegrationAccountAgreementListResult>): Promise<Models.IntegrationAccountAgreementsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.IntegrationAccountAgreementsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountAgreementListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.agreementName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountAgreement
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.agreementName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "agreement",
    mapper: {
      ...Mappers.IntegrationAccountAgreement,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountAgreement
    },
    201: {
      bodyMapper: Mappers.IntegrationAccountAgreement
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.agreementName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listContentCallbackUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}/listContentCallbackUrl",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.agreementName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "listContentCallbackUrlParameter",
    mapper: {
      ...Mappers.GetCallbackUrlParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTriggerCallbackUrl
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
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountAgreementListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
