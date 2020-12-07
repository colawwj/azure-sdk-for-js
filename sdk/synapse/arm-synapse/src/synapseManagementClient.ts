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
import { SynapseManagementClientContext } from "./synapseManagementClientContext";


class SynapseManagementClient extends SynapseManagementClientContext {
  // Operation groups
  bigDataPools: operations.BigDataPools;
  operations: operations.Operations;
  ipFirewallRules: operations.IpFirewallRules;
  sqlPools: operations.SqlPools;
  sqlPoolMetadataSyncConfigs: operations.SqlPoolMetadataSyncConfigs;
  sqlPoolOperationResults: operations.SqlPoolOperationResults;
  sqlPoolGeoBackupPolicies: operations.SqlPoolGeoBackupPolicies;
  sqlPoolDataWarehouseUserActivities: operations.SqlPoolDataWarehouseUserActivities;
  sqlPoolRestorePoints: operations.SqlPoolRestorePoints;
  sqlPoolReplicationLinks: operations.SqlPoolReplicationLinks;
  sqlPoolTransparentDataEncryptions: operations.SqlPoolTransparentDataEncryptions;
  sqlPoolBlobAuditingPolicies: operations.SqlPoolBlobAuditingPolicies;
  sqlPoolOperations: operations.SqlPoolOperations;
  sqlPoolUsages: operations.SqlPoolUsages;
  sqlPoolSensitivityLabels: operations.SqlPoolSensitivityLabels;
  sqlPoolSchemas: operations.SqlPoolSchemas;
  sqlPoolTables: operations.SqlPoolTables;
  sqlPoolTableColumns: operations.SqlPoolTableColumns;
  sqlPoolConnectionPolicies: operations.SqlPoolConnectionPolicies;
  sqlPoolVulnerabilityAssessments: operations.SqlPoolVulnerabilityAssessments;
  sqlPoolVulnerabilityAssessmentScans: operations.SqlPoolVulnerabilityAssessmentScans;
  sqlPoolSecurityAlertPolicies: operations.SqlPoolSecurityAlertPolicies;
  sqlPoolVulnerabilityAssessmentRuleBaselines: operations.SqlPoolVulnerabilityAssessmentRuleBaselines;
  extendedSqlPoolBlobAuditingPolicies: operations.ExtendedSqlPoolBlobAuditingPolicies;
  dataMaskingPolicies: operations.DataMaskingPolicies;
  dataMaskingRules: operations.DataMaskingRules;
  sqlPoolColumns: operations.SqlPoolColumns;
  sqlPoolWorkloadGroup: operations.SqlPoolWorkloadGroup;
  sqlPoolWorkloadClassifier: operations.SqlPoolWorkloadClassifier;
  workspaces: operations.Workspaces;
  workspaceAadAdmins: operations.WorkspaceAadAdmins;
  workspaceSqlAadAdmins: operations.WorkspaceSqlAadAdmins;
  workspaceManagedIdentitySqlControlSettings: operations.WorkspaceManagedIdentitySqlControlSettings;
  restorableDroppedSqlPools: operations.RestorableDroppedSqlPools;
  integrationRuntimes: operations.IntegrationRuntimes;
  integrationRuntimeNodeIpAddress: operations.IntegrationRuntimeNodeIpAddressOperations;
  integrationRuntimeObjectMetadata: operations.IntegrationRuntimeObjectMetadata;
  integrationRuntimeNodes: operations.IntegrationRuntimeNodes;
  integrationRuntimeCredentials: operations.IntegrationRuntimeCredentials;
  integrationRuntimeConnectionInfos: operations.IntegrationRuntimeConnectionInfos;
  integrationRuntimeAuthKeys: operations.IntegrationRuntimeAuthKeysOperations;
  integrationRuntimeMonitoringData: operations.IntegrationRuntimeMonitoringDataOperations;
  integrationRuntimeStatus: operations.IntegrationRuntimeStatusOperations;
  privateLinkResources: operations.PrivateLinkResources;
  privateEndpointConnections: operations.PrivateEndpointConnections;
  privateLinkHubs: operations.PrivateLinkHubs;
  privateEndpointConnectionsPrivateLinkHub: operations.PrivateEndpointConnectionsPrivateLinkHub;
  workspaceManagedSqlServerBlobAuditingPolicies: operations.WorkspaceManagedSqlServerBlobAuditingPolicies;
  workspaceManagedSqlServerExtendedBlobAuditingPolicies: operations.WorkspaceManagedSqlServerExtendedBlobAuditingPolicies;
  workspaceManagedSqlServerSecurityAlertPolicy: operations.WorkspaceManagedSqlServerSecurityAlertPolicy;
  workspaceManagedSqlServerVulnerabilityAssessments: operations.WorkspaceManagedSqlServerVulnerabilityAssessments;
  workspaceManagedSqlServerUsages: operations.WorkspaceManagedSqlServerUsages;
  workspaceManagedSqlServerRecoverableSqlPools: operations.WorkspaceManagedSqlServerRecoverableSqlPools;
  keys: operations.Keys;

