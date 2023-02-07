/**
 * lodgea-js
 * LODGEA SDK for javascript. Check out https://docs.lodgea.io for more information.
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: support@lodgea.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AvailabilitySearchPost200Response from '../com.lodgea.model/AvailabilitySearchPost200Response';
import AvailabilitySearchPostRequest from '../com.lodgea.model/AvailabilitySearchPostRequest';
import LocationSearchPost200Response from '../com.lodgea.model/LocationSearchPost200Response';
import LocationSearchPost400Response from '../com.lodgea.model/LocationSearchPost400Response';
import LocationSearchPostRequest from '../com.lodgea.model/LocationSearchPostRequest';
import PropertiesGet200Response from '../com.lodgea.model/PropertiesGet200Response';
import PropertiesPropertyIdAvailabilityGet200Response from '../com.lodgea.model/PropertiesPropertyIdAvailabilityGet200Response';
import PropertiesPropertyIdGet200Response from '../com.lodgea.model/PropertiesPropertyIdGet200Response';

/**
* Default service.
* @module com.lodgea/com.lodgea.controllers/DefaultApi
* @version 1.1.5
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:com.lodgea/com.lodgea.controllers/DefaultApi
    * @class
    * @param {module:com.lodgea/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.lodgea/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the availabilitySearchPost operation.
     * @callback module:com.lodgea/com.lodgea.controllers/DefaultApi~availabilitySearchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:com.lodgea/com.lodgea.model/AvailabilitySearchPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for availability
     * Get availability information based on search criteria.
     * @param {Object} opts Optional parameters
     * @param {module:com.lodgea/com.lodgea.model/AvailabilitySearchPostRequest} opts.availabilitySearchPostRequest 
     * @param {module:com.lodgea/com.lodgea.controllers/DefaultApi~availabilitySearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.lodgea/com.lodgea.model/AvailabilitySearchPost200Response}
     */
    availabilitySearchPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['availabilitySearchPostRequest'];

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
      let returnType = AvailabilitySearchPost200Response;
      return this.apiClient.callApi(
        '/availability/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the locationSearchPost operation.
     * @callback module:com.lodgea/com.lodgea.controllers/DefaultApi~locationSearchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:com.lodgea/com.lodgea.model/LocationSearchPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for location
     * Get a list of locations and their lowest available rate related to a given keyword.
     * @param {Object} opts Optional parameters
     * @param {module:com.lodgea/com.lodgea.model/LocationSearchPostRequest} opts.locationSearchPostRequest 
     * @param {module:com.lodgea/com.lodgea.controllers/DefaultApi~locationSearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.lodgea/com.lodgea.model/LocationSearchPost200Response}
     */
    locationSearchPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['locationSearchPostRequest'];

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
      let returnType = LocationSearchPost200Response;
      return this.apiClient.callApi(
        '/location/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the propertiesGet operation.
     * @callback module:com.lodgea/com.lodgea.controllers/DefaultApi~propertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:com.lodgea/com.lodgea.model/PropertiesGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List (filtered) properties
     * List properties, optionally filtered by a keyword.
     * @param {Object} opts Optional parameters
     * @param {String} opts.keyword 
     * @param {String} opts.pageToken 
     * @param {module:com.lodgea/com.lodgea.controllers/DefaultApi~propertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.lodgea/com.lodgea.model/PropertiesGet200Response}
     */
    propertiesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'keyword': opts['keyword'],
        'pageToken': opts['pageToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PropertiesGet200Response;
      return this.apiClient.callApi(
        '/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the propertiesPropertyIdAvailabilityGet operation.
     * @callback module:com.lodgea/com.lodgea.controllers/DefaultApi~propertiesPropertyIdAvailabilityGetCallback
     * @param {String} error Error message, if any.
     * @param {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdAvailabilityGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a properties availability
     * Get detailed availability information for a specific property.
     * @param {String} propertyId 
     * @param {module:com.lodgea/com.lodgea.model/String} currencyCode 
     * @param {module:com.lodgea/com.lodgea.controllers/DefaultApi~propertiesPropertyIdAvailabilityGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.lodgea/com.lodgea.model/PropertiesPropertyIdAvailabilityGet200Response}
     */
    propertiesPropertyIdAvailabilityGet(propertyId, currencyCode, callback) {
      let postBody = null;
      // verify the required parameter 'propertyId' is set
      if (propertyId === undefined || propertyId === null) {
        throw new Error("Missing the required parameter 'propertyId' when calling propertiesPropertyIdAvailabilityGet");
      }
      // verify the required parameter 'currencyCode' is set
      if (currencyCode === undefined || currencyCode === null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling propertiesPropertyIdAvailabilityGet");
      }

      let pathParams = {
        'propertyId': propertyId
      };
      let queryParams = {
        'currencyCode': currencyCode
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PropertiesPropertyIdAvailabilityGet200Response;
      return this.apiClient.callApi(
        '/properties/{propertyId}/availability', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the propertiesPropertyIdGet operation.
     * @callback module:com.lodgea/com.lodgea.controllers/DefaultApi~propertiesPropertyIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a properties details
     * Get all information about a specific property by its ID.
     * @param {String} propertyId 
     * @param {module:com.lodgea/com.lodgea.controllers/DefaultApi~propertiesPropertyIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200Response}
     */
    propertiesPropertyIdGet(propertyId, callback) {
      let postBody = null;
      // verify the required parameter 'propertyId' is set
      if (propertyId === undefined || propertyId === null) {
        throw new Error("Missing the required parameter 'propertyId' when calling propertiesPropertyIdGet");
      }

      let pathParams = {
        'propertyId': propertyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PropertiesPropertyIdGet200Response;
      return this.apiClient.callApi(
        '/properties/{propertyId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}