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
import * as Mappers from "../models/applicationsMappers";
import * as Parameters from "../models/parameters";
import { ApplicationClientContext } from "../applicationClientContext";

/** Class representing a Applications. */
export class Applications {
  private readonly client: ApplicationClientContext;

  /**
   * Create a Applications.
   * @param {ApplicationClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationClientContext) {
    this.client = client;
  }

  /**
   * Gets the managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsGetResponse>
   */
  get(resourceGroupName: string, applicationName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param callback The callback
   */
  get(resourceGroupName: string, applicationName: string, callback: msRest.ServiceCallback<Models.Application>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, applicationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Application>): void;
  get(resourceGroupName: string, applicationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Application>, callback?: msRest.ServiceCallback<Models.Application>): Promise<Models.ApplicationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        applicationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApplicationsGetResponse>;
  }

  /**
   * Deletes the managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, applicationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,applicationName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a new managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param parameters Parameters supplied to the create or update a managed application.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, applicationName: string, parameters: Models.Application, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,applicationName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApplicationsCreateOrUpdateResponse>;
  }

  /**
   * Updates an existing managed application. The only value that can be updated via PATCH currently
   * is the tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsUpdateResponse>
   */
  update(resourceGroupName: string, applicationName: string, options?: Models.ApplicationsUpdateOptionalParams): Promise<Models.ApplicationsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param callback The callback
   */
  update(resourceGroupName: string, applicationName: string, callback: msRest.ServiceCallback<Models.Application>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, applicationName: string, options: Models.ApplicationsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Application>): void;
  update(resourceGroupName: string, applicationName: string, options?: Models.ApplicationsUpdateOptionalParams | msRest.ServiceCallback<Models.Application>, callback?: msRest.ServiceCallback<Models.Application>): Promise<Models.ApplicationsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        applicationName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ApplicationsUpdateResponse>;
  }

  /**
   * Gets all the applications within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationListResult>, callback?: msRest.ServiceCallback<Models.ApplicationListResult>): Promise<Models.ApplicationsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ApplicationsListByResourceGroupResponse>;
  }

  /**
   * Gets all the applications within a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationListResult>, callback?: msRest.ServiceCallback<Models.ApplicationListResult>): Promise<Models.ApplicationsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.ApplicationsListBySubscriptionResponse>;
  }

  /**
   * Gets the managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   * application name and the managed application resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsGetByIdResponse>
   */
  getById(applicationId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsGetByIdResponse>;
  /**
   * @param applicationId The fully qualified ID of the managed application, including the managed
   * application name and the managed application resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param callback The callback
   */
  getById(applicationId: string, callback: msRest.ServiceCallback<Models.Application>): void;
  /**
   * @param applicationId The fully qualified ID of the managed application, including the managed
   * application name and the managed application resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param options The optional parameters
   * @param callback The callback
   */
  getById(applicationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Application>): void;
  getById(applicationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Application>, callback?: msRest.ServiceCallback<Models.Application>): Promise<Models.ApplicationsGetByIdResponse> {
    return this.client.sendOperationRequest(
      {
        applicationId,
        options
      },
      getByIdOperationSpec,
      callback) as Promise<Models.ApplicationsGetByIdResponse>;
  }

  /**
   * Deletes the managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   * application name and the managed application resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteById(applicationId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteById(applicationId,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a new managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   * application name and the managed application resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param parameters Parameters supplied to the create or update a managed application.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsCreateOrUpdateByIdResponse>
   */
  createOrUpdateById(applicationId: string, parameters: Models.Application, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsCreateOrUpdateByIdResponse> {
    return this.beginCreateOrUpdateById(applicationId,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApplicationsCreateOrUpdateByIdResponse>;
  }

  /**
   * Updates an existing managed application. The only value that can be updated via PATCH currently
   * is the tags.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   * application name and the managed application resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsUpdateByIdResponse>
   */
  updateById(applicationId: string, options?: Models.ApplicationsUpdateByIdOptionalParams): Promise<Models.ApplicationsUpdateByIdResponse>;
  /**
   * @param applicationId The fully qualified ID of the managed application, including the managed
   * application name and the managed application resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param callback The callback
   */
  updateById(applicationId: string, callback: msRest.ServiceCallback<Models.Application>): void;
  /**
   * @param applicationId The fully qualified ID of the managed application, including the managed
   * application name and the managed application resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param options The optional parameters
   * @param callback The callback
   */
  updateById(applicationId: string, options: Models.ApplicationsUpdateByIdOptionalParams, callback: msRest.ServiceCallback<Models.Application>): void;
  updateById(applicationId: string, options?: Models.ApplicationsUpdateByIdOptionalParams | msRest.ServiceCallback<Models.Application>, callback?: msRest.ServiceCallback<Models.Application>): Promise<Models.ApplicationsUpdateByIdResponse> {
    return this.client.sendOperationRequest(
      {
        applicationId,
        options
      },
      updateByIdOperationSpec,
      callback) as Promise<Models.ApplicationsUpdateByIdResponse>;
  }

  /**
   * Deletes the managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, applicationName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        applicationName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates a new managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param parameters Parameters supplied to the create or update a managed application.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, applicationName: string, parameters: Models.Application, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        applicationName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   * application name and the managed application resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteById(applicationId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        applicationId,
        options
      },
      beginDeleteByIdOperationSpec,
      options);
  }

  /**
   * Creates a new managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   * application name and the managed application resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param parameters Parameters supplied to the create or update a managed application.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdateById(applicationId: string, parameters: Models.Application, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        applicationId,
        parameters,
        options
      },
      beginCreateOrUpdateByIdOperationSpec,
      options);
  }

  /**
   * Gets all the applications within a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationListResult>, callback?: msRest.ServiceCallback<Models.ApplicationListResult>): Promise<Models.ApplicationsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ApplicationsListByResourceGroupNextResponse>;
  }

  /**
   * Gets all the applications within a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationListResult>, callback?: msRest.ServiceCallback<Models.ApplicationListResult>): Promise<Models.ApplicationsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.ApplicationsListBySubscriptionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationName,
    Parameters.subscriptionId
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
      "parameters"
    ],
    mapper: Mappers.ApplicationPatchable
  },
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Solutions/applications",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{applicationId}",
  urlParameters: [
    Parameters.applicationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "{applicationId}",
  urlParameters: [
    Parameters.applicationId
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
      "parameters"
    ],
    mapper: Mappers.Application
  },
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Application,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    201: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{applicationId}",
  urlParameters: [
    Parameters.applicationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{applicationId}",
  urlParameters: [
    Parameters.applicationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Application,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    201: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
