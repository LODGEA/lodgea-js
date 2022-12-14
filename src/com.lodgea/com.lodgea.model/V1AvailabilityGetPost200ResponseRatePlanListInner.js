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
import V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner from './V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner';

/**
 * The V1AvailabilityGetPost200ResponseRatePlanListInner model module.
 * @module com.lodgea/com.lodgea.model/V1AvailabilityGetPost200ResponseRatePlanListInner
 * @version 1.0.2
 */
class V1AvailabilityGetPost200ResponseRatePlanListInner {
    /**
     * Constructs a new <code>V1AvailabilityGetPost200ResponseRatePlanListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1AvailabilityGetPost200ResponseRatePlanListInner
     */
    constructor() { 
        
        V1AvailabilityGetPost200ResponseRatePlanListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AvailabilityGetPost200ResponseRatePlanListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1AvailabilityGetPost200ResponseRatePlanListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1AvailabilityGetPost200ResponseRatePlanListInner} The populated <code>V1AvailabilityGetPost200ResponseRatePlanListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AvailabilityGetPost200ResponseRatePlanListInner();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('pricingList')) {
                obj['pricingList'] = ApiClient.convertToType(data['pricingList'], [V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
V1AvailabilityGetPost200ResponseRatePlanListInner.prototype['active'] = undefined;

/**
 * @member {String} name
 */
V1AvailabilityGetPost200ResponseRatePlanListInner.prototype['name'] = undefined;

/**
 * @member {String} code
 */
V1AvailabilityGetPost200ResponseRatePlanListInner.prototype['code'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner>} pricingList
 */
V1AvailabilityGetPost200ResponseRatePlanListInner.prototype['pricingList'] = undefined;






export default V1AvailabilityGetPost200ResponseRatePlanListInner;

