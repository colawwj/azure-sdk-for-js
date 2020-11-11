/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * The object that represents the operation.
 */
export interface ApiOperationDisplay {
  /**
   * Operation type: Read, write, delete, etc.
   */
  operation?: string;
  /**
   * Service provider: Microsoft.StorageCache
   */
  provider?: string;
  /**
   * Resource on which the operation is performed: Cache, etc.
   */
  resource?: string;
  /**
   * The description of the operation
   */
  description?: string;
}

/**
 * Specifications of the Dimension of metrics.
 */
export interface MetricDimension {
  /**
   * Name of the dimension
   */
  name?: string;
  /**
   * Localized friendly display name of the dimension
   */
  displayName?: string;
  /**
   * Internal name of the dimension.
   */
  internalName?: string;
  /**
   * To be exported to shoe box.
   */
  toBeExportedForShoebox?: boolean;
}

/**
 * Details about operation related to metrics.
 */
export interface MetricSpecification {
  /**
   * The name of the metric.
   */
  name?: string;
  /**
   * Localized display name of the metric.
   */
  displayName?: string;
  /**
   * The description of the metric.
   */
  displayDescription?: string;
  /**
   * The unit that the metric is measured in.
   */
  unit?: string;
  /**
   * The type of metric aggregation.
   */
  aggregationType?: string;
  /**
   * Support metric aggregation type.
   */
  supportedAggregationTypes?: MetricAggregationType[];
  /**
   * Type of metrics.
   */
  metricClass?: string;
  /**
   * Dimensions of the metric
   */
  dimensions?: MetricDimension[];
}

/**
 * Specification of the all the metrics provided for a resource type.
 */
export interface ApiOperationPropertiesServiceSpecification {
  /**
   * Details about operations related to metrics.
   */
  metricSpecifications?: MetricSpecification[];
}

/**
 * REST API operation description: see
 * https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r3023-operationsapiimplementation
 */
export interface ApiOperation {
  /**
   * The object that represents the operation.
   */
  display?: ApiOperationDisplay;
  /**
   * Origin of the operation.
   */
  origin?: string;
  /**
   * The flag that indicates whether the operation applies to data plane.
   */
  isDataAction?: boolean;
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * Specification of the all the metrics provided for a resource type.
   */
  serviceSpecification?: ApiOperationPropertiesServiceSpecification;
}

/**
 * An error response.
 */
export interface CloudErrorBody {
  /**
   * An identifier for the error. Codes are invariant and are intended to be consumed
   * programmatically.
   */
  code?: string;
  /**
   * A list of additional details about the error.
   */
  details?: CloudErrorBody[];
  /**
   * A message describing the error, intended to be suitable for display in a user interface.
   */
  message?: string;
  /**
   * The target of the particular error. For example, the name of the property in error.
   */
  target?: string;
}

/**
 * Describes the format of Error response.
 */
export interface ErrorResponse {
  /**
   * Error code
   */
  code?: string;
  /**
   * Error message indicating why the operation failed.
   */
  message?: string;
}

/**
 * The status of operation.
 */
export interface AscOperation {
  /**
   * The operation Id.
   */
  id?: string;
  /**
   * The operation name.
   */
  name?: string;
  /**
   * The start time of the operation.
   */
  startTime?: string;
  /**
   * The end time of the operation.
   */
  endTime?: string;
  /**
   * The status of the operation.
   */
  status?: string;
  /**
   * The error detail of the operation if any.
   */
  error?: ErrorResponse;
}

/**
 * Cache identity properties.
 */
