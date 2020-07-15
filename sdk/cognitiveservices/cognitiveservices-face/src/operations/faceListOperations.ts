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
import * as Models from "../models";
import * as Mappers from "../models/faceListOperationsMappers";
import * as Parameters from "../models/parameters";
import { FaceClientContext } from "../faceClientContext";

/** Class representing a FaceListOperations. */
export class FaceListOperations {
  private readonly client: FaceClientContext;

  /**
   * Create a FaceListOperations.
   * @param {FaceClientContext} client Reference to the service client.
   */
  constructor(client: FaceClientContext) {
    this.client = client;
  }

  /**
   * Create an empty face list with user-specified faceListId, name, an optional userData and
   * recognitionModel. Up to 64 face lists are allowed in one subscription.
   * <br /> Face list is a list of faces, up to 1,000 faces, and used by [Face - Find
   * Similar](https://docs.microsoft.com/rest/api/cognitiveservices/face/face/findsimilar).
   * <br /> After creation, user should use [FaceList - Add
   * Face](https://docs.microsoft.com/rest/api/cognitiveservices/face/facelist/addfacefromurl) to
   * import the faces. No image will be stored. Only the extracted face features are stored on server
   * until [FaceList -
   * Delete](https://docs.microsoft.com/rest/api/cognitiveservices/face/facelist/delete) is called.
   * <br /> Find Similar is used for scenario like finding celebrity-like faces, similar face
   * filtering, or as a light way face identification. But if the actual use is to identify person,
   * please use [PersonGroup](https://docs.microsoft.com/rest/api/cognitiveservices/face/persongroup)
   * /
   * [LargePersonGroup](https://docs.microsoft.com/rest/api/cognitiveservices/face/largepersongroup)
   * and [Face - Identify](https://docs.microsoft.com/rest/api/cognitiveservices/face/face/identify).
   * <br /> Please consider
   * [LargeFaceList](https://docs.microsoft.com/rest/api/cognitiveservices/face/largefacelist) when
   * the face number is large. It can support up to 1,000,000 faces.
   * <br />'recognitionModel' should be specified to associate with this face list. The default value
   * for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly
   * specify the model you need in this parameter. New faces that are added to an existing face list
   * will use the recognition model that's already associated with the collection. Existing face
   * features in a face list can't be updated to features extracted by another version of recognition
   * model.
   * * 'recognition_01': The default recognition model for [FaceList-
   * Create](https://docs.microsoft.com/rest/api/cognitiveservices/face/facelist/create). All those
   * face lists created before 2019 March are bonded with this recognition model.
   * * 'recognition_02': Recognition model released in 2019 March.
   * * 'recognition_03': Recognition model released in 2020 May. 'recognition_03' is recommended
   * since its overall accuracy is improved compared with 'recognition_01' and 'recognition_02'.
   * @param faceListId Id referencing a particular face list.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  create(faceListId: string, options?: Models.FaceListCreateOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param callback The callback
   */
  create(faceListId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(faceListId: string, options: Models.FaceListCreateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  create(faceListId: string, options?: Models.FaceListCreateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        options
      },
      createOperationSpec,
      callback);
  }

  /**
   * Retrieve a face list’s faceListId, name, userData, recognitionModel and faces in the face list.
   * @param faceListId Id referencing a particular face list.
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceListGetResponse>
   */
  get(faceListId: string, options?: Models.FaceListGetOptionalParams): Promise<Models.FaceListGetResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param callback The callback
   */
  get(faceListId: string, callback: msRest.ServiceCallback<Models.FaceList>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(faceListId: string, options: Models.FaceListGetOptionalParams, callback: msRest.ServiceCallback<Models.FaceList>): void;
  get(faceListId: string, options?: Models.FaceListGetOptionalParams | msRest.ServiceCallback<Models.FaceList>, callback?: msRest.ServiceCallback<Models.FaceList>): Promise<Models.FaceListGetResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FaceListGetResponse>;
  }

