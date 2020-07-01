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
import * as Mappers from "../models/listMappers";
import * as Parameters from "../models/parameters";
import { ResourceGraphClientContext } from "../resourceGraphClientContext";

/** Class representing a List. */
export class List {
  private readonly client: ResourceGraphClientContext;

  /**
   * Create a List.
   * @param {ResourceGraphClientContext} client Reference to the service client.
   */
  constructor(client: ResourceGraphClientContext) {
    this.client = client;
  }

  /**
   * List changes to a resource for a given time interval.
   * @param parameters the parameters for this request for changes.
   * @param [options] The optional parameters
   * @returns Promise<Models.ListResourceChangesResponse>
   */
  resourceChanges(parameters: Models.ResourceChangesRequestParameters, options?: msRest.RequestOptionsBase): Promise<Models.ListResourceChangesResponse>;
  /**
   * @param parameters the parameters for this request for changes.
   * @param callback The callback
   */
  resourceChanges(parameters: Models.ResourceChangesRequestParameters, callback: msRest.ServiceCallback<Models.ResourceChangeList>): void;
  /**
   * @param parameters the parameters for this request for changes.
   * @param options The optional parameters
   * @param callback The callback
   */
  resourceChanges(parameters: Models.ResourceChangesRequestParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceChangeList>): void;
  resourceChanges(parameters: Models.ResourceChangesRequestParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceChangeList>, callback?: msRest.ServiceCallback<Models.ResourceChangeList>): Promise<Models.ListResourceChangesResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        options
      },
      resourceChangesOperationSpec,
      callback) as Promise<Models.ListResourceChangesResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const resourceChangesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.ResourceGraph/resourceChanges",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ResourceChangesRequestParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ResourceChangeList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
