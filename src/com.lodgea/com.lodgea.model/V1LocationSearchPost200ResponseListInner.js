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

import ApiClient from '../ApiClient';

/**
 * The V1LocationSearchPost200ResponseListInner model module.
 * @module com.lodgea/com.lodgea.model/V1LocationSearchPost200ResponseListInner
 * @version 1.0.2
 */
class V1LocationSearchPost200ResponseListInner {
    /**
     * Constructs a new <code>V1LocationSearchPost200ResponseListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1LocationSearchPost200ResponseListInner
     */
    constructor() { 
        
        V1LocationSearchPost200ResponseListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1LocationSearchPost200ResponseListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1LocationSearchPost200ResponseListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1LocationSearchPost200ResponseListInner} The populated <code>V1LocationSearchPost200ResponseListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1LocationSearchPost200ResponseListInner();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('lowestPrice')) {
                obj['lowestPrice'] = ApiClient.convertToType(data['lowestPrice'], 'Number');
            }
            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'String');
            }
            if (data.hasOwnProperty('propertyUriName')) {
                obj['propertyUriName'] = ApiClient.convertToType(data['propertyUriName'], 'String');
            }
            if (data.hasOwnProperty('propertyUriPath')) {
                obj['propertyUriPath'] = ApiClient.convertToType(data['propertyUriPath'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
V1LocationSearchPost200ResponseListInner.prototype['name'] = undefined;

/**
 * @member {String} type
 */
V1LocationSearchPost200ResponseListInner.prototype['type'] = undefined;

/**
 * @member {String} currencyCode
 */
V1LocationSearchPost200ResponseListInner.prototype['currencyCode'] = undefined;

/**
 * @member {Number} lowestPrice
 */
V1LocationSearchPost200ResponseListInner.prototype['lowestPrice'] = undefined;

/**
 * @member {String} propertyId
 */
V1LocationSearchPost200ResponseListInner.prototype['propertyId'] = undefined;

/**
 * @member {String} propertyUriName
 */
V1LocationSearchPost200ResponseListInner.prototype['propertyUriName'] = undefined;

/**
 * @member {String} propertyUriPath
 */
V1LocationSearchPost200ResponseListInner.prototype['propertyUriPath'] = undefined;






export default V1LocationSearchPost200ResponseListInner;

