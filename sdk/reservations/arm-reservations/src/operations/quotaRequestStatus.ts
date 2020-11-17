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
import * as Mappers from "../models/quotaRequestStatusMappers";
import * as Parameters from "../models/parameters";
import { AzureReservationAPIContext } from "../azureReservationAPIContext";

/** Class representing a QuotaRequestStatus. */
export class QuotaRequestStatus {
  private readonly client: AzureReservationAPIContext;

  /**
   * Create a QuotaRequestStatus.
   * @param {AzureReservationAPIContext} client Reference to the service client.
   */
  constructor(client: AzureReservationAPIContext) {
    this.client = client;
  }

  /**
   * Gets the QuotaRequest details and status by the quota request Id for the resources for the
   * resource provider at a specific location. The requestId is returned as response to the Put
   * requests for serviceLimits.
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param id Quota Request id.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotaRequestStatusGetResponse>
   */
  get(subscriptionId: string, providerId: string, location: string, id: string, options?: msRest.RequestOptionsBase): Promise<Models.QuotaRequestStatusGetResponse>;
  /**
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param id Quota Request id.
   * @param callback The callback
   */
  get(subscriptionId: string, providerId: string, location: string, id: string, callback: msRest.ServiceCallback<Models.QuotaRequestDetails>): void;
  /**
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param id Quota Request id.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(subscriptionId: string, providerId: string, location: string, id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.QuotaRequestDetails>): void;
  get(subscriptionId: string, providerId: string, location: string, id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.QuotaRequestDetails>, callback?: msRest.ServiceCallback<Models.QuotaRequestDetails>): Promise<Models.QuotaRequestStatusGetResponse> {
    return this.client.sendOperationRequest(
      {
        subscriptionId,
        providerId,
        location,
        id,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.QuotaRequestStatusGetResponse>;
  }

  /**
   * For the specified location and Resource provider gets the current quota requests under the
   * subscription over the time period of one year ago from now to one year back. oData filter can be
   * used to select quota requests.
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotaRequestStatusListResponse>
   */
  list(subscriptionId: string, providerId: string, location: string, options?: Models.QuotaRequestStatusListOptionalParams): Promise<Models.QuotaRequestStatusListResponse>;
  /**
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param callback The callback
   */
  list(subscriptionId: string, providerId: string, location: string, callback: msRest.ServiceCallback<Models.QuotaRequestDetailsList>): void;
  /**
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(subscriptionId: string, providerId: string, location: string, options: Models.QuotaRequestStatusListOptionalParams, callback: msRest.ServiceCallback<Models.QuotaRequestDetailsList>): void;
  list(subscriptionId: string, providerId: string, location: string, options?: Models.QuotaRequestStatusListOptionalParams | msRest.ServiceCallback<Models.QuotaRequestDetailsList>, callback?: msRest.ServiceCallback<Models.QuotaRequestDetailsList>): Promise<Models.QuotaRequestStatusListResponse> {
    return this.client.sendOperationRequest(
      {
        subscriptionId,
        providerId,
        location,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.QuotaRequestStatusListResponse>;
  }

  /**
   * For the specified location and Resource provider gets the current quota requests under the
   * subscription over the time period of one year ago from now to one year back. oData filter can be
   * used to select quota requests.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotaRequestStatusListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.QuotaRequestStatusListNextOptionalParams): Promise<Models.QuotaRequestStatusListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.QuotaRequestDetailsList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.QuotaRequestStatusListNextOptionalParams, callback: msRest.ServiceCallback<Models.QuotaRequestDetailsList>): void;
  listNext(nextPageLink: string, options?: Models.QuotaRequestStatusListNextOptionalParams | msRest.ServiceCallback<Models.QuotaRequestDetailsList>, callback?: msRest.ServiceCallback<Models.QuotaRequestDetailsList>): Promise<Models.QuotaRequestStatusListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.QuotaRequestStatusListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimitsRequests/{id}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.providerId,
    Parameters.location0,
    Parameters.id
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.QuotaRequestDetails
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimitsRequests",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.providerId,
    Parameters.location0
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter,
    Parameters.top,
    Parameters.skiptoken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.QuotaRequestDetailsList
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
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
    Parameters.apiVersion0,
    Parameters.filter,
    Parameters.top,
    Parameters.skiptoken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.QuotaRequestDetailsList
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};