  /**
   * Update information of a face list.
   * @param faceListId Id referencing a particular face list.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(faceListId: string, options?: Models.FaceListUpdateOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param callback The callback
   */
  update(faceListId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(faceListId: string, options: Models.FaceListUpdateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  update(faceListId: string, options?: Models.FaceListUpdateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Delete a specified face list.
   * @param faceListId Id referencing a particular face list.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(faceListId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param callback The callback
   */
  deleteMethod(faceListId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(faceListId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(faceListId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * List face lists’ faceListId, name, userData and recognitionModel. <br />
   * To get face information inside faceList use [FaceList -
   * Get](https://docs.microsoft.com/rest/api/cognitiveservices/face/facelist/get)
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceListListResponse>
   */
  list(options?: Models.FaceListListOptionalParams): Promise<Models.FaceListListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.FaceList[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.FaceListListOptionalParams, callback: msRest.ServiceCallback<Models.FaceList[]>): void;
  list(options?: Models.FaceListListOptionalParams | msRest.ServiceCallback<Models.FaceList[]>, callback?: msRest.ServiceCallback<Models.FaceList[]>): Promise<Models.FaceListListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.FaceListListResponse>;
  }

  /**
   * Delete a face from a face list by specified faceListId and persistedFaceId.
   * <br /> Adding/deleting faces to/from a same face list are processed sequentially and to/from
   * different face lists are in parallel.
   * @param faceListId Id referencing a particular face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteFace(faceListId: string, persistedFaceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param callback The callback
   */
  deleteFace(faceListId: string, persistedFaceId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteFace(faceListId: string, persistedFaceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteFace(faceListId: string, persistedFaceId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        persistedFaceId,
        options
      },
      deleteFaceOperationSpec,
      callback);
  }

  /**
   * Add a face to a specified face list, up to 1,000 faces.
   * <br /> To deal with an image contains multiple faces, input face can be specified as an image
   * with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image
   * will be stored. Only the extracted face feature will be stored on server until [FaceList -
   * Delete Face](https://docs.microsoft.com/rest/api/cognitiveservices/face/facelist/deleteface) or
   * [FaceList - Delete](https://docs.microsoft.com/rest/api/cognitiveservices/face/facelist/delete)
   * is called.
   * <br /> Note persistedFaceId is different from faceId generated by [Face -
   * Detect](https://docs.microsoft.com/rest/api/cognitiveservices/face/face/detectwithurl).
   * * Higher face image quality means better detection and recognition precision. Please consider
   * high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or
   * bigger.
   * * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is
   * from 1KB to 6MB.
   * * "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an
   * error. If the provided "targetFace" rectangle is not returned from [Face -
   * Detect](https://docs.microsoft.com/rest/api/cognitiveservices/face/face/detectwithurl), there’s
   * no guarantee to detect and add the face successfully.
   * * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions
   * will cause failures.
   * * Adding/deleting faces to/from a same face list are processed sequentially and to/from
   * different face lists are in parallel.
   * * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels.
   * Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum
   * face size.
   * * Different 'detectionModel' values can be provided. To use and compare different detection
   * models, please refer to [How to specify a detection
   * model](https://docs.microsoft.com/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
   * | Model | Recommended use-case(s) |
   * | ---------- | -------- |
   * | 'detection_01': | The default detection model for [FaceList - Add
   * Face](https://docs.microsoft.com/rest/api/cognitiveservices/face/facelist/addfacefromurl).
   * Recommend for near frontal face detection. For scenarios with exceptionally large angle
   * (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be
   * detected. |
   * | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on
   * small, side and blurry faces. |
   * @param faceListId Id referencing a particular face list.
   * @param url Publicly reachable URL of an image
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceListAddFaceFromUrlResponse>
   */
  addFaceFromUrl(faceListId: string, url: string, options?: Models.FaceListAddFaceFromUrlOptionalParams): Promise<Models.FaceListAddFaceFromUrlResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param url Publicly reachable URL of an image
   * @param callback The callback
   */
  addFaceFromUrl(faceListId: string, url: string, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param url Publicly reachable URL of an image
   * @param options The optional parameters
   * @param callback The callback
   */
  addFaceFromUrl(faceListId: string, url: string, options: Models.FaceListAddFaceFromUrlOptionalParams, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  addFaceFromUrl(faceListId: string, url: string, options?: Models.FaceListAddFaceFromUrlOptionalParams | msRest.ServiceCallback<Models.PersistedFace>, callback?: msRest.ServiceCallback<Models.PersistedFace>): Promise<Models.FaceListAddFaceFromUrlResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        url,
        options
      },
      addFaceFromUrlOperationSpec,
      callback) as Promise<Models.FaceListAddFaceFromUrlResponse>;
  }

  /**
   * Add a face to a specified face list, up to 1,000 faces.
   * <br /> To deal with an image contains multiple faces, input face can be specified as an image
   * with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image
   * will be stored. Only the extracted face feature will be stored on server until [FaceList -
   * Delete Face](https://docs.microsoft.com/rest/api/cognitiveservices/face/facelist/deleteface) or
   * [FaceList - Delete](https://docs.microsoft.com/rest/api/cognitiveservices/face/facelist/delete)
   * is called.
   * <br /> Note persistedFaceId is different from faceId generated by [Face -
   * Detect](https://docs.microsoft.com/rest/api/cognitiveservices/face/face/detectwithurl).
   * * Higher face image quality means better detection and recognition precision. Please consider
   * high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or
   * bigger.
   * * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is
   * from 1KB to 6MB.
   * * "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an
   * error. If the provided "targetFace" rectangle is not returned from [Face -
   * Detect](https://docs.microsoft.com/rest/api/cognitiveservices/face/face/detectwithurl), there’s
   * no guarantee to detect and add the face successfully.
   * * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions
   * will cause failures.
   * * Adding/deleting faces to/from a same face list are processed sequentially and to/from
   * different face lists are in parallel.
   * * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels.
   * Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum
   * face size.
   * * Different 'detectionModel' values can be provided. To use and compare different detection
   * models, please refer to [How to specify a detection
   * model](https://docs.microsoft.com/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
   * | Model | Recommended use-case(s) |
   * | ---------- | -------- |
   * | 'detection_01': | The default detection model for [FaceList - Add
   * Face](https://docs.microsoft.com/rest/api/cognitiveservices/face/facelist/addfacefromurl).
   * Recommend for near frontal face detection. For scenarios with exceptionally large angle
   * (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be
   * detected. |
   * | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on
   * small, side and blurry faces. |
   * @param faceListId Id referencing a particular face list.
   * @param image An image stream.
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceListAddFaceFromStreamResponse>
   */
  addFaceFromStream(faceListId: string, image: msRest.HttpRequestBody, options?: Models.FaceListAddFaceFromStreamOptionalParams): Promise<Models.FaceListAddFaceFromStreamResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param image An image stream.
   * @param callback The callback
   */
  addFaceFromStream(faceListId: string, image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param image An image stream.
   * @param options The optional parameters
   * @param callback The callback
   */
  addFaceFromStream(faceListId: string, image: msRest.HttpRequestBody, options: Models.FaceListAddFaceFromStreamOptionalParams, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  addFaceFromStream(faceListId: string, image: msRest.HttpRequestBody, options?: Models.FaceListAddFaceFromStreamOptionalParams | msRest.ServiceCallback<Models.PersistedFace>, callback?: msRest.ServiceCallback<Models.PersistedFace>): Promise<Models.FaceListAddFaceFromStreamResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        image,
        options
      },
      addFaceFromStreamOperationSpec,
      callback) as Promise<Models.FaceListAddFaceFromStreamResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "facelists/{faceListId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.faceListId
  ],
  requestBody: {
    parameterPath: {
      name: [
        "options",
        "name"
      ],
      userData: [
        "options",
        "userData"
      ],
      recognitionModel: [
        "options",
        "recognitionModel"
      ]
    },
    mapper: {
      ...Mappers.MetaDataContract,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "facelists/{faceListId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.faceListId
  ],
  queryParameters: [
    Parameters.returnRecognitionModel
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FaceList
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "facelists/{faceListId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.faceListId
  ],
  requestBody: {
    parameterPath: {
      name: [
        "options",
        "name"
      ],
      userData: [
        "options",
        "userData"
      ]
    },
    mapper: {
      ...Mappers.NameAndUserDataContract,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "facelists/{faceListId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.faceListId
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "facelists",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.returnRecognitionModel
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FaceList"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const deleteFaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "facelists/{faceListId}/persistedfaces/{persistedFaceId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.faceListId,
    Parameters.persistedFaceId
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const addFaceFromUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "facelists/{faceListId}/persistedfaces",
  urlParameters: [
    Parameters.endpoint,
    Parameters.faceListId
  ],
  queryParameters: [
    Parameters.userData,
    Parameters.targetFace,
    Parameters.detectionModel1
  ],
  requestBody: {
    parameterPath: {
      url: "url"
    },
    mapper: {
      ...Mappers.ImageUrl,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PersistedFace
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const addFaceFromStreamOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "facelists/{faceListId}/persistedfaces",
  urlParameters: [
    Parameters.endpoint,
    Parameters.faceListId
  ],
  queryParameters: [
    Parameters.userData,
    Parameters.targetFace,
    Parameters.detectionModel1
  ],
  requestBody: {
    parameterPath: "image",
    mapper: {
      required: true,
      serializedName: "Image",
      type: {
        name: "Stream"
      }
    }
  },
  contentType: "application/octet-stream",
  responses: {
    200: {
      bodyMapper: Mappers.PersistedFace
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};