  /**
   * Initializes a new instance of the SynapseManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.SynapseManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.bigDataPools = new operations.BigDataPools(this);
    this.operations = new operations.Operations(this);
    this.ipFirewallRules = new operations.IpFirewallRules(this);
    this.sqlPools = new operations.SqlPools(this);
    this.sqlPoolMetadataSyncConfigs = new operations.SqlPoolMetadataSyncConfigs(this);
    this.sqlPoolOperationResults = new operations.SqlPoolOperationResults(this);
    this.sqlPoolGeoBackupPolicies = new operations.SqlPoolGeoBackupPolicies(this);
    this.sqlPoolDataWarehouseUserActivities = new operations.SqlPoolDataWarehouseUserActivities(this);
    this.sqlPoolRestorePoints = new operations.SqlPoolRestorePoints(this);
    this.sqlPoolReplicationLinks = new operations.SqlPoolReplicationLinks(this);
    this.sqlPoolTransparentDataEncryptions = new operations.SqlPoolTransparentDataEncryptions(this);
    this.sqlPoolBlobAuditingPolicies = new operations.SqlPoolBlobAuditingPolicies(this);
    this.sqlPoolOperations = new operations.SqlPoolOperations(this);
    this.sqlPoolUsages = new operations.SqlPoolUsages(this);
    this.sqlPoolSensitivityLabels = new operations.SqlPoolSensitivityLabels(this);
    this.sqlPoolSchemas = new operations.SqlPoolSchemas(this);
    this.sqlPoolTables = new operations.SqlPoolTables(this);
    this.sqlPoolTableColumns = new operations.SqlPoolTableColumns(this);
    this.sqlPoolConnectionPolicies = new operations.SqlPoolConnectionPolicies(this);
    this.sqlPoolVulnerabilityAssessments = new operations.SqlPoolVulnerabilityAssessments(this);
    this.sqlPoolVulnerabilityAssessmentScans = new operations.SqlPoolVulnerabilityAssessmentScans(this);
    this.sqlPoolSecurityAlertPolicies = new operations.SqlPoolSecurityAlertPolicies(this);
    this.sqlPoolVulnerabilityAssessmentRuleBaselines = new operations.SqlPoolVulnerabilityAssessmentRuleBaselines(this);
    this.extendedSqlPoolBlobAuditingPolicies = new operations.ExtendedSqlPoolBlobAuditingPolicies(this);
    this.dataMaskingPolicies = new operations.DataMaskingPolicies(this);
    this.dataMaskingRules = new operations.DataMaskingRules(this);
    this.sqlPoolColumns = new operations.SqlPoolColumns(this);
    this.sqlPoolWorkloadGroup = new operations.SqlPoolWorkloadGroup(this);
    this.sqlPoolWorkloadClassifier = new operations.SqlPoolWorkloadClassifier(this);
    this.workspaces = new operations.Workspaces(this);
    this.workspaceAadAdmins = new operations.WorkspaceAadAdmins(this);
    this.workspaceSqlAadAdmins = new operations.WorkspaceSqlAadAdmins(this);
    this.workspaceManagedIdentitySqlControlSettings = new operations.WorkspaceManagedIdentitySqlControlSettings(this);
    this.restorableDroppedSqlPools = new operations.RestorableDroppedSqlPools(this);
    this.integrationRuntimes = new operations.IntegrationRuntimes(this);
    this.integrationRuntimeNodeIpAddress = new operations.IntegrationRuntimeNodeIpAddressOperations(this);
    this.integrationRuntimeObjectMetadata = new operations.IntegrationRuntimeObjectMetadata(this);
    this.integrationRuntimeNodes = new operations.IntegrationRuntimeNodes(this);
    this.integrationRuntimeCredentials = new operations.IntegrationRuntimeCredentials(this);
    this.integrationRuntimeConnectionInfos = new operations.IntegrationRuntimeConnectionInfos(this);
    this.integrationRuntimeAuthKeys = new operations.IntegrationRuntimeAuthKeysOperations(this);
    this.integrationRuntimeMonitoringData = new operations.IntegrationRuntimeMonitoringDataOperations(this);
    this.integrationRuntimeStatus = new operations.IntegrationRuntimeStatusOperations(this);
    this.privateLinkResources = new operations.PrivateLinkResources(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(this);
    this.privateLinkHubs = new operations.PrivateLinkHubs(this);
    this.privateEndpointConnectionsPrivateLinkHub = new operations.PrivateEndpointConnectionsPrivateLinkHub(this);
    this.workspaceManagedSqlServerBlobAuditingPolicies = new operations.WorkspaceManagedSqlServerBlobAuditingPolicies(this);
    this.workspaceManagedSqlServerExtendedBlobAuditingPolicies = new operations.WorkspaceManagedSqlServerExtendedBlobAuditingPolicies(this);
    this.workspaceManagedSqlServerSecurityAlertPolicy = new operations.WorkspaceManagedSqlServerSecurityAlertPolicy(this);
    this.workspaceManagedSqlServerVulnerabilityAssessments = new operations.WorkspaceManagedSqlServerVulnerabilityAssessments(this);
    this.workspaceManagedSqlServerUsages = new operations.WorkspaceManagedSqlServerUsages(this);
    this.workspaceManagedSqlServerRecoverableSqlPools = new operations.WorkspaceManagedSqlServerRecoverableSqlPools(this);
    this.keys = new operations.Keys(this);
  }
}

// Operation Specifications

export {
  SynapseManagementClient,
  SynapseManagementClientContext,
  Models as SynapseManagementModels,
  Mappers as SynapseManagementMappers
};
export * from "./operations";
