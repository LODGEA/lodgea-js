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
import PropertiesPropertyIdGet200ResponseProductListInner from './PropertiesPropertyIdGet200ResponseProductListInner';
import PropertiesPropertyIdGet200ResponseProperty from './PropertiesPropertyIdGet200ResponseProperty';

/**
 * The PropertiesPropertyIdGet200Response model module.
 * @module com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200Response
 * @version 1.1.5
 */
class PropertiesPropertyIdGet200Response {
    /**
     * Constructs a new <code>PropertiesPropertyIdGet200Response</code>.
     * @alias module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200Response
     * @param property {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponseProperty} 
     * @param productList {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponseProductListInner>} 
     */
    constructor(property, productList) { 
        
        PropertiesPropertyIdGet200Response.initialize(this, property, productList);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, property, productList) { 
        obj['property'] = property;
        obj['productList'] = productList;
    }

    /**
     * Constructs a <code>PropertiesPropertyIdGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200Response} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200Response} The populated <code>PropertiesPropertyIdGet200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertiesPropertyIdGet200Response();

            if (data.hasOwnProperty('property')) {
                obj['property'] = PropertiesPropertyIdGet200ResponseProperty.constructFromObject(data['property']);
            }
            if (data.hasOwnProperty('productList')) {
                obj['productList'] = ApiClient.convertToType(data['productList'], [PropertiesPropertyIdGet200ResponseProductListInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PropertiesPropertyIdGet200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropertiesPropertyIdGet200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PropertiesPropertyIdGet200Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `property`
        if (data['property']) { // data not null
          PropertiesPropertyIdGet200ResponseProperty.validateJSON(data['property']);
        }
        if (data['productList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['productList'])) {
                throw new Error("Expected the field `productList` to be an array in the JSON data but got " + data['productList']);
            }
            // validate the optional field `productList` (array)
            for (const item of data['productList']) {
                PropertiesPropertyIdGet200ResponseProductListInner.validateJsonObject(item);
            };
        }

        return true;
    }


}

PropertiesPropertyIdGet200Response.RequiredProperties = ["property", "productList"];

/**
 * @member {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponseProperty} property
 */
PropertiesPropertyIdGet200Response.prototype['property'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponseProductListInner>} productList
 */
PropertiesPropertyIdGet200Response.prototype['productList'] = undefined;






export default PropertiesPropertyIdGet200Response;
