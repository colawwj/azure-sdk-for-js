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
import { ManagedServiceIdentityClientContext } from "./managedServiceIdentityClientContext";


class ManagedServiceIdentityClient extends ManagedServiceIdentityClientContext {
  // Operation groups
  systemAssignedIdentities: operations.SystemAssignedIdentities;
  operations: operations.Operations;
  userAssignedIdentities: operations.UserAssignedIdentities;

  /**
   * Initializes a new instance of the ManagedServiceIdentityClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The Id of the Subscription to which the identity belongs.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.ManagedServiceIdentityClientOptions) {
    super(credentials, subscriptionId, options);
    this.systemAssignedIdentities = new operations.SystemAssignedIdentities(this);
    this.operations = new operations.Operations(this);
    this.userAssignedIdentities = new operations.UserAssignedIdentities(this);
  }
}

// Operation Specifications

export {
  ManagedServiceIdentityClient,
  ManagedServiceIdentityClientContext,
  Models as ManagedServiceIdentityModels,
  Mappers as ManagedServiceIdentityMappers
};
export * from "./operations";
