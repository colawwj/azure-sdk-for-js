/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  AdditionalCapabilities,
  AdditionalUnattendContent,
  ApiEntityReference,
  ApiError,
  ApiErrorBase,
  AutomaticOSUpgradePolicy,
  AutomaticOSUpgradeProperties,
  AutomaticRepairsPolicy,
  AvailabilitySet,
  AvailabilitySetUpdate,
  AvailablePatchSummary,
  BaseResource,
  BillingProfile,
  BootDiagnostics,
  BootDiagnosticsInstanceView,
  CloudError,
  CloudService,
  CloudServiceExtensionProfile,
  CloudServiceExtensionProperties,
  CloudServiceNetworkProfile,
  CloudServiceOsProfile,
  CloudServiceProperties,
  CloudServiceRoleProfile,
  CloudServiceRoleProfileProperties,
  CloudServiceRoleSku,
  CloudServiceVaultAndSecretReference,
  CloudServiceVaultCertificate,
  CloudServiceVaultSecretGroup,
  ContainerService,
  ContainerServiceAgentPoolProfile,
  ContainerServiceCustomProfile,
  ContainerServiceDiagnosticsProfile,
  ContainerServiceLinuxProfile,
  ContainerServiceMasterProfile,
  ContainerServiceOrchestratorProfile,
  ContainerServiceServicePrincipalProfile,
  ContainerServiceSshConfiguration,
  ContainerServiceSshPublicKey,
  ContainerServiceVMDiagnostics,
  ContainerServiceWindowsProfile,
  CreationData,
  DataDisk,
  DataDiskImage,
  DataDiskImageEncryption,
  DedicatedHost,
  DedicatedHostAllocatableVM,
  DedicatedHostAvailableCapacity,
  DedicatedHostGroup,
  DedicatedHostGroupInstanceView,
  DedicatedHostGroupUpdate,
  DedicatedHostInstanceView,
  DedicatedHostInstanceViewWithName,
  DedicatedHostUpdate,
  DiagnosticsProfile,
  DiffDiskSettings,
  Disallowed,
  DisallowedConfiguration,
  Disk,
  DiskAccess,
  DiskEncryptionSet,
  DiskEncryptionSetParameters,
  DiskEncryptionSettings,
  DiskImageEncryption,
  DiskInstanceView,
  DiskSku,
  Encryption,
  EncryptionImages,
  EncryptionSetIdentity,
  EncryptionSettingsCollection,
  EncryptionSettingsElement,
  Extension,
  Gallery,
  GalleryApplication,
  GalleryApplicationUpdate,
  GalleryApplicationVersion,
  GalleryApplicationVersionPublishingProfile,
  GalleryApplicationVersionUpdate,
  GalleryArtifactPublishingProfileBase,
  GalleryArtifactVersionSource,
  GalleryDataDiskImage,
  GalleryDiskImage,
  GalleryIdentifier,
  GalleryImage,
  GalleryImageFeature,
  GalleryImageIdentifier,
  GalleryImageUpdate,
  GalleryImageVersion,
  GalleryImageVersionPublishingProfile,
  GalleryImageVersionStorageProfile,
  GalleryImageVersionUpdate,
  GalleryOSDiskImage,
  GalleryUpdate,
  HardwareProfile,
  Image,
  ImageDataDisk,
  ImageDisk,
  ImageDiskReference,
  ImageOSDisk,
  ImagePurchasePlan,
  ImageReference,
  ImageStorageProfile,
  ImageUpdate,
  InnerError,
  InstanceViewStatus,
  KeyVaultAndKeyReference,
  KeyVaultAndSecretReference,
  KeyVaultKeyReference,
  KeyVaultSecretReference,
  LastPatchInstallationSummary,
  LinuxConfiguration,
  LoadBalancerConfiguration,
  LoadBalancerConfigurationProperties,
  LoadBalancerFrontendIPConfiguration,
  LoadBalancerFrontendIPConfigurationProperties,
  MaintenanceRedeployStatus,
  ManagedDiskParameters,
  NetworkInterfaceReference,
  NetworkProfile,
  OSDisk,
  OSDiskImage,
  OSDiskImageEncryption,
  OSProfile,
  PatchSettings,
  Plan,
  PrivateEndpoint,
  PrivateEndpointConnection,
  PrivateLinkServiceConnectionState,
  ProximityPlacementGroup,
  ProximityPlacementGroupUpdate,
  PurchasePlan,
  RecommendedMachineConfiguration,
  RegionalReplicationStatus,
  ReplicationStatus,
  Resource,
  ResourceRange,
  RollingUpgradePolicy,
  RollingUpgradeProgressInfo,
  RollingUpgradeRunningStatus,
  RollingUpgradeStatusInfo,
  RunCommandInputParameter,
  ScaleInPolicy,
  ScheduledEventsProfile,
  SecurityProfile,
  ShareInfoElement,
  SharingProfile,
  SharingProfileGroup,
  SharingUpdate,
  Sku,
  Snapshot,
  SnapshotSku,
  SourceVault,
  SshConfiguration,
  SshPublicKey,
  SshPublicKeyResource,
  SshPublicKeyUpdateResource,
  StorageProfile,
  SubResource,
  SubResourceReadOnly,
  SubResourceWithColocationStatus,
  TargetRegion,
  TerminateNotificationProfile,
  UpdateResource,
  UpdateResourceDefinition,
  UpgradePolicy,
  UserArtifactManage,
  UserArtifactSource,
  VaultCertificate,
  VaultSecretGroup,
  VirtualHardDisk,
  VirtualMachine,
  VirtualMachineAgentInstanceView,
  VirtualMachineCaptureResult,
  VirtualMachineExtension,
  VirtualMachineExtensionHandlerInstanceView,
  VirtualMachineExtensionImage,
  VirtualMachineExtensionInstanceView,
  VirtualMachineExtensionsListResult,
  VirtualMachineExtensionUpdate,
  VirtualMachineHealthStatus,
  VirtualMachineIdentity,
  VirtualMachineIdentityUserAssignedIdentitiesValue,
  VirtualMachineImage,
  VirtualMachineImageResource,
  VirtualMachineInstanceView,
  VirtualMachinePatchStatus,
  VirtualMachineRunCommand,
  VirtualMachineRunCommandInstanceView,
  VirtualMachineRunCommandScriptSource,
  VirtualMachineRunCommandUpdate,
  VirtualMachineScaleSet,
  VirtualMachineScaleSetDataDisk,
  VirtualMachineScaleSetExtension,
  VirtualMachineScaleSetExtensionProfile,
  VirtualMachineScaleSetExtensionUpdate,
  VirtualMachineScaleSetIdentity,
  VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue,
  VirtualMachineScaleSetIPConfiguration,
  VirtualMachineScaleSetIpTag,
  VirtualMachineScaleSetManagedDiskParameters,
  VirtualMachineScaleSetNetworkConfiguration,
  VirtualMachineScaleSetNetworkConfigurationDnsSettings,
  VirtualMachineScaleSetNetworkProfile,
  VirtualMachineScaleSetOSDisk,
  VirtualMachineScaleSetOSProfile,
  VirtualMachineScaleSetPublicIPAddressConfiguration,
  VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings,
  VirtualMachineScaleSetStorageProfile,
  VirtualMachineScaleSetUpdate,
  VirtualMachineScaleSetUpdateIPConfiguration,
  VirtualMachineScaleSetUpdateNetworkConfiguration,
  VirtualMachineScaleSetUpdateNetworkProfile,
  VirtualMachineScaleSetUpdateOSDisk,
  VirtualMachineScaleSetUpdateOSProfile,
  VirtualMachineScaleSetUpdatePublicIPAddressConfiguration,
  VirtualMachineScaleSetUpdateStorageProfile,
  VirtualMachineScaleSetUpdateVMProfile,
  VirtualMachineScaleSetVM,
  VirtualMachineScaleSetVMExtension,
  VirtualMachineScaleSetVMExtensionUpdate,
  VirtualMachineScaleSetVMInstanceView,
  VirtualMachineScaleSetVMNetworkProfileConfiguration,
  VirtualMachineScaleSetVMProfile,
  VirtualMachineScaleSetVMProtectionPolicy,
  VirtualMachineUpdate,
  WindowsConfiguration,
  WinRMConfiguration,
  WinRMListener
} from "../models/mappers";
