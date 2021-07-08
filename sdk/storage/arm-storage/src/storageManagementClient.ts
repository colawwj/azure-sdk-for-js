/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { StorageManagementClientContext } from "./storageManagementClientContext";


class StorageManagementClient extends StorageManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  skus: operations.Skus;
  storageAccounts: operations.StorageAccounts;
  deletedAccounts: operations.DeletedAccounts;
  usages: operations.Usages;
  managementPolicies: operations.ManagementPolicies;
  blobInventoryPolicies: operations.BlobInventoryPolicies;
  privateEndpointConnections: operations.PrivateEndpointConnections;
  privateLinkResources: operations.PrivateLinkResources;
  objectReplicationPolicies: operations.ObjectReplicationPoliciesOperations;
  encryptionScopes: operations.EncryptionScopes;
  blobServices: operations.BlobServices;
  blobContainers: operations.BlobContainers;
  fileServices: operations.FileServices;
  fileShares: operations.FileShares;
  queueServices: operations.QueueServices;
  queue: operations.Queue;
  tableServices: operations.TableServices;
  table: operations.TableOperations;

  /**
   * Initializes a new instance of the StorageManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.StorageManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.skus = new operations.Skus(this);
    this.storageAccounts = new operations.StorageAccounts(this);
    this.deletedAccounts = new operations.DeletedAccounts(this);
    this.usages = new operations.Usages(this);
    this.managementPolicies = new operations.ManagementPolicies(this);
    this.blobInventoryPolicies = new operations.BlobInventoryPolicies(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(this);
    this.privateLinkResources = new operations.PrivateLinkResources(this);
    this.objectReplicationPolicies = new operations.ObjectReplicationPoliciesOperations(this);
    this.encryptionScopes = new operations.EncryptionScopes(this);
    this.blobServices = new operations.BlobServices(this);
    this.blobContainers = new operations.BlobContainers(this);
    this.fileServices = new operations.FileServices(this);
    this.fileShares = new operations.FileShares(this);
    this.queueServices = new operations.QueueServices(this);
    this.queue = new operations.Queue(this);
    this.tableServices = new operations.TableServices(this);
    this.table = new operations.TableOperations(this);
  }
}

// Operation Specifications

export {
  StorageManagementClient,
  StorageManagementClientContext,
  Models as StorageManagementModels,
  Mappers as StorageManagementMappers
};
export * from "./operations";
