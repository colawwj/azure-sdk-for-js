/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/restorePointsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a RestorePoints. */
export class RestorePoints {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a RestorePoints.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * The operation to create the restore point. Updating properties of an existing restore point is
   * not allowed
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param parameters Parameters supplied to the Create restore point operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorePointsCreateResponse>
   */
  create(resourceGroupName: string, restorePointCollectionName: string, restorePointName: string, parameters: Models.RestorePoint, options?: msRest.RequestOptionsBase): Promise<Models.RestorePointsCreateResponse> {
    return this.beginCreate(resourceGroupName,restorePointCollectionName,restorePointName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RestorePointsCreateResponse>;
  }

  /**
   * The operation to delete the restore point.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the Restore Point Collection.
   * @param restorePointName The name of the restore point.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, restorePointCollectionName: string, restorePointName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,restorePointCollectionName,restorePointName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * The operation to get the restore point.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorePointsGetResponse>
   */
  get(resourceGroupName: string, restorePointCollectionName: string, restorePointName: string, options?: msRest.RequestOptionsBase): Promise<Models.RestorePointsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param callback The callback
   */
  get(resourceGroupName: string, restorePointCollectionName: string, restorePointName: string, callback: msRest.ServiceCallback<Models.RestorePoint>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, restorePointCollectionName: string, restorePointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RestorePoint>): void;
  get(resourceGroupName: string, restorePointCollectionName: string, restorePointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RestorePoint>, callback?: msRest.ServiceCallback<Models.RestorePoint>): Promise<Models.RestorePointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        restorePointCollectionName,
        restorePointName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RestorePointsGetResponse>;
  }

  /**
   * The operation to create the restore point. Updating properties of an existing restore point is
   * not allowed
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param parameters Parameters supplied to the Create restore point operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, restorePointCollectionName: string, restorePointName: string, parameters: Models.RestorePoint, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        restorePointCollectionName,
        restorePointName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * The operation to delete the restore point.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the Restore Point Collection.
   * @param restorePointName The name of the restore point.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, restorePointCollectionName: string, restorePointName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        restorePointCollectionName,
        restorePointName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{restorePointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.restorePointCollectionName,
    Parameters.restorePointName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RestorePoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{restorePointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.restorePointCollectionName,
    Parameters.restorePointName
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
      ...Mappers.RestorePoint,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.RestorePoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{restorePointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.restorePointCollectionName,
    Parameters.restorePointName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
