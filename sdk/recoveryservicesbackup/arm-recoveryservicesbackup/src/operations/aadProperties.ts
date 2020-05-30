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
import * as Mappers from "../models/aadPropertiesMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a AadProperties. */
export class AadProperties {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a AadProperties.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * @summary Fetches the AAD properties from target region BCM stamp.
   * @param azureRegion Azure region to hit Api
   * @param [options] The optional parameters
   * @returns Promise<Models.AadPropertiesGetResponse>
   */
  get(azureRegion: string, options?: msRest.RequestOptionsBase): Promise<Models.AadPropertiesGetResponse>;
  /**
   * @param azureRegion Azure region to hit Api
   * @param callback The callback
   */
  get(azureRegion: string, callback: msRest.ServiceCallback<Models.AADPropertiesResource>): void;
  /**
   * @param azureRegion Azure region to hit Api
   * @param options The optional parameters
   * @param callback The callback
   */
  get(azureRegion: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AADPropertiesResource>): void;
  get(azureRegion: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AADPropertiesResource>, callback?: msRest.ServiceCallback<Models.AADPropertiesResource>): Promise<Models.AadPropertiesGetResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AadPropertiesGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{azureRegion}/backupAadProperties/default",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AADPropertiesResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
