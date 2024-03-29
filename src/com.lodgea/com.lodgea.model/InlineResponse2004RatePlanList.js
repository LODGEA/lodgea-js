/**
 * lodgea-js
 * LODGEA SDK for javascript. Check out https://docs.lodgea.io for more information.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support@lodgea.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse2004PricingList from './InlineResponse2004PricingList';

/**
 * The InlineResponse2004RatePlanList model module.
 * @module com.lodgea/com.lodgea.model/InlineResponse2004RatePlanList
 * @version 1.2.0
 */
class InlineResponse2004RatePlanList {
    /**
     * Constructs a new <code>InlineResponse2004RatePlanList</code>.
     * @alias module:com.lodgea/com.lodgea.model/InlineResponse2004RatePlanList
     * @param active {Boolean} Whether the rate plan is active.
     * @param name {String} The name of the rate plan.
     * @param code {String} The code identifying the rate plan.
     * @param pricingList {Array.<module:com.lodgea/com.lodgea.model/InlineResponse2004PricingList>} 
     */
    constructor(active, name, code, pricingList) { 
        
        InlineResponse2004RatePlanList.initialize(this, active, name, code, pricingList);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, active, name, code, pricingList) { 
        obj['active'] = active;
        obj['name'] = name;
        obj['code'] = code;
        obj['pricingList'] = pricingList;
    }

    /**
     * Constructs a <code>InlineResponse2004RatePlanList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/InlineResponse2004RatePlanList} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/InlineResponse2004RatePlanList} The populated <code>InlineResponse2004RatePlanList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004RatePlanList();

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
                obj['pricingList'] = ApiClient.convertToType(data['pricingList'], [InlineResponse2004PricingList]);
            }
        }
        return obj;
    }


}

/**
 * Whether the rate plan is active.
 * @member {Boolean} active
 */
InlineResponse2004RatePlanList.prototype['active'] = undefined;

/**
 * The name of the rate plan.
 * @member {String} name
 */
InlineResponse2004RatePlanList.prototype['name'] = undefined;

/**
 * The code identifying the rate plan.
 * @member {String} code
 */
InlineResponse2004RatePlanList.prototype['code'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/InlineResponse2004PricingList>} pricingList
 */
InlineResponse2004RatePlanList.prototype['pricingList'] = undefined;






export default InlineResponse2004RatePlanList;

