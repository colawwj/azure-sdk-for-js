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
import * as Mappers from "../models/featureSupportMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a FeatureSupport. */
export class FeatureSupport {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a FeatureSupport.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * @summary It will validate if given feature with resource properties is supported in service
   * @param azureRegion Azure region to hit Api
   * @param parameters Feature support request object
   * @param [options] The optional parameters
   * @returns Promise<Models.FeatureSupportValidateResponse>
   */
  validate(azureRegion: string, parameters: Models.FeatureSupportRequestUnion, options?: msRest.RequestOptionsBase): Promise<Models.FeatureSupportValidateResponse>;
  /**
   * @param azureRegion Azure region to hit Api
   * @param parameters Feature support request object
   * @param callback The callback
   */
  validate(azureRegion: string, parameters: Models.FeatureSupportRequestUnion, callback: msRest.ServiceCallback<Models.AzureVMResourceFeatureSupportResponse>): void;
  /**
   * @param azureRegion Azure region to hit Api
   * @param parameters Feature support request object
   * @param options The optional parameters
   * @param callback The callback
   */
  validate(azureRegion: string, parameters: Models.FeatureSupportRequestUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureVMResourceFeatureSupportResponse>): void;
  validate(azureRegion: string, parameters: Models.FeatureSupportRequestUnion, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureVMResourceFeatureSupportResponse>, callback?: msRest.ServiceCallback<Models.AzureVMResourceFeatureSupportResponse>): Promise<Models.FeatureSupportValidateResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        parameters,
        options
      },
      validateOperationSpec,
      callback) as Promise<Models.FeatureSupportValidateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const validateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{azureRegion}/backupValidateFeatures",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.FeatureSupportRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AzureVMResourceFeatureSupportResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
