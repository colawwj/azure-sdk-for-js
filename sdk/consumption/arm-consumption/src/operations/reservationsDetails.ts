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
import * as Mappers from "../models/reservationsDetailsMappers";
import * as Parameters from "../models/parameters";
import { ConsumptionManagementClientContext } from "../consumptionManagementClientContext";

/** Class representing a ReservationsDetails. */
export class ReservationsDetails {
  private readonly client: ConsumptionManagementClientContext;

  /**
   * Create a ReservationsDetails.
   * @param {ConsumptionManagementClientContext} client Reference to the service client.
   */
  constructor(client: ConsumptionManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the reservations details for provided date range.
   * @param reservationOrderId Order Id of the reservation
   * @param filter Filter reservation details by date range. The properties/UsageDate for start date
   * and end date. The filter supports 'le' and  'ge'
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationsDetailsListByReservationOrderResponse>
   */
  listByReservationOrder(reservationOrderId: string, filter: string, options?: msRest.RequestOptionsBase): Promise<Models.ReservationsDetailsListByReservationOrderResponse>;
  /**
   * @param reservationOrderId Order Id of the reservation
   * @param filter Filter reservation details by date range. The properties/UsageDate for start date
   * and end date. The filter supports 'le' and  'ge'
   * @param callback The callback
   */
  listByReservationOrder(reservationOrderId: string, filter: string, callback: msRest.ServiceCallback<Models.ReservationDetailsListResult>): void;
  /**
   * @param reservationOrderId Order Id of the reservation
   * @param filter Filter reservation details by date range. The properties/UsageDate for start date
   * and end date. The filter supports 'le' and  'ge'
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReservationOrder(reservationOrderId: string, filter: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReservationDetailsListResult>): void;
  listByReservationOrder(reservationOrderId: string, filter: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ReservationDetailsListResult>, callback?: msRest.ServiceCallback<Models.ReservationDetailsListResult>): Promise<Models.ReservationsDetailsListByReservationOrderResponse> {
    return this.client.sendOperationRequest(
      {
        reservationOrderId,
        filter,
        options
      },
      listByReservationOrderOperationSpec,
      callback) as Promise<Models.ReservationsDetailsListByReservationOrderResponse>;
  }

  /**
   * Lists the reservations details for provided date range.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation
   * @param filter Filter reservation details by date range. The properties/UsageDate for start date
   * and end date. The filter supports 'le' and  'ge'
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationsDetailsListByReservationOrderAndReservationResponse>
   */
  listByReservationOrderAndReservation(reservationOrderId: string, reservationId: string, filter: string, options?: msRest.RequestOptionsBase): Promise<Models.ReservationsDetailsListByReservationOrderAndReservationResponse>;
  /**
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation
   * @param filter Filter reservation details by date range. The properties/UsageDate for start date
   * and end date. The filter supports 'le' and  'ge'
   * @param callback The callback
   */
  listByReservationOrderAndReservation(reservationOrderId: string, reservationId: string, filter: string, callback: msRest.ServiceCallback<Models.ReservationDetailsListResult>): void;
  /**
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation
   * @param filter Filter reservation details by date range. The properties/UsageDate for start date
   * and end date. The filter supports 'le' and  'ge'
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReservationOrderAndReservation(reservationOrderId: string, reservationId: string, filter: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReservationDetailsListResult>): void;
  listByReservationOrderAndReservation(reservationOrderId: string, reservationId: string, filter: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ReservationDetailsListResult>, callback?: msRest.ServiceCallback<Models.ReservationDetailsListResult>): Promise<Models.ReservationsDetailsListByReservationOrderAndReservationResponse> {
    return this.client.sendOperationRequest(
      {
        reservationOrderId,
        reservationId,
        filter,
        options
      },
      listByReservationOrderAndReservationOperationSpec,
      callback) as Promise<Models.ReservationsDetailsListByReservationOrderAndReservationResponse>;
  }

  /**
   * Lists the reservations details for the defined scope and provided date range.
   * @param scope The scope associated with reservations details operations. This includes
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for BillingAccount scope
   * (legacy), and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   * for BillingProfile scope (modern).
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationsDetailsListResponse>
   */
  list(scope: string, options?: Models.ReservationsDetailsListOptionalParams): Promise<Models.ReservationsDetailsListResponse>;
  /**
   * @param scope The scope associated with reservations details operations. This includes
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for BillingAccount scope
   * (legacy), and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   * for BillingProfile scope (modern).
   * @param callback The callback
   */
  list(scope: string, callback: msRest.ServiceCallback<Models.ReservationDetailsListResult>): void;
  /**
   * @param scope The scope associated with reservations details operations. This includes
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for BillingAccount scope
   * (legacy), and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   * for BillingProfile scope (modern).
   * @param options The optional parameters
   * @param callback The callback
   */
  list(scope: string, options: Models.ReservationsDetailsListOptionalParams, callback: msRest.ServiceCallback<Models.ReservationDetailsListResult>): void;
  list(scope: string, options?: Models.ReservationsDetailsListOptionalParams | msRest.ServiceCallback<Models.ReservationDetailsListResult>, callback?: msRest.ServiceCallback<Models.ReservationDetailsListResult>): Promise<Models.ReservationsDetailsListResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ReservationsDetailsListResponse>;
  }

