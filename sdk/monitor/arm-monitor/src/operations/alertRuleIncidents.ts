/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/alertRuleIncidentsMappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";

/** Class representing a AlertRuleIncidents. */
export class AlertRuleIncidents {
  private readonly client: MonitorManagementClientContext;

  /**
   * Create a AlertRuleIncidents.
   * @param {MonitorManagementClientContext} client Reference to the service client.
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets an incident associated to an alert rule
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param incidentName The name of the incident to retrieve.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertRuleIncidentsGetResponse>
   */
  get(resourceGroupName: string, ruleName: string, incidentName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertRuleIncidentsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param incidentName The name of the incident to retrieve.
   * @param callback The callback
   */
  get(resourceGroupName: string, ruleName: string, incidentName: string, callback: msRest.ServiceCallback<Models.Incident>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param incidentName The name of the incident to retrieve.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, ruleName: string, incidentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Incident>): void;
  get(resourceGroupName: string, ruleName: string, incidentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Incident>, callback?: msRest.ServiceCallback<Models.Incident>): Promise<Models.AlertRuleIncidentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ruleName,
        incidentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AlertRuleIncidentsGetResponse>;
  }

  /**
   * Gets a list of incidents associated to an alert rule
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertRuleIncidentsListByAlertRuleResponse>
   */
  listByAlertRule(resourceGroupName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertRuleIncidentsListByAlertRuleResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param callback The callback
   */
  listByAlertRule(resourceGroupName: string, ruleName: string, callback: msRest.ServiceCallback<Models.IncidentListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAlertRule(resourceGroupName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IncidentListResult>): void;
  listByAlertRule(resourceGroupName: string, ruleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IncidentListResult>, callback?: msRest.ServiceCallback<Models.IncidentListResult>): Promise<Models.AlertRuleIncidentsListByAlertRuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ruleName,
        options
      },
      listByAlertRuleOperationSpec,
      callback) as Promise<Models.AlertRuleIncidentsListByAlertRuleResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}/incidents/{incidentName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.ruleName,
    Parameters.incidentName,
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
      bodyMapper: Mappers.Incident
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAlertRuleOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}/incidents",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.ruleName,
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
      bodyMapper: Mappers.IncidentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
