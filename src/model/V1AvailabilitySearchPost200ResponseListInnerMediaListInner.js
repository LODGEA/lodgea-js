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

import ApiClient from '../ApiClient';

/**
 * The V1AvailabilitySearchPost200ResponseListInnerMediaListInner model module.
 * @module model/V1AvailabilitySearchPost200ResponseListInnerMediaListInner
 * @version 1.0.0
 */
class V1AvailabilitySearchPost200ResponseListInnerMediaListInner {
    /**
     * Constructs a new <code>V1AvailabilitySearchPost200ResponseListInnerMediaListInner</code>.
     * @alias module:model/V1AvailabilitySearchPost200ResponseListInnerMediaListInner
     */
    constructor() { 
        
        V1AvailabilitySearchPost200ResponseListInnerMediaListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AvailabilitySearchPost200ResponseListInnerMediaListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AvailabilitySearchPost200ResponseListInnerMediaListInner} obj Optional instance to populate.
     * @return {module:model/V1AvailabilitySearchPost200ResponseListInnerMediaListInner} The populated <code>V1AvailabilitySearchPost200ResponseListInnerMediaListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AvailabilitySearchPost200ResponseListInnerMediaListInner();

            if (data.hasOwnProperty('tagCodeList')) {
                obj['tagCodeList'] = ApiClient.convertToType(data['tagCodeList'], ['Number']);
            }
            if (data.hasOwnProperty('isMainImage')) {
                obj['isMainImage'] = ApiClient.convertToType(data['isMainImage'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('sortOrder')) {
                obj['sortOrder'] = ApiClient.convertToType(data['sortOrder'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} tagCodeList
 */
V1AvailabilitySearchPost200ResponseListInnerMediaListInner.prototype['tagCodeList'] = undefined;

/**
 * @member {Boolean} isMainImage
 */
V1AvailabilitySearchPost200ResponseListInnerMediaListInner.prototype['isMainImage'] = undefined;

/**
 * @member {String} url
 */
V1AvailabilitySearchPost200ResponseListInnerMediaListInner.prototype['url'] = undefined;

/**
 * @member {Number} sortOrder
 */
V1AvailabilitySearchPost200ResponseListInnerMediaListInner.prototype['sortOrder'] = undefined;






export default V1AvailabilitySearchPost200ResponseListInnerMediaListInner;