export interface CacheIdentity {
  /**
   * The principal id of the cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The tenant id associated with the cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
  /**
   * The type of identity used for the cache. Possible values include: 'SystemAssigned', 'None'
   */
  type?: CacheIdentityType;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemData {
  /**
   * The identity that created the resource.
   */
  createdBy?: string;
  /**
   * The type of identity that created the resource. Possible values include: 'User',
   * 'Application', 'ManagedIdentity', 'Key'
   */
  createdByType?: CreatedByType;
  /**
   * The timestamp of resource creation (UTC).
   */
  createdAt?: Date;
  /**
   * The identity that last modified the resource.
   */
  lastModifiedBy?: string;
  /**
   * The type of identity that last modified the resource. Possible values include: 'User',
   * 'Application', 'ManagedIdentity', 'Key'
   */
  lastModifiedByType?: CreatedByType;
  /**
   * The type of identity that last modified the resource.
   */
  lastModifiedAt?: Date;
}

/**
 * An indication of Cache health. Gives more information about health than just that related to
 * provisioning.
 */
export interface CacheHealth {
  /**
   * List of Cache health states. Possible values include: 'Unknown', 'Healthy', 'Degraded',
   * 'Down', 'Transitioning', 'Stopping', 'Stopped', 'Upgrading', 'Flushing'
   */
  state?: HealthStateType;
  /**
   * Describes explanation of state.
   */
  statusDescription?: string;
}

/**
 * Properties describing the software upgrade state of the Cache.
 */
export interface CacheUpgradeStatus {
  /**
   * Version string of the firmware currently installed on this Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly currentFirmwareVersion?: string;
  /**
   * True if there is a firmware update ready to install on this Cache. The firmware will
   * automatically be installed after firmwareUpdateDeadline if not triggered earlier via the
   * upgrade operation. Possible values include: 'available', 'unavailable'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly firmwareUpdateStatus?: FirmwareStatusType;
  /**
   * Time at which the pending firmware update will automatically be installed on the Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly firmwareUpdateDeadline?: Date;
  /**
   * Time of the last successful firmware update.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastFirmwareUpdate?: Date;
  /**
   * When firmwareUpdateAvailable is true, this field holds the version string for the update.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly pendingFirmwareVersion?: string;
}

/**
 * Cache network settings.
 */
export interface CacheNetworkSettings {
  /**
   * The IPv4 maximum transmission unit configured for the subnet. Default value: 1500.
   */
  mtu?: number;
  /**
   * Array of additional IP addresses used by this Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly utilityAddresses?: string[];
}

/**
 * Describes a resource Id to source Key Vault.
 */
export interface KeyVaultKeyReferenceSourceVault {
  /**
   * Resource Id.
   */
  id?: string;
}

/**
 * Describes a reference to Key Vault Key.
 */
export interface KeyVaultKeyReference {
  /**
   * The URL referencing a key encryption key in Key Vault.
   */
  keyUrl: string;
  /**
   * Describes a resource Id to source Key Vault.
   */
  sourceVault: KeyVaultKeyReferenceSourceVault;
}

/**
 * Cache encryption settings.
 */
export interface CacheEncryptionSettings {
  /**
   * Specifies the location of the key encryption key in Key Vault.
   */
  keyEncryptionKey?: KeyVaultKeyReference;
}

/**
 * Rule to place restrictions on portions of the NFS namespace being presented to clients.
 */
export interface NfsAccessRule {
  /**
   * Scope applied to this rule. Possible values include: 'default', 'network', 'host'
   */
  scope?: NfsAccessRuleScope;
  /**
   * Filter applied to this rule. The filter's format depends on its scope.  'default' scope is
   * reserved for system use. 'network' is in CIDR format (e.g., 10.99.1.0/24) and 'host' is an IP
   * address or fully qualified domain name.
   */
  filter?: string;
  /**
   * Access allowed by this rule. Possible values include: 'no', 'ro', 'rw'
   */
  access?: NfsAccessRuleAccess;
  /**
   * Allow SUID semantics.
   */
  suid?: boolean;
  /**
   * Allow mounts below the junction.
   */
  submountAccess?: boolean;
  /**
   * Map root accesses to anonymousUID and anonymousGID.
   */
  rootSquash?: boolean;
  /**
   * UID value that replaces 0 when rootSquash is true. Default value: '-2'.
   */
  anonymousUID?: string;
  /**
   * GID value that replaces 0 when rootSquash is true. Default value: '-2'.
   */
  anonymousGID?: string;
}

/**
 * A set of rules describing access policies applied to NFSv3 clients of the cache.
 */
export interface NfsAccessPolicy {
  /**
   * Name identifying this policy. Access Policy names are not case sensitive.
   */
  name?: string;
  /**
   * The set of rules describing client accesses allowed under this policy.
   */
  accessRules?: NfsAccessRule[];
}

/**
 * Cache security settings.
 */
export interface CacheSecuritySettings {
  /**
   * NFS access policies defined for this cache.
   */
  accessPolicies?: NfsAccessPolicy[];
}

/**
 * Active Directory admin or user credentials used to join the HPC Cache to a domain.
 */
export interface CacheActiveDirectorySettingsCredentials {
  /**
   * User name of the Active Directory domain administrator. This value is stored encrypted and not
   * returned on response.
   */
  username: string;
  /**
   * Plain text password of the Active Directory domain administrator. This value is stored
   * encrypted and not returned on response.
   */
  password: string;
}

/**
 * Active Directory settings used to join a Cache to a domain.
 */
export interface CacheActiveDirectorySettings {
  /**
   * Primary DNS IP address used to resolve the Active Directory domain controller's fully
   * qualified domain name.
   */
  primaryDnsIpAddress: string;
  /**
   * Secondary DNS IP address used to resolve the Active Directory domain controller's fully
   * qualified domain name.
   */
  secondaryDnsIpAddress?: string;
  /**
   * The fully qualified domain name of the Active Directory domain controller.
   */
  domainName: string;
  /**
   * The Active Directory domain's NetBIOS name.
   */
  domainNetBios: string;
  /**
   * The name (NetBIOS) used for the HPC Cache to join the Active Directory domain. Length must not
   * be greater than 15 and chars must be from the [-0-9a-zA-Z_] char class.
   */
  smbServerName: string;
  /**
   * This field indicates if the HPC Cache is joined to the Active Directory domain. Possible
   * values include: 'Yes', 'No', 'Error'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly domainJoined?: DomainJoinedType;
  /**
   * Active Directory admin or user credentials used to join the HPC Cache to a domain.
   */
  credentials?: CacheActiveDirectorySettingsCredentials;
}

/**
 * When present, these are the credentials for the secure LDAP connection.
 */
export interface CacheUsernameDownloadSettingsCredentials {
  /**
   * The Bind distinguished name identity to be used in the secure LDAP connection. This value is
   * stored encrypted and not returned on response.
   */
  bindDn?: string;
  /**
   * The Bind password to be used in the secure LDAP connection. This value is stored encrypted and
   * not returned on response.
   */
  bindPassword?: string;
}

/**
 * Settings for username and group download for Extended Groups.
 */
export interface CacheUsernameDownloadSettings {
  /**
   * This indicates if Extended Groups is enabled.
   */
  extendedGroupsEnabled?: boolean;
  /**
   * This setting determines how the system gets username and group names for clients. Possible
   * values include: 'AD', 'LDAP', 'File', 'None'. Default value: 'None'.
   */
  usernameSource?: UsernameSource;
  /**
   * The URI of the file containing the group information (in /etc/group file format).  This field
   * must be populated when 'usernameSource' is set to 'File'.
   */
  groupFileURI?: string;
  /**
   * The URI of the file containing the user information (in /etc/passwd file format). This field
   * must be populated when 'usernameSource' is set to 'File'.
   */
  userFileURI?: string;
  /**
   * The fully qualified domain name or IP address of the LDAP server to use.
   */
  ldapServer?: string;
  /**
   * The base distinguished name for the LDAP domain.
   */
  ldapBaseDn?: string;
  /**
   * This indicates if the LDAP connection should be encrypted.
   */
  encryptLdapConnection?: boolean;
  /**
   * Determines if the certificates should be validated by a certificate authority. When true,
   * caCertificateURI must be provided.
   */
  requireValidCertificate?: boolean;
  /**
   * Determines if the certificate should be automatically downloaded. This applies to
   * 'caCertificateURI' when 'requireValidCertificate' is true, or a self signed certificate
   * otherwise.
   */
  autoDownloadCertificate?: boolean;
  /**
   * The URI of the CA certificate to validate the LDAP secure connection. This field must be
   * populated when 'requireValidCertificate' is set to true.
   */
  caCertificateURI?: string;
  /**
   * Indicates if the HPC Cache has performed the username download successfully. Possible values
   * include: 'Yes', 'No', 'Error'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly usernameDownloaded?: UsernameDownloadedType;
  /**
   * When present, these are the credentials for the secure LDAP connection.
   */
  credentials?: CacheUsernameDownloadSettingsCredentials;
}

/**
 * Cache Directory Services settings.
 */
export interface CacheDirectorySettings {
  /**
   * Specifies the settings for joining the HPC Cache to an Active Directory domain.
   */
  activeDirectory?: CacheActiveDirectorySettings;
  /**
   * Specifies the settings for Extended Groups. Extended Groups allows users to be members of more
   * than 16 groups.
   */
  usernameDownload?: CacheUsernameDownloadSettings;
}

/**
 * SKU for the Cache.
 */
export interface CacheSku {
  /**
   * SKU name for this Cache.
   */
  name?: string;
}

/**
 * A Cache instance. Follows Azure Resource Manager standards:
 * https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
 */
export interface Cache extends BaseResource {
  /**
   * ARM tags as name/value pairs.
   */
  tags?: any;
  /**
   * Resource ID of the Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Region name string.
   */
  location?: string;
  /**
   * Name of Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Type of the Cache; Microsoft.StorageCache/Cache
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The identity of the cache, if configured.
   */
  identity?: CacheIdentity;
  /**
   * The system meta data relating to this resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly systemData?: SystemData;
  /**
   * The size of this Cache, in GB.
   */
  cacheSizeGB?: number;
  /**
   * Health of the Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly health?: CacheHealth;
  /**
   * Array of IP addresses that can be used by clients mounting this Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly mountAddresses?: string[];
  /**
   * ARM provisioning state, see
   * https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
   * Possible values include: 'Succeeded', 'Failed', 'Cancelled', 'Creating', 'Deleting',
   * 'Updating'
   */
  provisioningState?: ProvisioningStateType;
  /**
   * Subnet used for the Cache.
   */
  subnet?: string;
  /**
   * Upgrade status of the Cache.
   */
  upgradeStatus?: CacheUpgradeStatus;
  /**
   * Specifies network settings of the cache.
   */
  networkSettings?: CacheNetworkSettings;
  /**
   * Specifies encryption settings of the cache.
   */
  encryptionSettings?: CacheEncryptionSettings;
  /**
   * Specifies security settings of the cache.
   */
  securitySettings?: CacheSecuritySettings;
  /**
   * Specifies Directory Services settings of the cache.
   */
  directoryServicesSettings?: CacheDirectorySettings;
  /**
   * SKU for the Cache.
   */
  sku?: CacheSku;
}

/**
 * A namespace junction.
 */
export interface NamespaceJunction {
  /**
   * Namespace path on a Cache for a Storage Target.
   */
  namespacePath?: string;
  /**
   * Path in Storage Target to which namespacePath points.
   */
  targetPath?: string;
  /**
   * NFS export where targetPath exists.
   */
  nfsExport?: string;
  /**
   * Name of the access policy applied to this junction.
   */
  nfsAccessPolicy?: string;
}

/**
 * Properties pertaining to the Nfs3Target
 */
export interface Nfs3Target {
  /**
   * IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
   */
  target?: string;
  /**
   * Identifies the usage model to be used for this Storage Target. Get choices from
   * .../usageModels
   */
  usageModel?: string;
}

/**
 * Properties pertaining to the ClfsTarget
 */
export interface ClfsTarget {
  /**
   * Resource ID of storage container.
   */
  target?: string;
}

/**
 * Properties pertaining to the UnknownTarget
 */
export interface UnknownTarget {
  /**
   * Dictionary of string->string pairs containing information about the Storage Target.
   */
  unknownMap?: { [propertyName: string]: string };
}

/**
 * Resource used by a Cache.
 */
export interface StorageTargetResource extends BaseResource {
  /**
   * Name of the Storage Target.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource ID of the Storage Target.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Region name string.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly location?: string;
  /**
   * The system meta data relating to this resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly systemData?: SystemData;
}

/**
 * Type of the Storage Target.
 */
export interface StorageTarget extends StorageTargetResource {
  /**
   * List of Cache namespace junctions to target for namespace associations.
   */
  junctions?: NamespaceJunction[];
  /**
   * Type of the Storage Target. Possible values include: 'nfs3', 'clfs', 'unknown'
   */
  targetType: StorageTargetType;
  /**
   * ARM provisioning state, see
   * https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
   * Possible values include: 'Succeeded', 'Failed', 'Cancelled', 'Creating', 'Deleting',
   * 'Updating'
   */
  provisioningState?: ProvisioningStateType;
  /**
   * Properties when targetType is nfs3.
   */
  nfs3?: Nfs3Target;
  /**
   * Properties when targetType is clfs.
   */
  clfs?: ClfsTarget;
  /**
   * Properties when targetType is unknown.
   */
  unknown?: UnknownTarget;
}

/**
 * A resource SKU capability.
 */
export interface ResourceSkuCapabilities {
  /**
   * Name of a capability, such as ops/sec.
   */
  name?: string;
  /**
   * Quantity, if the capability is measured by quantity.
   */
  value?: string;
}

/**
 * Resource SKU location information.
 */
export interface ResourceSkuLocationInfo {
  /**
   * Location where this SKU is available.
   */
  location?: string;
  /**
   * Zones if any.
   */
  zones?: string[];
}

/**
 * The restrictions preventing this SKU from being used.
 */
export interface Restriction {
  /**
   * The type of restrictions. In this version, the only possible value for this is location.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The value of restrictions. If the restriction type is set to location, then this would be the
   * different locations where the SKU is restricted.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly values?: string[];
  /**
   * The reason for the restriction. As of now this can be "QuotaId" or
   * "NotAvailableForSubscription". "QuotaId" is set when the SKU has requiredQuotas parameter as
   * the subscription does not belong to that quota. "NotAvailableForSubscription" is related to
   * capacity at the datacenter. Possible values include: 'QuotaId', 'NotAvailableForSubscription'
   */
  reasonCode?: ReasonCode;
}

/**
 * A resource SKU.
 */
export interface ResourceSku {
  /**
   * The type of resource the SKU applies to.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resourceType?: string;
  /**
   * A list of capabilities of this SKU, such as throughput or ops/sec.
   */
  capabilities?: ResourceSkuCapabilities[];
  /**
   * The set of locations where the SKU is available. This is the supported and registered Azure
   * Geo Regions (e.g., West US, East US, Southeast Asia, etc.).
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly locations?: string[];
  /**
   * The set of locations where the SKU is available.
   */
  locationInfo?: ResourceSkuLocationInfo[];
  /**
   * The name of this SKU.
   */
  name?: string;
  /**
   * The restrictions preventing this SKU from being used. This is empty if there are no
   * restrictions.
   */
  restrictions?: Restriction[];
}

/**
 * Localized information describing this usage model.
 */
export interface UsageModelDisplay {
  /**
   * String to display for this usage model.
   */
  description?: string;
}

/**
 * A usage model.
 */
export interface UsageModel {
  /**
   * Localized information describing this usage model.
   */
  display?: UsageModelDisplay;
  /**
   * Non-localized keyword name for this usage model.
   */
  modelName?: string;
  /**
   * The type of Storage Target to which this model is applicable (only nfs3 as of this version).
   */
  targetType?: string;
}

/**
 * Optional Parameters.
 */
export interface CachesCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Object containing the user-selectable properties of the new Cache. If read-only properties are
   * included, they must match the existing values of those properties.
   */
  cache?: Cache;
}

/**
 * Optional Parameters.
 */
export interface CachesUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Object containing the user-selectable properties of the Cache. If read-only properties are
   * included, they must match the existing values of those properties.
   */
  cache?: Cache;
}

/**
 * Optional Parameters.
 */
export interface CachesBeginCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Object containing the user-selectable properties of the new Cache. If read-only properties are
   * included, they must match the existing values of those properties.
   */
  cache?: Cache;
}

/**
 * Optional Parameters.
 */
export interface StorageTargetsCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Object containing the definition of a Storage Target.
   */
  storagetarget?: StorageTarget;
}

