/**
 * lodgea-js
 * LODGEA SDK for javascript. Check out https://docs.lodgea.io for more information.
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: support@lodgea.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerCancellationPolicyListInner from './PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerCancellationPolicyListInner';
import PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerFeePolicyListInner from './PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerFeePolicyListInner';
import PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy from './PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy';
import PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy from './PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy';
import PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerTaxPolicyListInner from './PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerTaxPolicyListInner';

/**
 * The PropertiesPropertyIdGet200ResponsePropertyPolicyListInner model module.
 * @module com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInner
 * @version 1.1.5
 */
class PropertiesPropertyIdGet200ResponsePropertyPolicyListInner {
    /**
     * Constructs a new <code>PropertiesPropertyIdGet200ResponsePropertyPolicyListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInner
     * @param checkInTime {Number} Check-in time (unix timestamp in ms).
     * @param checkOutTime {Number} Check-out time (unix timestamp in ms).
     * @param cancellationPolicyList {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerCancellationPolicyListInner>} List of cancellation policies.
     * @param advanceBookingMin {Number} The minimum number of days in advance a booking must be made
     * @param advanceBookingMax {Number} The maximum number of days in advance a booking can be made
     * @param taxPolicyList {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerTaxPolicyListInner>} A list of taxes and their policies.
     * @param feePolicyList {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerFeePolicyListInner>} A list of fees and their policies.
     */
    constructor(checkInTime, checkOutTime, cancellationPolicyList, advanceBookingMin, advanceBookingMax, taxPolicyList, feePolicyList) { 
        
        PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.initialize(this, checkInTime, checkOutTime, cancellationPolicyList, advanceBookingMin, advanceBookingMax, taxPolicyList, feePolicyList);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, checkInTime, checkOutTime, cancellationPolicyList, advanceBookingMin, advanceBookingMax, taxPolicyList, feePolicyList) { 
        obj['checkInTime'] = checkInTime;
        obj['checkOutTime'] = checkOutTime;
        obj['cancellationPolicyList'] = cancellationPolicyList;
        obj['advanceBookingMin'] = advanceBookingMin;
        obj['advanceBookingMax'] = advanceBookingMax;
        obj['taxPolicyList'] = taxPolicyList;
        obj['feePolicyList'] = feePolicyList;
    }

