/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  discriminators,
  AADProperties,
  AADPropertiesResource,
  AzureBackupServerContainer,
  AzureBackupServerEngine,
  AzureFileShareBackupRequest,
  AzureFileShareProtectableItem,
  AzureFileshareProtectedItem,
  AzureFileshareProtectedItemExtendedInfo,
  AzureFileShareProtectionPolicy,
  AzureFileShareProvisionILRRequest,
  AzureFileShareRecoveryPoint,
  AzureFileShareRestoreRequest,
  AzureIaaSClassicComputeVMContainer,
  AzureIaaSClassicComputeVMProtectableItem,
  AzureIaaSClassicComputeVMProtectedItem,
  AzureIaaSComputeVMContainer,
  AzureIaaSComputeVMProtectableItem,
  AzureIaaSComputeVMProtectedItem,
  AzureIaaSVMErrorInfo,
  AzureIaaSVMHealthDetails,
  AzureIaaSVMJob,
  AzureIaaSVMJobExtendedInfo,
  AzureIaaSVMJobTaskDetails,
  AzureIaaSVMProtectedItem,
  AzureIaaSVMProtectedItemExtendedInfo,
  AzureIaaSVMProtectionPolicy,
  AzureRecoveryServiceVaultProtectionIntent,
  AzureResourceProtectionIntent,
  AzureSQLAGWorkloadContainerProtectionContainer,
  AzureSqlContainer,
  AzureSqlProtectedItem,
  AzureSqlProtectedItemExtendedInfo,
  AzureSqlProtectionPolicy,
  AzureStorageContainer,
  AzureStorageErrorInfo,
  AzureStorageJob,
  AzureStorageJobExtendedInfo,
  AzureStorageJobTaskDetails,
  AzureStorageProtectableContainer,
  AzureVMAppContainerProtectableContainer,
  AzureVMAppContainerProtectionContainer,
  AzureVmWorkloadItem,
  AzureVmWorkloadProtectableItem,
  AzureVmWorkloadProtectedItem,
  AzureVmWorkloadProtectedItemExtendedInfo,
  AzureVmWorkloadProtectionPolicy,
  AzureVmWorkloadSAPAseDatabaseProtectedItem,
  AzureVmWorkloadSAPAseDatabaseWorkloadItem,
  AzureVmWorkloadSAPAseSystemProtectableItem,
  AzureVmWorkloadSAPAseSystemWorkloadItem,
  AzureVmWorkloadSAPHanaDatabaseProtectableItem,
  AzureVmWorkloadSAPHanaDatabaseProtectedItem,
  AzureVmWorkloadSAPHanaDatabaseWorkloadItem,
  AzureVmWorkloadSAPHanaSystemProtectableItem,
  AzureVmWorkloadSAPHanaSystemWorkloadItem,
  AzureVmWorkloadSQLAvailabilityGroupProtectableItem,
  AzureVmWorkloadSQLDatabaseProtectableItem,
  AzureVmWorkloadSQLDatabaseProtectedItem,
  AzureVmWorkloadSQLDatabaseWorkloadItem,
  AzureVmWorkloadSQLInstanceProtectableItem,
  AzureVmWorkloadSQLInstanceWorkloadItem,
  AzureWorkloadAutoProtectionIntent,
  AzureWorkloadBackupRequest,
  AzureWorkloadContainer,
  AzureWorkloadContainerExtendedInfo,
  AzureWorkloadErrorInfo,
  AzureWorkloadJob,
  AzureWorkloadJobExtendedInfo,
  AzureWorkloadJobTaskDetails,
  AzureWorkloadPointInTimeRecoveryPoint,
  AzureWorkloadPointInTimeRestoreRequest,
  AzureWorkloadRecoveryPoint,
  AzureWorkloadRestoreRequest,
  AzureWorkloadSAPHanaPointInTimeRecoveryPoint,
  AzureWorkloadSAPHanaPointInTimeRestoreRequest,
  AzureWorkloadSAPHanaRecoveryPoint,
  AzureWorkloadSAPHanaRestoreRequest,
  AzureWorkloadSQLAutoProtectionIntent,
  AzureWorkloadSQLPointInTimeRecoveryPoint,
  AzureWorkloadSQLPointInTimeRestoreRequest,
  AzureWorkloadSQLRecoveryPoint,
  AzureWorkloadSQLRecoveryPointExtendedInfo,
  AzureWorkloadSQLRestoreRequest,
  BackupEngineBase,
  BackupEngineBaseResource,
  BackupEngineBaseResourceList,
  BackupEngineExtendedInfo,
  BackupRequest,
  BackupRequestResource,
  BackupResourceConfig,
  BackupResourceConfigResource,
  BackupResourceEncryptionConfig,
  BackupResourceEncryptionConfigResource,
  BackupResourceVaultConfig,
  BackupResourceVaultConfigResource,
  BaseResource,
  BEKDetails,
  CloudError,
  ContainerIdentityInfo,
  CrossRegionRestoreRequest,
  CrossRegionRestoreRequestResource,
  CrrAccessToken,
  CrrAccessTokenResource,
  CrrJobRequest,
  CrrJobRequestResource,
  DailyRetentionFormat,
  DailyRetentionSchedule,
  Day,
  DiskExclusionProperties,
  DiskInformation,
  DistributedNodesInfo,
  DpmBackupEngine,
  DpmContainer,
  DPMContainerExtendedInfo,
  DpmErrorInfo,
  DpmJob,
  DpmJobExtendedInfo,
  DpmJobTaskDetails,
  DPMProtectedItem,
  DPMProtectedItemExtendedInfo,
  EncryptionDetails,
  ErrorDetail,
  ExtendedProperties,
  GenericContainer,
  GenericContainerExtendedInfo,
  GenericProtectedItem,
  GenericProtectionPolicy,
  GenericRecoveryPoint,
  IaasVMBackupRequest,
  IaaSVMContainer,
  IaasVMILRRegistrationRequest,
  IaaSVMProtectableItem,
  IaasVMRecoveryPoint,
  IaasVMRestoreRequest,
  ILRRequest,
  ILRRequestResource,
  InquiryInfo,
  InquiryValidation,
  InstantRPAdditionalDetails,
  Job,
  JobResource,
  JobResourceList,
  KEKDetails,
  KeyAndSecretDetails,
  KPIResourceHealthDetails,
  LogSchedulePolicy,
  LongTermRetentionPolicy,
  LongTermSchedulePolicy,
  MabContainer,
  MabContainerExtendedInfo,
  MABContainerHealthDetails,
  MabErrorInfo,
  MabFileFolderProtectedItem,
  MabFileFolderProtectedItemExtendedInfo,
  MabJob,
  MabJobExtendedInfo,
  MabJobTaskDetails,
  MabProtectionPolicy,
  MonthlyRetentionSchedule,
  PointInTimeRange,
  PreBackupValidation,
  PrivateEndpoint,
  PrivateEndpointConnection,
  PrivateEndpointConnectionResource,
  PrivateLinkServiceConnectionState,
  ProtectableContainer,
  ProtectableContainerResource,
  ProtectableContainerResourceList,
  ProtectedItem,
  ProtectedItemResource,
  ProtectedItemResourceList,
  ProtectionContainer,
  ProtectionContainerResource,
  ProtectionContainerResourceList,
  ProtectionIntent,
  ProtectionIntentResource,
  ProtectionIntentResourceList,
  ProtectionPolicy,
  ProtectionPolicyResource,
  ProtectionPolicyResourceList,
  RecoveryPoint,
  RecoveryPointDiskConfiguration,
  RecoveryPointResource,
  RecoveryPointResourceList,
  RecoveryPointTierInformation,
  Resource,
  ResourceHealthDetails,
  ResourceList,
  RestoreFileSpecs,
  RestoreRequest,
  RestoreRequestResource,
  RetentionDuration,
  RetentionPolicy,
  SchedulePolicy,
  Settings,
  SimpleRetentionPolicy,
  SimpleSchedulePolicy,
  SQLDataDirectory,
  SQLDataDirectoryMapping,
  SubProtectionPolicy,
  TargetAFSRestoreInfo,
  TargetRestoreInfo,
  VaultJob,
  VaultJobErrorInfo,
  VaultJobExtendedInfo,
  WeeklyRetentionFormat,
  WeeklyRetentionSchedule,
  WorkloadCrrAccessToken,
  WorkloadInquiryDetails,
  WorkloadItem,
  WorkloadItemResource,
  WorkloadItemResourceList,
  WorkloadProtectableItem,
  WorkloadProtectableItemResource,
  WorkloadProtectableItemResourceList,
  YearlyRetentionSchedule
} from "../models/mappers";