  /**
   * Lists the reservations details for provided date range.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationsDetailsListByReservationOrderNextResponse>
   */
  listByReservationOrderNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReservationsDetailsListByReservationOrderNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByReservationOrderNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ReservationDetailsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReservationOrderNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReservationDetailsListResult>): void;
  listByReservationOrderNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ReservationDetailsListResult>, callback?: msRest.ServiceCallback<Models.ReservationDetailsListResult>): Promise<Models.ReservationsDetailsListByReservationOrderNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByReservationOrderNextOperationSpec,
      callback) as Promise<Models.ReservationsDetailsListByReservationOrderNextResponse>;
  }

  /**
   * Lists the reservations details for provided date range.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationsDetailsListByReservationOrderAndReservationNextResponse>
   */
  listByReservationOrderAndReservationNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReservationsDetailsListByReservationOrderAndReservationNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByReservationOrderAndReservationNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ReservationDetailsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReservationOrderAndReservationNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReservationDetailsListResult>): void;
  listByReservationOrderAndReservationNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ReservationDetailsListResult>, callback?: msRest.ServiceCallback<Models.ReservationDetailsListResult>): Promise<Models.ReservationsDetailsListByReservationOrderAndReservationNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByReservationOrderAndReservationNextOperationSpec,
      callback) as Promise<Models.ReservationsDetailsListByReservationOrderAndReservationNextResponse>;
  }

  /**
   * Lists the reservations details for the defined scope and provided date range.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationsDetailsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReservationsDetailsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ReservationDetailsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReservationDetailsListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ReservationDetailsListResult>, callback?: msRest.ServiceCallback<Models.ReservationDetailsListResult>): Promise<Models.ReservationsDetailsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ReservationsDetailsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByReservationOrderOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Capacity/reservationorders/{reservationOrderId}/providers/Microsoft.Consumption/reservationDetails",
  urlParameters: [
    Parameters.reservationOrderId
  ],
  queryParameters: [
    Parameters.filter1,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ReservationDetailsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByReservationOrderAndReservationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Capacity/reservationorders/{reservationOrderId}/reservations/{reservationId}/providers/Microsoft.Consumption/reservationDetails",
  urlParameters: [
    Parameters.reservationOrderId,
    Parameters.reservationId
  ],
  queryParameters: [
    Parameters.filter1,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ReservationDetailsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Consumption/reservationDetails",
  urlParameters: [
    Parameters.scope
  ],
  queryParameters: [
    Parameters.startDate0,
    Parameters.endDate0,
    Parameters.filter0,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ReservationDetailsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByReservationOrderNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ReservationDetailsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByReservationOrderAndReservationNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ReservationDetailsListResult
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
      bodyMapper: Mappers.ReservationDetailsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
