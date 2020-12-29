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
import * as Mappers from "../models/securitySolutionsReferenceDataOperationsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a SecuritySolutionsReferenceDataOperations. */
export class SecuritySolutionsReferenceDataOperations {
  private readonly client: SecurityCenterContext;

  /**
   * Create a SecuritySolutionsReferenceDataOperations.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Gets a list of all supported Security Solutions for the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecuritySolutionsReferenceDataListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.SecuritySolutionsReferenceDataListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.SecuritySolutionsReferenceDataList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecuritySolutionsReferenceDataList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecuritySolutionsReferenceDataList>, callback?: msRest.ServiceCallback<Models.SecuritySolutionsReferenceDataList>): Promise<Models.SecuritySolutionsReferenceDataListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SecuritySolutionsReferenceDataListResponse>;
  }

  /**
   * Gets list of all supported Security Solutions for subscription and location.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecuritySolutionsReferenceDataListByHomeRegionResponse>
   */
  listByHomeRegion(options?: msRest.RequestOptionsBase): Promise<Models.SecuritySolutionsReferenceDataListByHomeRegionResponse>;
  /**
   * @param callback The callback
   */
  listByHomeRegion(callback: msRest.ServiceCallback<Models.SecuritySolutionsReferenceDataList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHomeRegion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecuritySolutionsReferenceDataList>): void;
  listByHomeRegion(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecuritySolutionsReferenceDataList>, callback?: msRest.ServiceCallback<Models.SecuritySolutionsReferenceDataList>): Promise<Models.SecuritySolutionsReferenceDataListByHomeRegionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listByHomeRegionOperationSpec,
      callback) as Promise<Models.SecuritySolutionsReferenceDataListByHomeRegionResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/securitySolutionsReferenceData",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecuritySolutionsReferenceDataList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHomeRegionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/securitySolutionsReferenceData",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecuritySolutionsReferenceDataList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
