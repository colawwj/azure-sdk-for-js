// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";
import { env, Recorder } from "@azure/test-utils-recorder";

import { KeyVaultAccessControlClient, KeyVaultRoleDefinition } from "../../src";
import { authenticate } from "../utils/authentication";

describe("KeyVaultAccessControlClient", () => {
  let client: KeyVaultAccessControlClient;
  let recorder: Recorder;
  let generateFakeUUID: () => string;
  const globalScope = "/";

  beforeEach(async function() {
    const authentication = await authenticate(this);
    client = authentication.accessControlClient;
    recorder = authentication.recorder;
    generateFakeUUID = authentication.generateFakeUUID;
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("listRoleDefinitions", async function() {
    const expectedType = "Microsoft.Authorization/roleDefinitions";
    let receivedRoles: string[] = [];

    for await (const roleDefinition of client.listRoleDefinitions(globalScope)) {
      // Each role definition will have the shape of:
      //
      //   {
      //     id: 'Microsoft.KeyVault/providers/Microsoft.Authorization/roleDefinitions/<ID>',
      //     name: '<ID>',
      //     type: '<role-type>',
      //     roleName: '<role-name>',
      //     // ...
      //   }
      //
      assert.equal(roleDefinition.type, expectedType);
      receivedRoles.push(roleDefinition.roleName!);
    }

    // Roles might change
    assert.ok(receivedRoles.length);
  });

  it("listRoleAssignments", async function() {
    const expectedType = "Microsoft.Authorization/roleAssignments";
    let receivedRoles: string[] = [];

    for await (const roleAssignment of client.listRoleAssignments(globalScope)) {
      // Each role assignment will have the shape of:
      //
      //   {
      //     id: '/providers/Microsoft.Authorization/roleAssignments/<ID>',
      //     name: '<ID>',
      //     type: '<role-type>',
      //     // ...
      //   }
      //
      assert.equal(roleAssignment.roleAssignmentType, expectedType);
      receivedRoles.push(roleAssignment.name);
    }

    // Roles might change
    assert.ok(receivedRoles.length);
  });

  it("createRoleAssignment, getRoleAssignment and deleteRoleAssignment", async function() {
    const assignmentName = generateFakeUUID();
    const roleName = "Managed HSM Crypto User";

    let roleDefinition: KeyVaultRoleDefinition | undefined;

    // Find the right role definition to use
    for await (const definition of client.listRoleDefinitions(globalScope)) {
      if (definition.roleName === roleName) {
        roleDefinition = definition;
      }
    }

    if (!roleDefinition) {
      assert.fail(`Unable to find role definition with name ${roleName}`);
    }

    let assignment = await client.createRoleAssignment(
      globalScope,
      assignmentName,
      roleDefinition.id,
      env.CLIENT_OBJECT_ID
    );
    assert.equal(assignment.name, assignmentName);
    assert.equal(assignment.properties?.roleDefinitionId, roleDefinition.id);
    assert.equal(assignment.properties?.principalId, env.CLIENT_OBJECT_ID);

    assignment = await client.getRoleAssignment(globalScope, assignmentName);
    assert.equal(assignment.name, assignmentName);
    assert.equal(assignment.properties?.roleDefinitionId, roleDefinition.id);
    assert.equal(assignment.properties?.principalId, env.CLIENT_OBJECT_ID);

    assignment = await client.deleteRoleAssignment(globalScope, assignmentName);
    assert.equal(assignment.name, assignmentName);
    assert.equal(assignment.properties?.roleDefinitionId, roleDefinition.id);
    assert.equal(assignment.properties?.principalId, env.CLIENT_OBJECT_ID);

    let error: Error;
    try {
      await client.getRoleAssignment(globalScope, generateFakeUUID());
    } catch (e) {
      error = e;
    }
    assert.ok(error!.message.match(/Requested role assignment not found/));
  });
});
