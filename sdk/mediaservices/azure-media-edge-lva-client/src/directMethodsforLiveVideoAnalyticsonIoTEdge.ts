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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { DirectMethodsforLiveVideoAnalyticsonIoTEdgeContext } from "./directMethodsforLiveVideoAnalyticsonIoTEdgeContext";


class DirectMethodsforLiveVideoAnalyticsonIoTEdge extends DirectMethodsforLiveVideoAnalyticsonIoTEdgeContext {
  /**
   * Initializes a new instance of the DirectMethodsforLiveVideoAnalyticsonIoTEdge class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.DirectMethodsforLiveVideoAnalyticsonIoTEdgeOptions) {
    super(credentials, options);
  }

  /**
   * Retrieves a list of graph topologies that have been added to the Live Video Analytics IoT Edge
   * module.
   * @summary Retrieves a list of graph topologies.
   * @param [options] The optional parameters
   * @returns Promise<Models.GraphTopologyListResponse>
   */
  graphTopologyList(options?: msRest.RequestOptionsBase): Promise<Models.GraphTopologyListResponse>;
  /**
   * @param callback The callback
   */
  graphTopologyList(callback: msRest.ServiceCallback<Models.MediaGraphTopologyCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  graphTopologyList(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MediaGraphTopologyCollection>): void;
  graphTopologyList(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MediaGraphTopologyCollection>, callback?: msRest.ServiceCallback<Models.MediaGraphTopologyCollection>): Promise<Models.GraphTopologyListResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      graphTopologyListOperationSpec,
      callback) as Promise<Models.GraphTopologyListResponse>;
  }

  /**
   * Creates a new topology or updates an existing one, with the given name. A topology is a
   * blueprint defining what nodes are in a graph, and how they are interconnected.
   * @summary Creates or updates a graph topology.
   * @param topology
   * @param [options] The optional parameters
   * @returns Promise<Models.GraphTopologySetResponse>
   */
  graphTopologySet(topology: Models.MediaGraphTopology, options?: msRest.RequestOptionsBase): Promise<Models.GraphTopologySetResponse>;
  /**
   * @param topology
   * @param callback The callback
   */
  graphTopologySet(topology: Models.MediaGraphTopology, callback: msRest.ServiceCallback<Models.MediaGraphTopology>): void;
  /**
   * @param topology
   * @param options The optional parameters
   * @param callback The callback
   */
  graphTopologySet(topology: Models.MediaGraphTopology, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MediaGraphTopology>): void;
  graphTopologySet(topology: Models.MediaGraphTopology, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MediaGraphTopology>, callback?: msRest.ServiceCallback<Models.MediaGraphTopology>): Promise<Models.GraphTopologySetResponse> {
    return this.sendOperationRequest(
      {
        topology,
        options
      },
      graphTopologySetOperationSpec,
      callback) as Promise<Models.GraphTopologySetResponse>;
  }

  /**
   * Retrieves a graph topology by name. If a topology with that name has been previously set, then
   * the call will return the JSON representation of that topology.
   * @summary Gets a graph topology by name.
   * @param name Name of the graph topology to be retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.GraphTopologyGetResponse>
   */
  graphTopologyGet(name: string, options?: msRest.RequestOptionsBase): Promise<Models.GraphTopologyGetResponse>;
  /**
   * @param name Name of the graph topology to be retrieved.
   * @param callback The callback
   */
  graphTopologyGet(name: string, callback: msRest.ServiceCallback<Models.MediaGraphTopology>): void;
  /**
   * @param name Name of the graph topology to be retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  graphTopologyGet(name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MediaGraphTopology>): void;
  graphTopologyGet(name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MediaGraphTopology>, callback?: msRest.ServiceCallback<Models.MediaGraphTopology>): Promise<Models.GraphTopologyGetResponse> {
    return this.sendOperationRequest(
      {
        name,
        options
      },
      graphTopologyGetOperationSpec,
      callback) as Promise<Models.GraphTopologyGetResponse>;
  }

  /**
   * Deletes a graph topology with the given name. This method should be called after all instances
   * of the topology have been stopped and deleted.
   * @summary Deletes a graph topology.
   * @param name Name of the graph topology to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  graphTopologyDelete(name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param name Name of the graph topology to be deleted.
   * @param callback The callback
   */
  graphTopologyDelete(name: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param name Name of the graph topology to be deleted.
   * @param options The optional parameters
   * @param callback The callback
   */
  graphTopologyDelete(name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  graphTopologyDelete(name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        name,
        options
      },
      graphTopologyDeleteOperationSpec,
      callback);
  }

  /**
   * Retrieves a list of graph instances, if any, that have been created in the Live Video Analytics
   * IoT Edge module.
   * @summary Retrieves a list of graph instances.
   * @param [options] The optional parameters
   * @returns Promise<Models.GraphInstanceListResponse>
   */
  graphInstanceList(options?: msRest.RequestOptionsBase): Promise<Models.GraphInstanceListResponse>;
  /**
   * @param callback The callback
   */
  graphInstanceList(callback: msRest.ServiceCallback<Models.MediaGraphInstanceCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  graphInstanceList(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MediaGraphInstanceCollection>): void;
  graphInstanceList(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MediaGraphInstanceCollection>, callback?: msRest.ServiceCallback<Models.MediaGraphInstanceCollection>): Promise<Models.GraphInstanceListResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      graphInstanceListOperationSpec,
      callback) as Promise<Models.GraphInstanceListResponse>;
  }

  /**
   * Creates or updates a graph instance.
   * @summary Creates or updates a graph instance.
   * @param instance
   * @param [options] The optional parameters
   * @returns Promise<Models.GraphInstanceSetResponse>
   */
  graphInstanceSet(instance: Models.MediaGraphInstance, options?: msRest.RequestOptionsBase): Promise<Models.GraphInstanceSetResponse>;
  /**
   * @param instance
   * @param callback The callback
   */
  graphInstanceSet(instance: Models.MediaGraphInstance, callback: msRest.ServiceCallback<Models.MediaGraphInstance>): void;
  /**
   * @param instance
   * @param options The optional parameters
   * @param callback The callback
   */
  graphInstanceSet(instance: Models.MediaGraphInstance, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MediaGraphInstance>): void;
  graphInstanceSet(instance: Models.MediaGraphInstance, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MediaGraphInstance>, callback?: msRest.ServiceCallback<Models.MediaGraphInstance>): Promise<Models.GraphInstanceSetResponse> {
    return this.sendOperationRequest(
      {
        instance,
        options
      },
      graphInstanceSetOperationSpec,
      callback) as Promise<Models.GraphInstanceSetResponse>;
  }

  /**
   * Retrieves a  graph instance by name. If a graph instance with that name has been previously
   * created, then the direct method call will return the JSON representation of that instance.
   * @summary Gets a graph instance by name.
   * @param name Name of the graph instance to be retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.GraphInstanceGetResponse>
   */
  graphInstanceGet(name: string, options?: msRest.RequestOptionsBase): Promise<Models.GraphInstanceGetResponse>;
  /**
   * @param name Name of the graph instance to be retrieved.
   * @param callback The callback
   */
  graphInstanceGet(name: string, callback: msRest.ServiceCallback<Models.MediaGraphInstance>): void;
  /**
   * @param name Name of the graph instance to be retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  graphInstanceGet(name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MediaGraphInstance>): void;
  graphInstanceGet(name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MediaGraphInstance>, callback?: msRest.ServiceCallback<Models.MediaGraphInstance>): Promise<Models.GraphInstanceGetResponse> {
    return this.sendOperationRequest(
      {
        name,
        options
      },
      graphInstanceGetOperationSpec,
      callback) as Promise<Models.GraphInstanceGetResponse>;
  }

  /**
   * Deletes a graph instance.
   * @summary Deletes a graph instance.
   * @param name Name of the graph instance to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  graphInstanceDelete(name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param name Name of the graph instance to be deleted.
   * @param callback The callback
   */
  graphInstanceDelete(name: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param name Name of the graph instance to be deleted.
   * @param options The optional parameters
   * @param callback The callback
   */
  graphInstanceDelete(name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  graphInstanceDelete(name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        name,
        options
      },
      graphInstanceDeleteOperationSpec,
      callback);
  }

  /**
   * Activates a graph instance with the name provided, if it exists.
   * @summary Activate a given graph instance.
   * @param name Name of the graph instance to be activated.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  graphInstanceActivate(name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param name Name of the graph instance to be activated.
   * @param callback The callback
   */
  graphInstanceActivate(name: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param name Name of the graph instance to be activated.
   * @param options The optional parameters
   * @param callback The callback
   */
  graphInstanceActivate(name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  graphInstanceActivate(name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        name,
        options
      },
      graphInstanceActivateOperationSpec,
      callback);
  }

  /**
   * Deactivates a graph instance with the name provided, if it is active.
   * @summary Deactivate a graph instance.
   * @param name Name of the graph instance to be deactivated.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  graphInstanceDeactivate(name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param name Name of the graph instance to be deactivated.
   * @param callback The callback
   */
  graphInstanceDeactivate(name: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param name Name of the graph instance to be deactivated.
   * @param options The optional parameters
   * @param callback The callback
   */
  graphInstanceDeactivate(name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  graphInstanceDeactivate(name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        name,
        options
      },
      graphInstanceDeactivateOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const graphTopologyListOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/GraphTopology",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MediaGraphTopologyCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const graphTopologySetOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "api/GraphTopology",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "topology",
    mapper: {
      ...Mappers.MediaGraphTopology,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MediaGraphTopology
    },
    201: {
      bodyMapper: Mappers.MediaGraphTopology
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const graphTopologyGetOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/GraphTopology/{name}",
  urlParameters: [
    Parameters.name
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MediaGraphTopology
    },
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const graphTopologyDeleteOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "api/GraphTopology/{name}",
  urlParameters: [
    Parameters.name
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const graphInstanceListOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/GraphInstance",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MediaGraphInstanceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const graphInstanceSetOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "api/GraphInstance",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "instance",
    mapper: {
      ...Mappers.MediaGraphInstance,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MediaGraphInstance
    },
    201: {
      bodyMapper: Mappers.MediaGraphInstance
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const graphInstanceGetOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/GraphInstance/{name}",
  urlParameters: [
    Parameters.name
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MediaGraphInstance
    },
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const graphInstanceDeleteOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "api/GraphInstance/{name}",
  urlParameters: [
    Parameters.name
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const graphInstanceActivateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/GraphInstance/{name}/activate",
  urlParameters: [
    Parameters.name
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const graphInstanceDeactivateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/GraphInstance/{name}/deactivate",
  urlParameters: [
    Parameters.name
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

export {
  DirectMethodsforLiveVideoAnalyticsonIoTEdge,
  DirectMethodsforLiveVideoAnalyticsonIoTEdgeContext,
  Models as DirectMethodsforLiveVideoAnalyticsonIoTEdgeModels,
  Mappers as DirectMethodsforLiveVideoAnalyticsonIoTEdgeMappers
};
