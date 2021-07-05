/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const UserIdentity: msRest.CompositeMapper = {
  serializedName: "UserIdentity",
  type: {
    name: "Composite",
    className: "UserIdentity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      clientId: {
        readOnly: true,
        serializedName: "clientId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceIdentity: msRest.CompositeMapper = {
  serializedName: "ResourceIdentity",
  type: {
    name: "Composite",
    className: "ResourceIdentity",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "UserIdentity"
            }
          }
        }
      },
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyVaultProperties: msRest.CompositeMapper = {
  serializedName: "KeyVaultProperties",
  type: {
    name: "Composite",
    className: "KeyVaultProperties",
    modelProperties: {
      keyIdentifier: {
        serializedName: "keyIdentifier",
        type: {
          name: "String"
        }
      },
      identityClientId: {
        serializedName: "identityClientId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EncryptionProperties: msRest.CompositeMapper = {
  serializedName: "EncryptionProperties",
  type: {
    name: "Composite",
    className: "EncryptionProperties",
    modelProperties: {
      keyVaultProperties: {
        serializedName: "keyVaultProperties",
        type: {
          name: "Composite",
          className: "KeyVaultProperties"
        }
      }
    }
  }
};

export const PrivateEndpoint: msRest.CompositeMapper = {
  serializedName: "PrivateEndpoint",
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionState: msRest.CompositeMapper = {
  serializedName: "PrivateLinkServiceConnectionState",
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      actionsRequired: {
        readOnly: true,
        serializedName: "actionsRequired",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionReference: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnectionReference",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionReference",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        required: true,
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      }
    }
  }
};

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: msRest.CompositeMapper = {
  serializedName: "systemData",
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationStore: msRest.CompositeMapper = {
  serializedName: "ConfigurationStore",
  type: {
    name: "Composite",
    className: "ConfigurationStore",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ResourceIdentity"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      creationDate: {
        readOnly: true,
        serializedName: "properties.creationDate",
        type: {
          name: "DateTime"
        }
      },
      endpoint: {
        readOnly: true,
        serializedName: "properties.endpoint",
        type: {
          name: "String"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "EncryptionProperties"
        }
      },
      privateEndpointConnections: {
        readOnly: true,
        serializedName: "properties.privateEndpointConnections",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnectionReference"
            }
          }
        }
      },
      publicNetworkAccess: {
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      disableLocalAuth: {
        serializedName: "properties.disableLocalAuth",
        type: {
          name: "Boolean"
        }
      },
      sku: {
        required: true,
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const ConfigurationStoreUpdateParameters: msRest.CompositeMapper = {
  serializedName: "ConfigurationStoreUpdateParameters",
  type: {
    name: "Composite",
    className: "ConfigurationStoreUpdateParameters",
    modelProperties: {
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "EncryptionProperties"
        }
      },
      disableLocalAuth: {
        serializedName: "properties.disableLocalAuth",
        type: {
          name: "Boolean"
        }
      },
      publicNetworkAccess: {
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ResourceIdentity"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CheckNameAvailabilityParameters: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityParameters",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityParameters",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        isConstant: true,
        serializedName: "type",
        defaultValue: 'Microsoft.AppConfiguration/configurationStores',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NameAvailabilityStatus: msRest.CompositeMapper = {
  serializedName: "NameAvailabilityStatus",
  type: {
    name: "Composite",
    className: "NameAvailabilityStatus",
    modelProperties: {
      nameAvailable: {
        readOnly: true,
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      reason: {
        readOnly: true,
        serializedName: "reason",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApiKey: msRest.CompositeMapper = {
  serializedName: "ApiKey",
  type: {
    name: "Composite",
    className: "ApiKey",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      connectionString: {
        readOnly: true,
        serializedName: "connectionString",
        type: {
          name: "String"
        }
      },
      lastModified: {
        readOnly: true,
        serializedName: "lastModified",
        type: {
          name: "DateTime"
        }
      },
      readOnly: {
        readOnly: true,
        serializedName: "readOnly",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const RegenerateKeyParameters: msRest.CompositeMapper = {
  serializedName: "RegenerateKeyParameters",
  type: {
    name: "Composite",
    className: "RegenerateKeyParameters",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyValue: msRest.CompositeMapper = {
  serializedName: "KeyValue",
  type: {
    name: "Composite",
    className: "KeyValue",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      key: {
        readOnly: true,
        serializedName: "properties.key",
        type: {
          name: "String"
        }
      },
      label: {
        readOnly: true,
        serializedName: "properties.label",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "properties.value",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "properties.contentType",
        type: {
          name: "String"
        }
      },
      eTag: {
        readOnly: true,
        serializedName: "properties.eTag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        readOnly: true,
        serializedName: "properties.lastModified",
        type: {
          name: "DateTime"
        }
      },
      locked: {
        readOnly: true,
        serializedName: "properties.locked",
        type: {
          name: "Boolean"
        }
      },
      tags: {
        serializedName: "properties.tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const OperationDefinitionDisplay: msRest.CompositeMapper = {
  serializedName: "OperationDefinitionDisplay",
  type: {
    name: "Composite",
    className: "OperationDefinitionDisplay",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LogSpecification: msRest.CompositeMapper = {
  serializedName: "LogSpecification",
  type: {
    name: "Composite",
    className: "LogSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      blobDuration: {
        serializedName: "blobDuration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MetricDimension: msRest.CompositeMapper = {
  serializedName: "MetricDimension",
  type: {
    name: "Composite",
    className: "MetricDimension",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      internalName: {
        serializedName: "internalName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MetricSpecification: msRest.CompositeMapper = {
  serializedName: "MetricSpecification",
  type: {
    name: "Composite",
    className: "MetricSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      displayDescription: {
        serializedName: "displayDescription",
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      aggregationType: {
        serializedName: "aggregationType",
        type: {
          name: "String"
        }
      },
      internalMetricName: {
        serializedName: "internalMetricName",
        type: {
          name: "String"
        }
      },
      dimensions: {
        serializedName: "dimensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricDimension"
            }
          }
        }
      },
      fillGapWithZero: {
        serializedName: "fillGapWithZero",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ServiceSpecification: msRest.CompositeMapper = {
  serializedName: "ServiceSpecification",
  type: {
    name: "Composite",
    className: "ServiceSpecification",
    modelProperties: {
      logSpecifications: {
        serializedName: "logSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LogSpecification"
            }
          }
        }
      },
      metricSpecifications: {
        serializedName: "metricSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricSpecification"
            }
          }
        }
      }
    }
  }
};

export const OperationProperties: msRest.CompositeMapper = {
  serializedName: "OperationProperties",
  type: {
    name: "Composite",
    className: "OperationProperties",
    modelProperties: {
      serviceSpecification: {
        serializedName: "serviceSpecification",
        type: {
          name: "Composite",
          className: "ServiceSpecification"
        }
      }
    }
  }
};

export const OperationDefinition: msRest.CompositeMapper = {
  serializedName: "OperationDefinition",
  type: {
    name: "Composite",
    className: "OperationDefinition",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDefinitionDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "OperationProperties"
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: msRest.CompositeMapper = {
  serializedName: "ErrorAdditionalInfo",
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      info: {
        readOnly: true,
        serializedName: "info",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const ErrorDetails: msRest.CompositeMapper = {
  serializedName: "ErrorDetails",
  type: {
    name: "Composite",
    className: "ErrorDetails",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      additionalInfo: {
        readOnly: true,
        serializedName: "additionalInfo",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetails"
        }
      }
    }
  }
};

export const PrivateEndpointConnection: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnection",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        required: true,
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      }
    }
  }
};

export const PrivateLinkResource: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResource",
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      groupId: {
        readOnly: true,
        serializedName: "properties.groupId",
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        readOnly: true,
        serializedName: "properties.requiredMembers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        readOnly: true,
        serializedName: "properties.requiredZoneNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ProxyResource: msRest.CompositeMapper = {
  serializedName: "ProxyResource",
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const AzureEntityResource: msRest.CompositeMapper = {
  serializedName: "AzureEntityResource",
  type: {
    name: "Composite",
    className: "AzureEntityResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        readOnly: true,
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationStoreListResult: msRest.CompositeMapper = {
  serializedName: "ConfigurationStoreListResult",
  type: {
    name: "Composite",
    className: "ConfigurationStoreListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConfigurationStore"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApiKeyListResult: msRest.CompositeMapper = {
  serializedName: "ApiKeyListResult",
  type: {
    name: "Composite",
    className: "ApiKeyListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApiKey"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDefinitionListResult: msRest.CompositeMapper = {
  serializedName: "OperationDefinitionListResult",
  type: {
    name: "Composite",
    className: "OperationDefinitionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationDefinition"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionListResult: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnectionListResult",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResourceListResult: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResourceListResult",
  type: {
    name: "Composite",
    className: "PrivateLinkResourceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyValueListResult: msRest.CompositeMapper = {
  serializedName: "KeyValueListResult",
  type: {
    name: "Composite",
    className: "KeyValueListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyValue"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
