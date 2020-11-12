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
import { AzureReservationAPIContext } from "./azureReservationAPIContext";


class AzureReservationAPI extends AzureReservationAPIContext {
  // Operation groups
  quota: operations.Quota;
  quotaRequestStatus: operations.QuotaRequestStatus;

  /**
   * Initializes a new instance of the AzureReservationAPI class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.AzureReservationAPIOptions) {
    super(credentials, options);
    this.quota = new operations.Quota(this);
    this.quotaRequestStatus = new operations.QuotaRequestStatus(this);
  }
}

// Operation Specifications

export {
  AzureReservationAPI,
  AzureReservationAPIContext,
  Models as AzureReservationAPIModels,
  Mappers as AzureReservationAPIMappers
};
export * from "./operations";
