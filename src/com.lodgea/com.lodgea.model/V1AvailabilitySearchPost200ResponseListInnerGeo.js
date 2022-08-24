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
import V1AvailabilitySearchPost200ResponseListInnerGeoLocation from './V1AvailabilitySearchPost200ResponseListInnerGeoLocation';

/**
 * The V1AvailabilitySearchPost200ResponseListInnerGeo model module.
 * @module com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeo
 * @version 1.0.0
 */
class V1AvailabilitySearchPost200ResponseListInnerGeo {
    /**
     * Constructs a new <code>V1AvailabilitySearchPost200ResponseListInnerGeo</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeo
     */
    constructor() { 
        
        V1AvailabilitySearchPost200ResponseListInnerGeo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AvailabilitySearchPost200ResponseListInnerGeo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeo} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeo} The populated <code>V1AvailabilitySearchPost200ResponseListInnerGeo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AvailabilitySearchPost200ResponseListInnerGeo();

            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('formatted_address')) {
                obj['formatted_address'] = ApiClient.convertToType(data['formatted_address'], 'String');
            }
            if (data.hasOwnProperty('locality')) {
                obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
            }
            if (data.hasOwnProperty('sublocality')) {
                obj['sublocality'] = ApiClient.convertToType(data['sublocality'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('establishment')) {
                obj['establishment'] = ApiClient.convertToType(data['establishment'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('sublocality_level_1')) {
                obj['sublocality_level_1'] = ApiClient.convertToType(data['sublocality_level_1'], 'String');
            }
            if (data.hasOwnProperty('route')) {
                obj['route'] = ApiClient.convertToType(data['route'], 'String');
            }
            if (data.hasOwnProperty('administrative_area_level_3')) {
                obj['administrative_area_level_3'] = ApiClient.convertToType(data['administrative_area_level_3'], 'String');
            }
            if (data.hasOwnProperty('administrative_area_level_1')) {
                obj['administrative_area_level_1'] = ApiClient.convertToType(data['administrative_area_level_1'], 'String');
            }
            if (data.hasOwnProperty('street_number')) {
                obj['street_number'] = ApiClient.convertToType(data['street_number'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = V1AvailabilitySearchPost200ResponseListInnerGeoLocation.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('state_code')) {
                obj['state_code'] = ApiClient.convertToType(data['state_code'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('natural_feature')) {
                obj['natural_feature'] = ApiClient.convertToType(data['natural_feature'], 'String');
            }
            if (data.hasOwnProperty('place_id')) {
                obj['place_id'] = ApiClient.convertToType(data['place_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} country
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['country'] = undefined;

/**
 * @member {String} formatted_address
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['formatted_address'] = undefined;

/**
 * @member {String} locality
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['locality'] = undefined;

/**
 * @member {String} sublocality
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['sublocality'] = undefined;

/**
 * @member {String} language
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['language'] = undefined;

/**
 * @member {String} establishment
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['establishment'] = undefined;

/**
 * @member {String} country_code
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['country_code'] = undefined;

/**
 * @member {String} sublocality_level_1
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['sublocality_level_1'] = undefined;

/**
 * @member {String} route
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['route'] = undefined;

/**
 * @member {String} administrative_area_level_3
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['administrative_area_level_3'] = undefined;

/**
 * @member {String} administrative_area_level_1
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['administrative_area_level_1'] = undefined;

/**
 * @member {String} street_number
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['street_number'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeoLocation} location
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['location'] = undefined;

/**
 * @member {String} state_code
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['state_code'] = undefined;

/**
 * @member {String} postal_code
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['postal_code'] = undefined;

/**
 * @member {String} natural_feature
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['natural_feature'] = undefined;

/**
 * @member {String} place_id
 */
V1AvailabilitySearchPost200ResponseListInnerGeo.prototype['place_id'] = undefined;






export default V1AvailabilitySearchPost200ResponseListInnerGeo;
