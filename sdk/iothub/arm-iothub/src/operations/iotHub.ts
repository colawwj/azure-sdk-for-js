/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Mappers from "../models/iotHubMappers";
import * as Parameters from "../models/parameters";
import { IotHubClientContext } from "../iotHubClientContext";

/** Class representing a IotHub. */
export class IotHub {
  private readonly client: IotHubClientContext;

  /**
   * Create a IotHub.
   * @param {IotHubClientContext} client Reference to the service client.
   */
  constructor(client: IotHubClientContext) {
    this.client = client;
  }

  /**
   * Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see
   * https://aka.ms/manualfailover
   * @summary Manually initiate a failover for the IoT Hub to its secondary region
   * @param iotHubName Name of the IoT hub to failover
   * @param resourceGroupName Name of the resource group containing the IoT hub resource
   * @param failoverRegion Region the hub will be failed over to
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  manualFailover(iotHubName: string, resourceGroupName: string, failoverRegion: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginManualFailover(iotHubName,resourceGroupName,failoverRegion,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see
   * https://aka.ms/manualfailover
   * @summary Manually initiate a failover for the IoT Hub to its secondary region
   * @param iotHubName Name of the IoT hub to failover
   * @param resourceGroupName Name of the resource group containing the IoT hub resource
   * @param failoverRegion Region the hub will be failed over to
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginManualFailover(iotHubName: string, resourceGroupName: string, failoverRegion: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        iotHubName,
        resourceGroupName,
        failoverRegion,
        options
      },
      beginManualFailoverOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginManualFailoverOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/failover",
  urlParameters: [
    Parameters.iotHubName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      failoverRegion: "failoverRegion"
    },
    mapper: {
      ...Mappers.FailoverInput,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};
