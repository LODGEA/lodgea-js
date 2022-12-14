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
 * The V1AvailabilitySearchPost200ResponseListInnerLowestPrice model module.
 * @module com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerLowestPrice
 * @version 1.0.2
 */
class V1AvailabilitySearchPost200ResponseListInnerLowestPrice {
    /**
     * Constructs a new <code>V1AvailabilitySearchPost200ResponseListInnerLowestPrice</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerLowestPrice
     */
    constructor() { 
        
        V1AvailabilitySearchPost200ResponseListInnerLowestPrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AvailabilitySearchPost200ResponseListInnerLowestPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerLowestPrice} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerLowestPrice} The populated <code>V1AvailabilitySearchPost200ResponseListInnerLowestPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AvailabilitySearchPost200ResponseListInnerLowestPrice();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('arrivalDate')) {
                obj['arrivalDate'] = ApiClient.convertToType(data['arrivalDate'], 'Number');
            }
            if (data.hasOwnProperty('returnDate')) {
                obj['returnDate'] = ApiClient.convertToType(data['returnDate'], 'Number');
            }
            if (data.hasOwnProperty('lengthOfStay')) {
                obj['lengthOfStay'] = ApiClient.convertToType(data['lengthOfStay'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} amount
 */
V1AvailabilitySearchPost200ResponseListInnerLowestPrice.prototype['amount'] = undefined;

/**
 * @member {String} currencyCode
 */
V1AvailabilitySearchPost200ResponseListInnerLowestPrice.prototype['currencyCode'] = undefined;

/**
 * @member {Number} arrivalDate
 */
V1AvailabilitySearchPost200ResponseListInnerLowestPrice.prototype['arrivalDate'] = undefined;

/**
 * @member {Number} returnDate
 */
V1AvailabilitySearchPost200ResponseListInnerLowestPrice.prototype['returnDate'] = undefined;

/**
 * @member {Number} lengthOfStay
 */
V1AvailabilitySearchPost200ResponseListInnerLowestPrice.prototype['lengthOfStay'] = undefined;






export default V1AvailabilitySearchPost200ResponseListInnerLowestPrice;