/**
 * Optional Parameters.
 */
export interface StorageTargetsBeginCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Object containing the definition of a Storage Target.
   */
  storagetarget?: StorageTarget;
}

/**
 * An interface representing StorageCacheManagementClientOptions.
 */
export interface StorageCacheManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Result of the request to list Resource Provider operations. It contains a list of operations and
 * a URL link to get the next set of results.
 * @extends Array<ApiOperation>
 */
export interface ApiOperationListResult extends Array<ApiOperation> {
  /**
   * URL to get the next set of operation list results if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * The response from the List Cache SKUs operation.
 * @extends Array<ResourceSku>
 */
export interface ResourceSkusResult extends Array<ResourceSku> {
  /**
   * The URI to fetch the next page of Cache SKUs.
   */
  nextLink?: string;
}

/**
 * @interface
 * A list of Cache usage models.
 * @extends Array<UsageModel>
 */
export interface UsageModelsResult extends Array<UsageModel> {
  /**
   * The URI to fetch the next page of Cache usage models.
   */
  nextLink?: string;
}

/**
 * @interface
 * Result of the request to list Caches. It contains a list of Caches and a URL link to get the
 * next set of results.
 * @extends Array<Cache>
 */
export interface CachesListResult extends Array<Cache> {
  /**
   * URL to get the next set of Cache list results, if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * A list of Storage Targets.
 * @extends Array<StorageTarget>
 */
export interface StorageTargetsResult extends Array<StorageTarget> {
  /**
   * The URI to fetch the next page of Storage Targets.
   */
  nextLink?: string;
}

/**
 * Defines values for MetricAggregationType.
 * Possible values include: 'NotSpecified', 'None', 'Average', 'Minimum', 'Maximum', 'Total',
 * 'Count'
 * @readonly
 * @enum {string}
 */
export type MetricAggregationType = 'NotSpecified' | 'None' | 'Average' | 'Minimum' | 'Maximum' | 'Total' | 'Count';

/**
 * Defines values for CacheIdentityType.
 * Possible values include: 'SystemAssigned', 'None'
 * @readonly
 * @enum {string}
 */
export type CacheIdentityType = 'SystemAssigned' | 'None';

/**
 * Defines values for CreatedByType.
 * Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
 * @readonly
 * @enum {string}
 */
export type CreatedByType = 'User' | 'Application' | 'ManagedIdentity' | 'Key';

/**
 * Defines values for HealthStateType.
 * Possible values include: 'Unknown', 'Healthy', 'Degraded', 'Down', 'Transitioning', 'Stopping',
 * 'Stopped', 'Upgrading', 'Flushing'
 * @readonly
 * @enum {string}
 */
export type HealthStateType = 'Unknown' | 'Healthy' | 'Degraded' | 'Down' | 'Transitioning' | 'Stopping' | 'Stopped' | 'Upgrading' | 'Flushing';

/**
 * Defines values for ProvisioningStateType.
 * Possible values include: 'Succeeded', 'Failed', 'Cancelled', 'Creating', 'Deleting', 'Updating'
 * @readonly
 * @enum {string}
 */
export type ProvisioningStateType = 'Succeeded' | 'Failed' | 'Cancelled' | 'Creating' | 'Deleting' | 'Updating';

/**
 * Defines values for FirmwareStatusType.
 * Possible values include: 'available', 'unavailable'
 * @readonly
 * @enum {string}
 */
export type FirmwareStatusType = 'available' | 'unavailable';

/**
 * Defines values for NfsAccessRuleScope.
 * Possible values include: 'default', 'network', 'host'
 * @readonly
 * @enum {string}
 */
export type NfsAccessRuleScope = 'default' | 'network' | 'host';

/**
 * Defines values for NfsAccessRuleAccess.
 * Possible values include: 'no', 'ro', 'rw'
 * @readonly
 * @enum {string}
 */
export type NfsAccessRuleAccess = 'no' | 'ro' | 'rw';

/**
 * Defines values for DomainJoinedType.
 * Possible values include: 'Yes', 'No', 'Error'
 * @readonly
 * @enum {string}
 */
export type DomainJoinedType = 'Yes' | 'No' | 'Error';

/**
 * Defines values for UsernameSource.
 * Possible values include: 'AD', 'LDAP', 'File', 'None'
 * @readonly
 * @enum {string}
 */
export type UsernameSource = 'AD' | 'LDAP' | 'File' | 'None';

/**
 * Defines values for UsernameDownloadedType.
 * Possible values include: 'Yes', 'No', 'Error'
 * @readonly
 * @enum {string}
 */
export type UsernameDownloadedType = 'Yes' | 'No' | 'Error';

/**
 * Defines values for StorageTargetType.
 * Possible values include: 'nfs3', 'clfs', 'unknown'
 * @readonly
 * @enum {string}
 */
export type StorageTargetType = 'nfs3' | 'clfs' | 'unknown';

/**
 * Defines values for ReasonCode.
 * Possible values include: 'QuotaId', 'NotAvailableForSubscription'
 * @readonly
 * @enum {string}
 */
export type ReasonCode = 'QuotaId' | 'NotAvailableForSubscription';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = ApiOperationListResult & {
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
      parsedBody: ApiOperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = ApiOperationListResult & {
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
      parsedBody: ApiOperationListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SkusListResponse = ResourceSkusResult & {
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
      parsedBody: ResourceSkusResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type SkusListNextResponse = ResourceSkusResult & {
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
      parsedBody: ResourceSkusResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type UsageModelsListResponse = UsageModelsResult & {
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
      parsedBody: UsageModelsResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type UsageModelsListNextResponse = UsageModelsResult & {
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
      parsedBody: UsageModelsResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type AscOperationsGetResponse = AscOperation & {
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
      parsedBody: AscOperation;
    };
};

/**
 * Contains response data for the list operation.
 */
export type CachesListResponse = CachesListResult & {
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
      parsedBody: CachesListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type CachesListByResourceGroupResponse = CachesListResult & {
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
      parsedBody: CachesListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type CachesGetResponse = Cache & {
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
      parsedBody: Cache;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type CachesCreateOrUpdateResponse = Cache & {
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
      parsedBody: Cache;
    };
};

/**
 * Contains response data for the update operation.
 */
export type CachesUpdateResponse = Cache & {
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
      parsedBody: Cache;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type CachesBeginCreateOrUpdateResponse = Cache & {
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
      parsedBody: Cache;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type CachesListNextResponse = CachesListResult & {
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
      parsedBody: CachesListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type CachesListByResourceGroupNextResponse = CachesListResult & {
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
      parsedBody: CachesListResult;
    };
};

/**
 * Contains response data for the listByCache operation.
 */
export type StorageTargetsListByCacheResponse = StorageTargetsResult & {
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
      parsedBody: StorageTargetsResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type StorageTargetsGetResponse = StorageTarget & {
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
      parsedBody: StorageTarget;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type StorageTargetsCreateOrUpdateResponse = StorageTarget & {
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
      parsedBody: StorageTarget;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type StorageTargetsBeginCreateOrUpdateResponse = StorageTarget & {
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
      parsedBody: StorageTarget;
    };
};

/**
 * Contains response data for the listByCacheNext operation.
 */
export type StorageTargetsListByCacheNextResponse = StorageTargetsResult & {
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
      parsedBody: StorageTargetsResult;
    };
};
