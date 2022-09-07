/**
 * lodgea-js
 * LODGEA SDK for Javascript. Check out https://docs.lodgea.io for more information.
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: support@lodgea.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1PropertyGetPost200ResponsePropertyPropertyInfoLocation model module.
 * @module com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfoLocation
 * @version 1.0.1
 */
class V1PropertyGetPost200ResponsePropertyPropertyInfoLocation {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponsePropertyPropertyInfoLocation</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfoLocation
     */
    constructor() { 
        
        V1PropertyGetPost200ResponsePropertyPropertyInfoLocation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponsePropertyPropertyInfoLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfoLocation} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfoLocation} The populated <code>V1PropertyGetPost200ResponsePropertyPropertyInfoLocation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponsePropertyPropertyInfoLocation();

            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} latitude
 */
V1PropertyGetPost200ResponsePropertyPropertyInfoLocation.prototype['latitude'] = undefined;

/**
 * @member {Number} longitude
 */
V1PropertyGetPost200ResponsePropertyPropertyInfoLocation.prototype['longitude'] = undefined;






export default V1PropertyGetPost200ResponsePropertyPropertyInfoLocation;

