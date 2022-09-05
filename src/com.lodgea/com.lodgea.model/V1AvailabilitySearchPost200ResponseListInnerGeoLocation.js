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

import ApiClient from '../ApiClient';

/**
 * The V1AvailabilitySearchPost200ResponseListInnerGeoLocation model module.
 * @module com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeoLocation
 * @version 1.0.0
 */
class V1AvailabilitySearchPost200ResponseListInnerGeoLocation {
    /**
     * Constructs a new <code>V1AvailabilitySearchPost200ResponseListInnerGeoLocation</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeoLocation
     */
    constructor() { 
        
        V1AvailabilitySearchPost200ResponseListInnerGeoLocation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AvailabilitySearchPost200ResponseListInnerGeoLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeoLocation} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeoLocation} The populated <code>V1AvailabilitySearchPost200ResponseListInnerGeoLocation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AvailabilitySearchPost200ResponseListInnerGeoLocation();

            if (data.hasOwnProperty('lng')) {
                obj['lng'] = ApiClient.convertToType(data['lng'], 'Number');
            }
            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} lng
 */
V1AvailabilitySearchPost200ResponseListInnerGeoLocation.prototype['lng'] = undefined;

/**
 * @member {Number} lat
 */
V1AvailabilitySearchPost200ResponseListInnerGeoLocation.prototype['lat'] = undefined;






export default V1AvailabilitySearchPost200ResponseListInnerGeoLocation;

