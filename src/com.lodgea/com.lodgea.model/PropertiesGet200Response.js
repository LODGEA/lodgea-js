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

import ApiClient from '../ApiClient';
import PropertiesGet200ResponseListInner from './PropertiesGet200ResponseListInner';

/**
 * The PropertiesGet200Response model module.
 * @module com.lodgea/com.lodgea.model/PropertiesGet200Response
 * @version 1.1.5
 */
class PropertiesGet200Response {
    /**
     * Constructs a new <code>PropertiesGet200Response</code>.
     * @alias module:com.lodgea/com.lodgea.model/PropertiesGet200Response
     * @param list {Array.<module:com.lodgea/com.lodgea.model/PropertiesGet200ResponseListInner>} 
     */
    constructor(list) { 
        
        PropertiesGet200Response.initialize(this, list);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, list) { 
        obj['list'] = list;
    }

    /**
     * Constructs a <code>PropertiesGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/PropertiesGet200Response} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/PropertiesGet200Response} The populated <code>PropertiesGet200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertiesGet200Response();

            if (data.hasOwnProperty('list')) {
                obj['list'] = ApiClient.convertToType(data['list'], [PropertiesGet200ResponseListInner]);
            }
            if (data.hasOwnProperty('pageToken')) {
                obj['pageToken'] = ApiClient.convertToType(data['pageToken'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PropertiesGet200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropertiesGet200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PropertiesGet200Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['list']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['list'])) {
                throw new Error("Expected the field `list` to be an array in the JSON data but got " + data['list']);
            }
            // validate the optional field `list` (array)
            for (const item of data['list']) {
                PropertiesGet200ResponseListInner.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['pageToken'] && !(typeof data['pageToken'] === 'string' || data['pageToken'] instanceof String)) {
            throw new Error("Expected the field `pageToken` to be a primitive type in the JSON string but got " + data['pageToken']);
        }

        return true;
    }


}

PropertiesGet200Response.RequiredProperties = ["list"];

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/PropertiesGet200ResponseListInner>} list
 */
PropertiesGet200Response.prototype['list'] = undefined;

/**
 * The page token to pass in the subsequent call to retrieve more results, only returned if more results are available.
 * @member {String} pageToken
 */
PropertiesGet200Response.prototype['pageToken'] = undefined;






export default PropertiesGet200Response;
