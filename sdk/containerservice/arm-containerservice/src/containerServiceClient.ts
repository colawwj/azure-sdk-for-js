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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { ContainerServiceClientContext } from "./containerServiceClientContext";


class ContainerServiceClient extends ContainerServiceClientContext {
  // Operation groups
  openShiftManagedClusters: operations.OpenShiftManagedClusters;
  containerServices: operations.ContainerServices;
  operations: operations.Operations;
  managedClusters: operations.ManagedClusters;
  agentPools: operations.AgentPools;
  privateEndpointConnections: operations.PrivateEndpointConnections;

  /**
   * Initializes a new instance of the ContainerServiceClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.ContainerServiceClientOptions) {
    super(credentials, subscriptionId, options);
    this.openShiftManagedClusters = new operations.OpenShiftManagedClusters(this);
    this.containerServices = new operations.ContainerServices(this);
    this.operations = new operations.Operations(this);
    this.managedClusters = new operations.ManagedClusters(this);
    this.agentPools = new operations.AgentPools(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(this);
  }
}

// Operation Specifications

export {
  ContainerServiceClient,
  ContainerServiceClientContext,
  Models as ContainerServiceModels,
  Mappers as ContainerServiceMappers
};
export * from "./operations";
