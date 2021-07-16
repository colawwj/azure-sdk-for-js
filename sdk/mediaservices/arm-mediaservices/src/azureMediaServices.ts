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
import { AzureMediaServicesContext } from "./azureMediaServicesContext";


class AzureMediaServices extends AzureMediaServicesContext {
  // Operation groups
  operations: operations.Operations;
  mediaservices: operations.Mediaservices;
  privateLinkResources: operations.PrivateLinkResources;
  privateEndpointConnections: operations.PrivateEndpointConnections;
  locations: operations.Locations;
  accountFilters: operations.AccountFilters;
  assets: operations.Assets;
  assetFilters: operations.AssetFilters;
  contentKeyPolicies: operations.ContentKeyPolicies;
  transforms: operations.Transforms;
  jobs: operations.Jobs;
  streamingPolicies: operations.StreamingPolicies;
  streamingLocators: operations.StreamingLocators;
  liveEvents: operations.LiveEvents;
  liveOutputs: operations.LiveOutputs;
  streamingEndpoints: operations.StreamingEndpoints;

  /**
   * Initializes a new instance of the AzureMediaServices class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId The unique identifier for a Microsoft Azure subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.AzureMediaServicesOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.mediaservices = new operations.Mediaservices(this);
    this.privateLinkResources = new operations.PrivateLinkResources(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(this);
    this.locations = new operations.Locations(this);
    this.accountFilters = new operations.AccountFilters(this);
    this.assets = new operations.Assets(this);
    this.assetFilters = new operations.AssetFilters(this);
    this.contentKeyPolicies = new operations.ContentKeyPolicies(this);
    this.transforms = new operations.Transforms(this);
    this.jobs = new operations.Jobs(this);
    this.streamingPolicies = new operations.StreamingPolicies(this);
    this.streamingLocators = new operations.StreamingLocators(this);
    this.liveEvents = new operations.LiveEvents(this);
    this.liveOutputs = new operations.LiveOutputs(this);
    this.streamingEndpoints = new operations.StreamingEndpoints(this);
  }
}

// Operation Specifications

export {
  AzureMediaServices,
  AzureMediaServicesContext,
  Models as AzureMediaServicesModels,
  Mappers as AzureMediaServicesMappers
};
export * from "./operations";
