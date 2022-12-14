/**
 * lodgea-js
 * LODGEA SDK for Javascript. Check out https://lodgea.redoc.ly for more information.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@lodgea.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import PropertyGet from '../model/PropertyGet';
import V1PropertyGetPost200Response from '../model/V1PropertyGetPost200Response';

/**
* Property service.
* @module api/PropertyApi
* @version 1.0.0
*/
export default class PropertyApi {

    /**
    * Constructs a new PropertyApi. 
    * @alias module:api/PropertyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1PropertyGetPost operation.
     * @callback module:api/PropertyApi~v1PropertyGetPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1PropertyGetPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Property by ID
     * Get all information about a specific property by its ID. This parameter is required.
     * @param {module:model/PropertyGet} propertyGet Provide the property ID to get more information about it
     * @param {module:api/PropertyApi~v1PropertyGetPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1PropertyGetPost200Response}
     */
    v1PropertyGetPost(propertyGet, callback) {
      let postBody = propertyGet;
      // verify the required parameter 'propertyGet' is set
      if (propertyGet === undefined || propertyGet === null) {
        throw new Error("Missing the required parameter 'propertyGet' when calling v1PropertyGetPost");
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
      let returnType = V1PropertyGetPost200Response;
      return this.apiClient.callApi(
        '/v1/property/get', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
