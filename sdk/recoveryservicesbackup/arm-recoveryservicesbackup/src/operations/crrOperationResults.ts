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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Mappers from "../models/crrOperationResultsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a CrrOperationResults. */
export class CrrOperationResults {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a CrrOperationResults.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * @param azureRegion Azure region to hit Api
   * @param operationId
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  get(azureRegion: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginGet(azureRegion,operationId,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * @param azureRegion Azure region to hit Api
   * @param operationId
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginGet(azureRegion: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        azureRegion,
        operationId,
        options
      },
      beginGetOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginGetOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{azureRegion}/backupCrrOperationResults/{operationId}",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.subscriptionId,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
