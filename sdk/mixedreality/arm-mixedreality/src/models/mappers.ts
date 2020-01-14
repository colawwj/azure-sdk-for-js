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

export const CheckNameAvailabilityRequest: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityRequest",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityRequest",
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
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResponse: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityResponse",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResponse",
    modelProperties: {
      nameAvailable: {
        required: true,
        serializedName: "nameAvailable",
        type: {
          name: "String"
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

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "OperationDisplay",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        required: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        required: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        required: true,
        serializedName: "operation",
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

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      code: {
        required: true,
        serializedName: "code",
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
          name: "String"
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

export const RemoteRenderingAccount: msRest.CompositeMapper = {
  serializedName: "RemoteRenderingAccount",
  type: {
    name: "Composite",
    className: "RemoteRenderingAccount",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      accountId: {
        readOnly: true,
        serializedName: "properties.accountId",
        type: {
          name: "String"
        }
      },
      accountDomain: {
        readOnly: true,
        serializedName: "properties.accountDomain",
        type: {
          name: "String"
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

export const AccountKeys: msRest.CompositeMapper = {
  serializedName: "AccountKeys",
  type: {
    name: "Composite",
    className: "AccountKeys",
    modelProperties: {
      primaryKey: {
        readOnly: true,
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        readOnly: true,
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccountKeyRegenerateRequest: msRest.CompositeMapper = {
  serializedName: "AccountKeyRegenerateRequest",
  type: {
    name: "Composite",
    className: "AccountKeyRegenerateRequest",
    modelProperties: {
      serial: {
        serializedName: "serial",
        defaultValue: 1,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SpatialAnchorsAccount: msRest.CompositeMapper = {
  serializedName: "SpatialAnchorsAccount",
  type: {
    name: "Composite",
    className: "SpatialAnchorsAccount",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      accountId: {
        readOnly: true,
        serializedName: "properties.accountId",
        type: {
          name: "String"
        }
      },
      accountDomain: {
        readOnly: true,
        serializedName: "properties.accountDomain",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationPage: msRest.CompositeMapper = {
  serializedName: "OperationPage",
  type: {
    name: "Composite",
    className: "OperationPage",
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

export const RemoteRenderingAccountPage: msRest.CompositeMapper = {
  serializedName: "RemoteRenderingAccountPage",
  type: {
    name: "Composite",
    className: "RemoteRenderingAccountPage",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RemoteRenderingAccount"
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

export const SpatialAnchorsAccountPage: msRest.CompositeMapper = {
  serializedName: "SpatialAnchorsAccountPage",
  type: {
    name: "Composite",
    className: "SpatialAnchorsAccountPage",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SpatialAnchorsAccount"
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
