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
import * as Mappers from "../models/videosOperationsMappers";
import * as Parameters from "../models/parameters";
import { VideoSearchClientContext } from "../videoSearchClientContext";

/** Class representing a VideosOperations. */
export class VideosOperations {
  private readonly client: VideoSearchClientContext;

  /**
   * Create a VideosOperations.
   * @param {VideoSearchClientContext} client Reference to the service client.
   */
  constructor(client: VideoSearchClientContext) {
    this.client = client;
  }

  /**
   * @summary The Video Search API lets you send a search query to Bing and get back a list of videos
   * that are relevant to the search query. This section provides technical details about the query
   * parameters and headers that you use to request videos and the JSON response objects that contain
   * them. For examples that show how to make requests, see [Searching the Web for
   * Videos](https://docs.microsoft.com/en-us/bing/bing-video-search/overview).
   * @param query The user's search query string. The query string cannot be empty. The query string
   * may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For
   * example, to limit videos to a specific domain, use the
   * [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. Use this parameter only with
   * the Video Search API. Do not specify this parameter when calling the Trending Videos API.
   * @param [options] The optional parameters
   * @returns Promise<Models.VideosSearchResponse>
   */
  search(query: string, options?: Models.VideosSearchOptionalParams): Promise<Models.VideosSearchResponse>;
  /**
   * @param query The user's search query string. The query string cannot be empty. The query string
   * may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For
   * example, to limit videos to a specific domain, use the
   * [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. Use this parameter only with
   * the Video Search API. Do not specify this parameter when calling the Trending Videos API.
   * @param callback The callback
   */
  search(query: string, callback: msRest.ServiceCallback<Models.Videos>): void;
  /**
   * @param query The user's search query string. The query string cannot be empty. The query string
   * may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For
   * example, to limit videos to a specific domain, use the
   * [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. Use this parameter only with
   * the Video Search API. Do not specify this parameter when calling the Trending Videos API.
   * @param options The optional parameters
   * @param callback The callback
   */
  search(query: string, options: Models.VideosSearchOptionalParams, callback: msRest.ServiceCallback<Models.Videos>): void;
  search(query: string, options?: Models.VideosSearchOptionalParams | msRest.ServiceCallback<Models.Videos>, callback?: msRest.ServiceCallback<Models.Videos>): Promise<Models.VideosSearchResponse> {
    return this.client.sendOperationRequest(
      {
        query,
        options
      },
      searchOperationSpec,
      callback) as Promise<Models.VideosSearchResponse>;
  }

  /**
   * @summary The Video Detail Search API lets you search on Bing and get back insights about a
   * video, such as related videos. This section provides technical details about the query
   * parameters and headers that you use to request insights of videos and the JSON response objects
   * that contain them. For examples that show how to make requests, see [Searching the Web for
   * Videos](https://docs.microsoft.com/en-us/bing/bing-video-search/overview).
   * @param query The user's search query string. The query string cannot be empty. The query string
   * may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For
   * example, to limit videos to a specific domain, use the
   * [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. Use this parameter only with
   * the Video Search API. Do not specify this parameter when calling the Trending Videos API.
   * @param [options] The optional parameters
   * @returns Promise<Models.VideosDetailsResponse>
   */
  details(query: string, options?: Models.VideosDetailsOptionalParams): Promise<Models.VideosDetailsResponse>;
  /**
   * @param query The user's search query string. The query string cannot be empty. The query string
   * may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For
   * example, to limit videos to a specific domain, use the
   * [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. Use this parameter only with
   * the Video Search API. Do not specify this parameter when calling the Trending Videos API.
   * @param callback The callback
   */
  details(query: string, callback: msRest.ServiceCallback<Models.VideoDetails>): void;
  /**
   * @param query The user's search query string. The query string cannot be empty. The query string
   * may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For
   * example, to limit videos to a specific domain, use the
   * [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. Use this parameter only with
   * the Video Search API. Do not specify this parameter when calling the Trending Videos API.
   * @param options The optional parameters
   * @param callback The callback
   */
  details(query: string, options: Models.VideosDetailsOptionalParams, callback: msRest.ServiceCallback<Models.VideoDetails>): void;
  details(query: string, options?: Models.VideosDetailsOptionalParams | msRest.ServiceCallback<Models.VideoDetails>, callback?: msRest.ServiceCallback<Models.VideoDetails>): Promise<Models.VideosDetailsResponse> {
    return this.client.sendOperationRequest(
      {
        query,
        options
      },
      detailsOperationSpec,
      callback) as Promise<Models.VideosDetailsResponse>;
  }

  /**
   * @summary The Video Trending Search API lets you search on Bing and get back a list of videos
   * that are trending based on search requests made by others. The videos are broken out into
   * different categories. For example, Top Music Videos. For a list of markets that support trending
   * videos, see [Trending Videos](https://docs.microsoft.com/en-us/bing/bing-video-search/overview).
   * @param [options] The optional parameters
   * @returns Promise<Models.VideosTrendingResponse>
   */
  trending(options?: Models.VideosTrendingOptionalParams): Promise<Models.VideosTrendingResponse>;
  /**
   * @param callback The callback
   */
  trending(callback: msRest.ServiceCallback<Models.TrendingVideos>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  trending(options: Models.VideosTrendingOptionalParams, callback: msRest.ServiceCallback<Models.TrendingVideos>): void;
  trending(options?: Models.VideosTrendingOptionalParams | msRest.ServiceCallback<Models.TrendingVideos>, callback?: msRest.ServiceCallback<Models.TrendingVideos>): Promise<Models.VideosTrendingResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      trendingOperationSpec,
      callback) as Promise<Models.VideosTrendingResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const searchOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v7.0/videos/search",
  queryParameters: [
    Parameters.countryCode,
    Parameters.count,
    Parameters.freshness,
    Parameters.id,
    Parameters.length,
    Parameters.market,
    Parameters.offset,
    Parameters.pricing,
    Parameters.query,
    Parameters.resolution,
    Parameters.safeSearch,
    Parameters.setLang,
    Parameters.textDecorations,
    Parameters.textFormat
  ],
  headerParameters: [
    Parameters.xBingApisSDK,
    Parameters.acceptLanguage,
    Parameters.userAgent,
    Parameters.clientId,
    Parameters.clientIp,
    Parameters.location
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Videos
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const detailsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v7.0/videos/details",
  queryParameters: [
    Parameters.countryCode,
    Parameters.id,
    Parameters.modules,
    Parameters.market,
    Parameters.query,
    Parameters.resolution,
    Parameters.safeSearch,
    Parameters.setLang,
    Parameters.textDecorations,
    Parameters.textFormat
  ],
  headerParameters: [
    Parameters.xBingApisSDK,
    Parameters.acceptLanguage,
    Parameters.userAgent,
    Parameters.clientId,
    Parameters.clientIp,
    Parameters.location
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VideoDetails
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const trendingOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v7.0/videos/trending",
  queryParameters: [
    Parameters.countryCode,
    Parameters.market,
    Parameters.safeSearch,
    Parameters.setLang,
    Parameters.textDecorations,
    Parameters.textFormat
  ],
  headerParameters: [
    Parameters.xBingApisSDK,
    Parameters.acceptLanguage,
    Parameters.userAgent,
    Parameters.clientId,
    Parameters.clientIp,
    Parameters.location
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TrendingVideos
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
