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
export const accountName: msRest.OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    required: true,
    serializedName: "accountName",
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
export const computePolicyName: msRest.OperationURLParameter = {
  parameterPath: "computePolicyName",
  mapper: {
    required: true,
    serializedName: "computePolicyName",
    type: {
      name: "String"
    }
  }
};
export const containerName: msRest.OperationURLParameter = {
  parameterPath: "containerName",
  mapper: {
    required: true,
    serializedName: "containerName",
    type: {
      name: "String"
    }
  }
};
export const count: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "count"
  ],
  mapper: {
    serializedName: "$count",
    type: {
      name: "Boolean"
    }
  }
};
export const dataLakeStoreAccountName: msRest.OperationURLParameter = {
  parameterPath: "dataLakeStoreAccountName",
  mapper: {
    required: true,
    serializedName: "dataLakeStoreAccountName",
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
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
export const location: msRest.OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    required: true,
    serializedName: "location",
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
export const orderby: msRest.OperationQueryParameter = {
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
export const select: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "select"
  ],
  mapper: {
    serializedName: "$select",
    type: {
      name: "String"
    }
  }
};
export const skip: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skip"
  ],
  mapper: {
    serializedName: "$skip",
    constraints: {
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const storageAccountName: msRest.OperationURLParameter = {
  parameterPath: "storageAccountName",
  mapper: {
    required: true,
    serializedName: "storageAccountName",
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
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    constraints: {
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
