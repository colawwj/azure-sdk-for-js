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
import { MicrosoftSupportContext } from "./microsoftSupportContext";


class MicrosoftSupport extends MicrosoftSupportContext {
  // Operation groups
  operations: operations.Operations;
  services: operations.Services;
  problemClassifications: operations.ProblemClassifications;
  supportTickets: operations.SupportTickets;
  communications: operations.Communications;

  /**
   * Initializes a new instance of the MicrosoftSupport class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Azure subscription Id.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.MicrosoftSupportOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.services = new operations.Services(this);
    this.problemClassifications = new operations.ProblemClassifications(this);
    this.supportTickets = new operations.SupportTickets(this);
    this.communications = new operations.Communications(this);
  }
}

// Operation Specifications

export {
  MicrosoftSupport,
  MicrosoftSupportContext,
  Models as MicrosoftSupportModels,
  Mappers as MicrosoftSupportMappers
};
export * from "./operations";
