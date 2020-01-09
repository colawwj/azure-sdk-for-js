/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
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
export const alias: msRest.OperationURLParameter = {
  parameterPath: "alias",
  mapper: {
    required: true,
    serializedName: "alias",
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
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
export const authorizationRuleName: msRest.OperationURLParameter = {
  parameterPath: "authorizationRuleName",
  mapper: {
    required: true,
    serializedName: "authorizationRuleName",
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const configName: msRest.OperationURLParameter = {
  parameterPath: "configName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "configName",
    defaultValue: '$default',
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
export const namespaceName0: msRest.OperationURLParameter = {
  parameterPath: "namespaceName",
  mapper: {
    required: true,
    serializedName: "namespaceName",
    type: {
      name: "String"
    }
  }
};
export const namespaceName1: msRest.OperationURLParameter = {
  parameterPath: "namespaceName",
  mapper: {
    required: true,
    serializedName: "namespaceName",
    constraints: {
      MaxLength: 50,
      MinLength: 6
    },
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
export const operationResultId: msRest.OperationURLParameter = {
  parameterPath: "operationResultId",
  mapper: {
    required: true,
    serializedName: "operationResultId",
    type: {
      name: "String"
    }
  }
};
export const queueName: msRest.OperationURLParameter = {
  parameterPath: "queueName",
  mapper: {
    required: true,
    serializedName: "queueName",
    constraints: {
      MinLength: 1
    },
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
export const ruleName: msRest.OperationURLParameter = {
  parameterPath: "ruleName",
  mapper: {
    required: true,
    serializedName: "ruleName",
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
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
      InclusiveMaximum: 1000,
      InclusiveMinimum: 0
    },
    type: {
      name: "Number"
    }
  }
};
export const sku: msRest.OperationURLParameter = {
  parameterPath: "sku",
  mapper: {
    required: true,
    serializedName: "sku",
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
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
export const subscriptionName: msRest.OperationURLParameter = {
  parameterPath: "subscriptionName",
  mapper: {
    required: true,
    serializedName: "subscriptionName",
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
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
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const topicName: msRest.OperationURLParameter = {
  parameterPath: "topicName",
  mapper: {
    required: true,
    serializedName: "topicName",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
