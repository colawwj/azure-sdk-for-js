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

export const Quota: msRest.CompositeMapper = {
  serializedName: "Quota",
  type: {
    name: "Composite",
    className: "Quota",
    modelProperties: {
      hostsRemaining: {
        readOnly: true,
        serializedName: "hostsRemaining",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Number"
            }
          }
        }
      },
      quotaEnabled: {
        serializedName: "quotaEnabled",
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

export const ApiErrorBase: msRest.CompositeMapper = {
  serializedName: "ApiErrorBase",
  type: {
    name: "Composite",
    className: "ApiErrorBase",
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
      }
    }
  }
};

export const ApiError: msRest.CompositeMapper = {
  serializedName: "ApiError",
  type: {
    name: "Composite",
    className: "ApiError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ApiErrorBase"
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
      },
      description: {
        readOnly: true,
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
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        readOnly: true,
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const ExpressRouteAuthorization: msRest.CompositeMapper = {
  serializedName: "ExpressRouteAuthorization",
  type: {
    name: "Composite",
    className: "ExpressRouteAuthorization",
    modelProperties: {
      name: {
        serializedName: "name",
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
      key: {
        readOnly: true,
        serializedName: "key",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Circuit: msRest.CompositeMapper = {
  serializedName: "Circuit",
  type: {
    name: "Composite",
    className: "Circuit",
    modelProperties: {
      primarySubnet: {
        readOnly: true,
        serializedName: "primarySubnet",
        type: {
          name: "String"
        }
      },
      secondarySubnet: {
        readOnly: true,
        serializedName: "secondarySubnet",
        type: {
          name: "String"
        }
      },
      expressRouteID: {
        readOnly: true,
        serializedName: "expressRouteID",
        type: {
          name: "String"
        }
      },
      authorizations: {
        serializedName: "authorizations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExpressRouteAuthorization"
            }
          }
        }
      },
      expressRoutePrivatePeeringID: {
        readOnly: true,
        serializedName: "expressRoutePrivatePeeringID",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Endpoints: msRest.CompositeMapper = {
  serializedName: "Endpoints",
  type: {
    name: "Composite",
    className: "Endpoints",
    modelProperties: {
      nsxtManager: {
        readOnly: true,
        serializedName: "nsxtManager",
        type: {
          name: "String"
        }
      },
      vcsa: {
        readOnly: true,
        serializedName: "vcsa",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IdentitySource: msRest.CompositeMapper = {
  serializedName: "IdentitySource",
  type: {
    name: "Composite",
    className: "IdentitySource",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      alias: {
        serializedName: "alias",
        type: {
          name: "String"
        }
      },
      domain: {
        serializedName: "domain",
        type: {
          name: "String"
        }
      },
      baseUserDN: {
        serializedName: "baseUserDN",
        type: {
          name: "String"
        }
      },
      baseGroupDN: {
        serializedName: "baseGroupDN",
        type: {
          name: "String"
        }
      },
      primaryServer: {
        serializedName: "primaryServer",
        type: {
          name: "String"
        }
      },
      secondaryServer: {
        serializedName: "secondaryServer",
        type: {
          name: "String"
        }
      },
      ssl: {
        serializedName: "ssl",
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "username",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
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

export const DefaultClusterProperties: msRest.CompositeMapper = {
  serializedName: "DefaultClusterProperties",
  type: {
    name: "Composite",
    className: "DefaultClusterProperties",
    modelProperties: {
      clusterId: {
        readOnly: true,
        serializedName: "clusterId",
        type: {
          name: "Number"
        }
      },
      clusterSize: {
        serializedName: "clusterSize",
        type: {
          name: "Number"
        }
      },
      hosts: {
        readOnly: true,
        serializedName: "hosts",
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

export const PrivateCloudProperties: msRest.CompositeMapper = {
  serializedName: "PrivateCloudProperties",
  type: {
    name: "Composite",
    className: "PrivateCloudProperties",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      circuit: {
        serializedName: "circuit",
        type: {
          name: "Composite",
          className: "Circuit"
        }
      },
      cluster: {
        serializedName: "cluster",
        type: {
          name: "Composite",
          className: "DefaultClusterProperties"
        }
      },
      clusters: {
        readOnly: true,
        serializedName: "clusters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      endpoints: {
        readOnly: true,
        serializedName: "endpoints",
        type: {
          name: "Composite",
          className: "Endpoints"
        }
      },
      internet: {
        serializedName: "internet",
        type: {
          name: "String"
        }
      },
      identitySources: {
        serializedName: "identitySources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IdentitySource"
            }
          }
        }
      },
      networkBlock: {
        serializedName: "networkBlock",
        type: {
          name: "String"
        }
      },
      managementNetwork: {
        readOnly: true,
        serializedName: "managementNetwork",
        type: {
          name: "String"
        }
      },
      provisioningNetwork: {
        readOnly: true,
        serializedName: "provisioningNetwork",
        type: {
          name: "String"
        }
      },
      vmotionNetwork: {
        readOnly: true,
        serializedName: "vmotionNetwork",
        type: {
          name: "String"
        }
      },
      vcenterPassword: {
        serializedName: "vcenterPassword",
        type: {
          name: "String"
        }
      },
      nsxtPassword: {
        serializedName: "nsxtPassword",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateCloud: msRest.CompositeMapper = {
  serializedName: "PrivateCloud",
  type: {
    name: "Composite",
    className: "PrivateCloud",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateCloudProperties"
        }
      }
    }
  }
};

export const ClusterProperties: msRest.CompositeMapper = {
  serializedName: "ClusterProperties",
  type: {
    name: "Composite",
    className: "ClusterProperties",
    modelProperties: {
      ...DefaultClusterProperties.type.modelProperties,
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Cluster: msRest.CompositeMapper = {
  serializedName: "Cluster",
  type: {
    name: "Composite",
    className: "Cluster",
    modelProperties: {
      ...Resource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ClusterProperties"
        }
      }
    }
  }
};

export const AdminCredentials: msRest.CompositeMapper = {
  serializedName: "AdminCredentials",
  type: {
    name: "Composite",
    className: "AdminCredentials",
    modelProperties: {
      nsxtUsername: {
        readOnly: true,
        serializedName: "nsxtUsername",
        type: {
          name: "String"
        }
      },
      nsxtPassword: {
        readOnly: true,
        serializedName: "nsxtPassword",
        type: {
          name: "String"
        }
      },
      vcenterUsername: {
        readOnly: true,
        serializedName: "vcenterUsername",
        type: {
          name: "String"
        }
      },
      vcenterPassword: {
        readOnly: true,
        serializedName: "vcenterPassword",
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

export const PrivateCloudList: msRest.CompositeMapper = {
  serializedName: "PrivateCloudList",
  type: {
    name: "Composite",
    className: "PrivateCloudList",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateCloud"
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

export const ClusterList: msRest.CompositeMapper = {
  serializedName: "ClusterList",
  type: {
    name: "Composite",
    className: "ClusterList",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Cluster"
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
