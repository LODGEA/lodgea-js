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
import V1PropertyGetPost200ResponseProductListInnerMealPlanListInner from './V1PropertyGetPost200ResponseProductListInnerMealPlanListInner';
import V1PropertyGetPost200ResponseProductListInnerPolicyInfo from './V1PropertyGetPost200ResponseProductListInnerPolicyInfo';
import V1PropertyGetPost200ResponseProductListInnerRatePlanListInner from './V1PropertyGetPost200ResponseProductListInnerRatePlanListInner';
import V1PropertyGetPost200ResponseProductListInnerRoomTypeListInner from './V1PropertyGetPost200ResponseProductListInnerRoomTypeListInner';

/**
 * The V1PropertyGetPost200ResponseProductListInner model module.
 * @module com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInner
 * @version 1.0.1
 */
class V1PropertyGetPost200ResponseProductListInner {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponseProductListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInner
     */
    constructor() { 
        
        V1PropertyGetPost200ResponseProductListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponseProductListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInner} The populated <code>V1PropertyGetPost200ResponseProductListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponseProductListInner();

            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('mealPlanList')) {
                obj['mealPlanList'] = ApiClient.convertToType(data['mealPlanList'], [V1PropertyGetPost200ResponseProductListInnerMealPlanListInner]);
            }
            if (data.hasOwnProperty('roomTypeList')) {
                obj['roomTypeList'] = ApiClient.convertToType(data['roomTypeList'], [V1PropertyGetPost200ResponseProductListInnerRoomTypeListInner]);
            }
            if (data.hasOwnProperty('isLOSPricing')) {
                obj['isLOSPricing'] = ApiClient.convertToType(data['isLOSPricing'], 'Boolean');
            }
            if (data.hasOwnProperty('isOBPPricing')) {
                obj['isOBPPricing'] = ApiClient.convertToType(data['isOBPPricing'], 'Boolean');
            }
            if (data.hasOwnProperty('ratePlanList')) {
                obj['ratePlanList'] = ApiClient.convertToType(data['ratePlanList'], [V1PropertyGetPost200ResponseProductListInnerRatePlanListInner]);
            }
            if (data.hasOwnProperty('policyInfo')) {
                obj['policyInfo'] = V1PropertyGetPost200ResponseProductListInnerPolicyInfo.constructFromObject(data['policyInfo']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} propertyId
 */
V1PropertyGetPost200ResponseProductListInner.prototype['propertyId'] = undefined;

/**
 * @member {String} name
 */
V1PropertyGetPost200ResponseProductListInner.prototype['name'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerMealPlanListInner>} mealPlanList
 */
V1PropertyGetPost200ResponseProductListInner.prototype['mealPlanList'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRoomTypeListInner>} roomTypeList
 */
V1PropertyGetPost200ResponseProductListInner.prototype['roomTypeList'] = undefined;

/**
 * @member {Boolean} isLOSPricing
 */
V1PropertyGetPost200ResponseProductListInner.prototype['isLOSPricing'] = undefined;

/**
 * @member {Boolean} isOBPPricing
 */
V1PropertyGetPost200ResponseProductListInner.prototype['isOBPPricing'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRatePlanListInner>} ratePlanList
 */
V1PropertyGetPost200ResponseProductListInner.prototype['ratePlanList'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerPolicyInfo} policyInfo
 */
V1PropertyGetPost200ResponseProductListInner.prototype['policyInfo'] = undefined;






export default V1PropertyGetPost200ResponseProductListInner;

