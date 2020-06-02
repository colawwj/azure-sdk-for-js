/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * Information about feature.
 */
export interface FeatureProperties {
  /**
   * The registration state of the feature for the subscription.
   */
  state?: string;
}

/**
 * Previewed feature information.
 */
export interface FeatureResult {
  /**
   * The name of the feature.
   */
  name?: string;
  /**
   * Properties of the previewed feature.
   */
  properties?: FeatureProperties;
  /**
   * The resource ID of the feature.
   */
  id?: string;
  /**
   * The resource type of the feature.
   */
  type?: string;
}

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.Features
   */
  provider?: string;
  /**
   * Resource on which the operation is performed: Profile, endpoint, etc.
   */
  resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   */
  operation?: string;
  /**
   * Description of the operation.
   */
  description?: string;
}

/**
 * Microsoft.Features operation
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * The object that represents the operation.
   */
  display?: OperationDisplay;
}

/**
 * An interface representing FeatureClientOptions.
 */
export interface FeatureClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Result of the request to list Microsoft.Features operations. It contains a list of operations
 * and a URL link to get the next set of results.
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * URL to get the next set of operation list results if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * List of previewed features.
 * @extends Array<FeatureResult>
 */
export interface FeatureOperationsListResult extends Array<FeatureResult> {
  /**
   * The URL to use for getting the next set of results.
   */
  nextLink?: string;
}

/**
 * Contains response data for the listOperations operation.
 */
export type ListOperationsResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listOperationsNext operation.
 */
export type ListOperationsNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listAll operation.
 */
export type FeaturesListAllResponse = FeatureOperationsListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeatureOperationsListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type FeaturesListResponse = FeatureOperationsListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeatureOperationsListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type FeaturesGetResponse = FeatureResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeatureResult;
    };
};

/**
 * Contains response data for the register operation.
 */
export type FeaturesRegisterResponse = FeatureResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeatureResult;
    };
};

/**
 * Contains response data for the unregister operation.
 */
export type FeaturesUnregisterResponse = FeatureResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeatureResult;
    };
};

/**
 * Contains response data for the listAllNext operation.
 */
export type FeaturesListAllNextResponse = FeatureOperationsListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeatureOperationsListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type FeaturesListNextResponse = FeatureOperationsListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeatureOperationsListResult;
    };
};
