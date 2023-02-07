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
 * The InlineResponse200List model module.
 * @module com.lodgea/com.lodgea.model/InlineResponse200List
 * @version 1.2.0
 */
class InlineResponse200List {
    /**
     * Constructs a new <code>InlineResponse200List</code>.
     * @alias module:com.lodgea/com.lodgea.model/InlineResponse200List
     * @param name {String} The name of the location.
     * @param currencyCode {String} The currency code of the currency of the lowest price.
     * @param lowestPrice {Number} The lowest price available for this location.
     * @param type {module:com.lodgea/com.lodgea.model/InlineResponse200List.TypeEnum} The type of the found location.<p>See also <a href=\"#locationtypes\">in the appendix</a>.</p>
     */
    constructor(name, currencyCode, lowestPrice, type) { 
        
        InlineResponse200List.initialize(this, name, currencyCode, lowestPrice, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, currencyCode, lowestPrice, type) { 
        obj['name'] = name;
        obj['currencyCode'] = currencyCode;
        obj['lowestPrice'] = lowestPrice;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>InlineResponse200List</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/InlineResponse200List} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/InlineResponse200List} The populated <code>InlineResponse200List</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200List();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('lowestPrice')) {
                obj['lowestPrice'] = ApiClient.convertToType(data['lowestPrice'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the location.
 * @member {String} name
 */
InlineResponse200List.prototype['name'] = undefined;

/**
 * The currency code of the currency of the lowest price.
 * @member {String} currencyCode
 */
InlineResponse200List.prototype['currencyCode'] = undefined;

/**
 * The lowest price available for this location.
 * @member {Number} lowestPrice
 */
InlineResponse200List.prototype['lowestPrice'] = undefined;

/**
 * The type of the found location.<p>See also <a href=\"#locationtypes\">in the appendix</a>.</p>
 * @member {module:com.lodgea/com.lodgea.model/InlineResponse200List.TypeEnum} type
 */
InlineResponse200List.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse200List['TypeEnum'] = {

    /**
     * value: "formatted_address"
     * @const
     */
    "formatted_address": "formatted_address",

    /**
     * value: "place_id"
     * @const
     */
    "place_id": "place_id",

    /**
     * value: "locality"
     * @const
     */
    "locality": "locality",

    /**
     * value: "administrative_area_level_1"
     * @const
     */
    "administrative_area_level_1": "administrative_area_level_1",

    /**
     * value: "administrative_area_level_2"
     * @const
     */
    "administrative_area_level_2": "administrative_area_level_2",

    /**
     * value: "administrative_area_level_3"
     * @const
     */
    "administrative_area_level_3": "administrative_area_level_3",

    /**
     * value: "administrative_area_level_4"
     * @const
     */
    "administrative_area_level_4": "administrative_area_level_4",

    /**
     * value: "administrative_area_level_5"
     * @const
     */
    "administrative_area_level_5": "administrative_area_level_5",

    /**
     * value: "state_code"
     * @const
     */
    "state_code": "state_code",

    /**
     * value: "country"
     * @const
     */
    "country": "country",

    /**
     * value: "country_code"
     * @const
     */
    "country_code": "country_code",

    /**
     * value: "postal_code"
     * @const
     */
    "postal_code": "postal_code",

    /**
     * value: "language"
     * @const
     */
    "language": "language",

    /**
     * value: "natural_feature"
     * @const
     */
    "natural_feature": "natural_feature",

    /**
     * value: "establishment"
     * @const
     */
    "establishment": "establishment",

    /**
     * value: "sublocality"
     * @const
     */
    "sublocality": "sublocality",

    /**
     * value: "sublocality_level_1"
     * @const
     */
    "sublocality_level_1": "sublocality_level_1",

    /**
     * value: "sublocality_level_2"
     * @const
     */
    "sublocality_level_2": "sublocality_level_2",

    /**
     * value: "sublocality_level_3"
     * @const
     */
    "sublocality_level_3": "sublocality_level_3",

    /**
     * value: "sublocality_level_4"
     * @const
     */
    "sublocality_level_4": "sublocality_level_4",

    /**
     * value: "sublocality_level_5"
     * @const
     */
    "sublocality_level_5": "sublocality_level_5",

    /**
     * value: "streetNumber"
     * @const
     */
    "streetNumber": "streetNumber"
};



export default InlineResponse200List;

