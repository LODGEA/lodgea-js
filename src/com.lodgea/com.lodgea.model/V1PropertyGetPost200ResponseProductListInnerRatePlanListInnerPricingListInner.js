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
import V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInnerPriceList from './V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInnerPriceList';

/**
 * The V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner model module.
 * @module com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner
 * @version 1.0.2
 */
class V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner
     */
    constructor() { 
        
        V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner} The populated <code>V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner();

            if (data.hasOwnProperty('dateTime')) {
                obj['dateTime'] = ApiClient.convertToType(data['dateTime'], 'Number');
            }
            if (data.hasOwnProperty('occupancy')) {
                obj['occupancy'] = ApiClient.convertToType(data['occupancy'], 'Number');
            }
            if (data.hasOwnProperty('priceList')) {
                obj['priceList'] = V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInnerPriceList.constructFromObject(data['priceList']);
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} dateTime
 */
V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner.prototype['dateTime'] = undefined;

/**
 * @member {Number} occupancy
 */
V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner.prototype['occupancy'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInnerPriceList} priceList
 */
V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner.prototype['priceList'] = undefined;

/**
 * @member {String} currencyCode
 */
V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner.prototype['currencyCode'] = undefined;






export default V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner;

