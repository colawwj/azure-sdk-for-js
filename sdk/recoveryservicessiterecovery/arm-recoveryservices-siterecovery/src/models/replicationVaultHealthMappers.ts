/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  discriminators,
  A2AEventDetails,
  A2APolicyDetails,
  A2AProtectedDiskDetails,
  A2AProtectedManagedDiskDetails,
  A2AProtectionContainerMappingDetails,
  A2ARecoveryPointDetails,
  A2AReplicationDetails,
  A2AReplicationIntentDetails,
  A2AUnprotectedDiskDetails,
  A2AVmDiskDetails,
  A2AVmManagedDiskDetails,
  AgentDetails,
  AgentDiskDetails,
  Alert,
  AlertProperties,
  AsrJobDetails,
  ASRTask,
  AutomationRunbookTaskDetails,
  AzureFabricSpecificDetails,
  AzureToAzureNetworkMappingSettings,
  AzureToAzureVmSyncedConfigDetails,
  AzureVmDiskDetails,
  BaseResource,
  CloudError,
  ConfigurationSettings,
  ConsistencyCheckTaskDetails,
  CurrentJobDetails,
  CurrentScenarioDetails,
  DataStore,
  DiskDetails,
  DiskEncryptionInfo,
  DiskEncryptionKeyInfo,
  DiskVolumeDetails,
  DraDetails,
  EncryptionDetails,
  Event,
  EventProperties,
  EventProviderSpecificDetails,
  EventSpecificDetails,
  ExportJobDetails,
  Fabric,
  FabricProperties,
  FabricReplicationGroupTaskDetails,
  FabricSpecificDetails,
  FailoverJobDetails,
  FailoverReplicationProtectedItemDetails,
  GroupTaskDetails,
  HealthError,
  HealthErrorSummary,
  HyperVReplica2012EventDetails,
  HyperVReplica2012R2EventDetails,
  HyperVReplicaAzureEventDetails,
  HyperVReplicaAzurePolicyDetails,
  HyperVReplicaAzureReplicationDetails,
  HyperVReplicaBaseEventDetails,
  HyperVReplicaBasePolicyDetails,
  HyperVReplicaBaseReplicationDetails,
  HyperVReplicaBluePolicyDetails,
  HyperVReplicaBlueReplicationDetails,
  HyperVReplicaPolicyDetails,
  HyperVReplicaReplicationDetails,
  HyperVSiteDetails,
  HyperVVirtualMachineDetails,
  IdentityProviderDetails,
  InconsistentVmDetails,
  InitialReplicationDetails,
  InlineWorkflowTaskDetails,
  InMageAgentDetails,
  InMageAzureV2EventDetails,
  InMageAzureV2ManagedDiskDetails,
  InMageAzureV2PolicyDetails,
  InMageAzureV2ProtectedDiskDetails,
  InMageAzureV2RecoveryPointDetails,
  InMageAzureV2ReplicationDetails,
  InMageBasePolicyDetails,
  InMageDiskDetails,
  InMagePolicyDetails,
  InMageProtectedDiskDetails,
  InMageRcmAgentUpgradeBlockingErrorDetails,
  InMageRcmEventDetails,
  InMageRcmFabricSpecificDetails,
  InMageRcmFailbackEventDetails,
  InMageRcmFailbackMobilityAgentDetails,
  InMageRcmFailbackNicDetails,
  InMageRcmFailbackPolicyDetails,
  InMageRcmFailbackProtectedDiskDetails,
  InMageRcmFailbackReplicationDetails,
  InMageRcmFailbackSyncDetails,
  InMageRcmLastAgentUpgradeErrorDetails,
  InMageRcmMobilityAgentDetails,
  InMageRcmNicDetails,
  InMageRcmPolicyDetails,
  InMageRcmProtectedDiskDetails,
  InMageRcmRecoveryPointDetails,
  InMageRcmReplicationDetails,
  InMageRcmSyncDetails,
  InMageReplicationDetails,
  InnerHealthError,
  InputEndpoint,
  IPConfig,
  Job,
  JobDetails,
  JobEntity,
  JobErrorDetails,
  JobProperties,
  JobStatusEventDetails,
  JobTaskDetails,
  KeyEncryptionKeyInfo,
  LogicalNetwork,
  LogicalNetworkProperties,
  ManualActionTaskDetails,
  MarsAgentDetails,
  MasterTargetServer,
  MigrationItem,
  MigrationItemProperties,
  MigrationProviderSpecificSettings,
  MigrationRecoveryPoint,
  MigrationRecoveryPointProperties,
  MobilityServiceUpdate,
  Network,
  NetworkMapping,
  NetworkMappingFabricSpecificSettings,
  NetworkMappingProperties,
  NetworkProperties,
  OSDetails,
  OSDiskDetails,
  OSVersionWrapper,
  Policy,
  PolicyProperties,
  PolicyProviderSpecificDetails,
  ProcessServer,
  ProcessServerDetails,
  ProtectableItem,
  ProtectableItemProperties,
  ProtectionContainer,
  ProtectionContainerFabricSpecificDetails,
  ProtectionContainerMapping,
  ProtectionContainerMappingProperties,
  ProtectionContainerMappingProviderSpecificDetails,
  ProtectionContainerProperties,
  ProviderError,
  ProviderSpecificRecoveryPointDetails,
  PushInstallerDetails,
  RcmAzureMigrationPolicyDetails,
  RcmProxyDetails,
  RecoveryPlan,
  RecoveryPlanA2ADetails,
  RecoveryPlanAction,
  RecoveryPlanActionDetails,
  RecoveryPlanAutomationRunbookActionDetails,
  RecoveryPlanGroup,
  RecoveryPlanGroupTaskDetails,
  RecoveryPlanManualActionDetails,
  RecoveryPlanProperties,
  RecoveryPlanProtectedItem,
  RecoveryPlanProviderSpecificDetails,
  RecoveryPlanScriptActionDetails,
  RecoveryPlanShutdownGroupTaskDetails,
  RecoveryPoint,
  RecoveryPointProperties,
  RecoveryServicesProvider,
  RecoveryServicesProviderProperties,
  ReplicationAgentDetails,
  ReplicationGroupDetails,
  ReplicationProtectedItem,
  ReplicationProtectedItemProperties,
  ReplicationProtectionIntent,
  ReplicationProtectionIntentProperties,
  ReplicationProtectionIntentProviderSpecificSettings,
  ReplicationProviderSpecificSettings,
  ReprotectAgentDetails,
  Resource,
  ResourceHealthSummary,
  RetentionVolume,
  RunAsAccount,
  ScriptActionTaskDetails,
  ServiceError,
  StorageClassification,
  StorageClassificationMapping,
  StorageClassificationMappingProperties,
  StorageClassificationProperties,
  Subnet,
  SupportedOperatingSystems,
  SupportedOSDetails,
  SupportedOSProperties,
  SupportedOSProperty,
  SwitchProtectionJobDetails,
  TaskTypeDetails,
  TestFailoverJobDetails,
  VaultHealthDetails,
  VaultHealthProperties,
  VaultSetting,
  VaultSettingProperties,
  VCenter,
  VCenterProperties,
  VersionDetails,
  VirtualMachineTaskDetails,
  VmmDetails,
  VmmToAzureNetworkMappingSettings,
  VmmToVmmNetworkMappingSettings,
  VmmVirtualMachineDetails,
  VMNicDetails,
  VmNicUpdatesTaskDetails,
  VMwareCbtMigrationDetails,
  VMwareCbtNicDetails,
  VmwareCbtPolicyDetails,
  VMwareCbtProtectedDiskDetails,
  VMwareCbtProtectionContainerMappingDetails,
  VMwareDetails,
  VMwareV2FabricSpecificDetails,
  VMwareVirtualMachineDetails
} from "../models/mappers";
