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
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2017-12-01',
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-06-01',
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const apiVersion2: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2020-01-01',
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const configurationName: msRest.OperationURLParameter = {
  parameterPath: "configurationName",
  mapper: {
    required: true,
    serializedName: "configurationName",
    type: {
      name: "String"
    }
  }
};
export const databaseName: msRest.OperationURLParameter = {
  parameterPath: "databaseName",
  mapper: {
    required: true,
    serializedName: "databaseName",
    type: {
      name: "String"
    }
  }
};
export const firewallRuleName: msRest.OperationURLParameter = {
  parameterPath: "firewallRuleName",
  mapper: {
    required: true,
    serializedName: "firewallRuleName",
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
export const keyName: msRest.OperationURLParameter = {
  parameterPath: "keyName",
  mapper: {
    required: true,
    serializedName: "keyName",
    type: {
      name: "String"
    }
  }
};
export const locationName: msRest.OperationURLParameter = {
  parameterPath: "locationName",
  mapper: {
    required: true,
    serializedName: "locationName",
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
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const securityAlertPolicyName: msRest.OperationURLParameter = {
  parameterPath: "securityAlertPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "securityAlertPolicyName",
    defaultValue: 'Default',
    type: {
      name: "String"
    }
  }
};
export const serverName: msRest.OperationURLParameter = {
  parameterPath: "serverName",
  mapper: {
    required: true,
    serializedName: "serverName",
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
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const virtualNetworkRuleName: msRest.OperationURLParameter = {
  parameterPath: "virtualNetworkRuleName",
  mapper: {
    required: true,
    serializedName: "virtualNetworkRuleName",
    type: {
      name: "String"
    }
  }
};
