/**
 * lodgea-js
 * LODGEA SDK for Javascript. Check out https://docs.lodgea.io for more information.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@lodgea.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1PropertyGetPost200ResponseProductListInnerMealPlanListInner model module.
 * @module com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerMealPlanListInner
 * @version 1.0.0
 */
class V1PropertyGetPost200ResponseProductListInnerMealPlanListInner {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponseProductListInnerMealPlanListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerMealPlanListInner
     */
    constructor() { 
        
        V1PropertyGetPost200ResponseProductListInnerMealPlanListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponseProductListInnerMealPlanListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerMealPlanListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerMealPlanListInner} The populated <code>V1PropertyGetPost200ResponseProductListInnerMealPlanListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponseProductListInnerMealPlanListInner();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} code
 */
V1PropertyGetPost200ResponseProductListInnerMealPlanListInner.prototype['code'] = undefined;

/**
 * @member {String} name
 */
V1PropertyGetPost200ResponseProductListInnerMealPlanListInner.prototype['name'] = undefined;






export default V1PropertyGetPost200ResponseProductListInnerMealPlanListInner;

