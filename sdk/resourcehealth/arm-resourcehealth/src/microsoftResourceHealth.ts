/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { MicrosoftResourceHealthContext } from "./microsoftResourceHealthContext";


class MicrosoftResourceHealth extends MicrosoftResourceHealthContext {
  // Operation groups
  events: operations.EventsOperations;
  availabilityStatuses: operations.AvailabilityStatuses;
  operations: operations.Operations;
  emergingIssues: operations.EmergingIssues;
  potentialOutages: operations.PotentialOutages;

  /**
   * Initializes a new instance of the MicrosoftResourceHealth class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.MicrosoftResourceHealthOptions) {
    super(credentials, subscriptionId, options);
    this.events = new operations.EventsOperations(this);
    this.availabilityStatuses = new operations.AvailabilityStatuses(this);
    this.operations = new operations.Operations(this);
    this.emergingIssues = new operations.EmergingIssues(this);
    this.potentialOutages = new operations.PotentialOutages(this);
  }
}

// Operation Specifications

export {
  MicrosoftResourceHealth,
  MicrosoftResourceHealthContext,
  Models as MicrosoftResourceHealthModels,
  Mappers as MicrosoftResourceHealthMappers
};
export * from "./operations";
