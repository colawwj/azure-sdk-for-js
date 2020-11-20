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
import * as Mappers from "../models/galleryImagesMappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClientContext } from "../devTestLabsClientContext";

/** Class representing a GalleryImages. */
export class GalleryImages {
  private readonly client: DevTestLabsClientContext;

  /**
   * Create a GalleryImages.
   * @param {DevTestLabsClientContext} client Reference to the service client.
   */
  constructor(client: DevTestLabsClientContext) {
    this.client = client;
  }

  /**
   * List gallery images in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImagesListResponse>
   */
  list(resourceGroupName: string, labName: string, options?: Models.GalleryImagesListOptionalParams): Promise<Models.GalleryImagesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, callback: msRest.ServiceCallback<Models.GalleryImageList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, options: Models.GalleryImagesListOptionalParams, callback: msRest.ServiceCallback<Models.GalleryImageList>): void;
  list(resourceGroupName: string, labName: string, options?: Models.GalleryImagesListOptionalParams | msRest.ServiceCallback<Models.GalleryImageList>, callback?: msRest.ServiceCallback<Models.GalleryImageList>): Promise<Models.GalleryImagesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.GalleryImagesListResponse>;
  }

  /**
   * List gallery images in a given lab.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImagesListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.GalleryImagesListNextOptionalParams): Promise<Models.GalleryImagesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.GalleryImageList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.GalleryImagesListNextOptionalParams, callback: msRest.ServiceCallback<Models.GalleryImageList>): void;
  listNext(nextPageLink: string, options?: Models.GalleryImagesListNextOptionalParams | msRest.ServiceCallback<Models.GalleryImageList>, callback?: msRest.ServiceCallback<Models.GalleryImageList>): Promise<Models.GalleryImagesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.GalleryImagesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/galleryimages",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
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
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
