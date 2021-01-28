/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const category: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "category"
  ],
  mapper: {
    serializedName: "category",
    type: {
      name: "String"
    }
  }
};
export const computeName: msRest.OperationURLParameter = {
  parameterPath: "computeName",
  mapper: {
    required: true,
    serializedName: "computeName",
    type: {
      name: "String"
    }
  }
};
export const connectionName: msRest.OperationURLParameter = {
  parameterPath: "connectionName",
  mapper: {
    required: true,
    serializedName: "connectionName",
    type: {
      name: "String"
    }
  }
};
export const count0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "count"
  ],
  mapper: {
    serializedName: "count",
    defaultValue: 30,
    type: {
      name: "Number"
    }
  }
};
export const count1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "count"
  ],
  mapper: {
    serializedName: "count",
    type: {
      name: "Number"
    }
  }
};
export const description: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "description"
  ],
  mapper: {
    serializedName: "description",
    type: {
      name: "String"
    }
  }
};
export const expand0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "expand",
    type: {
      name: "Boolean"
    }
  }
};
export const expand1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "expand",
    defaultValue: false,
    type: {
      name: "Boolean"
    }
  }
};
export const exportId: msRest.OperationURLParameter = {
  parameterPath: "exportId",
  mapper: {
    required: true,
    serializedName: "exportId",
    type: {
      name: "Uuid"
    }
  }
};
export const id: msRest.OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    required: true,
    serializedName: "id",
    type: {
      name: "String"
    }
  }
};
export const includeJobInstructions: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "includeJobInstructions"
  ],
  mapper: {
    serializedName: "includeJobInstructions",
    type: {
      name: "Boolean"
    }
  }
};
export const includeLabelCategories: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "includeLabelCategories"
  ],
  mapper: {
    serializedName: "includeLabelCategories",
    type: {
      name: "Boolean"
    }
  }
};
export const isDefault: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "isDefault"
  ],
  mapper: {
    serializedName: "isDefault",
    type: {
      name: "Boolean"
    }
  }
};
export const latestVersionOnly: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "latestVersionOnly"
  ],
  mapper: {
    serializedName: "latestVersionOnly",
    defaultValue: false,
    type: {
      name: "Boolean"
    }
  }
};
export const linkName: msRest.OperationURLParameter = {
  parameterPath: "linkName",
  mapper: {
    required: true,
    serializedName: "linkName",
    type: {
      name: "String"
    }
  }
};
export const location: msRest.OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    required: true,
    serializedName: "location",
    constraints: {
      Pattern: /^[-\w\._]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const modelId: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "modelId"
  ],
  mapper: {
    serializedName: "modelId",
    type: {
      name: "String"
    }
  }
};
export const modelName: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "modelName"
  ],
  mapper: {
    serializedName: "modelName",
    type: {
      name: "String"
    }
  }
};
export const name: msRest.OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    required: true,
    serializedName: "name",
    type: {
      name: "String"
    }
  }
};
export const names: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "names"
  ],
  mapper: {
    serializedName: "names",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const offset: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "offset"
  ],
  mapper: {
    serializedName: "offset",
    type: {
      name: "Number"
    }
  }
};
export const operationId: msRest.OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    required: true,
    serializedName: "operationId",
    type: {
      name: "String"
    }
  }
};
export const orderBy: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "orderBy"
  ],
  mapper: {
    serializedName: "orderBy",
    type: {
      name: "String"
    }
  }
};
export const orderby0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "orderby"
  ],
  mapper: {
    serializedName: "orderby",
    defaultValue: 'UpdatedAtDesc',
    type: {
      name: "String"
    }
  }
};
export const orderby1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "orderby"
  ],
  mapper: {
    serializedName: "$orderby",
    type: {
      name: "String"
    }
  }
};
export const orderByAsc: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "orderByAsc"
  ],
  mapper: {
    serializedName: "orderByAsc",
    defaultValue: false,
    type: {
      name: "Boolean"
    }
  }
};
export const privateEndpointConnectionName: msRest.OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    required: true,
    serializedName: "privateEndpointConnectionName",
    type: {
      name: "String"
    }
  }
};
export const properties: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "properties"
  ],
  mapper: {
    serializedName: "properties",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    type: {
      name: "String"
    }
  }
};
export const runId: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "runId"
  ],
  mapper: {
    serializedName: "runId",
    type: {
      name: "String"
    }
  }
};
export const searchText: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "searchText"
  ],
  mapper: {
    serializedName: "searchText",
    type: {
      name: "String"
    }
  }
};
export const serviceName: msRest.OperationURLParameter = {
  parameterPath: "serviceName",
  mapper: {
    required: true,
    serializedName: "serviceName",
    type: {
      name: "String"
    }
  }
};
export const skiptoken: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skiptoken"
  ],
  mapper: {
    serializedName: "$skiptoken",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const tag: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "tag"
  ],
  mapper: {
    serializedName: "tag",
    type: {
      name: "String"
    }
  }
};
export const tags: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "tags"
  ],
  mapper: {
    serializedName: "tags",
    type: {
      name: "String"
    }
  }
};
export const target: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "target"
  ],
  mapper: {
    serializedName: "target",
    type: {
      name: "String"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    type: {
      name: "String"
    }
  }
};
export const underlyingResourceAction: msRest.OperationQueryParameter = {
  parameterPath: "underlyingResourceAction",
  mapper: {
    required: true,
    serializedName: "underlyingResourceAction",
    type: {
      name: "String"
    }
  }
};
export const version0: msRest.OperationURLParameter = {
  parameterPath: "version",
  mapper: {
    required: true,
    serializedName: "version",
    type: {
      name: "String"
    }
  }
};
export const version1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "version"
  ],
  mapper: {
    serializedName: "version",
    type: {
      name: "String"
    }
  }
};
export const workspaceName: msRest.OperationURLParameter = {
  parameterPath: "workspaceName",
  mapper: {
    required: true,
    serializedName: "workspaceName",
    type: {
      name: "String"
    }
  }
};
