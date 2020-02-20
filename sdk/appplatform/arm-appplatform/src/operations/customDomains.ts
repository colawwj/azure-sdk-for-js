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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/customDomainsMappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClientContext } from "../appPlatformManagementClientContext";

/** Class representing a CustomDomains. */
export class CustomDomains {
  private readonly client: AppPlatformManagementClientContext;

  /**
   * Create a CustomDomains.
   * @param {AppPlatformManagementClientContext} client Reference to the service client.
   */
  constructor(client: AppPlatformManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the custom domain of one lifecycle application.
   * @param domainName
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomDomainsGetAsyncResponse>
   */
  getAsync(domainName: string, resourceGroupName: string, serviceName: string, appName: string, options?: msRest.RequestOptionsBase): Promise<Models.CustomDomainsGetAsyncResponse>;
  /**
   * @param domainName
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param callback The callback
   */
  getAsync(domainName: string, resourceGroupName: string, serviceName: string, appName: string, callback: msRest.ServiceCallback<Models.CustomDomainResource>): void;
  /**
   * @param domainName
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAsync(domainName: string, resourceGroupName: string, serviceName: string, appName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CustomDomainResource>): void;
  getAsync(domainName: string, resourceGroupName: string, serviceName: string, appName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CustomDomainResource>, callback?: msRest.ServiceCallback<Models.CustomDomainResource>): Promise<Models.CustomDomainsGetAsyncResponse> {
    return this.client.sendOperationRequest(
      {
        domainName,
        resourceGroupName,
        serviceName,
        appName,
        options
      },
      getAsyncOperationSpec,
      callback) as Promise<Models.CustomDomainsGetAsyncResponse>;
  }

  /**
   * Create or update custom domain of one lifecycle application.
   * @param domainName
   * @param domainResource
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomDomainsCreateOrUpdateAsyncResponse>
   */
  createOrUpdateAsync(domainName: string, domainResource: Models.CustomDomainResource, resourceGroupName: string, serviceName: string, appName: string, options?: msRest.RequestOptionsBase): Promise<Models.CustomDomainsCreateOrUpdateAsyncResponse> {
    return this.beginCreateOrUpdateAsync(domainName,domainResource,resourceGroupName,serviceName,appName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CustomDomainsCreateOrUpdateAsyncResponse>;
  }

  /**
   * Delete the custom domain of one lifecycle application.
   * @param domainName
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomDomainsDeleteAsyncResponse>
   */
  deleteAsync(domainName: string, resourceGroupName: string, serviceName: string, appName: string, options?: msRest.RequestOptionsBase): Promise<Models.CustomDomainsDeleteAsyncResponse>;
  /**
   * @param domainName
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param callback The callback
   */
  deleteAsync(domainName: string, resourceGroupName: string, serviceName: string, appName: string, callback: msRest.ServiceCallback<Models.CustomDomainResource>): void;
  /**
   * @param domainName
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteAsync(domainName: string, resourceGroupName: string, serviceName: string, appName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CustomDomainResource>): void;
  deleteAsync(domainName: string, resourceGroupName: string, serviceName: string, appName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CustomDomainResource>, callback?: msRest.ServiceCallback<Models.CustomDomainResource>): Promise<Models.CustomDomainsDeleteAsyncResponse> {
    return this.client.sendOperationRequest(
      {
        domainName,
        resourceGroupName,
        serviceName,
        appName,
        options
      },
      deleteAsyncOperationSpec,
      callback) as Promise<Models.CustomDomainsDeleteAsyncResponse>;
  }

  /**
   * Update custom domain of one lifecycle application.
   * @param domainName
   * @param domainResource
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomDomainsPatchAsyncResponse>
   */
  patchAsync(domainName: string, domainResource: Models.CustomDomainResource, resourceGroupName: string, serviceName: string, appName: string, options?: msRest.RequestOptionsBase): Promise<Models.CustomDomainsPatchAsyncResponse>;
  /**
   * @param domainName
   * @param domainResource
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param callback The callback
   */
  patchAsync(domainName: string, domainResource: Models.CustomDomainResource, resourceGroupName: string, serviceName: string, appName: string, callback: msRest.ServiceCallback<Models.CustomDomainResource>): void;
  /**
   * @param domainName
   * @param domainResource
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  patchAsync(domainName: string, domainResource: Models.CustomDomainResource, resourceGroupName: string, serviceName: string, appName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CustomDomainResource>): void;
  patchAsync(domainName: string, domainResource: Models.CustomDomainResource, resourceGroupName: string, serviceName: string, appName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CustomDomainResource>, callback?: msRest.ServiceCallback<Models.CustomDomainResource>): Promise<Models.CustomDomainsPatchAsyncResponse> {
    return this.client.sendOperationRequest(
      {
        domainName,
        domainResource,
        resourceGroupName,
        serviceName,
        appName,
        options
      },
      patchAsyncOperationSpec,
      callback) as Promise<Models.CustomDomainsPatchAsyncResponse>;
  }

  /**
   * List the custom domains of one lifecycle application.
   * @param domainName
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomDomainsListAsyncResponse>
   */
  listAsync(domainName: string, resourceGroupName: string, serviceName: string, appName: string, options?: msRest.RequestOptionsBase): Promise<Models.CustomDomainsListAsyncResponse>;
  /**
   * @param domainName
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param callback The callback
   */
  listAsync(domainName: string, resourceGroupName: string, serviceName: string, appName: string, callback: msRest.ServiceCallback<Models.CustomDomainResourceCollection>): void;
  /**
   * @param domainName
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAsync(domainName: string, resourceGroupName: string, serviceName: string, appName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CustomDomainResourceCollection>): void;
  listAsync(domainName: string, resourceGroupName: string, serviceName: string, appName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CustomDomainResourceCollection>, callback?: msRest.ServiceCallback<Models.CustomDomainResourceCollection>): Promise<Models.CustomDomainsListAsyncResponse> {
    return this.client.sendOperationRequest(
      {
        domainName,
        resourceGroupName,
        serviceName,
        appName,
        options
      },
      listAsyncOperationSpec,
      callback) as Promise<Models.CustomDomainsListAsyncResponse>;
  }

  /**
   * Create or update custom domain of one lifecycle application.
   * @param domainName
   * @param domainResource
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdateAsync(domainName: string, domainResource: Models.CustomDomainResource, resourceGroupName: string, serviceName: string, appName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        domainName,
        domainResource,
        resourceGroupName,
        serviceName,
        appName,
        options
      },
      beginCreateOrUpdateAsyncOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getAsyncOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
  urlParameters: [
    Parameters.domainName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteAsyncOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
  urlParameters: [
    Parameters.domainName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainResource
    },
    204: {
      bodyMapper: Mappers.CustomDomainResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const patchAsyncOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
  urlParameters: [
    Parameters.domainName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "domainResource",
    mapper: {
      ...Mappers.CustomDomainResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAsyncOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains",
  urlParameters: [
    Parameters.domainName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateAsyncOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
  urlParameters: [
    Parameters.domainName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "domainResource",
    mapper: {
      ...Mappers.CustomDomainResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainResource
    },
    201: {
      bodyMapper: Mappers.CustomDomainResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
