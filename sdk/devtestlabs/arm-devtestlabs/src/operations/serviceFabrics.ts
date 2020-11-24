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
import * as Mappers from "../models/serviceFabricsMappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClientContext } from "../devTestLabsClientContext";

/** Class representing a ServiceFabrics. */
export class ServiceFabrics {
  private readonly client: DevTestLabsClientContext;

  /**
   * Create a ServiceFabrics.
   * @param {DevTestLabsClientContext} client Reference to the service client.
   */
  constructor(client: DevTestLabsClientContext) {
    this.client = client;
  }

  /**
   * List service fabrics in a given user profile.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceFabricsListResponse>
   */
  list(resourceGroupName: string, labName: string, userName: string, options?: Models.ServiceFabricsListOptionalParams): Promise<Models.ServiceFabricsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, userName: string, callback: msRest.ServiceCallback<Models.ServiceFabricList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, userName: string, options: Models.ServiceFabricsListOptionalParams, callback: msRest.ServiceCallback<Models.ServiceFabricList>): void;
  list(resourceGroupName: string, labName: string, userName: string, options?: Models.ServiceFabricsListOptionalParams | msRest.ServiceCallback<Models.ServiceFabricList>, callback?: msRest.ServiceCallback<Models.ServiceFabricList>): Promise<Models.ServiceFabricsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        userName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ServiceFabricsListResponse>;
  }

  /**
   * Get service fabric.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceFabricsGetResponse>
   */
  get(resourceGroupName: string, labName: string, userName: string, name: string, options?: Models.ServiceFabricsGetOptionalParams): Promise<Models.ServiceFabricsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, userName: string, name: string, callback: msRest.ServiceCallback<Models.ServiceFabric>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, userName: string, name: string, options: Models.ServiceFabricsGetOptionalParams, callback: msRest.ServiceCallback<Models.ServiceFabric>): void;
  get(resourceGroupName: string, labName: string, userName: string, name: string, options?: Models.ServiceFabricsGetOptionalParams | msRest.ServiceCallback<Models.ServiceFabric>, callback?: msRest.ServiceCallback<Models.ServiceFabric>): Promise<Models.ServiceFabricsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        userName,
        name,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServiceFabricsGetResponse>;
  }

  /**
   * Create or replace an existing service fabric. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param serviceFabric A Service Fabric.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceFabricsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, labName: string, userName: string, name: string, serviceFabric: Models.ServiceFabric, options?: msRest.RequestOptionsBase): Promise<Models.ServiceFabricsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,labName,userName,name,serviceFabric,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ServiceFabricsCreateOrUpdateResponse>;
  }

  /**
   * Delete service fabric. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, labName: string, userName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,labName,userName,name,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Allows modifying tags of service fabrics. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param serviceFabric A Service Fabric.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceFabricsUpdateResponse>
   */
  update(resourceGroupName: string, labName: string, userName: string, name: string, serviceFabric: Models.ServiceFabricFragment, options?: msRest.RequestOptionsBase): Promise<Models.ServiceFabricsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param serviceFabric A Service Fabric.
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, userName: string, name: string, serviceFabric: Models.ServiceFabricFragment, callback: msRest.ServiceCallback<Models.ServiceFabric>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param serviceFabric A Service Fabric.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, userName: string, name: string, serviceFabric: Models.ServiceFabricFragment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServiceFabric>): void;
  update(resourceGroupName: string, labName: string, userName: string, name: string, serviceFabric: Models.ServiceFabricFragment, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServiceFabric>, callback?: msRest.ServiceCallback<Models.ServiceFabric>): Promise<Models.ServiceFabricsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        userName,
        name,
        serviceFabric,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ServiceFabricsUpdateResponse>;
  }

  /**
   * Lists the applicable start/stop schedules, if any.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceFabricsListApplicableSchedulesResponse>
   */
  listApplicableSchedules(resourceGroupName: string, labName: string, userName: string, name: string, options?: msRest.RequestOptionsBase): Promise<Models.ServiceFabricsListApplicableSchedulesResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param callback The callback
   */
  listApplicableSchedules(resourceGroupName: string, labName: string, userName: string, name: string, callback: msRest.ServiceCallback<Models.ApplicableSchedule>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param options The optional parameters
   * @param callback The callback
   */
  listApplicableSchedules(resourceGroupName: string, labName: string, userName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicableSchedule>): void;
  listApplicableSchedules(resourceGroupName: string, labName: string, userName: string, name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicableSchedule>, callback?: msRest.ServiceCallback<Models.ApplicableSchedule>): Promise<Models.ServiceFabricsListApplicableSchedulesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        userName,
        name,
        options
      },
      listApplicableSchedulesOperationSpec,
      callback) as Promise<Models.ServiceFabricsListApplicableSchedulesResponse>;
  }

  /**
   * Start a service fabric. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  start(resourceGroupName: string, labName: string, userName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStart(resourceGroupName,labName,userName,name,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Stop a service fabric This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(resourceGroupName: string, labName: string, userName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStop(resourceGroupName,labName,userName,name,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Create or replace an existing service fabric. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param serviceFabric A Service Fabric.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, labName: string, userName: string, name: string, serviceFabric: Models.ServiceFabric, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        userName,
        name,
        serviceFabric,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete service fabric. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, labName: string, userName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        userName,
        name,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Start a service fabric. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStart(resourceGroupName: string, labName: string, userName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        userName,
        name,
        options
      },
      beginStartOperationSpec,
      options);
  }

  /**
   * Stop a service fabric This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStop(resourceGroupName: string, labName: string, userName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        userName,
        name,
        options
      },
      beginStopOperationSpec,
      options);
  }

  /**
   * List service fabrics in a given user profile.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceFabricsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.ServiceFabricsListNextOptionalParams): Promise<Models.ServiceFabricsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ServiceFabricList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.ServiceFabricsListNextOptionalParams, callback: msRest.ServiceCallback<Models.ServiceFabricList>): void;
  listNext(nextPageLink: string, options?: Models.ServiceFabricsListNextOptionalParams | msRest.ServiceCallback<Models.ServiceFabricList>, callback?: msRest.ServiceCallback<Models.ServiceFabricList>): Promise<Models.ServiceFabricsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ServiceFabricsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName
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
      bodyMapper: Mappers.ServiceFabricList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceFabric
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "serviceFabric",
    mapper: {
      ...Mappers.ServiceFabricFragment,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServiceFabric
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listApplicableSchedulesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/listApplicableSchedules",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicableSchedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "serviceFabric",
    mapper: {
      ...Mappers.ServiceFabric,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServiceFabric
    },
    201: {
      bodyMapper: Mappers.ServiceFabric
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
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

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/start",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/stop",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
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
      bodyMapper: Mappers.ServiceFabricList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
