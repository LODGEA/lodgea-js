/**
 * lodgea-js
 * LODGEA SDK for Javascript. Check out https://docs.lodgea.io for more information.
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
import AvailabilitySearch from '../com.lodgea.model/AvailabilitySearch';
import V1AvailabilitySearchPost200Response from '../com.lodgea.model/V1AvailabilitySearchPost200Response';

/**
* Availability service.
* @module com.lodgea/com.lodgea.controllers/AvailabilityApi
* @version 1.0.0
*/
export default class AvailabilityApi {

    /**
    * Constructs a new AvailabilityApi. 
    * @alias module:com.lodgea/com.lodgea.controllers/AvailabilityApi
    * @class
    * @param {module:com.lodgea/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.lodgea/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1AvailabilitySearchPost operation.
     * @callback module:com.lodgea/com.lodgea.controllers/AvailabilityApi~v1AvailabilitySearchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for Availability
     * Get availability information based on search criteria. The possible values for the different content parameters are listed below. All parameters are optional.
     * @param {Object} opts Optional parameters
     * @param {module:com.lodgea/com.lodgea.model/AvailabilitySearch} opts.availabilitySearch Search Criteria, all parameters are optional
     * @param {module:com.lodgea/com.lodgea.controllers/AvailabilityApi~v1AvailabilitySearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200Response}
     */
    v1AvailabilitySearchPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['availabilitySearch'];

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
      let returnType = V1AvailabilitySearchPost200Response;
      return this.apiClient.callApi(
        '/v1/availability/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
