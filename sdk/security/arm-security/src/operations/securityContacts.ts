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
import * as Mappers from "../models/securityContactsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a SecurityContacts. */
export class SecurityContacts {
  private readonly client: SecurityCenterContext;

  /**
   * Create a SecurityContacts.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Security contact configurations for the subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.SecurityContactsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.SecurityContactsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.SecurityContactList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityContactList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecurityContactList>, callback?: msRest.ServiceCallback<Models.SecurityContactList>): Promise<Models.SecurityContactsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SecurityContactsListResponse>;
  }

  /**
   * Security contact configurations for the subscription
   * @param securityContactName Name of the security contact object
   * @param [options] The optional parameters
   * @returns Promise<Models.SecurityContactsGetResponse>
   */
  get(securityContactName: string, options?: msRest.RequestOptionsBase): Promise<Models.SecurityContactsGetResponse>;
  /**
   * @param securityContactName Name of the security contact object
   * @param callback The callback
   */
  get(securityContactName: string, callback: msRest.ServiceCallback<Models.SecurityContact>): void;
  /**
   * @param securityContactName Name of the security contact object
   * @param options The optional parameters
   * @param callback The callback
   */
  get(securityContactName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityContact>): void;
  get(securityContactName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecurityContact>, callback?: msRest.ServiceCallback<Models.SecurityContact>): Promise<Models.SecurityContactsGetResponse> {
    return this.client.sendOperationRequest(
      {
        securityContactName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SecurityContactsGetResponse>;
  }

  /**
   * Security contact configurations for the subscription
   * @param securityContactName Name of the security contact object
   * @param securityContact Security contact object
   * @param [options] The optional parameters
   * @returns Promise<Models.SecurityContactsCreateResponse>
   */
  create(securityContactName: string, securityContact: Models.SecurityContact, options?: msRest.RequestOptionsBase): Promise<Models.SecurityContactsCreateResponse>;
  /**
   * @param securityContactName Name of the security contact object
   * @param securityContact Security contact object
   * @param callback The callback
   */
  create(securityContactName: string, securityContact: Models.SecurityContact, callback: msRest.ServiceCallback<Models.SecurityContact>): void;
  /**
   * @param securityContactName Name of the security contact object
   * @param securityContact Security contact object
   * @param options The optional parameters
   * @param callback The callback
   */
  create(securityContactName: string, securityContact: Models.SecurityContact, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityContact>): void;
  create(securityContactName: string, securityContact: Models.SecurityContact, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecurityContact>, callback?: msRest.ServiceCallback<Models.SecurityContact>): Promise<Models.SecurityContactsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        securityContactName,
        securityContact,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.SecurityContactsCreateResponse>;
  }

  /**
   * Security contact configurations for the subscription
   * @param securityContactName Name of the security contact object
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(securityContactName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param securityContactName Name of the security contact object
   * @param callback The callback
   */
  deleteMethod(securityContactName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param securityContactName Name of the security contact object
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(securityContactName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(securityContactName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        securityContactName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Security contact configurations for the subscription
   * @param securityContactName Name of the security contact object
   * @param securityContact Security contact object
   * @param [options] The optional parameters
   * @returns Promise<Models.SecurityContactsUpdateResponse>
   */
  update(securityContactName: string, securityContact: Models.SecurityContact, options?: msRest.RequestOptionsBase): Promise<Models.SecurityContactsUpdateResponse>;
  /**
   * @param securityContactName Name of the security contact object
   * @param securityContact Security contact object
   * @param callback The callback
   */
  update(securityContactName: string, securityContact: Models.SecurityContact, callback: msRest.ServiceCallback<Models.SecurityContact>): void;
  /**
   * @param securityContactName Name of the security contact object
   * @param securityContact Security contact object
   * @param options The optional parameters
   * @param callback The callback
   */
  update(securityContactName: string, securityContact: Models.SecurityContact, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityContact>): void;
  update(securityContactName: string, securityContact: Models.SecurityContact, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecurityContact>, callback?: msRest.ServiceCallback<Models.SecurityContact>): Promise<Models.SecurityContactsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        securityContactName,
        securityContact,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.SecurityContactsUpdateResponse>;
  }

  /**
   * Security contact configurations for the subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecurityContactsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SecurityContactsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SecurityContactList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityContactList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecurityContactList>, callback?: msRest.ServiceCallback<Models.SecurityContactList>): Promise<Models.SecurityContactsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SecurityContactsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecurityContactList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.securityContactName
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecurityContact
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.securityContactName
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "securityContact",
    mapper: {
      ...Mappers.SecurityContact,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SecurityContact
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.securityContactName
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.securityContactName
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "securityContact",
    mapper: {
      ...Mappers.SecurityContact,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SecurityContact
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
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecurityContactList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
