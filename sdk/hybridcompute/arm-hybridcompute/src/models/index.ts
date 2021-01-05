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
 * Describes the properties of a Compute Operation value.
 */
export interface OperationValue {
  /**
   * The origin of the compute operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly origin?: string;
  /**
   * The name of the compute operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The display name of the compute operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operation?: string;
  /**
   * The display name of the resource the operation applies to.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resource?: string;
  /**
   * The description of the operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly description?: string;
  /**
   * The resource provider for the operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provider?: string;
}

/**
 * Specifies the operating system settings for the hybrid machine.
 */
export interface OSProfile {
  /**
   * Specifies the host OS name of the hybrid machine.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly computerName?: string;
}

/**
 * Metadata pertaining to the geographic location of the resource.
 */
export interface LocationData {
  /**
   * A canonical name for the geographic or physical location.
   */
  name: string;
  /**
   * The city or locality where the resource is located.
   */
  city?: string;
  /**
   * The district, state, or province where the resource is located.
   */
  district?: string;
  /**
   * The country or region where the resource is located
   */
  countryOrRegion?: string;
}

/**
 * An interface representing ErrorDetail.
 * @summary Error details.
 */
export interface ErrorDetail {
  /**
   * The error's code.
   */
  code: string;
  /**
   * A human readable error message.
   */
  message: string;
  /**
   * Indicates which property in the request is responsible for the error.
   */
  target?: string;
  /**
   * Additional error details.
   */
  details?: ErrorDetail[];
}

/**
 * Instance view status.
 */
export interface MachineExtensionInstanceViewStatus {
  /**
   * The status code.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * The level code. Possible values include: 'Info', 'Warning', 'Error'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly level?: StatusLevelTypes;
  /**
   * The short localizable label for the status.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly displayStatus?: string;
  /**
   * The detailed status message, including for alerts and error messages.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * The time of the status.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly time?: Date;
}

/**
 * Describes the Machine Extension Instance View.
 */
export interface MachineExtensionInstanceView {
  /**
   * The machine extension name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Specifies the type of the extension; an example is "CustomScriptExtension".
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Specifies the version of the script handler.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly typeHandlerVersion?: string;
  /**
   * Instance view status.
   */
  status?: MachineExtensionInstanceViewStatus;
}

/**
 * An interface representing Identity.
 * @summary Managed Identity.
 */
export interface Identity {
  /**
   * The identity type.
   */
  type?: string;
  /**
   * The identity's principal id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The identity's tenant id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
}

/**
 * Common fields that are returned in the response for all Azure Resource Manager resources
 * @summary Resource
 */
export interface Resource extends BaseResource {
  /**
   * Fully qualified resource ID for the resource. Ex -
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or
   * "Microsoft.Storage/storageAccounts"
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The resource model definition for an Azure Resource Manager tracked top level resource which has
 * 'tags' and a 'location'
 * @summary Tracked Resource
 */
export interface TrackedResource extends Resource {
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * The geo-location where the resource lives
   */
  location: string;
}

/**
 * Describes a hybrid machine.
 */
export interface Machine extends TrackedResource {
  locationData?: LocationData;
  /**
   * Specifies the operating system settings for the hybrid machine.
   */
  osProfile?: OSProfile;
  /**
   * The provisioning state, which only appears in the response.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: string;
  /**
   * The status of the hybrid machine agent. Possible values include: 'Connected', 'Disconnected',
   * 'Error'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: StatusTypes;
  /**
   * The time of the last status change.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastStatusChange?: Date;
  /**
   * Details about the error state.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly errorDetails?: ErrorDetail[];
  /**
   * The hybrid machine agent full version.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly agentVersion?: string;
  /**
   * Specifies the hybrid machine unique ID.
   */
  vmId?: string;
  /**
   * Specifies the hybrid machine display name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly displayName?: string;
  /**
   * Specifies the hybrid machine FQDN.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly machineFqdn?: string;
  /**
   * Public Key that the client provides to be used during initial resource onboarding
   */
  clientPublicKey?: string;
  /**
   * The Operating System running on the hybrid machine.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly osName?: string;
  /**
   * The version of Operating System running on the hybrid machine.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly osVersion?: string;
  /**
   * Specifies the Arc Machine's unique SMBIOS ID
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly vmUuid?: string;
  /**
   * Machine Extensions information
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly extensions?: MachineExtensionInstanceView[];
  /**
   * Specifies the Operating System product SKU.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly osSku?: string;
  /**
   * Specifies the Windows domain name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly domainName?: string;
  /**
   * Specifies the AD fully qualified display name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly adFqdn?: string;
  /**
   * Specifies the DNS fully qualified display name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly dnsFqdn?: string;
  identity?: Identity;
}

/**
 * The Update Resource model definition.
 */
export interface UpdateResource {
  /**
   * Resource tags
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Describes a hybrid machine Update.
 */
export interface MachineUpdate extends UpdateResource {
  /**
   * The identity type.
   */
  type?: string;
  /**
   * The identity's principal id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The identity's tenant id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
  locationData?: LocationData;
}

/**
 * Contains details when the response code indicates an error.
 * @summary Error response.
 */
export interface ErrorResponse {
  /**
   * The error details.
   */
  error: ErrorDetail;
}

/**
 * Describes a Machine Extension.
 */
export interface MachineExtension extends TrackedResource {
  /**
   * How the extension handler should be forced to update even if the extension configuration has
   * not changed.
   */
  forceUpdateTag?: string;
  /**
   * The name of the extension handler publisher.
   */
  publisher?: string;
  /**
   * Specifies the type of the extension; an example is "CustomScriptExtension".
   */
  machineExtensionType?: string;
  /**
   * Specifies the version of the script handler.
   */
  typeHandlerVersion?: string;
  /**
   * Indicates whether the extension should use a newer minor version if one is available at
   * deployment time. Once deployed, however, the extension will not upgrade minor versions unless
   * redeployed, even with this property set to true.
   */
  autoUpgradeMinorVersion?: boolean;
  /**
   * Json formatted public settings for the extension.
   */
  settings?: any;
  /**
   * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no
   * protected settings at all.
   */
  protectedSettings?: any;
  /**
   * The provisioning state, which only appears in the response.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: string;
  /**
   * The machine extension instance view.
   */
  instanceView?: MachineExtensionInstanceView;
}

/**
 * Describes a Machine Extension Update.
 */
export interface MachineExtensionUpdate extends UpdateResource {
  /**
   * How the extension handler should be forced to update even if the extension configuration has
   * not changed.
   */
  forceUpdateTag?: string;
  /**
   * The name of the extension handler publisher.
   */
  publisher?: string;
  /**
   * Specifies the type of the extension; an example is "CustomScriptExtension".
   */
  type?: string;
  /**
   * Specifies the version of the script handler.
   */
  typeHandlerVersion?: string;
  /**
   * Indicates whether the extension should use a newer minor version if one is available at
   * deployment time. Once deployed, however, the extension will not upgrade minor versions unless
   * redeployed, even with this property set to true.
   */
  autoUpgradeMinorVersion?: boolean;
  /**
   * Json formatted public settings for the extension.
   */
  settings?: any;
  /**
   * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no
   * protected settings at all.
   */
  protectedSettings?: any;
}

/**
 * The resource model definition for a Azure Resource Manager proxy resource. It will not have tags
 * and a location
 * @summary Proxy Resource
 */
export interface ProxyResource extends Resource {
}

/**
 * The resource model definition for an Azure Resource Manager resource with an etag.
 * @summary Entity Resource
 */
export interface AzureEntityResource extends Resource {
  /**
   * Resource Etag.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly etag?: string;
}

/**
 * Optional Parameters.
 */
export interface MachinesGetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The expand expression to apply on the operation. Possible values include: 'instanceView'
   */
  expand?: InstanceViewTypes;
}

/**
 * Optional Parameters.
 */
export interface MachineExtensionsListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The expand expression to apply on the operation.
   */
  expand?: string;
}

/**
 * Optional Parameters.
 */
export interface MachineExtensionsListNextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The expand expression to apply on the operation.
   */
  expand?: string;
}

/**
 * An interface representing HybridComputeManagementClientOptions.
 */
export interface HybridComputeManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * The List hybrid machine operation response.
 * @extends Array<Machine>
 */
export interface MachineListResult extends Array<Machine> {
  /**
   * The URI to fetch the next page of Machines. Call ListNext() with this URI to fetch the next
   * page of hybrid machines.
   */
  nextLink?: string;
}

/**
 * @interface
 * Describes the Machine Extensions List Result.
 * @extends Array<MachineExtension>
 */
export interface MachineExtensionsListResult extends Array<MachineExtension> {
  /**
   * The uri to fetch the next page of machine extensions. Call ListNext() with this to fetch the
   * next page of extensions.
   */
  nextLink?: string;
}

/**
 * @interface
 * The List Compute Operation operation response.
 * @extends Array<OperationValue>
 */
export interface OperationListResult extends Array<OperationValue> {
}

/**
 * Defines values for StatusTypes.
 * Possible values include: 'Connected', 'Disconnected', 'Error'
 * @readonly
 * @enum {string}
 */
export type StatusTypes = 'Connected' | 'Disconnected' | 'Error';

/**
 * Defines values for StatusLevelTypes.
 * Possible values include: 'Info', 'Warning', 'Error'
 * @readonly
 * @enum {string}
 */
export type StatusLevelTypes = 'Info' | 'Warning' | 'Error';

/**
 * Defines values for InstanceViewTypes.
 * Possible values include: 'instanceView'
 * @readonly
 * @enum {string}
 */
export type InstanceViewTypes = 'instanceView';

/**
 * Contains response data for the get operation.
 */
export type MachinesGetResponse = Machine & {
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
      parsedBody: Machine;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type MachinesListByResourceGroupResponse = MachineListResult & {
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
      parsedBody: MachineListResult;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type MachinesListBySubscriptionResponse = MachineListResult & {
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
      parsedBody: MachineListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type MachinesListByResourceGroupNextResponse = MachineListResult & {
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
      parsedBody: MachineListResult;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type MachinesListBySubscriptionNextResponse = MachineListResult & {
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
      parsedBody: MachineListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type MachineExtensionsCreateOrUpdateResponse = MachineExtension & {
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
      parsedBody: MachineExtension;
    };
};

/**
 * Contains response data for the update operation.
 */
export type MachineExtensionsUpdateResponse = MachineExtension & {
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
      parsedBody: MachineExtension;
    };
};

/**
 * Contains response data for the get operation.
 */
export type MachineExtensionsGetResponse = MachineExtension & {
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
      parsedBody: MachineExtension;
    };
};

/**
 * Contains response data for the list operation.
 */
export type MachineExtensionsListResponse = MachineExtensionsListResult & {
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
      parsedBody: MachineExtensionsListResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type MachineExtensionsBeginCreateOrUpdateResponse = MachineExtension & {
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
      parsedBody: MachineExtension;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type MachineExtensionsBeginUpdateResponse = MachineExtension & {
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
      parsedBody: MachineExtension;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type MachineExtensionsListNextResponse = MachineExtensionsListResult & {
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
      parsedBody: MachineExtensionsListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
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
      parsedBody: OperationListResult;
    };
};
