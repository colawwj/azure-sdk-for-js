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

const packageName = "@azure/cognitiveservices-inkrecognizer";
const packageVersion = "1.0.0";

export class InkRecognizerClientContext extends msRest.ServiceClient {
  endpoint: string;
  credentials: msRest.ServiceClientCredentials;

  /**
   * Initializes a new instance of the InkRecognizerClientContext class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   * https://api.cognitive.microsoft.com).
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, endpoint: string, options?: msRest.ServiceClientOptions) {
    if (endpoint == undefined) {
      throw new Error("'endpoint' cannot be null.");
    }
    if (credentials == undefined) {
      throw new Error("'credentials' cannot be null.");
    }

    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = msRest.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.baseUri = "https://{Endpoint}/inkrecognizer/v1.0-preview";
    this.requestContentType = "application/json; charset=utf-8";
    this.endpoint = endpoint;
    this.credentials = credentials;
  }
}
