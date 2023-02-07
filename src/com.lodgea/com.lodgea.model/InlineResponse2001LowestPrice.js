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

/**
 * The InlineResponse2001LowestPrice model module.
 * @module com.lodgea/com.lodgea.model/InlineResponse2001LowestPrice
 * @version 1.2.0
 */
class InlineResponse2001LowestPrice {
    /**
     * Constructs a new <code>InlineResponse2001LowestPrice</code>.
     * An object outlining the stay with the lowest available price point for this property.
     * @alias module:com.lodgea/com.lodgea.model/InlineResponse2001LowestPrice
     * @param amount {Number} The amount of the lowest price.
     * @param currencyCode {String} The currency code for the given amount.<p>See also <a href=\"#currencycodes\">in the appendix</a>.</p>
     * @param arrivalDate {Number} Arrival date for the given price as unix timestamp (seconds).
     * @param returnDate {Number} Departure date for the given price as unix timestamp (seconds).
     * @param lengthOfStay {Number} The amount of nights of stay this price is for
     */
    constructor(amount, currencyCode, arrivalDate, returnDate, lengthOfStay) { 
        
        InlineResponse2001LowestPrice.initialize(this, amount, currencyCode, arrivalDate, returnDate, lengthOfStay);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, currencyCode, arrivalDate, returnDate, lengthOfStay) { 
        obj['amount'] = amount;
        obj['currencyCode'] = currencyCode;
        obj['arrivalDate'] = arrivalDate;
        obj['returnDate'] = returnDate;
        obj['lengthOfStay'] = lengthOfStay;
    }

    /**
     * Constructs a <code>InlineResponse2001LowestPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/InlineResponse2001LowestPrice} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/InlineResponse2001LowestPrice} The populated <code>InlineResponse2001LowestPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001LowestPrice();

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
 * The amount of the lowest price.
 * @member {Number} amount
 */
InlineResponse2001LowestPrice.prototype['amount'] = undefined;

/**
 * The currency code for the given amount.<p>See also <a href=\"#currencycodes\">in the appendix</a>.</p>
 * @member {String} currencyCode
 */
InlineResponse2001LowestPrice.prototype['currencyCode'] = undefined;

/**
 * Arrival date for the given price as unix timestamp (seconds).
 * @member {Number} arrivalDate
 */
InlineResponse2001LowestPrice.prototype['arrivalDate'] = undefined;

/**
 * Departure date for the given price as unix timestamp (seconds).
 * @member {Number} returnDate
 */
InlineResponse2001LowestPrice.prototype['returnDate'] = undefined;

/**
 * The amount of nights of stay this price is for
 * @member {Number} lengthOfStay
 */
InlineResponse2001LowestPrice.prototype['lengthOfStay'] = undefined;






export default InlineResponse2001LowestPrice;