    /**
     * Constructs a <code>PropertiesPropertyIdGet200ResponsePropertyPolicyListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInner} The populated <code>PropertiesPropertyIdGet200ResponsePropertyPolicyListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertiesPropertyIdGet200ResponsePropertyPolicyListInner();

            if (data.hasOwnProperty('checkInTime')) {
                obj['checkInTime'] = ApiClient.convertToType(data['checkInTime'], 'Number');
            }
            if (data.hasOwnProperty('checkOutTime')) {
                obj['checkOutTime'] = ApiClient.convertToType(data['checkOutTime'], 'Number');
            }
            if (data.hasOwnProperty('totalGuestCount')) {
                obj['totalGuestCount'] = ApiClient.convertToType(data['totalGuestCount'], 'Number');
            }
            if (data.hasOwnProperty('cancellationPolicyList')) {
                obj['cancellationPolicyList'] = ApiClient.convertToType(data['cancellationPolicyList'], [PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerCancellationPolicyListInner]);
            }
            if (data.hasOwnProperty('advanceBookingMin')) {
                obj['advanceBookingMin'] = ApiClient.convertToType(data['advanceBookingMin'], 'Number');
            }
            if (data.hasOwnProperty('advanceBookingMax')) {
                obj['advanceBookingMax'] = ApiClient.convertToType(data['advanceBookingMax'], 'Number');
            }
            if (data.hasOwnProperty('petsPolicy')) {
                obj['petsPolicy'] = PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy.constructFromObject(data['petsPolicy']);
            }
            if (data.hasOwnProperty('prepaymentPolicy')) {
                obj['prepaymentPolicy'] = ApiClient.convertToType(data['prepaymentPolicy'], 'String');
            }
            if (data.hasOwnProperty('guaranteePolicy')) {
                obj['guaranteePolicy'] = PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.constructFromObject(data['guaranteePolicy']);
            }
            if (data.hasOwnProperty('taxPolicyList')) {
                obj['taxPolicyList'] = ApiClient.convertToType(data['taxPolicyList'], [PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerTaxPolicyListInner]);
            }
            if (data.hasOwnProperty('feePolicyList')) {
                obj['feePolicyList'] = ApiClient.convertToType(data['feePolicyList'], [PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerFeePolicyListInner]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PropertiesPropertyIdGet200ResponsePropertyPolicyListInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropertiesPropertyIdGet200ResponsePropertyPolicyListInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['cancellationPolicyList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['cancellationPolicyList'])) {
                throw new Error("Expected the field `cancellationPolicyList` to be an array in the JSON data but got " + data['cancellationPolicyList']);
            }
            // validate the optional field `cancellationPolicyList` (array)
            for (const item of data['cancellationPolicyList']) {
                PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerCancellationPolicyListInner.validateJsonObject(item);
            };
        }
        // validate the optional field `petsPolicy`
        if (data['petsPolicy']) { // data not null
          PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy.validateJSON(data['petsPolicy']);
        }
        // ensure the json data is a string
        if (data['prepaymentPolicy'] && !(typeof data['prepaymentPolicy'] === 'string' || data['prepaymentPolicy'] instanceof String)) {
            throw new Error("Expected the field `prepaymentPolicy` to be a primitive type in the JSON string but got " + data['prepaymentPolicy']);
        }
        // validate the optional field `guaranteePolicy`
        if (data['guaranteePolicy']) { // data not null
          PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.validateJSON(data['guaranteePolicy']);
        }
        if (data['taxPolicyList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['taxPolicyList'])) {
                throw new Error("Expected the field `taxPolicyList` to be an array in the JSON data but got " + data['taxPolicyList']);
            }
            // validate the optional field `taxPolicyList` (array)
            for (const item of data['taxPolicyList']) {
                PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerTaxPolicyListInner.validateJsonObject(item);
            };
        }
        if (data['feePolicyList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['feePolicyList'])) {
                throw new Error("Expected the field `feePolicyList` to be an array in the JSON data but got " + data['feePolicyList']);
            }
            // validate the optional field `feePolicyList` (array)
            for (const item of data['feePolicyList']) {
                PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerFeePolicyListInner.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.RequiredProperties = ["checkInTime", "checkOutTime", "cancellationPolicyList", "advanceBookingMin", "advanceBookingMax", "taxPolicyList", "feePolicyList"];

/**
 * Check-in time (unix timestamp in ms).
 * @member {Number} checkInTime
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.prototype['checkInTime'] = undefined;

/**
 * Check-out time (unix timestamp in ms).
 * @member {Number} checkOutTime
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.prototype['checkOutTime'] = undefined;

/**
 * The maximum number of guests allowed.
 * @member {Number} totalGuestCount
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.prototype['totalGuestCount'] = undefined;

/**
 * List of cancellation policies.
 * @member {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerCancellationPolicyListInner>} cancellationPolicyList
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.prototype['cancellationPolicyList'] = undefined;

/**
 * The minimum number of days in advance a booking must be made
 * @member {Number} advanceBookingMin
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.prototype['advanceBookingMin'] = undefined;

/**
 * The maximum number of days in advance a booking can be made
 * @member {Number} advanceBookingMax
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.prototype['advanceBookingMax'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy} petsPolicy
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.prototype['petsPolicy'] = undefined;

/**
 * The type of the prepayment policy.
 * @member {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.PrepaymentPolicyEnum} prepaymentPolicy
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.prototype['prepaymentPolicy'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy} guaranteePolicy
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.prototype['guaranteePolicy'] = undefined;

/**
 * A list of taxes and their policies.
 * @member {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerTaxPolicyListInner>} taxPolicyList
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.prototype['taxPolicyList'] = undefined;

/**
 * A list of fees and their policies.
 * @member {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerFeePolicyListInner>} feePolicyList
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.prototype['feePolicyList'] = undefined;

/**
 * The name of this policy.
 * @member {String} name
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.prototype['name'] = undefined;





/**
 * Allowed values for the <code>prepaymentPolicy</code> property.
 * @enum {String}
 * @readonly
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInner['PrepaymentPolicyEnum'] = {

    /**
     * value: "after_cancellation_fee_begins"
     * @const
     */
    "cancellation_fee_begins": "after_cancellation_fee_begins",

    /**
     * value: "after_reservation_is_made"
     * @const
     */
    "reservation_is_made": "after_reservation_is_made"
};



export default PropertiesPropertyIdGet200ResponsePropertyPolicyListInner;

