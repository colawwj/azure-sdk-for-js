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
 * Raw certificate data.
 */
export interface RawCertificateData {
  /**
   * Specifies the authentication type. Possible values include: 'Invalid', 'ACS', 'AAD',
   * 'AccessControlService', 'AzureActiveDirectory'
   */
  authType?: AuthType;
  /**
   * The base64 encoded certificate raw data string
   */
  certificate?: Uint8Array;
}

/**
 * Details of the certificate to be uploaded to the vault.
 */
export interface CertificateRequest {
  properties?: RawCertificateData;
}

/**
 * Contains the possible cases for ResourceCertificateDetails.
 */
export type ResourceCertificateDetailsUnion = ResourceCertificateDetails | ResourceCertificateAndAadDetails | ResourceCertificateAndAcsDetails;

/**
 * Certificate details representing the Vault credentials.
 */
export interface ResourceCertificateDetails {
  /**
   * Polymorphic Discriminator
   */
  authType: "ResourceCertificateDetails";
  /**
   * The base64 encoded certificate raw data string.
   */
  certificate?: Uint8Array;
  /**
   * Certificate friendly name.
   */
  friendlyName?: string;
  /**
   * Certificate issuer.
   */
  issuer?: string;
  /**
   * Resource ID of the vault.
   */
  resourceId?: number;
  /**
   * Certificate Subject Name.
   */
  subject?: string;
  /**
   * Certificate thumbprint.
   */
  thumbprint?: string;
  /**
   * Certificate Validity start Date time.
   */
  validFrom?: Date;
  /**
   * Certificate Validity End Date time.
   */
  validTo?: Date;
}

/**
 * Certificate details representing the Vault credentials for AAD.
 */
export interface ResourceCertificateAndAadDetails {
  /**
   * Polymorphic Discriminator
   */
  authType: "AzureActiveDirectory";
  /**
   * The base64 encoded certificate raw data string.
   */
  certificate?: Uint8Array;
  /**
   * Certificate friendly name.
   */
  friendlyName?: string;
  /**
   * Certificate issuer.
   */
  issuer?: string;
  /**
   * Resource ID of the vault.
   */
  resourceId?: number;
  /**
   * Certificate Subject Name.
   */
  subject?: string;
  /**
   * Certificate thumbprint.
   */
  thumbprint?: string;
  /**
   * Certificate Validity start Date time.
   */
  validFrom?: Date;
  /**
   * Certificate Validity End Date time.
   */
  validTo?: Date;
  /**
   * AAD tenant authority.
   */
  aadAuthority: string;
  /**
   * AAD tenant Id.
   */
  aadTenantId: string;
  /**
   * AAD service principal clientId.
   */
  servicePrincipalClientId: string;
  /**
   * AAD service principal ObjectId.
   */
  servicePrincipalObjectId: string;
  /**
   * Azure Management Endpoint Audience.
   */
  azureManagementEndpointAudience: string;
}

/**
 * Certificate details representing the Vault credentials for ACS.
 */
export interface ResourceCertificateAndAcsDetails {
  /**
   * Polymorphic Discriminator
   */
  authType: "AccessControlService";
  /**
   * The base64 encoded certificate raw data string.
   */
  certificate?: Uint8Array;
  /**
   * Certificate friendly name.
   */
  friendlyName?: string;
  /**
   * Certificate issuer.
   */
  issuer?: string;
  /**
   * Resource ID of the vault.
   */
  resourceId?: number;
  /**
   * Certificate Subject Name.
   */
  subject?: string;
  /**
   * Certificate thumbprint.
   */
  thumbprint?: string;
  /**
   * Certificate Validity start Date time.
   */
  validFrom?: Date;
  /**
   * Certificate Validity End Date time.
   */
  validTo?: Date;
  /**
   * ACS namespace name - tenant for our service.
   */
  globalAcsNamespace: string;
  /**
   * Acs mgmt host name to connect to.
   */
  globalAcsHostName: string;
  /**
   * Global ACS namespace RP realm.
   */
  globalAcsRPRealm: string;
}

/**
 * Certificate corresponding to a vault that can be used by clients to register themselves with the
 * vault.
 */
