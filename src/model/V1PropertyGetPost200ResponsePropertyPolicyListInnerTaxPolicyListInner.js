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
 * The V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner model module.
 * @module model/V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner
 * @version 1.0.0
 */
class V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner</code>.
     * @alias module:model/V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner
     */
    constructor() { 
        
        V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner} obj Optional instance to populate.
     * @return {module:model/V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner} The populated <code>V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner();

            if (data.hasOwnProperty('typeCode')) {
                obj['typeCode'] = ApiClient.convertToType(data['typeCode'], 'Number');
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'Number');
            }
            if (data.hasOwnProperty('chargeType')) {
                obj['chargeType'] = ApiClient.convertToType(data['chargeType'], 'String');
            }
            if (data.hasOwnProperty('chargeFrequencyCode')) {
                obj['chargeFrequencyCode'] = ApiClient.convertToType(data['chargeFrequencyCode'], 'Number');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('conditionList')) {
                obj['conditionList'] = ApiClient.convertToType(data['conditionList'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} typeCode
 */
V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner.prototype['typeCode'] = undefined;

/**
 * @member {Number} percent
 */
V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner.prototype['percent'] = undefined;

/**
 * @member {String} chargeType
 */
V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner.prototype['chargeType'] = undefined;

/**
 * @member {Number} chargeFrequencyCode
 */
V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner.prototype['chargeFrequencyCode'] = undefined;

/**
 * @member {String} currencyCode
 */
V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner.prototype['currencyCode'] = undefined;

/**
 * @member {Array.<String>} conditionList
 */
V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner.prototype['conditionList'] = undefined;






export default V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner;

