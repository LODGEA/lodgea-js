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

/**
 * The PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy model module.
 * @module com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy
 * @version 1.1.5
 */
class PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy {
    /**
     * Constructs a new <code>PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy</code>.
     * Defines the guarantee amount that has to be paid to the property.
     * @alias module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy
     * @param percentAfterReservation {Number} Percentage of refund after reservation.
     * @param nightsAfterReservation {Number} Number of nights after reservation.
     * @param deadlineDays {Number} Deadline in days.
     * @param deadlineHours {Number} Deadline in hours.
     * @param percentAfterDeadline {Number} Percentage of refund after deadline.
     * @param nightsAfterDeadline {Number} Number of nights after deadline.
     * @param noShowPolicy {String} No-show policy
     */
    constructor(percentAfterReservation, nightsAfterReservation, deadlineDays, deadlineHours, percentAfterDeadline, nightsAfterDeadline, noShowPolicy) { 
        
        PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.initialize(this, percentAfterReservation, nightsAfterReservation, deadlineDays, deadlineHours, percentAfterDeadline, nightsAfterDeadline, noShowPolicy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, percentAfterReservation, nightsAfterReservation, deadlineDays, deadlineHours, percentAfterDeadline, nightsAfterDeadline, noShowPolicy) { 
        obj['percentAfterReservation'] = percentAfterReservation;
        obj['nightsAfterReservation'] = nightsAfterReservation;
        obj['deadlineDays'] = deadlineDays;
        obj['deadlineHours'] = deadlineHours;
        obj['percentAfterDeadline'] = percentAfterDeadline;
        obj['nightsAfterDeadline'] = nightsAfterDeadline;
        obj['noShowPolicy'] = noShowPolicy;
    }

    /**
     * Constructs a <code>PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy} The populated <code>PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy();

            if (data.hasOwnProperty('percentAfterReservation')) {
                obj['percentAfterReservation'] = ApiClient.convertToType(data['percentAfterReservation'], 'Number');
            }
            if (data.hasOwnProperty('nightsAfterReservation')) {
                obj['nightsAfterReservation'] = ApiClient.convertToType(data['nightsAfterReservation'], 'Number');
            }
            if (data.hasOwnProperty('deadlineDays')) {
                obj['deadlineDays'] = ApiClient.convertToType(data['deadlineDays'], 'Number');
            }
            if (data.hasOwnProperty('deadlineHours')) {
                obj['deadlineHours'] = ApiClient.convertToType(data['deadlineHours'], 'Number');
            }
            if (data.hasOwnProperty('percentAfterDeadline')) {
                obj['percentAfterDeadline'] = ApiClient.convertToType(data['percentAfterDeadline'], 'Number');
            }
            if (data.hasOwnProperty('nightsAfterDeadline')) {
                obj['nightsAfterDeadline'] = ApiClient.convertToType(data['nightsAfterDeadline'], 'Number');
            }
            if (data.hasOwnProperty('noShowPolicy')) {
                obj['noShowPolicy'] = ApiClient.convertToType(data['noShowPolicy'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['noShowPolicy'] && !(typeof data['noShowPolicy'] === 'string' || data['noShowPolicy'] instanceof String)) {
            throw new Error("Expected the field `noShowPolicy` to be a primitive type in the JSON string but got " + data['noShowPolicy']);
        }

        return true;
    }


}

PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.RequiredProperties = ["percentAfterReservation", "nightsAfterReservation", "deadlineDays", "deadlineHours", "percentAfterDeadline", "nightsAfterDeadline", "noShowPolicy"];

/**
 * Percentage of refund after reservation.
 * @member {Number} percentAfterReservation
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.prototype['percentAfterReservation'] = undefined;

/**
 * Number of nights after reservation.
 * @member {Number} nightsAfterReservation
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.prototype['nightsAfterReservation'] = undefined;

/**
 * Deadline in days.
 * @member {Number} deadlineDays
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.prototype['deadlineDays'] = undefined;

/**
 * Deadline in hours.
 * @member {Number} deadlineHours
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.prototype['deadlineHours'] = undefined;

/**
 * Percentage of refund after deadline.
 * @member {Number} percentAfterDeadline
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.prototype['percentAfterDeadline'] = undefined;

/**
 * Number of nights after deadline.
 * @member {Number} nightsAfterDeadline
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.prototype['nightsAfterDeadline'] = undefined;

/**
 * No-show policy
 * @member {String} noShowPolicy
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.prototype['noShowPolicy'] = undefined;






export default PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy;
