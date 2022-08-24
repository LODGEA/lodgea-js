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
import V1AvailabilitySearchPost200ResponseListInnerAttractionListInner from './V1AvailabilitySearchPost200ResponseListInnerAttractionListInner';
import V1AvailabilitySearchPost200ResponseListInnerGeo from './V1AvailabilitySearchPost200ResponseListInnerGeo';
import V1AvailabilitySearchPost200ResponseListInnerLowestPrice from './V1AvailabilitySearchPost200ResponseListInnerLowestPrice';
import V1AvailabilitySearchPost200ResponseListInnerMediaListInner from './V1AvailabilitySearchPost200ResponseListInnerMediaListInner';

/**
 * The V1AvailabilitySearchPost200ResponseListInner model module.
 * @module com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInner
 * @version 1.0.0
 */
class V1AvailabilitySearchPost200ResponseListInner {
    /**
     * Constructs a new <code>V1AvailabilitySearchPost200ResponseListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInner
     */
    constructor() { 
        
        V1AvailabilitySearchPost200ResponseListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AvailabilitySearchPost200ResponseListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInner} The populated <code>V1AvailabilitySearchPost200ResponseListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AvailabilitySearchPost200ResponseListInner();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('languageCode')) {
                obj['languageCode'] = ApiClient.convertToType(data['languageCode'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('unitSystem')) {
                obj['unitSystem'] = ApiClient.convertToType(data['unitSystem'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('serviceList')) {
                obj['serviceList'] = ApiClient.convertToType(data['serviceList'], ['Number']);
            }
            if (data.hasOwnProperty('categoryList')) {
                obj['categoryList'] = ApiClient.convertToType(data['categoryList'], ['Number']);
            }
            if (data.hasOwnProperty('uriPath')) {
                obj['uriPath'] = ApiClient.convertToType(data['uriPath'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('geo')) {
                obj['geo'] = V1AvailabilitySearchPost200ResponseListInnerGeo.constructFromObject(data['geo']);
            }
            if (data.hasOwnProperty('mediaList')) {
                obj['mediaList'] = ApiClient.convertToType(data['mediaList'], [V1AvailabilitySearchPost200ResponseListInnerMediaListInner]);
            }
            if (data.hasOwnProperty('attractionList')) {
                obj['attractionList'] = ApiClient.convertToType(data['attractionList'], [V1AvailabilitySearchPost200ResponseListInnerAttractionListInner]);
            }
            if (data.hasOwnProperty('lowestPrice')) {
                obj['lowestPrice'] = V1AvailabilitySearchPost200ResponseListInnerLowestPrice.constructFromObject(data['lowestPrice']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['code'] = undefined;

/**
 * @member {String} languageCode
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['languageCode'] = undefined;

/**
 * @member {String} currencyCode
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['currencyCode'] = undefined;

/**
 * @member {String} unitSystem
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['unitSystem'] = undefined;

/**
 * @member {String} name
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['name'] = undefined;

/**
 * @member {String} uri
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['uri'] = undefined;

/**
 * @member {Array.<Number>} serviceList
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['serviceList'] = undefined;

/**
 * @member {Array.<Number>} categoryList
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['categoryList'] = undefined;

/**
 * @member {String} uriPath
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['uriPath'] = undefined;

/**
 * @member {String} text
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['text'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeo} geo
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['geo'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerMediaListInner>} mediaList
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['mediaList'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerAttractionListInner>} attractionList
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['attractionList'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerLowestPrice} lowestPrice
 */
V1AvailabilitySearchPost200ResponseListInner.prototype['lowestPrice'] = undefined;






export default V1AvailabilitySearchPost200ResponseListInner;
