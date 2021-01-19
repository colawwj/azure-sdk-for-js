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

export const ErrorMesssage: msRest.CompositeMapper = {
  serializedName: "ErrorMesssage",
  type: {
    name: "Composite",
    className: "ErrorMesssage",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AsyncOperationResult: msRest.CompositeMapper = {
  serializedName: "AsyncOperationResult",
  type: {
    name: "Composite",
    className: "AsyncOperationResult",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorMesssage"
        }
      }
    }
  }
};

export const CertificateProperties: msRest.CompositeMapper = {
  serializedName: "CertificateProperties",
  type: {
    name: "Composite",
    className: "CertificateProperties",
    modelProperties: {
      subject: {
        readOnly: true,
        serializedName: "subject",
        type: {
          name: "String"
        }
      },
      expiry: {
        readOnly: true,
        serializedName: "expiry",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      thumbprint: {
        readOnly: true,
        serializedName: "thumbprint",
        type: {
          name: "String"
        }
      },
      isVerified: {
        readOnly: true,
        serializedName: "isVerified",
        type: {
          name: "Boolean"
        }
      },
      created: {
        readOnly: true,
        serializedName: "created",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      updated: {
        readOnly: true,
        serializedName: "updated",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const CertificateResponse: msRest.CompositeMapper = {
  serializedName: "CertificateResponse",
  type: {
    name: "Composite",
    className: "CertificateResponse",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "CertificateProperties"
        }
      },
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
      etag: {
        readOnly: true,
        serializedName: "etag",
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

export const CertificateListDescription: msRest.CompositeMapper = {
  serializedName: "CertificateListDescription",
  type: {
    name: "Composite",
    className: "CertificateListDescription",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CertificateResponse"
            }
          }
        }
      }
    }
  }
};

export const CertificateBodyDescription: msRest.CompositeMapper = {
  serializedName: "CertificateBodyDescription",
  type: {
    name: "Composite",
    className: "CertificateBodyDescription",
    modelProperties: {
      certificate: {
        serializedName: "certificate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IotDpsSkuInfo: msRest.CompositeMapper = {
  serializedName: "IotDpsSkuInfo",
  type: {
    name: "Composite",
    className: "IotDpsSkuInfo",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        readOnly: true,
        serializedName: "tier",
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

export const KeyVaultKeyProperties: msRest.CompositeMapper = {
  serializedName: "KeyVaultKeyProperties",
  type: {
    name: "Composite",
    className: "KeyVaultKeyProperties",
    modelProperties: {
      keyIdentifier: {
        serializedName: "keyIdentifier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EncryptionKeyIdentity: msRest.CompositeMapper = {
  serializedName: "EncryptionKeyIdentity",
  type: {
    name: "Composite",
    className: "EncryptionKeyIdentity",
    modelProperties: {
      userAssignedIdentity: {
        serializedName: "userAssignedIdentity",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EncryptionPropertiesDescription: msRest.CompositeMapper = {
  serializedName: "EncryptionPropertiesDescription",
  type: {
    name: "Composite",
    className: "EncryptionPropertiesDescription",
    modelProperties: {
      keySource: {
        serializedName: "keySource",
        type: {
          name: "String"
        }
      },
      keyVaultProperties: {
        serializedName: "keyVaultProperties",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyVaultKeyProperties"
            }
          }
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "EncryptionKeyIdentity"
        }
      }
    }
  }
};

export const IpFilterRule: msRest.CompositeMapper = {
  serializedName: "IpFilterRule",
  type: {
    name: "Composite",
    className: "IpFilterRule",
    modelProperties: {
      filterName: {
        required: true,
        serializedName: "filterName",
        type: {
          name: "String"
        }
      },
      action: {
        required: true,
        serializedName: "action",
        type: {
          name: "Enum",
          allowedValues: [
            "Accept",
            "Reject"
          ]
        }
      },
      ipMask: {
        required: true,
        serializedName: "ipMask",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "Enum",
          allowedValues: [
            "all",
            "serviceApi",
            "deviceApi"
          ]
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
        readOnly: true,
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
        required: true,
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        required: true,
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

export const PrivateEndpointConnectionProperties: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnectionProperties",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionProperties",
    modelProperties: {
      privateEndpoint: {
        serializedName: "privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        required: true,
        serializedName: "privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
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
        constraints: {
          Pattern: /^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$/
        },
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
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateEndpointConnectionProperties"
        }
      }
    }
  }
};

export const IotHubDefinitionDescription: msRest.CompositeMapper = {
  serializedName: "IotHubDefinitionDescription",
  type: {
    name: "Composite",
    className: "IotHubDefinitionDescription",
    modelProperties: {
      applyAllocationPolicy: {
        serializedName: "applyAllocationPolicy",
        type: {
          name: "Boolean"
        }
      },
      allocationWeight: {
        serializedName: "allocationWeight",
        type: {
          name: "Number"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      connectionString: {
        required: true,
        serializedName: "connectionString",
        type: {
          name: "String"
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

export const SharedAccessSignatureAuthorizationRuleAccessRightsDescription: msRest.CompositeMapper = {
  serializedName: "SharedAccessSignatureAuthorizationRule_AccessRightsDescription_",
  type: {
    name: "Composite",
    className: "SharedAccessSignatureAuthorizationRuleAccessRightsDescription",
    modelProperties: {
      keyName: {
        required: true,
        serializedName: "keyName",
        type: {
          name: "String"
        }
      },
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
      rights: {
        required: true,
        serializedName: "rights",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IotDpsPropertiesDescription: msRest.CompositeMapper = {
  serializedName: "IotDpsPropertiesDescription",
  type: {
    name: "Composite",
    className: "IotDpsPropertiesDescription",
    modelProperties: {
      state: {
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      encryption: {
        serializedName: "encryption",
        type: {
          name: "Composite",
          className: "EncryptionPropertiesDescription"
        }
      },
      publicNetworkAccess: {
        serializedName: "publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      ipFilterRules: {
        serializedName: "ipFilterRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IpFilterRule"
            }
          }
        }
      },
      privateEndpointConnections: {
        serializedName: "privateEndpointConnections",
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
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      iotHubs: {
        serializedName: "iotHubs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IotHubDefinitionDescription"
            }
          }
        }
      },
      allocationPolicy: {
        serializedName: "allocationPolicy",
        type: {
          name: "String"
        }
      },
      serviceOperationsHostName: {
        readOnly: true,
        serializedName: "serviceOperationsHostName",
        type: {
          name: "String"
        }
      },
      deviceProvisioningHostName: {
        readOnly: true,
        serializedName: "deviceProvisioningHostName",
        type: {
          name: "String"
        }
      },
      idScope: {
        readOnly: true,
        serializedName: "idScope",
        type: {
          name: "String"
        }
      },
      authorizationPolicies: {
        serializedName: "authorizationPolicies",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SharedAccessSignatureAuthorizationRuleAccessRightsDescription"
            }
          }
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ArmUserIdentity: msRest.CompositeMapper = {
  serializedName: "ArmUserIdentity",
  type: {
    name: "Composite",
    className: "ArmUserIdentity",
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

export const ArmIdentity: msRest.CompositeMapper = {
  serializedName: "ArmIdentity",
  type: {
    name: "Composite",
    className: "ArmIdentity",
    modelProperties: {
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
      },
      identityType: {
        serializedName: "identityType",
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
              className: "ArmUserIdentity"
            }
          }
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
        constraints: {
          Pattern: /^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$/
        },
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
      location: {
        required: true,
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

export const ProvisioningServiceDescription: msRest.CompositeMapper = {
  serializedName: "ProvisioningServiceDescription",
  type: {
    name: "Composite",
    className: "ProvisioningServiceDescription",
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "IotDpsPropertiesDescription"
        }
      },
      sku: {
        required: true,
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "IotDpsSkuInfo"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ArmIdentity"
        }
      }
    }
  }
};

export const GroupIdInformationProperties: msRest.CompositeMapper = {
  serializedName: "GroupIdInformationProperties",
  type: {
    name: "Composite",
    className: "GroupIdInformationProperties",
    modelProperties: {
      groupId: {
        serializedName: "groupId",
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "requiredMembers",
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
        serializedName: "requiredZoneNames",
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

export const GroupIdInformation: msRest.CompositeMapper = {
  serializedName: "GroupIdInformation",
  type: {
    name: "Composite",
    className: "GroupIdInformation",
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
        constraints: {
          Pattern: /^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$/
        },
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
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "GroupIdInformationProperties"
        }
      }
    }
  }
};

export const PrivateLinkResources: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResources",
  type: {
    name: "Composite",
    className: "PrivateLinkResources",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GroupIdInformation"
            }
          }
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
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
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
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
      httpStatusCode: {
        readOnly: true,
        serializedName: "httpStatusCode",
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
      details: {
        readOnly: true,
        serializedName: "details",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IotDpsSkuDefinition: msRest.CompositeMapper = {
  serializedName: "IotDpsSkuDefinition",
  type: {
    name: "Composite",
    className: "IotDpsSkuDefinition",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationInputs: msRest.CompositeMapper = {
  serializedName: "OperationInputs",
  type: {
    name: "Composite",
    className: "OperationInputs",
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

export const NameAvailabilityInfo: msRest.CompositeMapper = {
  serializedName: "NameAvailabilityInfo",
  type: {
    name: "Composite",
    className: "NameAvailabilityInfo",
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

export const TagsResource: msRest.CompositeMapper = {
  serializedName: "TagsResource",
  type: {
    name: "Composite",
    className: "TagsResource",
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
      }
    }
  }
};

export const VerificationCodeResponseProperties: msRest.CompositeMapper = {
  serializedName: "VerificationCodeResponse_properties",
  type: {
    name: "Composite",
    className: "VerificationCodeResponseProperties",
    modelProperties: {
      verificationCode: {
        serializedName: "verificationCode",
        type: {
          name: "String"
        }
      },
      subject: {
        serializedName: "subject",
        type: {
          name: "String"
        }
      },
      expiry: {
        serializedName: "expiry",
        type: {
          name: "String"
        }
      },
      thumbprint: {
        serializedName: "thumbprint",
        type: {
          name: "String"
        }
      },
      isVerified: {
        serializedName: "isVerified",
        type: {
          name: "Boolean"
        }
      },
      created: {
        serializedName: "created",
        type: {
          name: "String"
        }
      },
      updated: {
        serializedName: "updated",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VerificationCodeResponse: msRest.CompositeMapper = {
  serializedName: "VerificationCodeResponse",
  type: {
    name: "Composite",
    className: "VerificationCodeResponse",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      etag: {
        readOnly: true,
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
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
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "VerificationCodeResponseProperties"
        }
      }
    }
  }
};

export const VerificationCodeRequest: msRest.CompositeMapper = {
  serializedName: "VerificationCodeRequest",
  type: {
    name: "Composite",
    className: "VerificationCodeRequest",
    modelProperties: {
      certificate: {
        serializedName: "certificate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        readOnly: true,
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
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProvisioningServiceDescriptionListResult: msRest.CompositeMapper = {
  serializedName: "ProvisioningServiceDescriptionListResult",
  type: {
    name: "Composite",
    className: "ProvisioningServiceDescriptionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProvisioningServiceDescription"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IotDpsSkuDefinitionListResult: msRest.CompositeMapper = {
  serializedName: "IotDpsSkuDefinitionListResult",
  type: {
    name: "Composite",
    className: "IotDpsSkuDefinitionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IotDpsSkuDefinition"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SharedAccessSignatureAuthorizationRuleListResult: msRest.CompositeMapper = {
  serializedName: "SharedAccessSignatureAuthorizationRuleListResult",
  type: {
    name: "Composite",
    className: "SharedAccessSignatureAuthorizationRuleListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SharedAccessSignatureAuthorizationRuleAccessRightsDescription"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