export interface VaultCertificateResponse extends BaseResource {
  /**
   * Resource name associated with the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Resource Id represents the complete path to the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  properties?: ResourceCertificateDetailsUnion;
}

/**
 * Summary of the replication job data for this vault.
 */
export interface JobsSummary {
  /**
   * Count of failed jobs.
   */
  failedJobs?: number;
  /**
   * Count of suspended jobs.
   */
  suspendedJobs?: number;
  /**
   * Count of in-progress jobs.
   */
  inProgressJobs?: number;
}

/**
 * Summary of the replication monitoring data for this vault.
 */
export interface MonitoringSummary {
  /**
   * Count of unhealthy VMs.
   */
  unHealthyVmCount?: number;
  /**
   * Count of unhealthy replication providers.
   */
  unHealthyProviderCount?: number;
  /**
   * Count of all critical warnings.
   */
  eventsCount?: number;
  /**
   * Count of all deprecated recovery service providers.
   */
  deprecatedProviderCount?: number;
  /**
   * Count of all the supported recovery service providers.
   */
  supportedProviderCount?: number;
  /**
   * Count of all the unsupported recovery service providers.
   */
  unsupportedProviderCount?: number;
}

/**
 * Replication usages of a vault.
 */
export interface ReplicationUsage {
  /**
   * Summary of the replication monitoring data for this vault.
   */
  monitoringSummary?: MonitoringSummary;
  /**
   * Summary of the replication jobs data for this vault.
   */
  jobsSummary?: JobsSummary;
  /**
   * Number of replication protected items for this vault.
   */
  protectedItemCount?: number;
  /**
   * Number of replication recovery plans for this vault.
   */
  recoveryPlanCount?: number;
  /**
   * Number of servers registered to this vault.
   */
  registeredServersCount?: number;
  /**
   * The authentication type of recovery service providers in the vault.
   */
  recoveryServicesProviderAuthType?: number;
}

/**
 * Resource Name availability input parameters - Resource type and resource name
 */
export interface CheckNameAvailabilityParameters {
  /**
   * Describes the Resource type: Microsoft.RecoveryServices/Vaults
   */
  type?: string;
  /**
   * Resource name for which availability needs to be checked
   */
  name?: string;
}

/**
 * Response for check name availability API. Resource provider will set availability as true |
 * false.
 */
export interface CheckNameAvailabilityResult {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}

/**
 * Localized display information of an operation.
 */
export interface ClientDiscoveryDisplay {
  /**
   * Name of the provider for display purposes
   */
  provider?: string;
  /**
   * ResourceType for which this Operation can be performed.
   */
  resource?: string;
  /**
   * Operations Name itself.
   */
  operation?: string;
  /**
   * Description of the operation having details of what operation is about.
   */
  description?: string;
}

/**
 * Class to represent shoebox log specification in json client discovery.
 */
export interface ClientDiscoveryForLogSpecification {
  /**
   * Name of the log.
   */
  name?: string;
  /**
   * Localized display name
   */
  displayName?: string;
  /**
   * Blobs created in customer storage account per hour
   */
  blobDuration?: string;
}

/**
 * Class to represent shoebox service specification in json client discovery.
 */
export interface ClientDiscoveryForServiceSpecification {
  /**
   * List of log specifications of this operation.
   */
  logSpecifications?: ClientDiscoveryForLogSpecification[];
}

/**
 * Class to represent shoebox properties in json client discovery.
 */
export interface ClientDiscoveryForProperties {
  /**
   * Operation properties.
   */
  serviceSpecification?: ClientDiscoveryForServiceSpecification;
}

/**
 * Available operation details.
 */
export interface ClientDiscoveryValueForSingleApi {
  /**
   * Name of the Operation.
   */
  name?: string;
  /**
   * Contains the localized display information for this particular operation
   */
  display?: ClientDiscoveryDisplay;
  /**
   * The intended executor of the operation;governs the display of the operation in the RBAC UX and
   * the audit logs UX
   */
  origin?: string;
  /**
   * ShoeBox properties for the given operation.
   */
  properties?: ClientDiscoveryForProperties;
}

/**
 * ARM Resource.
 */
export interface Resource extends BaseResource {
  /**
   * Resource Id represents the complete path to the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Resource name associated with the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Optional ETag.
   */
  eTag?: string;
}

/**
 * Identifies the unique system identifier for each Azure resource.
 */
export interface Sku {
  /**
   * The Sku name. Possible values include: 'Standard', 'RS0'
   */
  name: SkuName;
}

/**
 * Tracked resource with location.
 */
export interface TrackedResource extends Resource {
  /**
   * Resource location.
   */
  location: string;
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Tracked resource with location.
 */
export interface PatchTrackedResource extends Resource {
  /**
   * Resource location.
   */
  location?: string;
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Details for upgrading vault.
 */
export interface UpgradeDetails {
  /**
   * ID of the vault upgrade operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operationId?: string;
  /**
   * UTC time at which the upgrade operation has started.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly startTimeUtc?: Date;
  /**
   * UTC time at which the upgrade operation status was last updated.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastUpdatedTimeUtc?: Date;
  /**
   * UTC time at which the upgrade operation has ended.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly endTimeUtc?: Date;
  /**
   * Status of the vault upgrade operation. Possible values include: 'Unknown', 'InProgress',
   * 'Upgraded', 'Failed'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: VaultUpgradeState;
  /**
   * Message to the user containing information about the upgrade operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * The way the vault upgrade was triggered. Possible values include: 'UserTriggered',
   * 'ForcedUpgrade'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly triggerType?: TriggerType;
  /**
   * Resource ID of the upgraded vault.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly upgradedResourceId?: string;
  /**
   * Resource ID of the vault before the upgrade.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly previousResourceId?: string;
}

/**
 * Identity for the resource.
 */
export interface IdentityData {
  /**
   * The principal ID of resource identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The tenant ID of resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
  /**
   * The identity type. Possible values include: 'SystemAssigned', 'None'
   */
  type: ResourceIdentityType;
}

/**
 * The Private Endpoint network resource that is linked to the Private Endpoint connection.
 */
export interface PrivateEndpoint {
  /**
   * Gets or sets id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
}

/**
 * Gets or sets private link service connection state.
 */
export interface PrivateLinkServiceConnectionState {
  /**
   * Gets or sets the status. Possible values include: 'Pending', 'Approved', 'Rejected',
   * 'Disconnected'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: PrivateEndpointConnectionStatus;
  /**
   * Gets or sets description.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly description?: string;
  /**
   * Gets or sets actions required.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly actionsRequired?: string;
}

/**
 * Private Endpoint Connection Response Properties.
 */
export interface PrivateEndpointConnection {
  /**
   * Gets or sets provisioning state of the private endpoint connection. Possible values include:
   * 'Succeeded', 'Deleting', 'Failed', 'Pending'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  privateEndpoint?: PrivateEndpoint;
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
}

/**
 * Information to be stored in Vault properties as an element of privateEndpointConnections List.
 */
export interface PrivateEndpointConnectionVaultProperties {
  /**
   * Format of id
   * subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.[Service]/{resource}/{resourceName}/privateEndpointConnections/{connectionName}.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  properties?: PrivateEndpointConnection;
}

/**
 * Properties of the vault.
 */
export interface VaultProperties {
  /**
   * Provisioning State.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: string;
  upgradeDetails?: UpgradeDetails;
  /**
   * List of private endpoint connection.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly privateEndpointConnections?: PrivateEndpointConnectionVaultProperties[];
  /**
   * Private endpoint state for backup. Possible values include: 'None', 'Enabled'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly privateEndpointStateForBackup?: VaultPrivateEndpointState;
  /**
   * Private endpoint state for site recovery. Possible values include: 'None', 'Enabled'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly privateEndpointStateForSiteRecovery?: VaultPrivateEndpointState;
}

/**
 * Resource information, as returned by the resource provider.
 */
export interface Vault extends TrackedResource {
  identity?: IdentityData;
  properties?: VaultProperties;
  sku?: Sku;
}

/**
 * Patch Resource information, as returned by the resource provider.
 */
export interface PatchVault extends PatchTrackedResource {
  identity?: IdentityData;
  properties?: VaultProperties;
  sku?: Sku;
}

/**
 * Vault extended information.
 */
export interface VaultExtendedInfoResource extends Resource {
  /**
   * Integrity key.
   */
  integrityKey?: string;
  /**
   * Encryption key.
   */
  encryptionKey?: string;
  /**
   * Encryption key thumbprint.
   */
  encryptionKeyThumbprint?: string;
  /**
   * Algorithm for Vault ExtendedInfo
   */
  algorithm?: string;
}

/**
 * Information of the private link resource.
 */
export interface PrivateLinkResource {
  /**
   * e.g. f9ad6492-33d4-4690-9999-6bfd52a0d081 (Backup) or f9ad6492-33d4-4690-9999-6bfd52a0d082
   * (SiteRecovery)
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly groupId?: string;
  /**
   * [backup-ecs1, backup-prot1, backup-prot1b, backup-prot1c, backup-id1]
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly requiredMembers?: string[];
  /**
   * The private link resource Private link DNS zone name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly requiredZoneNames?: string[];
  /**
   * Fully qualified identifier of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * e.g. Microsoft.RecoveryServices/vaults/privateLinkResources
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The name of usage.
 */
export interface NameInfo {
  /**
   * Value of usage.
   */
  value?: string;
  /**
   * Localized value of usage.
   */
  localizedValue?: string;
}

/**
 * Usages of a vault.
 */
export interface VaultUsage {
  /**
   * Unit of the usage. Possible values include: 'Count', 'Bytes', 'Seconds', 'Percent',
   * 'CountPerSecond', 'BytesPerSecond'
   */
  unit?: UsagesUnit;
  /**
   * Quota period of usage.
   */
  quotaPeriod?: string;
  /**
   * Next reset time of usage.
   */
  nextResetTime?: Date;
  /**
   * Current value of usage.
   */
  currentValue?: number;
  /**
   * Limit of usage.
   */
  limit?: number;
  /**
   * Name of usage.
   */
  name?: NameInfo;
}

/**
 * An interface representing RecoveryServicesClientOptions.
 */
export interface RecoveryServicesClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Replication usages for vault.
 * @extends Array<ReplicationUsage>
 */
export interface ReplicationUsageList extends Array<ReplicationUsage> {
}

/**
 * @interface
 * Class which represent the stamps associated with the vault.
 * @extends Array<PrivateLinkResource>
 */
export interface PrivateLinkResources extends Array<PrivateLinkResource> {
  /**
   * Link to the next chunk of the response
   */
  nextLink?: string;
}

/**
 * @interface
 * The response model for a list of Vaults.
 * @extends Array<Vault>
 */
export interface VaultList extends Array<Vault> {
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * Operations List response which contains list of available APIs.
 * @extends Array<ClientDiscoveryValueForSingleApi>
 */
export interface ClientDiscoveryResponse extends Array<ClientDiscoveryValueForSingleApi> {
  /**
   * Link to the next chunk of the response
   */
  nextLink?: string;
}

/**
 * @interface
 * Usage for vault.
 * @extends Array<VaultUsage>
 */
export interface VaultUsageList extends Array<VaultUsage> {
}

/**
 * Defines values for AuthType.
 * Possible values include: 'Invalid', 'ACS', 'AAD', 'AccessControlService', 'AzureActiveDirectory'
 * @readonly
 * @enum {string}
 */
export type AuthType = 'Invalid' | 'ACS' | 'AAD' | 'AccessControlService' | 'AzureActiveDirectory';

/**
 * Defines values for SkuName.
 * Possible values include: 'Standard', 'RS0'
 * @readonly
 * @enum {string}
 */
export type SkuName = 'Standard' | 'RS0';

/**
 * Defines values for VaultUpgradeState.
 * Possible values include: 'Unknown', 'InProgress', 'Upgraded', 'Failed'
 * @readonly
 * @enum {string}
 */
export type VaultUpgradeState = 'Unknown' | 'InProgress' | 'Upgraded' | 'Failed';

/**
 * Defines values for TriggerType.
 * Possible values include: 'UserTriggered', 'ForcedUpgrade'
 * @readonly
 * @enum {string}
 */
export type TriggerType = 'UserTriggered' | 'ForcedUpgrade';

/**
 * Defines values for ResourceIdentityType.
 * Possible values include: 'SystemAssigned', 'None'
 * @readonly
 * @enum {string}
 */
export type ResourceIdentityType = 'SystemAssigned' | 'None';

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Succeeded', 'Deleting', 'Failed', 'Pending'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Succeeded' | 'Deleting' | 'Failed' | 'Pending';

/**
 * Defines values for PrivateEndpointConnectionStatus.
 * Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected'
 * @readonly
 * @enum {string}
 */
export type PrivateEndpointConnectionStatus = 'Pending' | 'Approved' | 'Rejected' | 'Disconnected';

/**
 * Defines values for VaultPrivateEndpointState.
 * Possible values include: 'None', 'Enabled'
 * @readonly
 * @enum {string}
 */
export type VaultPrivateEndpointState = 'None' | 'Enabled';

/**
 * Defines values for UsagesUnit.
 * Possible values include: 'Count', 'Bytes', 'Seconds', 'Percent', 'CountPerSecond',
 * 'BytesPerSecond'
 * @readonly
 * @enum {string}
 */
export type UsagesUnit = 'Count' | 'Bytes' | 'Seconds' | 'Percent' | 'CountPerSecond' | 'BytesPerSecond';

/**
 * Contains response data for the create operation.
 */
export type VaultCertificatesCreateResponse = VaultCertificateResponse & {
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
      parsedBody: VaultCertificateResponse;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ReplicationUsagesListResponse = ReplicationUsageList & {
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
      parsedBody: ReplicationUsageList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type PrivateLinkResourcesListResponse = PrivateLinkResources & {
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
      parsedBody: PrivateLinkResources;
    };
};

/**
 * Contains response data for the get operation.
 */
export type PrivateLinkResourcesGetResponse = PrivateLinkResource & {
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
      parsedBody: PrivateLinkResource;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type PrivateLinkResourcesListNextResponse = PrivateLinkResources & {
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
      parsedBody: PrivateLinkResources;
    };
};

/**
 * Contains response data for the checkNameAvailability operation.
 */
export type RecoveryServicesCheckNameAvailabilityResponse = CheckNameAvailabilityResult & {
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
      parsedBody: CheckNameAvailabilityResult;
    };
};

/**
 * Contains response data for the listBySubscriptionId operation.
 */
export type VaultsListBySubscriptionIdResponse = VaultList & {
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
      parsedBody: VaultList;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type VaultsListByResourceGroupResponse = VaultList & {
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
      parsedBody: VaultList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type VaultsGetResponse = Vault & {
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
      parsedBody: Vault;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type VaultsCreateOrUpdateResponse = Vault & {
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
      parsedBody: Vault;
    };
};

/**
 * Contains response data for the update operation.
 */
export type VaultsUpdateResponse = Vault & {
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
      parsedBody: Vault;
    };
};

/**
 * Contains response data for the listBySubscriptionIdNext operation.
 */
export type VaultsListBySubscriptionIdNextResponse = VaultList & {
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
      parsedBody: VaultList;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type VaultsListByResourceGroupNextResponse = VaultList & {
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
      parsedBody: VaultList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = ClientDiscoveryResponse & {
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
      parsedBody: ClientDiscoveryResponse;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = ClientDiscoveryResponse & {
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
      parsedBody: ClientDiscoveryResponse;
    };
};

/**
 * Contains response data for the get operation.
 */
export type VaultExtendedInfoGetResponse = VaultExtendedInfoResource & {
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
      parsedBody: VaultExtendedInfoResource;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type VaultExtendedInfoCreateOrUpdateResponse = VaultExtendedInfoResource & {
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
      parsedBody: VaultExtendedInfoResource;
    };
};

/**
 * Contains response data for the update operation.
 */
export type VaultExtendedInfoUpdateResponse = VaultExtendedInfoResource & {
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
      parsedBody: VaultExtendedInfoResource;
    };
};

/**
 * Contains response data for the listByVaults operation.
 */
export type UsagesListByVaultsResponse = VaultUsageList & {
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
      parsedBody: VaultUsageList;
    };
};
