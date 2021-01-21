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
import * as Mappers from "../models/serversMappers";
import * as Parameters from "../models/parameters";
import { AnalysisServicesManagementClientContext } from "../analysisServicesManagementClientContext";

/** Class representing a Servers. */
export class Servers {
  private readonly client: AnalysisServicesManagementClientContext;

  /**
   * Create a Servers.
   * @param {AnalysisServicesManagementClientContext} client Reference to the service client.
   */
  constructor(client: AnalysisServicesManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets details about the specified Analysis Services server.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be a minimum of 3
   * characters, and a maximum of 63.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServersGetDetailsResponse>
   */
  getDetails(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServersGetDetailsResponse>;
  /**
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be a minimum of 3
   * characters, and a maximum of 63.
   * @param callback The callback
   */
  getDetails(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.AnalysisServicesServer>): void;
  /**
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be a minimum of 3
   * characters, and a maximum of 63.
   * @param options The optional parameters
   * @param callback The callback
   */
  getDetails(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AnalysisServicesServer>): void;
  getDetails(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AnalysisServicesServer>, callback?: msRest.ServiceCallback<Models.AnalysisServicesServer>): Promise<Models.ServersGetDetailsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      getDetailsOperationSpec,
      callback) as Promise<Models.ServersGetDetailsResponse>;
  }

