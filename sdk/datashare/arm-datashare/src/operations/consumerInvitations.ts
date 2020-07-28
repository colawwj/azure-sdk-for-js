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
import * as Mappers from "../models/consumerInvitationsMappers";
import * as Parameters from "../models/parameters";
import { DataShareManagementClientContext } from "../dataShareManagementClientContext";

/** Class representing a ConsumerInvitations. */
export class ConsumerInvitations {
  private readonly client: DataShareManagementClientContext;

  /**
   * Create a ConsumerInvitations.
   * @param {DataShareManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataShareManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists invitations
   * @summary List the invitations
   * @param [options] The optional parameters
   * @returns Promise<Models.ConsumerInvitationsListInvitationsResponse>
   */
  listInvitations(options?: Models.ConsumerInvitationsListInvitationsOptionalParams): Promise<Models.ConsumerInvitationsListInvitationsResponse>;
  /**
   * @param callback The callback
   */
  listInvitations(callback: msRest.ServiceCallback<Models.ConsumerInvitationList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listInvitations(options: Models.ConsumerInvitationsListInvitationsOptionalParams, callback: msRest.ServiceCallback<Models.ConsumerInvitationList>): void;
  listInvitations(options?: Models.ConsumerInvitationsListInvitationsOptionalParams | msRest.ServiceCallback<Models.ConsumerInvitationList>, callback?: msRest.ServiceCallback<Models.ConsumerInvitationList>): Promise<Models.ConsumerInvitationsListInvitationsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listInvitationsOperationSpec,
      callback) as Promise<Models.ConsumerInvitationsListInvitationsResponse>;
  }

  /**
   * Get an invitation
   * @summary Gets the invitation identified by invitationId
   * @param location Location of the invitation
   * @param invitationId An invitation id
   * @param [options] The optional parameters
   * @returns Promise<Models.ConsumerInvitationsGetResponse>
   */
  get(location: string, invitationId: string, options?: msRest.RequestOptionsBase): Promise<Models.ConsumerInvitationsGetResponse>;
  /**
   * @param location Location of the invitation
   * @param invitationId An invitation id
   * @param callback The callback
   */
  get(location: string, invitationId: string, callback: msRest.ServiceCallback<Models.ConsumerInvitation>): void;
  /**
   * @param location Location of the invitation
   * @param invitationId An invitation id
   * @param options The optional parameters
   * @param callback The callback
   */
  get(location: string, invitationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConsumerInvitation>): void;
  get(location: string, invitationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConsumerInvitation>, callback?: msRest.ServiceCallback<Models.ConsumerInvitation>): Promise<Models.ConsumerInvitationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        invitationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ConsumerInvitationsGetResponse>;
  }

  /**
   * Reject an invitation
   * @summary Rejects the invitation identified by invitationId
   * @param location Location of the invitation
   * @param invitation An invitation payload
   * @param [options] The optional parameters
   * @returns Promise<Models.ConsumerInvitationsRejectInvitationResponse>
   */
  rejectInvitation(location: string, invitation: Models.ConsumerInvitation, options?: msRest.RequestOptionsBase): Promise<Models.ConsumerInvitationsRejectInvitationResponse>;
  /**
   * @param location Location of the invitation
   * @param invitation An invitation payload
   * @param callback The callback
   */
  rejectInvitation(location: string, invitation: Models.ConsumerInvitation, callback: msRest.ServiceCallback<Models.ConsumerInvitation>): void;
  /**
   * @param location Location of the invitation
   * @param invitation An invitation payload
   * @param options The optional parameters
   * @param callback The callback
   */
  rejectInvitation(location: string, invitation: Models.ConsumerInvitation, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConsumerInvitation>): void;
  rejectInvitation(location: string, invitation: Models.ConsumerInvitation, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConsumerInvitation>, callback?: msRest.ServiceCallback<Models.ConsumerInvitation>): Promise<Models.ConsumerInvitationsRejectInvitationResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        invitation,
        options
      },
      rejectInvitationOperationSpec,
      callback) as Promise<Models.ConsumerInvitationsRejectInvitationResponse>;
  }

  /**
   * Lists invitations
   * @summary List the invitations
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConsumerInvitationsListInvitationsNextResponse>
   */
  listInvitationsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ConsumerInvitationsListInvitationsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listInvitationsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ConsumerInvitationList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listInvitationsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConsumerInvitationList>): void;
  listInvitationsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConsumerInvitationList>, callback?: msRest.ServiceCallback<Models.ConsumerInvitationList>): Promise<Models.ConsumerInvitationsListInvitationsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listInvitationsNextOperationSpec,
      callback) as Promise<Models.ConsumerInvitationsListInvitationsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listInvitationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.DataShare/ListInvitations",
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConsumerInvitationList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.DataShare/locations/{location}/consumerInvitations/{invitationId}",
  urlParameters: [
    Parameters.location,
    Parameters.invitationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConsumerInvitation
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const rejectInvitationOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.DataShare/locations/{location}/RejectInvitation",
  urlParameters: [
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "invitation",
    mapper: {
      ...Mappers.ConsumerInvitation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ConsumerInvitation
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const listInvitationsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConsumerInvitationList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};
