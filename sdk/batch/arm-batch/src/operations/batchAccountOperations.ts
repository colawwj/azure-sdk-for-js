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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/batchAccountOperationsMappers";
import * as Parameters from "../models/parameters";
import { BatchManagementClientContext } from "../batchManagementClientContext";

/** Class representing a BatchAccountOperations. */
export class BatchAccountOperations {
  private readonly client: BatchManagementClientContext;

  /**
   * Create a BatchAccountOperations.
   * @param {BatchManagementClientContext} client Reference to the service client.
   */
  constructor(client: BatchManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a new Batch account with the specified parameters. Existing accounts cannot be updated
   * with this API and should instead be updated with the Update Batch Account API.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName A name for the Batch account which must be unique within the region. Batch
   * account names must be between 3 and 24 characters in length and must use only numbers and
   * lowercase letters. This name is used as part of the DNS name that is used to access the Batch
   * service in the region in which the account is created. For example:
   * http://accountname.region.batch.azure.com/.
   * @param parameters Additional parameters for account creation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BatchAccountCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.BatchAccountCreateResponse> {
    return this.beginCreate(resourceGroupName,accountName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.BatchAccountCreateResponse>;
  }

  /**
   * Updates the properties of an existing Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param parameters Additional parameters for account update.
   * @param [options] The optional parameters
   * @returns Promise<Models.BatchAccountUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.BatchAccountUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param parameters Additional parameters for account update.
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param parameters Additional parameters for account update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
  update(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BatchAccount>, callback?: msRest.ServiceCallback<Models.BatchAccount>): Promise<Models.BatchAccountUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.BatchAccountUpdateResponse>;
  }

  /**
   * Deletes the specified Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param [options] The optional parameters
   * @returns Promise<Models.BatchAccountDeleteResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.BatchAccountDeleteResponse> {
    return this.beginDeleteMethod(resourceGroupName,accountName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.BatchAccountDeleteResponse>;
  }

  /**
   * Gets information about the specified Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param [options] The optional parameters
   * @returns Promise<Models.BatchAccountGetResponse>
   */
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.BatchAccountGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BatchAccount>, callback?: msRest.ServiceCallback<Models.BatchAccount>): Promise<Models.BatchAccountGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BatchAccountGetResponse>;
  }

  /**
   * Gets information about the Batch accounts associated with the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.BatchAccountListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.BatchAccountListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BatchAccountListResult>, callback?: msRest.ServiceCallback<Models.BatchAccountListResult>): Promise<Models.BatchAccountListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BatchAccountListResponse>;
  }

  /**
   * Gets information about the Batch accounts associated with the specified resource group.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param [options] The optional parameters
   * @returns Promise<Models.BatchAccountListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.BatchAccountListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BatchAccountListResult>, callback?: msRest.ServiceCallback<Models.BatchAccountListResult>): Promise<Models.BatchAccountListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.BatchAccountListByResourceGroupResponse>;
  }

  /**
   * Synchronizes access keys for the auto-storage account configured for the specified Batch
   * account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param callback The callback
   */
  synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The optional parameters
   * @param callback The callback
   */
  synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      synchronizeAutoStorageKeysOperationSpec,
      callback);
  }

  /**
   * Regenerates the specified account key for the Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param keyName The type of account key to regenerate. Possible values include: 'Primary',
   * 'Secondary'
   * @param [options] The optional parameters
   * @returns Promise<Models.BatchAccountRegenerateKeyResponse>
   */
  regenerateKey(resourceGroupName: string, accountName: string, keyName: Models.AccountKeyType, options?: msRest.RequestOptionsBase): Promise<Models.BatchAccountRegenerateKeyResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param keyName The type of account key to regenerate. Possible values include: 'Primary',
   * 'Secondary'
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, accountName: string, keyName: Models.AccountKeyType, callback: msRest.ServiceCallback<Models.BatchAccountKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param keyName The type of account key to regenerate. Possible values include: 'Primary',
   * 'Secondary'
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, accountName: string, keyName: Models.AccountKeyType, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccountKeys>): void;
  regenerateKey(resourceGroupName: string, accountName: string, keyName: Models.AccountKeyType, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BatchAccountKeys>, callback?: msRest.ServiceCallback<Models.BatchAccountKeys>): Promise<Models.BatchAccountRegenerateKeyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        keyName,
        options
      },
      regenerateKeyOperationSpec,
      callback) as Promise<Models.BatchAccountRegenerateKeyResponse>;
  }

  /**
   * This operation applies only to Batch accounts created with a poolAllocationMode of
   * 'BatchService'. If the Batch account was created with a poolAllocationMode of
   * 'UserSubscription', clients cannot use access to keys to authenticate, and must use Azure Active
   * Directory instead. In this case, getting the keys will fail.
   * @summary Gets the account keys for the specified Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param [options] The optional parameters
   * @returns Promise<Models.BatchAccountGetKeysResponse>
   */
  getKeys(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.BatchAccountGetKeysResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param callback The callback
   */
  getKeys(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.BatchAccountKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The optional parameters
   * @param callback The callback
   */
  getKeys(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccountKeys>): void;
  getKeys(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BatchAccountKeys>, callback?: msRest.ServiceCallback<Models.BatchAccountKeys>): Promise<Models.BatchAccountGetKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      getKeysOperationSpec,
      callback) as Promise<Models.BatchAccountGetKeysResponse>;
  }

  /**
   * Creates a new Batch account with the specified parameters. Existing accounts cannot be updated
   * with this API and should instead be updated with the Update Batch Account API.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName A name for the Batch account which must be unique within the region. Batch
   * account names must be between 3 and 24 characters in length and must use only numbers and
   * lowercase letters. This name is used as part of the DNS name that is used to access the Batch
   * service in the region in which the account is created. For example:
   * http://accountname.region.batch.azure.com/.
   * @param parameters Additional parameters for account creation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes the specified Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets information about the Batch accounts associated with the subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BatchAccountListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BatchAccountListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BatchAccountListResult>, callback?: msRest.ServiceCallback<Models.BatchAccountListResult>): Promise<Models.BatchAccountListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.BatchAccountListNextResponse>;
  }

  /**
   * Gets information about the Batch accounts associated with the specified resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BatchAccountListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BatchAccountListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BatchAccountListResult>, callback?: msRest.ServiceCallback<Models.BatchAccountListResult>): Promise<Models.BatchAccountListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.BatchAccountListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.BatchAccountUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Batch/batchAccounts",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccountListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccountListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const synchronizeAutoStorageKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/syncAutoStorageKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const regenerateKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/regenerateKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      keyName: "keyName"
    },
    mapper: {
      ...Mappers.BatchAccountRegenerateKeyParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccountKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/listKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccountKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.BatchAccountCreateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccount,
      headersMapper: Mappers.BatchAccountCreateHeaders
    },
    202: {
      headersMapper: Mappers.BatchAccountCreateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.BatchAccountDeleteHeaders
    },
    202: {
      headersMapper: Mappers.BatchAccountDeleteHeaders
    },
    204: {
      headersMapper: Mappers.BatchAccountDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccountListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccountListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
