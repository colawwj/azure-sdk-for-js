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
export const activityName: msRest.OperationURLParameter = {
  parameterPath: "activityName",
  mapper: {
    required: true,
    serializedName: "activityName",
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
    defaultValue: '2015-10-31',
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
    defaultValue: '2017-05-15-preview',
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
    defaultValue: '2018-01-15',
    type: {
      name: "String"
    }
  }
};
export const apiVersion3: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-06-30',
    type: {
      name: "String"
    }
  }
};
export const apiVersion4: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-06-01',
    type: {
      name: "String"
    }
  }
};
export const automationAccountName: msRest.OperationURLParameter = {
  parameterPath: "automationAccountName",
  mapper: {
    required: true,
    serializedName: "automationAccountName",
    type: {
      name: "String"
    }
  }
};
export const certificateName: msRest.OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    required: true,
    serializedName: "certificateName",
    type: {
      name: "String"
    }
  }
};
export const clientRequestId: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "clientRequestId"
  ],
  mapper: {
    serializedName: "clientRequestId",
    type: {
      name: "String"
    }
  }
};
export const compilationJobName: msRest.OperationURLParameter = {
  parameterPath: "compilationJobName",
  mapper: {
    required: true,
    serializedName: "compilationJobName",
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
export const connectionTypeName: msRest.OperationURLParameter = {
  parameterPath: "connectionTypeName",
  mapper: {
    required: true,
    serializedName: "connectionTypeName",
    type: {
      name: "String"
    }
  }
};
export const countType: msRest.OperationURLParameter = {
  parameterPath: "countType",
  mapper: {
    required: true,
    serializedName: "countType",
    type: {
      name: "String"
    }
  }
};
export const credentialName: msRest.OperationURLParameter = {
  parameterPath: "credentialName",
  mapper: {
    required: true,
    serializedName: "credentialName",
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
export const hybridRunbookWorkerGroupName: msRest.OperationURLParameter = {
  parameterPath: "hybridRunbookWorkerGroupName",
  mapper: {
    required: true,
    serializedName: "hybridRunbookWorkerGroupName",
    type: {
      name: "String"
    }
  }
};
export const inlinecount: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "inlinecount"
  ],
  mapper: {
    serializedName: "$inlinecount",
    type: {
      name: "String"
    }
  }
};
export const jobId: msRest.OperationURLParameter = {
  parameterPath: "jobId",
  mapper: {
    required: true,
    serializedName: "jobId",
    type: {
      name: "Uuid"
    }
  }
};
export const jobName: msRest.OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    required: true,
    serializedName: "jobName",
    type: {
      name: "String"
    }
  }
};
export const jobScheduleId: msRest.OperationURLParameter = {
  parameterPath: "jobScheduleId",
  mapper: {
    required: true,
    serializedName: "jobScheduleId",
    type: {
      name: "Uuid"
    }
  }
};
export const jobStreamId: msRest.OperationURLParameter = {
  parameterPath: "jobStreamId",
  mapper: {
    required: true,
    serializedName: "jobStreamId",
    type: {
      name: "String"
    }
  }
};
export const moduleName: msRest.OperationURLParameter = {
  parameterPath: "moduleName",
  mapper: {
    required: true,
    serializedName: "moduleName",
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
export const nodeConfigurationName: msRest.OperationURLParameter = {
  parameterPath: "nodeConfigurationName",
  mapper: {
    required: true,
    serializedName: "nodeConfigurationName",
    type: {
      name: "String"
    }
  }
};
export const nodeId: msRest.OperationURLParameter = {
  parameterPath: "nodeId",
  mapper: {
    required: true,
    serializedName: "nodeId",
    type: {
      name: "String"
    }
  }
};
export const packageName: msRest.OperationURLParameter = {
  parameterPath: "packageName",
  mapper: {
    required: true,
    serializedName: "packageName",
    type: {
      name: "String"
    }
  }
};
export const reportId: msRest.OperationURLParameter = {
  parameterPath: "reportId",
  mapper: {
    required: true,
    serializedName: "reportId",
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
      MinLength: 1,
      Pattern: /^[-\w\._]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const runbookName: msRest.OperationURLParameter = {
  parameterPath: "runbookName",
  mapper: {
    required: true,
    serializedName: "runbookName",
    type: {
      name: "String"
    }
  }
};
export const scheduleName: msRest.OperationURLParameter = {
  parameterPath: "scheduleName",
  mapper: {
    required: true,
    serializedName: "scheduleName",
    type: {
      name: "String"
    }
  }
};
export const skip0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skip"
  ],
  mapper: {
    serializedName: "$skip",
    type: {
      name: "Number"
    }
  }
};
export const skip1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skip"
  ],
  mapper: {
    serializedName: "$skip",
    type: {
      name: "String"
    }
  }
};
export const softwareUpdateConfigurationMachineRunId: msRest.OperationURLParameter = {
  parameterPath: "softwareUpdateConfigurationMachineRunId",
  mapper: {
    required: true,
    serializedName: "softwareUpdateConfigurationMachineRunId",
    type: {
      name: "Uuid"
    }
  }
};
export const softwareUpdateConfigurationName: msRest.OperationURLParameter = {
  parameterPath: "softwareUpdateConfigurationName",
  mapper: {
    required: true,
    serializedName: "softwareUpdateConfigurationName",
    type: {
      name: "String"
    }
  }
};
export const softwareUpdateConfigurationRunId: msRest.OperationURLParameter = {
  parameterPath: "softwareUpdateConfigurationRunId",
  mapper: {
    required: true,
    serializedName: "softwareUpdateConfigurationRunId",
    type: {
      name: "Uuid"
    }
  }
};
export const sourceControlName: msRest.OperationURLParameter = {
  parameterPath: "sourceControlName",
  mapper: {
    required: true,
    serializedName: "sourceControlName",
    type: {
      name: "String"
    }
  }
};
export const sourceControlSyncJobId: msRest.OperationURLParameter = {
  parameterPath: "sourceControlSyncJobId",
  mapper: {
    required: true,
    serializedName: "sourceControlSyncJobId",
    type: {
      name: "Uuid"
    }
  }
};
export const streamId: msRest.OperationURLParameter = {
  parameterPath: "streamId",
  mapper: {
    required: true,
    serializedName: "streamId",
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
export const top0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};
export const top1: msRest.OperationQueryParameter = {
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
export const typeName: msRest.OperationURLParameter = {
  parameterPath: "typeName",
  mapper: {
    required: true,
    serializedName: "typeName",
    type: {
      name: "String"
    }
  }
};
export const variableName: msRest.OperationURLParameter = {
  parameterPath: "variableName",
  mapper: {
    required: true,
    serializedName: "variableName",
    type: {
      name: "String"
    }
  }
};
export const watcherName: msRest.OperationURLParameter = {
  parameterPath: "watcherName",
  mapper: {
    required: true,
    serializedName: "watcherName",
    type: {
      name: "String"
    }
  }
};
export const webhookName: msRest.OperationURLParameter = {
  parameterPath: "webhookName",
  mapper: {
    required: true,
    serializedName: "webhookName",
    type: {
      name: "String"
    }
  }
};
