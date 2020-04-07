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
import * as Mappers from "../models/regulatoryComplianceAssessmentsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a RegulatoryComplianceAssessments. */
export class RegulatoryComplianceAssessments {
  private readonly client: SecurityCenterContext;

  /**
   * Create a RegulatoryComplianceAssessments.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Details and state of assessments mapped to selected regulatory compliance control
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param [options] The optional parameters
   * @returns Promise<Models.RegulatoryComplianceAssessmentsListResponse>
   */
  list(regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, options?: Models.RegulatoryComplianceAssessmentsListOptionalParams): Promise<Models.RegulatoryComplianceAssessmentsListResponse>;
  /**
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param callback The callback
   */
  list(regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, callback: msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>): void;
  /**
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param options The optional parameters
   * @param callback The callback
   */
  list(regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, options: Models.RegulatoryComplianceAssessmentsListOptionalParams, callback: msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>): void;
  list(regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, options?: Models.RegulatoryComplianceAssessmentsListOptionalParams | msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>, callback?: msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>): Promise<Models.RegulatoryComplianceAssessmentsListResponse> {
    return this.client.sendOperationRequest(
      {
        regulatoryComplianceStandardName,
        regulatoryComplianceControlName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.RegulatoryComplianceAssessmentsListResponse>;
  }

  /**
   * Supported regulatory compliance details and state for selected assessment
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param regulatoryComplianceAssessmentName Name of the regulatory compliance assessment object
   * @param [options] The optional parameters
   * @returns Promise<Models.RegulatoryComplianceAssessmentsGetResponse>
   */
  get(regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, regulatoryComplianceAssessmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.RegulatoryComplianceAssessmentsGetResponse>;
  /**
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param regulatoryComplianceAssessmentName Name of the regulatory compliance assessment object
   * @param callback The callback
   */
  get(regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, regulatoryComplianceAssessmentName: string, callback: msRest.ServiceCallback<Models.RegulatoryComplianceAssessment>): void;
  /**
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param regulatoryComplianceAssessmentName Name of the regulatory compliance assessment object
   * @param options The optional parameters
   * @param callback The callback
   */
  get(regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, regulatoryComplianceAssessmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RegulatoryComplianceAssessment>): void;
  get(regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, regulatoryComplianceAssessmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RegulatoryComplianceAssessment>, callback?: msRest.ServiceCallback<Models.RegulatoryComplianceAssessment>): Promise<Models.RegulatoryComplianceAssessmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        regulatoryComplianceStandardName,
        regulatoryComplianceControlName,
        regulatoryComplianceAssessmentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RegulatoryComplianceAssessmentsGetResponse>;
  }

  /**
   * Details and state of assessments mapped to selected regulatory compliance control
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RegulatoryComplianceAssessmentsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RegulatoryComplianceAssessmentsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>, callback?: msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>): Promise<Models.RegulatoryComplianceAssessmentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.RegulatoryComplianceAssessmentsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls/{regulatoryComplianceControlName}/regulatoryComplianceAssessments",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.regulatoryComplianceStandardName,
    Parameters.regulatoryComplianceControlName
  ],
  queryParameters: [
    Parameters.apiVersion6,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceAssessmentList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls/{regulatoryComplianceControlName}/regulatoryComplianceAssessments/{regulatoryComplianceAssessmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.regulatoryComplianceStandardName,
    Parameters.regulatoryComplianceControlName,
    Parameters.regulatoryComplianceAssessmentName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceAssessment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceAssessmentList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
