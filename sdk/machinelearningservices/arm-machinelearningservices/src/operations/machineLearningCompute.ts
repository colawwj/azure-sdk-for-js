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
import * as Mappers from "../models/machineLearningComputeMappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspacesContext } from "../azureMachineLearningWorkspacesContext";

/** Class representing a MachineLearningCompute. */
export class MachineLearningCompute {
  private readonly client: AzureMachineLearningWorkspacesContext;

  /**
   * Create a MachineLearningCompute.
   * @param {AzureMachineLearningWorkspacesContext} client Reference to the service client.
   */
  constructor(client: AzureMachineLearningWorkspacesContext) {
    this.client = client;
  }

  /**
   * Gets computes in specified workspace.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineLearningComputeListByWorkspaceResponse>
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: Models.MachineLearningComputeListByWorkspaceOptionalParams): Promise<Models.MachineLearningComputeListByWorkspaceResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.PaginatedComputeResourcesList>): void;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options: Models.MachineLearningComputeListByWorkspaceOptionalParams, callback: msRest.ServiceCallback<Models.PaginatedComputeResourcesList>): void;
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: Models.MachineLearningComputeListByWorkspaceOptionalParams | msRest.ServiceCallback<Models.PaginatedComputeResourcesList>, callback?: msRest.ServiceCallback<Models.PaginatedComputeResourcesList>): Promise<Models.MachineLearningComputeListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listByWorkspaceOperationSpec,
      callback) as Promise<Models.MachineLearningComputeListByWorkspaceResponse>;
  }

  /**
   * Gets compute definition by its name. Any secrets (storage keys, service credentials, etc) are
   * not returned - use 'keys' nested resource to get them.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineLearningComputeGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, computeName: string, options?: msRest.RequestOptionsBase): Promise<Models.MachineLearningComputeGetResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, computeName: string, callback: msRest.ServiceCallback<Models.ComputeResource>): void;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, computeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ComputeResource>): void;
  get(resourceGroupName: string, workspaceName: string, computeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ComputeResource>, callback?: msRest.ServiceCallback<Models.ComputeResource>): Promise<Models.MachineLearningComputeGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        computeName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MachineLearningComputeGetResponse>;
  }

  /**
   * Creates or updates compute. This call will overwrite a compute if it exists. This is a
   * nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify
   * that it does not exist yet.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param parameters Payload with Machine Learning compute definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineLearningComputeCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, computeName: string, parameters: Models.ComputeResource, options?: msRest.RequestOptionsBase): Promise<Models.MachineLearningComputeCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,workspaceName,computeName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.MachineLearningComputeCreateOrUpdateResponse>;
  }

  /**
   * Updates properties of a compute. This call will overwrite a compute if it exists. This is a
   * nonrecoverable operation.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param parameters Additional parameters for cluster update.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineLearningComputeUpdateResponse>
   */
  update(resourceGroupName: string, workspaceName: string, computeName: string, parameters: Models.ClusterUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.MachineLearningComputeUpdateResponse> {
    return this.beginUpdate(resourceGroupName,workspaceName,computeName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.MachineLearningComputeUpdateResponse>;
  }

  /**
   * Deletes specified Machine Learning compute.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param underlyingResourceAction Delete the underlying compute if 'Delete', or detach the
   * underlying compute from workspace if 'Detach'. Possible values include: 'Delete', 'Detach'
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineLearningComputeDeleteResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, computeName: string, underlyingResourceAction: Models.UnderlyingResourceAction, options?: msRest.RequestOptionsBase): Promise<Models.MachineLearningComputeDeleteResponse> {
    return this.beginDeleteMethod(resourceGroupName,workspaceName,computeName,underlyingResourceAction,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.MachineLearningComputeDeleteResponse>;
  }

  /**
   * Get the details (e.g IP address, port etc) of all the compute nodes in the compute.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineLearningComputeListNodesResponse>
   */
  listNodes(resourceGroupName: string, workspaceName: string, computeName: string, options?: msRest.RequestOptionsBase): Promise<Models.MachineLearningComputeListNodesResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param callback The callback
   */
  listNodes(resourceGroupName: string, workspaceName: string, computeName: string, callback: msRest.ServiceCallback<Models.AmlComputeNodesInformation>): void;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNodes(resourceGroupName: string, workspaceName: string, computeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AmlComputeNodesInformation>): void;
  listNodes(resourceGroupName: string, workspaceName: string, computeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AmlComputeNodesInformation>, callback?: msRest.ServiceCallback<Models.AmlComputeNodesInformation>): Promise<Models.MachineLearningComputeListNodesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        computeName,
        options
      },
      listNodesOperationSpec,
      callback) as Promise<Models.MachineLearningComputeListNodesResponse>;
  }

  /**
   * Gets secrets related to Machine Learning compute (storage keys, service credentials, etc).
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineLearningComputeListKeysResponse>
   */
  listKeys(resourceGroupName: string, workspaceName: string, computeName: string, options?: msRest.RequestOptionsBase): Promise<Models.MachineLearningComputeListKeysResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, workspaceName: string, computeName: string, callback: msRest.ServiceCallback<Models.ComputeSecretsUnion>): void;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The optional parameters
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, workspaceName: string, computeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ComputeSecretsUnion>): void;
  listKeys(resourceGroupName: string, workspaceName: string, computeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ComputeSecretsUnion>, callback?: msRest.ServiceCallback<Models.ComputeSecretsUnion>): Promise<Models.MachineLearningComputeListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        computeName,
        options
      },
      listKeysOperationSpec,
      callback) as Promise<Models.MachineLearningComputeListKeysResponse>;
  }

  /**
   * Posts a start action to a compute instance
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  start(resourceGroupName: string, workspaceName: string, computeName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param callback The callback
   */
  start(resourceGroupName: string, workspaceName: string, computeName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The optional parameters
   * @param callback The callback
   */
  start(resourceGroupName: string, workspaceName: string, computeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  start(resourceGroupName: string, workspaceName: string, computeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        computeName,
        options
      },
      startOperationSpec,
      callback);
  }

  /**
   * Posts a stop action to a compute instance
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(resourceGroupName: string, workspaceName: string, computeName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param callback The callback
   */
  stop(resourceGroupName: string, workspaceName: string, computeName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The optional parameters
   * @param callback The callback
   */
  stop(resourceGroupName: string, workspaceName: string, computeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  stop(resourceGroupName: string, workspaceName: string, computeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        computeName,
        options
      },
      stopOperationSpec,
      callback);
  }

  /**
   * Posts a restart action to a compute instance
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  restart(resourceGroupName: string, workspaceName: string, computeName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param callback The callback
   */
  restart(resourceGroupName: string, workspaceName: string, computeName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The optional parameters
   * @param callback The callback
   */
  restart(resourceGroupName: string, workspaceName: string, computeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  restart(resourceGroupName: string, workspaceName: string, computeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        computeName,
        options
      },
      restartOperationSpec,
      callback);
  }

  /**
   * Creates or updates compute. This call will overwrite a compute if it exists. This is a
   * nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify
   * that it does not exist yet.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param parameters Payload with Machine Learning compute definition.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, workspaceName: string, computeName: string, parameters: Models.ComputeResource, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        computeName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates properties of a compute. This call will overwrite a compute if it exists. This is a
   * nonrecoverable operation.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param parameters Additional parameters for cluster update.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, workspaceName: string, computeName: string, parameters: Models.ClusterUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        computeName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes specified Machine Learning compute.
   * @param resourceGroupName Name of the resource group in which workspace is located.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param underlyingResourceAction Delete the underlying compute if 'Delete', or detach the
   * underlying compute from workspace if 'Detach'. Possible values include: 'Delete', 'Detach'
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, workspaceName: string, computeName: string, underlyingResourceAction: Models.UnderlyingResourceAction, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        computeName,
        underlyingResourceAction,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets computes in specified workspace.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineLearningComputeListByWorkspaceNextResponse>
   */
  listByWorkspaceNext(nextPageLink: string, options?: Models.MachineLearningComputeListByWorkspaceNextOptionalParams): Promise<Models.MachineLearningComputeListByWorkspaceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PaginatedComputeResourcesList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, options: Models.MachineLearningComputeListByWorkspaceNextOptionalParams, callback: msRest.ServiceCallback<Models.PaginatedComputeResourcesList>): void;
  listByWorkspaceNext(nextPageLink: string, options?: Models.MachineLearningComputeListByWorkspaceNextOptionalParams | msRest.ServiceCallback<Models.PaginatedComputeResourcesList>, callback?: msRest.ServiceCallback<Models.PaginatedComputeResourcesList>): Promise<Models.MachineLearningComputeListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByWorkspaceNextOperationSpec,
      callback) as Promise<Models.MachineLearningComputeListByWorkspaceNextResponse>;
  }

  /**
   * Get the details (e.g IP address, port etc) of all the compute nodes in the compute.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineLearningComputeListNodesNextResponse>
   */
  listNodesNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.MachineLearningComputeListNodesNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNodesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AmlComputeNodesInformation>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNodesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AmlComputeNodesInformation>): void;
  listNodesNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AmlComputeNodesInformation>, callback?: msRest.ServiceCallback<Models.AmlComputeNodesInformation>): Promise<Models.MachineLearningComputeListNodesNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNodesNextOperationSpec,
      callback) as Promise<Models.MachineLearningComputeListNodesNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByWorkspaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PaginatedComputeResourcesList
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ComputeResource
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const listNodesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/listNodes",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AmlComputeNodesInformation
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const listKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/listKeys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ComputeSecrets
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const startOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/start",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const stopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/stop",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const restartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/restart",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
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
      ...Mappers.ComputeResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ComputeResource,
      headersMapper: Mappers.MachineLearningComputeCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.ComputeResource,
      headersMapper: Mappers.MachineLearningComputeCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError,
      headersMapper: Mappers.MachineLearningComputeCreateOrUpdateHeaders
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
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
      ...Mappers.ClusterUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ComputeResource
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.underlyingResourceAction
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.MachineLearningComputeDeleteHeaders
    },
    202: {
      headersMapper: Mappers.MachineLearningComputeDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError,
      headersMapper: Mappers.MachineLearningComputeDeleteHeaders
    }
  },
  serializer
};

const listByWorkspaceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PaginatedComputeResourcesList
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const listNodesNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
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
      bodyMapper: Mappers.AmlComputeNodesInformation
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};