  /**
   * Provisions the specified Analysis Services server based on the configuration specified in the
   * request.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be a minimum of 3
   * characters, and a maximum of 63.
   * @param serverParameters Contains the information used to provision the Analysis Services server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServersCreateResponse>
   */
  create(resourceGroupName: string, serverName: string, serverParameters: Models.AnalysisServicesServer, options?: msRest.RequestOptionsBase): Promise<Models.ServersCreateResponse> {
    return this.beginCreate(resourceGroupName,serverName,serverParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ServersCreateResponse>;
  }

  /**
   * Deletes the specified Analysis Services server.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serverName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Updates the current state of the specified Analysis Services server.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param serverUpdateParameters Request object that contains the updated information for the
   * server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServersUpdateResponse>
   */
  update(resourceGroupName: string, serverName: string, serverUpdateParameters: Models.AnalysisServicesServerUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.ServersUpdateResponse> {
    return this.beginUpdate(resourceGroupName,serverName,serverUpdateParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ServersUpdateResponse>;
  }

  /**
   * Suspends operation of the specified Analysis Services server instance.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  suspend(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginSuspend(resourceGroupName,serverName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Resumes operation of the specified Analysis Services server instance.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  resume(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginResume(resourceGroupName,serverName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets all the Analysis Services servers for the given resource group.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServersListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServersListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AnalysisServicesServers>): void;
  /**
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AnalysisServicesServers>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AnalysisServicesServers>, callback?: msRest.ServiceCallback<Models.AnalysisServicesServers>): Promise<Models.ServersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ServersListByResourceGroupResponse>;
  }

  /**
   * Lists all the Analysis Services servers for the given subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServersListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ServersListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.AnalysisServicesServers>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AnalysisServicesServers>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AnalysisServicesServers>, callback?: msRest.ServiceCallback<Models.AnalysisServicesServers>): Promise<Models.ServersListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ServersListResponse>;
  }

  /**
   * Lists eligible SKUs for Analysis Services resource provider.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServersListSkusForNewResponse>
   */
  listSkusForNew(options?: msRest.RequestOptionsBase): Promise<Models.ServersListSkusForNewResponse>;
  /**
   * @param callback The callback
   */
  listSkusForNew(callback: msRest.ServiceCallback<Models.SkuEnumerationForNewResourceResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listSkusForNew(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SkuEnumerationForNewResourceResult>): void;
  listSkusForNew(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SkuEnumerationForNewResourceResult>, callback?: msRest.ServiceCallback<Models.SkuEnumerationForNewResourceResult>): Promise<Models.ServersListSkusForNewResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listSkusForNewOperationSpec,
      callback) as Promise<Models.ServersListSkusForNewResponse>;
  }

  /**
   * Lists eligible SKUs for an Analysis Services resource.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServersListSkusForExistingResponse>
   */
  listSkusForExisting(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServersListSkusForExistingResponse>;
  /**
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param callback The callback
   */
  listSkusForExisting(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.SkuEnumerationForExistingResourceResult>): void;
  /**
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param options The optional parameters
   * @param callback The callback
   */
  listSkusForExisting(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SkuEnumerationForExistingResourceResult>): void;
  listSkusForExisting(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SkuEnumerationForExistingResourceResult>, callback?: msRest.ServiceCallback<Models.SkuEnumerationForExistingResourceResult>): Promise<Models.ServersListSkusForExistingResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listSkusForExistingOperationSpec,
      callback) as Promise<Models.ServersListSkusForExistingResponse>;
  }

  /**
   * Return the gateway status of the specified Analysis Services server instance.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServersListGatewayStatusResponse>
   */
  listGatewayStatus(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServersListGatewayStatusResponse>;
  /**
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server.
   * @param callback The callback
   */
  listGatewayStatus(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.GatewayListStatusLive>): void;
  /**
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listGatewayStatus(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GatewayListStatusLive>): void;
  listGatewayStatus(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GatewayListStatusLive>, callback?: msRest.ServiceCallback<Models.GatewayListStatusLive>): Promise<Models.ServersListGatewayStatusResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listGatewayStatusOperationSpec,
      callback) as Promise<Models.ServersListGatewayStatusResponse>;
  }

  /**
   * Dissociates a Unified Gateway associated with the server.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  dissociateGateway(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param callback The callback
   */
  dissociateGateway(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param options The optional parameters
   * @param callback The callback
   */
  dissociateGateway(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  dissociateGateway(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      dissociateGatewayOperationSpec,
      callback);
  }

  /**
   * Check the name availability in the target location.
   * @param location The region name which the operation will lookup into.
   * @param serverParameters Contains the information used to provision the Analysis Services server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServersCheckNameAvailabilityResponse>
   */
  checkNameAvailability(location: string, serverParameters: Models.CheckServerNameAvailabilityParameters, options?: msRest.RequestOptionsBase): Promise<Models.ServersCheckNameAvailabilityResponse>;
  /**
   * @param location The region name which the operation will lookup into.
   * @param serverParameters Contains the information used to provision the Analysis Services server.
   * @param callback The callback
   */
  checkNameAvailability(location: string, serverParameters: Models.CheckServerNameAvailabilityParameters, callback: msRest.ServiceCallback<Models.CheckServerNameAvailabilityResult>): void;
  /**
   * @param location The region name which the operation will lookup into.
   * @param serverParameters Contains the information used to provision the Analysis Services server.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(location: string, serverParameters: Models.CheckServerNameAvailabilityParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckServerNameAvailabilityResult>): void;
  checkNameAvailability(location: string, serverParameters: Models.CheckServerNameAvailabilityParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckServerNameAvailabilityResult>, callback?: msRest.ServiceCallback<Models.CheckServerNameAvailabilityResult>): Promise<Models.ServersCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        serverParameters,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.ServersCheckNameAvailabilityResponse>;
  }

  /**
   * List the result of the specified operation.
   * @param location The region name which the operation will lookup into.
   * @param operationId The target operation Id.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  listOperationResults(location: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param location The region name which the operation will lookup into.
   * @param operationId The target operation Id.
   * @param callback The callback
   */
  listOperationResults(location: string, operationId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param location The region name which the operation will lookup into.
   * @param operationId The target operation Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOperationResults(location: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  listOperationResults(location: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        operationId,
        options
      },
      listOperationResultsOperationSpec,
      callback);
  }

  /**
   * List the status of operation.
   * @param location The region name which the operation will lookup into.
   * @param operationId The target operation Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServersListOperationStatusesResponse>
   */
  listOperationStatuses(location: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.ServersListOperationStatusesResponse>;
  /**
   * @param location The region name which the operation will lookup into.
   * @param operationId The target operation Id.
   * @param callback The callback
   */
  listOperationStatuses(location: string, operationId: string, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param location The region name which the operation will lookup into.
   * @param operationId The target operation Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOperationStatuses(location: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  listOperationStatuses(location: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.ServersListOperationStatusesResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        operationId,
        options
      },
      listOperationStatusesOperationSpec,
      callback) as Promise<Models.ServersListOperationStatusesResponse>;
  }

  /**
   * Provisions the specified Analysis Services server based on the configuration specified in the
   * request.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be a minimum of 3
   * characters, and a maximum of 63.
   * @param serverParameters Contains the information used to provision the Analysis Services server.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, serverName: string, serverParameters: Models.AnalysisServicesServer, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        serverParameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes the specified Analysis Services server.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Updates the current state of the specified Analysis Services server.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param serverUpdateParameters Request object that contains the updated information for the
   * server.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, serverName: string, serverUpdateParameters: Models.AnalysisServicesServerUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        serverUpdateParameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Suspends operation of the specified Analysis Services server instance.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginSuspend(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      beginSuspendOperationSpec,
      options);
  }

  /**
   * Resumes operation of the specified Analysis Services server instance.
   * @param resourceGroupName The name of the Azure Resource group of which a given Analysis Services
   * server is part. This name must be at least 1 character in length, and no more than 90.
   * @param serverName The name of the Analysis Services server. It must be at least 3 characters in
   * length, and no more than 63.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginResume(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      beginResumeOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getDetailsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
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
      bodyMapper: Mappers.AnalysisServicesServer
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers",
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
      bodyMapper: Mappers.AnalysisServicesServers
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/servers",
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
      bodyMapper: Mappers.AnalysisServicesServers
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listSkusForNewOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/skus",
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
      bodyMapper: Mappers.SkuEnumerationForNewResourceResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listSkusForExistingOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/skus",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
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
      bodyMapper: Mappers.SkuEnumerationForExistingResourceResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listGatewayStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/listGatewayStatus",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
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
      bodyMapper: Mappers.GatewayListStatusLive
    },
    default: {
      bodyMapper: Mappers.GatewayListStatusError
    }
  },
  serializer
};

const dissociateGatewayOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/dissociateGateway",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.subscriptionId
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/locations/{location}/checkNameAvailability",
  urlParameters: [
    Parameters.location,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "serverParameters",
    mapper: {
      ...Mappers.CheckServerNameAvailabilityParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckServerNameAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationResultsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/locations/{location}/operationresults/{operationId}",
  urlParameters: [
    Parameters.location,
    Parameters.operationId,
    Parameters.subscriptionId
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationStatusesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/locations/{location}/operationstatuses/{operationId}",
  urlParameters: [
    Parameters.location,
    Parameters.operationId,
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
      bodyMapper: Mappers.OperationStatus
    },
    202: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "serverParameters",
    mapper: {
      ...Mappers.AnalysisServicesServer,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AnalysisServicesServer
    },
    201: {
      bodyMapper: Mappers.AnalysisServicesServer
    },
    202: {
      bodyMapper: Mappers.AnalysisServicesServer
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.subscriptionId
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "serverUpdateParameters",
    mapper: {
      ...Mappers.AnalysisServicesServerUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AnalysisServicesServer
    },
    202: {
      bodyMapper: Mappers.AnalysisServicesServer
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginSuspendOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/suspend",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.subscriptionId
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginResumeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/resume",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.subscriptionId
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
