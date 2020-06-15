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
import * as Models from "../models";
import * as Mappers from "../models/subscriptionOperationsMappers";
import * as Parameters from "../models/parameters";
import { SubscriptionClientContext } from "../subscriptionClientContext";

/** Class representing a SubscriptionOperations. */
export class SubscriptionOperations {
  private readonly client: SubscriptionClientContext;

  /**
   * Create a SubscriptionOperations.
   * @param {SubscriptionClientContext} client Reference to the service client.
   */
  constructor(client: SubscriptionClientContext) {
    this.client = client;
  }

  /**
   * Creates an Azure subscription
   * @param enrollmentAccountName The name of the enrollment account to which the subscription will
   * be billed.
   * @param body The subscription creation parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionCreateSubscriptionInEnrollmentAccountResponse>
   */
  createSubscriptionInEnrollmentAccount(enrollmentAccountName: string, body: Models.SubscriptionCreationParameters, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionCreateSubscriptionInEnrollmentAccountResponse> {
    return this.beginCreateSubscriptionInEnrollmentAccount(enrollmentAccountName,body,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SubscriptionCreateSubscriptionInEnrollmentAccountResponse>;
  }

  /**
   * The operation to cancel a subscription
   * @param subscriptionId Subscription Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionCancelResponse>
   */
  cancel(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionCancelResponse>;
  /**
   * @param subscriptionId Subscription Id.
   * @param callback The callback
   */
  cancel(subscriptionId: string, callback: msRest.ServiceCallback<Models.CanceledSubscriptionId>): void;
  /**
   * @param subscriptionId Subscription Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  cancel(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CanceledSubscriptionId>): void;
  cancel(subscriptionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CanceledSubscriptionId>, callback?: msRest.ServiceCallback<Models.CanceledSubscriptionId>): Promise<Models.SubscriptionCancelResponse> {
    return this.client.sendOperationRequest(
      {
        subscriptionId,
        options
      },
      cancelOperationSpec,
      callback) as Promise<Models.SubscriptionCancelResponse>;
  }

  /**
   * The operation to rename a subscription
   * @param subscriptionId Subscription Id.
   * @param body Subscription Name
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionRenameResponse>
   */
  rename(subscriptionId: string, body: Models.SubscriptionName, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionRenameResponse>;
  /**
   * @param subscriptionId Subscription Id.
   * @param body Subscription Name
   * @param callback The callback
   */
  rename(subscriptionId: string, body: Models.SubscriptionName, callback: msRest.ServiceCallback<Models.RenamedSubscriptionId>): void;
  /**
   * @param subscriptionId Subscription Id.
   * @param body Subscription Name
   * @param options The optional parameters
   * @param callback The callback
   */
  rename(subscriptionId: string, body: Models.SubscriptionName, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RenamedSubscriptionId>): void;
  rename(subscriptionId: string, body: Models.SubscriptionName, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RenamedSubscriptionId>, callback?: msRest.ServiceCallback<Models.RenamedSubscriptionId>): Promise<Models.SubscriptionRenameResponse> {
    return this.client.sendOperationRequest(
      {
        subscriptionId,
        body,
        options
      },
      renameOperationSpec,
      callback) as Promise<Models.SubscriptionRenameResponse>;
  }

  /**
   * The operation to enable a subscription
   * @param subscriptionId Subscription Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionEnableResponse>
   */
  enable(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionEnableResponse>;
  /**
   * @param subscriptionId Subscription Id.
   * @param callback The callback
   */
  enable(subscriptionId: string, callback: msRest.ServiceCallback<Models.EnabledSubscriptionId>): void;
  /**
   * @param subscriptionId Subscription Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  enable(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EnabledSubscriptionId>): void;
  enable(subscriptionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EnabledSubscriptionId>, callback?: msRest.ServiceCallback<Models.EnabledSubscriptionId>): Promise<Models.SubscriptionEnableResponse> {
    return this.client.sendOperationRequest(
      {
        subscriptionId,
        options
      },
      enableOperationSpec,
      callback) as Promise<Models.SubscriptionEnableResponse>;
  }

  /**
   * The operation to create a new WebDirect or EA Azure subscription.
   * @param billingAccountName The name of the Microsoft Customer Agreement billing account for which
   * you want to create the subscription.
   * @param billingProfileName The name of the billing profile in the billing account for which you
   * want to create the subscription.
   * @param invoiceSectionName The name of the invoice section in the billing account for which you
   * want to create the subscription.
   * @param body The subscription creation parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionCreateSubscriptionResponse>
   */
  createSubscription(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, body: Models.ModernSubscriptionCreationParameters, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionCreateSubscriptionResponse> {
    return this.beginCreateSubscription(billingAccountName,billingProfileName,invoiceSectionName,body,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SubscriptionCreateSubscriptionResponse>;
  }

  /**
   * The operation to create a new CSP subscription.
   * @param billingAccountName The name of the Microsoft Customer Agreement billing account for which
   * you want to create the subscription.
   * @param customerName The name of the customer.
   * @param body The subscription creation parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionCreateCspSubscriptionResponse>
   */
  createCspSubscription(billingAccountName: string, customerName: string, body: Models.ModernCspSubscriptionCreationParameters, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionCreateCspSubscriptionResponse> {
    return this.beginCreateCspSubscription(billingAccountName,customerName,body,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SubscriptionCreateCspSubscriptionResponse>;
  }

  /**
   * Creates an Azure subscription
   * @param enrollmentAccountName The name of the enrollment account to which the subscription will
   * be billed.
   * @param body The subscription creation parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateSubscriptionInEnrollmentAccount(enrollmentAccountName: string, body: Models.SubscriptionCreationParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        enrollmentAccountName,
        body,
        options
      },
      beginCreateSubscriptionInEnrollmentAccountOperationSpec,
      options);
  }

  /**
   * The operation to create a new WebDirect or EA Azure subscription.
   * @param billingAccountName The name of the Microsoft Customer Agreement billing account for which
   * you want to create the subscription.
   * @param billingProfileName The name of the billing profile in the billing account for which you
   * want to create the subscription.
   * @param invoiceSectionName The name of the invoice section in the billing account for which you
   * want to create the subscription.
   * @param body The subscription creation parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateSubscription(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, body: Models.ModernSubscriptionCreationParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        body,
        options
      },
      beginCreateSubscriptionOperationSpec,
      options);
  }

  /**
   * The operation to create a new CSP subscription.
   * @param billingAccountName The name of the Microsoft Customer Agreement billing account for which
   * you want to create the subscription.
   * @param customerName The name of the customer.
   * @param body The subscription creation parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateCspSubscription(billingAccountName: string, customerName: string, body: Models.ModernCspSubscriptionCreationParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        billingAccountName,
        customerName,
        body,
        options
      },
      beginCreateCspSubscriptionOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const cancelOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Subscription/cancel",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CanceledSubscriptionId
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const renameOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Subscription/rename",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.SubscriptionName,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RenamedSubscriptionId
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const enableOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Subscription/enable",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EnabledSubscriptionId
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateSubscriptionInEnrollmentAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/enrollmentAccounts/{enrollmentAccountName}/providers/Microsoft.Subscription/createSubscription",
  urlParameters: [
    Parameters.enrollmentAccountName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.SubscriptionCreationParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionCreationResult,
      headersMapper: Mappers.SubscriptionCreateSubscriptionInEnrollmentAccountHeaders
    },
    202: {
      headersMapper: Mappers.SubscriptionCreateSubscriptionInEnrollmentAccountHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateSubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Subscription/createSubscription",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.ModernSubscriptionCreationParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionCreationResult,
      headersMapper: Mappers.SubscriptionCreateSubscriptionHeaders
    },
    202: {
      headersMapper: Mappers.SubscriptionCreateSubscriptionHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateCspSubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/providers/Microsoft.Subscription/createSubscription",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.customerName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.ModernCspSubscriptionCreationParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionCreationResult,
      headersMapper: Mappers.SubscriptionCreateCspSubscriptionHeaders
    },
    202: {
      headersMapper: Mappers.SubscriptionCreateCspSubscriptionHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
