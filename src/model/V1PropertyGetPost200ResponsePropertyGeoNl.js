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
import V1PropertyGetPost200ResponsePropertyGeoDeLocation from './V1PropertyGetPost200ResponsePropertyGeoDeLocation';

/**
 * The V1PropertyGetPost200ResponsePropertyGeoNl model module.
 * @module model/V1PropertyGetPost200ResponsePropertyGeoNl
 * @version 1.0.0
 */
class V1PropertyGetPost200ResponsePropertyGeoNl {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponsePropertyGeoNl</code>.
     * @alias module:model/V1PropertyGetPost200ResponsePropertyGeoNl
     */
    constructor() { 
        
        V1PropertyGetPost200ResponsePropertyGeoNl.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponsePropertyGeoNl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PropertyGetPost200ResponsePropertyGeoNl} obj Optional instance to populate.
     * @return {module:model/V1PropertyGetPost200ResponsePropertyGeoNl} The populated <code>V1PropertyGetPost200ResponsePropertyGeoNl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponsePropertyGeoNl();

            if (data.hasOwnProperty('location')) {
                obj['location'] = V1PropertyGetPost200ResponsePropertyGeoDeLocation.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('formatted_address')) {
                obj['formatted_address'] = ApiClient.convertToType(data['formatted_address'], 'String');
            }
            if (data.hasOwnProperty('place_id')) {
                obj['place_id'] = ApiClient.convertToType(data['place_id'], 'String');
            }
            if (data.hasOwnProperty('locality')) {
                obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
            }
            if (data.hasOwnProperty('administrative_area_level_3')) {
                obj['administrative_area_level_3'] = ApiClient.convertToType(data['administrative_area_level_3'], 'String');
            }
            if (data.hasOwnProperty('administrative_area_level_1')) {
                obj['administrative_area_level_1'] = ApiClient.convertToType(data['administrative_area_level_1'], 'String');
            }
            if (data.hasOwnProperty('state_code')) {
                obj['state_code'] = ApiClient.convertToType(data['state_code'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('natural_feature')) {
                obj['natural_feature'] = ApiClient.convertToType(data['natural_feature'], 'String');
            }
            if (data.hasOwnProperty('establishment')) {
                obj['establishment'] = ApiClient.convertToType(data['establishment'], 'String');
            }
            if (data.hasOwnProperty('sublocality')) {
                obj['sublocality'] = ApiClient.convertToType(data['sublocality'], 'String');
            }
            if (data.hasOwnProperty('sublocality_level_1')) {
                obj['sublocality_level_1'] = ApiClient.convertToType(data['sublocality_level_1'], 'String');
            }
            if (data.hasOwnProperty('street_number')) {
                obj['street_number'] = ApiClient.convertToType(data['street_number'], 'String');
            }
            if (data.hasOwnProperty('route')) {
                obj['route'] = ApiClient.convertToType(data['route'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/V1PropertyGetPost200ResponsePropertyGeoDeLocation} location
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['location'] = undefined;

/**
 * @member {String} formatted_address
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['formatted_address'] = undefined;

/**
 * @member {String} place_id
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['place_id'] = undefined;

/**
 * @member {String} locality
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['locality'] = undefined;

/**
 * @member {String} administrative_area_level_3
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['administrative_area_level_3'] = undefined;

/**
 * @member {String} administrative_area_level_1
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['administrative_area_level_1'] = undefined;

/**
 * @member {String} state_code
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['state_code'] = undefined;

/**
 * @member {String} country
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['country'] = undefined;

/**
 * @member {String} country_code
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['country_code'] = undefined;

/**
 * @member {String} postal_code
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['postal_code'] = undefined;

/**
 * @member {String} language
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['language'] = undefined;

/**
 * @member {String} natural_feature
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['natural_feature'] = undefined;

/**
 * @member {String} establishment
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['establishment'] = undefined;

/**
 * @member {String} sublocality
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['sublocality'] = undefined;

/**
 * @member {String} sublocality_level_1
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['sublocality_level_1'] = undefined;

/**
 * @member {String} street_number
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['street_number'] = undefined;

/**
 * @member {String} route
 */
V1PropertyGetPost200ResponsePropertyGeoNl.prototype['route'] = undefined;






export default V1PropertyGetPost200ResponsePropertyGeoNl;

