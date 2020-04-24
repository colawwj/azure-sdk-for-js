/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "OperationDisplay",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
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

export const Dimension: msRest.CompositeMapper = {
  serializedName: "Dimension",
  type: {
    name: "Composite",
    className: "Dimension",
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
      },
      toBeExportedForShoebox: {
        serializedName: "toBeExportedForShoebox",
        type: {
          name: "Boolean"
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
      fillGapWithZero: {
        serializedName: "fillGapWithZero",
        type: {
          name: "String"
        }
      },
      category: {
        serializedName: "category",
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
              className: "Dimension"
            }
          }
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
      },
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

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
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
          className: "OperationDisplay"
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

export const ErrorResponseBody: msRest.CompositeMapper = {
  serializedName: "ErrorResponseBody",
  type: {
    name: "Composite",
    className: "ErrorResponseBody",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponseBody"
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
          className: "ErrorResponseBody"
        }
      }
    }
  }
};

export const NameAvailabilityParameters: msRest.CompositeMapper = {
  serializedName: "NameAvailabilityParameters",
  type: {
    name: "Composite",
    className: "NameAvailabilityParameters",
    modelProperties: {
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
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

export const NameAvailability: msRest.CompositeMapper = {
  serializedName: "NameAvailability",
  type: {
    name: "Composite",
    className: "NameAvailability",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSku: msRest.CompositeMapper = {
  serializedName: "ResourceSku",
  type: {
    name: "Composite",
    className: "ResourceSku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
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
        serializedName: "actionsRequired",
        type: {
          name: "String"
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
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
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
      location: {
        serializedName: "location",
        type: {
          name: "String"
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

export const SignalRResource: msRest.CompositeMapper = {
  serializedName: "SignalRResource",
  type: {
    name: "Composite",
    className: "SignalRResource",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      },
      hostNamePrefix: {
        serializedName: "properties.hostNamePrefix",
        type: {
          name: "String"
        }
      },
      features: {
        serializedName: "properties.features",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignalRFeature"
            }
          }
        }
      },
      cors: {
        serializedName: "properties.cors",
        type: {
          name: "Composite",
          className: "SignalRCorsSettings"
        }
      },
      upstream: {
        serializedName: "properties.upstream",
        type: {
          name: "Composite",
          className: "ServerlessUpstreamSettings"
        }
      },
      networkACLs: {
        serializedName: "properties.networkACLs",
        type: {
          name: "Composite",
          className: "SignalRNetworkACLs"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      externalIP: {
        readOnly: true,
        serializedName: "properties.externalIP",
        type: {
          name: "String"
        }
      },
      hostName: {
        readOnly: true,
        serializedName: "properties.hostName",
        type: {
          name: "String"
        }
      },
      publicPort: {
        readOnly: true,
        serializedName: "properties.publicPort",
        type: {
          name: "Number"
        }
      },
      serverPort: {
        readOnly: true,
        serializedName: "properties.serverPort",
        type: {
          name: "Number"
        }
      },
      version: {
        serializedName: "properties.version",
        type: {
          name: "String"
        }
      },
      privateEndpointConnections: {
        serializedName: "properties.privateEndpointConnections",
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
      kind: {
        readOnly: true,
        serializedName: "kind",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignalRFeature: msRest.CompositeMapper = {
  serializedName: "SignalRFeature",
  type: {
    name: "Composite",
    className: "SignalRFeature",
    modelProperties: {
      flag: {
        required: true,
        serializedName: "flag",
        type: {
          name: "String"
        }
      },
      value: {
        required: true,
        serializedName: "value",
        constraints: {
          MaxLength: 128,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
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

export const SignalRCorsSettings: msRest.CompositeMapper = {
  serializedName: "SignalRCorsSettings",
  type: {
    name: "Composite",
    className: "SignalRCorsSettings",
    modelProperties: {
      allowedOrigins: {
        serializedName: "allowedOrigins",
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

export const UpstreamTemplate: msRest.CompositeMapper = {
  serializedName: "UpstreamTemplate",
  type: {
    name: "Composite",
    className: "UpstreamTemplate",
    modelProperties: {
      hubPattern: {
        serializedName: "hubPattern",
        type: {
          name: "String"
        }
      },
      eventPattern: {
        serializedName: "eventPattern",
        type: {
          name: "String"
        }
      },
      categoryPattern: {
        serializedName: "categoryPattern",
        type: {
          name: "String"
        }
      },
      urlTemplate: {
        required: true,
        serializedName: "urlTemplate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServerlessUpstreamSettings: msRest.CompositeMapper = {
  serializedName: "ServerlessUpstreamSettings",
  type: {
    name: "Composite",
    className: "ServerlessUpstreamSettings",
    modelProperties: {
      templates: {
        serializedName: "templates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UpstreamTemplate"
            }
          }
        }
      }
    }
  }
};

export const NetworkACL: msRest.CompositeMapper = {
  serializedName: "NetworkACL",
  type: {
    name: "Composite",
    className: "NetworkACL",
    modelProperties: {
      allow: {
        serializedName: "allow",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      deny: {
        serializedName: "deny",
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

export const PrivateEndpointACL: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointACL",
  type: {
    name: "Composite",
    className: "PrivateEndpointACL",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      allow: {
        serializedName: "allow",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      deny: {
        serializedName: "deny",
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

export const SignalRNetworkACLs: msRest.CompositeMapper = {
  serializedName: "SignalRNetworkACLs",
  type: {
    name: "Composite",
    className: "SignalRNetworkACLs",
    modelProperties: {
      defaultAction: {
        serializedName: "defaultAction",
        type: {
          name: "String"
        }
      },
      publicNetwork: {
        serializedName: "publicNetwork",
        type: {
          name: "Composite",
          className: "NetworkACL"
        }
      },
      privateEndpoints: {
        serializedName: "privateEndpoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointACL"
            }
          }
        }
      }
    }
  }
};

export const SignalRCreateOrUpdateProperties: msRest.CompositeMapper = {
  serializedName: "SignalRCreateOrUpdateProperties",
  type: {
    name: "Composite",
    className: "SignalRCreateOrUpdateProperties",
    modelProperties: {
      hostNamePrefix: {
        serializedName: "hostNamePrefix",
        type: {
          name: "String"
        }
      },
      features: {
        serializedName: "features",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignalRFeature"
            }
          }
        }
      },
      cors: {
        serializedName: "cors",
        type: {
          name: "Composite",
          className: "SignalRCorsSettings"
        }
      },
      upstream: {
        serializedName: "upstream",
        type: {
          name: "Composite",
          className: "ServerlessUpstreamSettings"
        }
      },
      networkACLs: {
        serializedName: "networkACLs",
        type: {
          name: "Composite",
          className: "SignalRNetworkACLs"
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

export const PrivateLinkResource: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResource",
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      groupId: {
        serializedName: "properties.groupId",
        type: {
          name: "String"
        }
      },
      requiredMembers: {
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

export const SignalRKeys: msRest.CompositeMapper = {
  serializedName: "SignalRKeys",
  type: {
    name: "Composite",
    className: "SignalRKeys",
    modelProperties: {
      primaryKey: {
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      },
      primaryConnectionString: {
        serializedName: "primaryConnectionString",
        type: {
          name: "String"
        }
      },
      secondaryConnectionString: {
        serializedName: "secondaryConnectionString",
        type: {
          name: "String"
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
      keyType: {
        serializedName: "keyType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignalRUpdateParameters: msRest.CompositeMapper = {
  serializedName: "SignalRUpdateParameters",
  type: {
    name: "Composite",
    className: "SignalRUpdateParameters",
    modelProperties: {
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
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "SignalRCreateOrUpdateProperties"
        }
      }
    }
  }
};

export const SignalRCreateParameters: msRest.CompositeMapper = {
  serializedName: "SignalRCreateParameters",
  type: {
    name: "Composite",
    className: "SignalRCreateParameters",
    modelProperties: {
      ...SignalRUpdateParameters.type.modelProperties,
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      kind: {
        serializedName: "kind",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignalRUsageName: msRest.CompositeMapper = {
  serializedName: "SignalRUsageName",
  type: {
    name: "Composite",
    className: "SignalRUsageName",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      localizedValue: {
        serializedName: "localizedValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignalRUsage: msRest.CompositeMapper = {
  serializedName: "SignalRUsage",
  type: {
    name: "Composite",
    className: "SignalRUsage",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      currentValue: {
        serializedName: "currentValue",
        type: {
          name: "Number"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "Composite",
          className: "SignalRUsageName"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationList: msRest.CompositeMapper = {
  serializedName: "OperationList",
  type: {
    name: "Composite",
    className: "OperationList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
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

export const SignalRResourceList: msRest.CompositeMapper = {
  serializedName: "SignalRResourceList",
  type: {
    name: "Composite",
    className: "SignalRResourceList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignalRResource"
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

export const PrivateLinkResourceList: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResourceList",
  type: {
    name: "Composite",
    className: "PrivateLinkResourceList",
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

export const SignalRUsageList: msRest.CompositeMapper = {
  serializedName: "SignalRUsageList",
  type: {
    name: "Composite",
    className: "SignalRUsageList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignalRUsage"
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
