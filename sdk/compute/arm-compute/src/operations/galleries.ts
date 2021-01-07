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
import * as Mappers from "../models/galleriesMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a Galleries. */
export class Galleries {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a Galleries.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets
   * and numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
   * @param gallery Parameters supplied to the create or update Shared Image Gallery operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleriesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, galleryName: string, gallery: Models.Gallery, options?: msRest.RequestOptionsBase): Promise<Models.GalleriesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,galleryName,gallery,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.GalleriesCreateOrUpdateResponse>;
  }

  /**
   * Update a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets
   * and numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
   * @param gallery Parameters supplied to the update Shared Image Gallery operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleriesUpdateResponse>
   */
  update(resourceGroupName: string, galleryName: string, gallery: Models.GalleryUpdate, options?: msRest.RequestOptionsBase): Promise<Models.GalleriesUpdateResponse> {
    return this.beginUpdate(resourceGroupName,galleryName,gallery,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.GalleriesUpdateResponse>;
  }

  /**
   * Retrieves information about a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleriesGetResponse>
   */
  get(resourceGroupName: string, galleryName: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleriesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery.
   * @param callback The callback
   */
  get(resourceGroupName: string, galleryName: string, callback: msRest.ServiceCallback<Models.Gallery>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, galleryName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Gallery>): void;
  get(resourceGroupName: string, galleryName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Gallery>, callback?: msRest.ServiceCallback<Models.Gallery>): Promise<Models.GalleriesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.GalleriesGetResponse>;
  }

  /**
   * Delete a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, galleryName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,galleryName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * List galleries under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleriesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleriesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.GalleryList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryList>, callback?: msRest.ServiceCallback<Models.GalleryList>): Promise<Models.GalleriesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.GalleriesListByResourceGroupResponse>;
  }

  /**
   * List galleries under a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleriesListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.GalleriesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.GalleryList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryList>, callback?: msRest.ServiceCallback<Models.GalleryList>): Promise<Models.GalleriesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.GalleriesListResponse>;
  }

  /**
   * Create or update a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets
   * and numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
   * @param gallery Parameters supplied to the create or update Shared Image Gallery operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, galleryName: string, gallery: Models.Gallery, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        galleryName,
        gallery,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Update a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets
   * and numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
   * @param gallery Parameters supplied to the update Shared Image Gallery operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, galleryName: string, gallery: Models.GalleryUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        galleryName,
        gallery,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Delete a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, galleryName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        galleryName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List galleries under a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleriesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleriesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.GalleryList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryList>, callback?: msRest.ServiceCallback<Models.GalleryList>): Promise<Models.GalleriesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.GalleriesListByResourceGroupNextResponse>;
  }

  /**
   * List galleries under a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleriesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleriesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.GalleryList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryList>, callback?: msRest.ServiceCallback<Models.GalleryList>): Promise<Models.GalleriesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.GalleriesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Gallery
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/galleries",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "gallery",
    mapper: {
      ...Mappers.Gallery,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Gallery
    },
    201: {
      bodyMapper: Mappers.Gallery
    },
    202: {
      bodyMapper: Mappers.Gallery
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "gallery",
    mapper: {
      ...Mappers.GalleryUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Gallery
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName
  ],
  queryParameters: [
    Parameters.apiVersion3
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

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryList
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
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
