/**
 * lodgea-js
 * LODGEA SDK for Javascript. Check out https://docs.lodgea.io for more information.
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
 * The AvailabilitySearch model module.
 * @module com.lodgea/com.lodgea.model/AvailabilitySearch
 * @version 1.0.0
 */
class AvailabilitySearch {
    /**
     * Constructs a new <code>AvailabilitySearch</code>.
     * @alias module:com.lodgea/com.lodgea.model/AvailabilitySearch
     */
    constructor() { 
        
        AvailabilitySearch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AvailabilitySearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/AvailabilitySearch} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/AvailabilitySearch} The populated <code>AvailabilitySearch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AvailabilitySearch();

            if (data.hasOwnProperty('adultCount')) {
                obj['adultCount'] = ApiClient.convertToType(data['adultCount'], 'Number');
            }
            if (data.hasOwnProperty('childCount')) {
                obj['childCount'] = ApiClient.convertToType(data['childCount'], 'Number');
            }
            if (data.hasOwnProperty('childAgeList')) {
                obj['childAgeList'] = ApiClient.convertToType(data['childAgeList'], ['Number']);
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('minLengthOfStay')) {
                obj['minLengthOfStay'] = ApiClient.convertToType(data['minLengthOfStay'], 'Number');
            }
            if (data.hasOwnProperty('maxLengthOfStay')) {
                obj['maxLengthOfStay'] = ApiClient.convertToType(data['maxLengthOfStay'], 'Number');
            }
            if (data.hasOwnProperty('locationName')) {
                obj['locationName'] = ApiClient.convertToType(data['locationName'], 'String');
            }
            if (data.hasOwnProperty('locationType')) {
                obj['locationType'] = ApiClient.convertToType(data['locationType'], 'String');
            }
            if (data.hasOwnProperty('earliestArrival')) {
                obj['earliestArrival'] = ApiClient.convertToType(data['earliestArrival'], 'Date');
            }
            if (data.hasOwnProperty('latestReturn')) {
                obj['latestReturn'] = ApiClient.convertToType(data['latestReturn'], 'Date');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
            if (data.hasOwnProperty('serviceList')) {
                obj['serviceList'] = ApiClient.convertToType(data['serviceList'], ['Number']);
            }
            if (data.hasOwnProperty('typeList')) {
                obj['typeList'] = ApiClient.convertToType(data['typeList'], ['Number']);
            }
            if (data.hasOwnProperty('unitTypeList')) {
                obj['unitTypeList'] = ApiClient.convertToType(data['unitTypeList'], ['Number']);
            }
            if (data.hasOwnProperty('unitAmenityList')) {
                obj['unitAmenityList'] = ApiClient.convertToType(data['unitAmenityList'], ['Number']);
            }
            if (data.hasOwnProperty('mealPlanList')) {
                obj['mealPlanList'] = ApiClient.convertToType(data['mealPlanList'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} adultCount
 */
AvailabilitySearch.prototype['adultCount'] = undefined;

/**
 * @member {Number} childCount
 */
AvailabilitySearch.prototype['childCount'] = undefined;

/**
 * @member {Array.<Number>} childAgeList
 */
AvailabilitySearch.prototype['childAgeList'] = undefined;

/**
 * @member {String} currencyCode
 */
AvailabilitySearch.prototype['currencyCode'] = undefined;

/**
 * @member {Number} minLengthOfStay
 */
AvailabilitySearch.prototype['minLengthOfStay'] = undefined;

/**
 * @member {Number} maxLengthOfStay
 */
AvailabilitySearch.prototype['maxLengthOfStay'] = undefined;

/**
 * @member {String} locationName
 */
AvailabilitySearch.prototype['locationName'] = undefined;

/**
 * @member {String} locationType
 */
AvailabilitySearch.prototype['locationType'] = undefined;

/**
 * @member {Date} earliestArrival
 */
AvailabilitySearch.prototype['earliestArrival'] = undefined;

/**
 * @member {Date} latestReturn
 */
AvailabilitySearch.prototype['latestReturn'] = undefined;

/**
 * @member {String} sort
 */
AvailabilitySearch.prototype['sort'] = undefined;

/**
 * @member {Array.<Number>} serviceList
 */
AvailabilitySearch.prototype['serviceList'] = undefined;

/**
 * @member {Array.<Number>} typeList
 */
AvailabilitySearch.prototype['typeList'] = undefined;

/**
 * @member {Array.<Number>} unitTypeList
 */
AvailabilitySearch.prototype['unitTypeList'] = undefined;

/**
 * @member {Array.<Number>} unitAmenityList
 */
AvailabilitySearch.prototype['unitAmenityList'] = undefined;

/**
 * @member {Array.<Number>} mealPlanList
 */
AvailabilitySearch.prototype['mealPlanList'] = undefined;






export default AvailabilitySearch;

