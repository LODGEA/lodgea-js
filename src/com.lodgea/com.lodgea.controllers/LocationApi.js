/**
 * lodgea-js
 * LODGEA SDK for Javascript. Check out https://docs.lodgea.io for more information.
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: support@lodgea.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import LocationSearch from '../com.lodgea.model/LocationSearch';
import V1LocationSearchPost200Response from '../com.lodgea.model/V1LocationSearchPost200Response';

/**
* Location service.
* @module com.lodgea/com.lodgea.controllers/LocationApi
* @version 1.0.2
*/
export default class LocationApi {

    /**
    * Constructs a new LocationApi. 
    * @alias module:com.lodgea/com.lodgea.controllers/LocationApi
    * @class
    * @param {module:com.lodgea/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.lodgea/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1LocationSearchPost operation.
     * @callback module:com.lodgea/com.lodgea.controllers/LocationApi~v1LocationSearchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:com.lodgea/com.lodgea.model/V1LocationSearchPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for Location
     * Get a location by search text in free from. This parameter is required.
     * @param {module:com.lodgea/com.lodgea.model/LocationSearch} locationSearch Free-text search criteria
     * @param {module:com.lodgea/com.lodgea.controllers/LocationApi~v1LocationSearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.lodgea/com.lodgea.model/V1LocationSearchPost200Response}
     */
    v1LocationSearchPost(locationSearch, callback) {
      let postBody = locationSearch;
      // verify the required parameter 'locationSearch' is set
      if (locationSearch === undefined || locationSearch === null) {
        throw new Error("Missing the required parameter 'locationSearch' when calling v1LocationSearchPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1LocationSearchPost200Response;
      return this.apiClient.callApi(
        '/v1/location/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
