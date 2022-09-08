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
 * The V1PropertyGetPost200ResponsePropertyCancellationGracePeriod model module.
 * @module com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyCancellationGracePeriod
 * @version 1.0.2
 */
class V1PropertyGetPost200ResponsePropertyCancellationGracePeriod {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponsePropertyCancellationGracePeriod</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyCancellationGracePeriod
     */
    constructor() { 
        
        V1PropertyGetPost200ResponsePropertyCancellationGracePeriod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponsePropertyCancellationGracePeriod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyCancellationGracePeriod} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyCancellationGracePeriod} The populated <code>V1PropertyGetPost200ResponsePropertyCancellationGracePeriod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponsePropertyCancellationGracePeriod();

            if (data.hasOwnProperty('hoursAfterBooking')) {
                obj['hoursAfterBooking'] = ApiClient.convertToType(data['hoursAfterBooking'], 'Number');
            }
            if (data.hasOwnProperty('weeksBeforeCheckIn')) {
                obj['weeksBeforeCheckIn'] = ApiClient.convertToType(data['weeksBeforeCheckIn'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} hoursAfterBooking
 */
V1PropertyGetPost200ResponsePropertyCancellationGracePeriod.prototype['hoursAfterBooking'] = undefined;

/**
 * @member {Number} weeksBeforeCheckIn
 */
V1PropertyGetPost200ResponsePropertyCancellationGracePeriod.prototype['weeksBeforeCheckIn'] = undefined;






export default V1PropertyGetPost200ResponsePropertyCancellationGracePeriod;

