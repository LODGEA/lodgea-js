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
import V1AvailabilitySearchPost200ResponseListInnerAttractionListInnerDistance from './V1AvailabilitySearchPost200ResponseListInnerAttractionListInnerDistance';

/**
 * The V1AvailabilitySearchPost200ResponseListInnerAttractionListInner model module.
 * @module com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerAttractionListInner
 * @version 1.0.0
 */
class V1AvailabilitySearchPost200ResponseListInnerAttractionListInner {
    /**
     * Constructs a new <code>V1AvailabilitySearchPost200ResponseListInnerAttractionListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerAttractionListInner
     */
    constructor() { 
        
        V1AvailabilitySearchPost200ResponseListInnerAttractionListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AvailabilitySearchPost200ResponseListInnerAttractionListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerAttractionListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerAttractionListInner} The populated <code>V1AvailabilitySearchPost200ResponseListInnerAttractionListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AvailabilitySearchPost200ResponseListInnerAttractionListInner();

            if (data.hasOwnProperty('typeCode')) {
                obj['typeCode'] = ApiClient.convertToType(data['typeCode'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('distance')) {
                obj['distance'] = V1AvailabilitySearchPost200ResponseListInnerAttractionListInnerDistance.constructFromObject(data['distance']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} typeCode
 */
V1AvailabilitySearchPost200ResponseListInnerAttractionListInner.prototype['typeCode'] = undefined;

/**
 * @member {String} name
 */
V1AvailabilitySearchPost200ResponseListInnerAttractionListInner.prototype['name'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerAttractionListInnerDistance} distance
 */
V1AvailabilitySearchPost200ResponseListInnerAttractionListInner.prototype['distance'] = undefined;






export default V1AvailabilitySearchPost200ResponseListInnerAttractionListInner;

