/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { SignalRManagementClientContext } from "./signalRManagementClientContext";

class SignalRManagementClient extends SignalRManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  signalR: operations.SignalR;
  usages: operations.Usages;
  signalRPrivateEndpointConnections: operations.SignalRPrivateEndpointConnections;
  signalRPrivateLinkResources: operations.SignalRPrivateLinkResources;
  signalRSharedPrivateLinkResources: operations.SignalRSharedPrivateLinkResources;

  /**
   * Initializes a new instance of the SignalRManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId Gets subscription Id which uniquely identify the Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(
    credentials: msRest.ServiceClientCredentials | TokenCredential,
    subscriptionId: string,
    options?: Models.SignalRManagementClientOptions
  ) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.signalR = new operations.SignalR(this);
    this.usages = new operations.Usages(this);
    this.signalRPrivateEndpointConnections = new operations.SignalRPrivateEndpointConnections(this);
    this.signalRPrivateLinkResources = new operations.SignalRPrivateLinkResources(this);
    this.signalRSharedPrivateLinkResources = new operations.SignalRSharedPrivateLinkResources(this);
  }
}

// Operation Specifications

export {
  SignalRManagementClient,
  SignalRManagementClientContext,
  Models as SignalRManagementModels,
  Mappers as SignalRManagementMappers
};
export * from "./operations";
