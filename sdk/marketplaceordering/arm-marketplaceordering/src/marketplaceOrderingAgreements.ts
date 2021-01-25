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
import { MarketplaceOrderingAgreementsContext } from "./marketplaceOrderingAgreementsContext";


class MarketplaceOrderingAgreements extends MarketplaceOrderingAgreementsContext {
  // Operation groups
  marketplaceAgreements: operations.MarketplaceAgreements;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the MarketplaceOrderingAgreements class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription ID that identifies an Azure subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.MarketplaceOrderingAgreementsOptions) {
    super(credentials, subscriptionId, options);
    this.marketplaceAgreements = new operations.MarketplaceAgreements(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  MarketplaceOrderingAgreements,
  MarketplaceOrderingAgreementsContext,
  Models as MarketplaceOrderingAgreementsModels,
  Mappers as MarketplaceOrderingAgreementsMappers
};
export * from "./operations";
