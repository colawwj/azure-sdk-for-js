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
 * Detailed HANA operation information
 */
export interface Display {
  /**
   * The localized friendly form of the resource provider name. This form is also expected to
   * include the publisher/company responsible. Use Title Casing. Begin with "Microsoft" for 1st
   * party services.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provider?: string;
  /**
   * The localized friendly form of the resource type related to this action/operation. This form
   * should match the public documentation for the resource provider. Use Title Casing. For
   * examples, refer to the “name” section.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resource?: string;
  /**
   * The localized friendly name for the operation as shown to the user. This name should be
   * concise (to fit in drop downs), but clear (self-documenting). Use Title Casing and include the
   * entity/resource to which it applies.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operation?: string;
  /**
   * The localized friendly description for the operation as shown to the user. This description
   * should be thorough, yet concise. It will be used in tool-tips and detailed views.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly description?: string;
  /**
   * The intended executor of the operation; governs the display of the operation in the RBAC UX
   * and the audit logs UX. Default value is 'user,system'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly origin?: string;
}

/**
 * HANA operation information
 */
export interface Operation {
  /**
   * The name of the operation being performed on this particular object. This name should match
   * the action name that appears in RBAC / the event service.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Displayed HANA operation information
   */
  display?: Display;
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
 * Tags field of the resource.
 */
export interface Tags {
  /**
   * Tags field of the resource.
   */
  tags?: { [propertyName: string]: string };
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
 * SAP monitor info on Azure (ARM properties and SAP monitor properties)
 */
export interface SapMonitor extends TrackedResource {
  /**
   * State of provisioning of the HanaInstance. Possible values include: 'Accepted', 'Creating',
   * 'Updating', 'Failed', 'Succeeded', 'Deleting', 'Migrating'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: HanaProvisioningStatesEnum;
  /**
   * The name of the resource group the SAP Monitor resources get deployed into.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly managedResourceGroupName?: string;
  /**
   * The ARM ID of the Log Analytics Workspace that is used for monitoring
   */
  logAnalyticsWorkspaceArmId?: string;
  /**
   * The value indicating whether to send analytics to Microsoft
   */
  enableCustomerAnalytics?: boolean;
  /**
   * The workspace ID of the log analytics workspace to be used for monitoring
   */
  logAnalyticsWorkspaceId?: string;
  /**
   * The shared key of the log analytics workspace that is used for monitoring
   */
  logAnalyticsWorkspaceSharedKey?: string;
  /**
   * The version of the payload running in the Collector VM
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly sapMonitorCollectorVersion?: string;
  /**
   * The subnet which the SAP monitor will be deployed in
   */
  monitorSubnet?: string;
}

/**
 * The resource model definition for a Azure Resource Manager proxy resource. It will not have tags
 * and a location
 * @summary Proxy Resource
 */
export interface ProxyResource extends Resource {
}

/**
 * A provider instance associated with a SAP monitor.
 */
export interface ProviderInstance extends ProxyResource {
  /**
   * The type of provider instance.
   */
  providerInstanceType?: string;
  /**
   * A JSON string containing the properties of the provider instance.
   */
  properties?: string;
  /**
   * A JSON string containing metadata of the provider instance.
   */
  metadata?: string;
  /**
   * State of provisioning of the provider instance. Possible values include: 'Accepted',
   * 'Creating', 'Updating', 'Failed', 'Succeeded', 'Deleting', 'Migrating'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: HanaProvisioningStatesEnum;
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
 * An interface representing HanaManagementClientOptions.
 */
export interface HanaManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * List of HANA operations
 * @extends Array<Operation>
 */
export interface OperationList extends Array<Operation> {
}

/**
 * @interface
 * The response from the List SAP monitors operation.
 * @extends Array<SapMonitor>
 */
export interface SapMonitorListResult extends Array<SapMonitor> {
  /**
   * The URL to get the next set of SAP monitors.
   */
  nextLink?: string;
}

/**
 * @interface
 * The response from the List provider instances operation.
 * @extends Array<ProviderInstance>
 */
export interface ProviderInstanceListResult extends Array<ProviderInstance> {
  /**
   * The URL to get the next set of provider instances.
   */
  nextLink?: string;
}

/**
 * Defines values for HanaProvisioningStatesEnum.
 * Possible values include: 'Accepted', 'Creating', 'Updating', 'Failed', 'Succeeded', 'Deleting',
 * 'Migrating'
 * @readonly
 * @enum {string}
 */
export type HanaProvisioningStatesEnum = 'Accepted' | 'Creating' | 'Updating' | 'Failed' | 'Succeeded' | 'Deleting' | 'Migrating';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationList & {
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
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SapMonitorsListResponse = SapMonitorListResult & {
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
      parsedBody: SapMonitorListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SapMonitorsGetResponse = SapMonitor & {
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
      parsedBody: SapMonitor;
    };
};

/**
 * Contains response data for the create operation.
 */
export type SapMonitorsCreateResponse = SapMonitor & {
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
      parsedBody: SapMonitor;
    };
};

/**
 * Contains response data for the update operation.
 */
export type SapMonitorsUpdateResponse = SapMonitor & {
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
      parsedBody: SapMonitor;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type SapMonitorsBeginCreateResponse = SapMonitor & {
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
      parsedBody: SapMonitor;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type SapMonitorsListNextResponse = SapMonitorListResult & {
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
      parsedBody: SapMonitorListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ProviderInstancesListResponse = ProviderInstanceListResult & {
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
      parsedBody: ProviderInstanceListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ProviderInstancesGetResponse = ProviderInstance & {
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
      parsedBody: ProviderInstance;
    };
};

/**
 * Contains response data for the create operation.
 */
export type ProviderInstancesCreateResponse = ProviderInstance & {
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
      parsedBody: ProviderInstance;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type ProviderInstancesBeginCreateResponse = ProviderInstance & {
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
      parsedBody: ProviderInstance;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ProviderInstancesListNextResponse = ProviderInstanceListResult & {
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
      parsedBody: ProviderInstanceListResult;
    };
};
