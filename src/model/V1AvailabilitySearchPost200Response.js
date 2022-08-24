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
import V1AvailabilitySearchPost200ResponseListInner from './V1AvailabilitySearchPost200ResponseListInner';

/**
 * The V1AvailabilitySearchPost200Response model module.
 * @module model/V1AvailabilitySearchPost200Response
 * @version 1.0.0
 */
class V1AvailabilitySearchPost200Response {
    /**
     * Constructs a new <code>V1AvailabilitySearchPost200Response</code>.
     * @alias module:model/V1AvailabilitySearchPost200Response
     */
    constructor() { 
        
        V1AvailabilitySearchPost200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AvailabilitySearchPost200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AvailabilitySearchPost200Response} obj Optional instance to populate.
     * @return {module:model/V1AvailabilitySearchPost200Response} The populated <code>V1AvailabilitySearchPost200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AvailabilitySearchPost200Response();

            if (data.hasOwnProperty('languageCode')) {
                obj['languageCode'] = ApiClient.convertToType(data['languageCode'], 'String');
            }
            if (data.hasOwnProperty('list')) {
                obj['list'] = ApiClient.convertToType(data['list'], [V1AvailabilitySearchPost200ResponseListInner]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} languageCode
 */
V1AvailabilitySearchPost200Response.prototype['languageCode'] = undefined;

/**
 * @member {Array.<module:model/V1AvailabilitySearchPost200ResponseListInner>} list
 */
V1AvailabilitySearchPost200Response.prototype['list'] = undefined;






export default V1AvailabilitySearchPost200Response;
