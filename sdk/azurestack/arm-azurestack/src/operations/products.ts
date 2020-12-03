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
import * as Mappers from "../models/productsMappers";
import * as Parameters from "../models/parameters";
import { AzureStackManagementClientContext } from "../azureStackManagementClientContext";

/** Class representing a Products. */
export class Products {
  private readonly client: AzureStackManagementClientContext;

  /**
   * Create a Products.
   * @param {AzureStackManagementClientContext} client Reference to the service client.
   */
  constructor(client: AzureStackManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns a list of products.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsListResponse>
   */
  list(resourceGroup: string, registrationName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsListResponse>;
  /**
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param callback The callback
   */
  list(resourceGroup: string, registrationName: string, callback: msRest.ServiceCallback<Models.ProductList>): void;
  /**
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroup: string, registrationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProductList>): void;
  list(resourceGroup: string, registrationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProductList>, callback?: msRest.ServiceCallback<Models.ProductList>): Promise<Models.ProductsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        registrationName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ProductsListResponse>;
  }

  /**
   * Returns the specified product.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsGetResponse>
   */
  get(resourceGroup: string, registrationName: string, productName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsGetResponse>;
  /**
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param callback The callback
   */
  get(resourceGroup: string, registrationName: string, productName: string, callback: msRest.ServiceCallback<Models.Product>): void;
  /**
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroup: string, registrationName: string, productName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Product>): void;
  get(resourceGroup: string, registrationName: string, productName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Product>, callback?: msRest.ServiceCallback<Models.Product>): Promise<Models.ProductsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        registrationName,
        productName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProductsGetResponse>;
  }

  /**
   * Returns the extended properties of a product.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsListDetailsResponse>
   */
  listDetails(resourceGroup: string, registrationName: string, productName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsListDetailsResponse>;
  /**
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param callback The callback
   */
  listDetails(resourceGroup: string, registrationName: string, productName: string, callback: msRest.ServiceCallback<Models.ExtendedProduct>): void;
  /**
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param options The optional parameters
   * @param callback The callback
   */
  listDetails(resourceGroup: string, registrationName: string, productName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtendedProduct>): void;
  listDetails(resourceGroup: string, registrationName: string, productName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtendedProduct>, callback?: msRest.ServiceCallback<Models.ExtendedProduct>): Promise<Models.ProductsListDetailsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        registrationName,
        productName,
        options
      },
      listDetailsOperationSpec,
      callback) as Promise<Models.ProductsListDetailsResponse>;
  }

  /**
   * Returns a list of products.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsGetProductsResponse>
   */
  getProducts(resourceGroup: string, registrationName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsGetProductsResponse>;
  /**
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param callback The callback
   */
  getProducts(resourceGroup: string, registrationName: string, callback: msRest.ServiceCallback<Models.ProductList>): void;
  /**
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param options The optional parameters
   * @param callback The callback
   */
  getProducts(resourceGroup: string, registrationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProductList>): void;
  getProducts(resourceGroup: string, registrationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProductList>, callback?: msRest.ServiceCallback<Models.ProductList>): Promise<Models.ProductsGetProductsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        registrationName,
        options
      },
      getProductsOperationSpec,
      callback) as Promise<Models.ProductsGetProductsResponse>;
  }

  /**
   * Returns the specified product.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsGetProductResponse>
   */
  getProduct(resourceGroup: string, registrationName: string, productName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsGetProductResponse>;
  /**
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param callback The callback
   */
  getProduct(resourceGroup: string, registrationName: string, productName: string, callback: msRest.ServiceCallback<Models.Product>): void;
  /**
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param options The optional parameters
   * @param callback The callback
   */
  getProduct(resourceGroup: string, registrationName: string, productName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Product>): void;
  getProduct(resourceGroup: string, registrationName: string, productName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Product>, callback?: msRest.ServiceCallback<Models.Product>): Promise<Models.ProductsGetProductResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        registrationName,
        productName,
        options
      },
      getProductOperationSpec,
      callback) as Promise<Models.ProductsGetProductResponse>;
  }

  /**
   * Returns the specified product.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsUploadLogResponse>
   */
  uploadLog(resourceGroup: string, registrationName: string, productName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsUploadLogResponse>;
  /**
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param callback The callback
   */
  uploadLog(resourceGroup: string, registrationName: string, productName: string, callback: msRest.ServiceCallback<Models.ProductLog>): void;
  /**
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param options The optional parameters
   * @param callback The callback
   */
  uploadLog(resourceGroup: string, registrationName: string, productName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProductLog>): void;
  uploadLog(resourceGroup: string, registrationName: string, productName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProductLog>, callback?: msRest.ServiceCallback<Models.ProductLog>): Promise<Models.ProductsUploadLogResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        registrationName,
        productName,
        options
      },
      uploadLogOperationSpec,
      callback) as Promise<Models.ProductsUploadLogResponse>;
  }

  /**
   * Returns a list of products.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProductList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProductList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProductList>, callback?: msRest.ServiceCallback<Models.ProductList>): Promise<Models.ProductsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ProductsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.registrationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProductList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.registrationName,
    Parameters.productName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listDetailsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName}/listDetails",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.registrationName,
    Parameters.productName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedProduct
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getProductsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/_all/GetProducts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.registrationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "deviceConfiguration"
    ],
    mapper: Mappers.DeviceConfiguration
  },
  responses: {
    200: {
      bodyMapper: Mappers.ProductList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getProductOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName}/GetProduct",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.registrationName,
    Parameters.productName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "deviceConfiguration"
    ],
    mapper: Mappers.DeviceConfiguration
  },
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const uploadLogOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName}/uploadProductLog",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.registrationName,
    Parameters.productName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "marketplaceProductLogUpdate"
    ],
    mapper: Mappers.MarketplaceProductLogUpdate
  },
  responses: {
    200: {
      bodyMapper: Mappers.ProductLog
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
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProductList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
