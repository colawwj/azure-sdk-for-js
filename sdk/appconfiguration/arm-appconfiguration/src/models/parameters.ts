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
export const configStoreName: msRest.OperationURLParameter = {
  parameterPath: "configStoreName",
  mapper: {
    required: true,
    serializedName: "configStoreName",
    constraints: {
      MaxLength: 50,
      MinLength: 5,
      Pattern: /^[a-zA-Z0-9_-]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const eventGridFilterName: msRest.OperationURLParameter = {
  parameterPath: "eventGridFilterName",
  mapper: {
    required: true,
    serializedName: "eventGridFilterName",
    type: {
      name: "String"
    }
  }
};
export const groupName: msRest.OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    required: true,
    serializedName: "groupName",
    type: {
      name: "String"
    }
  }
};
export const keyValueName: msRest.OperationURLParameter = {
  parameterPath: "keyValueName",
  mapper: {
    required: true,
    serializedName: "keyValueName",
    type: {
      name: "String"
    }
  }
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
export const skipToken: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skipToken"
  ],
  mapper: {
    serializedName: "$skipToken",
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
