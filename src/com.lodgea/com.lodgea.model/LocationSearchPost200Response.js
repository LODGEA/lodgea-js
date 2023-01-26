/**
 * lodgea-js
 * LODGEA SDK for Javascript. Check out https://docs.lodgea.io for more information.
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
import AvailablePropertiesInner from './AvailablePropertiesInner';

/**
 * The LocationSearchPost200Response model module.
 * @module com.lodgea/com.lodgea.model/LocationSearchPost200Response
 * @version 1.1.0
 */
class LocationSearchPost200Response {
    /**
     * Constructs a new <code>LocationSearchPost200Response</code>.
     * @alias module:com.lodgea/com.lodgea.model/LocationSearchPost200Response
     * @param languageCode {module:com.lodgea/com.lodgea.model/LocationSearchPost200Response.LanguageCodeEnum} The language code of the language in which the descriptive texts for each found location are returned.<p>Please note that beside the general restrictions listed below only languages configured during system setup for your respective tenant are allowed.</p><p>See also <a href=\"#isolanguage-codes\">in the appendix</a>.</p>
     * @param list {Array.<module:com.lodgea/com.lodgea.model/AvailablePropertiesInner>} A list of available properties matching the given criteria.
     */
    constructor(languageCode, list) { 
        
        LocationSearchPost200Response.initialize(this, languageCode, list);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, languageCode, list) { 
        obj['languageCode'] = languageCode;
        obj['list'] = list;
    }

    /**
     * Constructs a <code>LocationSearchPost200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/LocationSearchPost200Response} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/LocationSearchPost200Response} The populated <code>LocationSearchPost200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationSearchPost200Response();

            if (data.hasOwnProperty('languageCode')) {
                obj['languageCode'] = ApiClient.convertToType(data['languageCode'], 'String');
            }
            if (data.hasOwnProperty('list')) {
                obj['list'] = ApiClient.convertToType(data['list'], [AvailablePropertiesInner]);
            }
        }
        return obj;
    }


}

/**
 * The language code of the language in which the descriptive texts for each found location are returned.<p>Please note that beside the general restrictions listed below only languages configured during system setup for your respective tenant are allowed.</p><p>See also <a href=\"#isolanguage-codes\">in the appendix</a>.</p>
 * @member {module:com.lodgea/com.lodgea.model/LocationSearchPost200Response.LanguageCodeEnum} languageCode
 */
LocationSearchPost200Response.prototype['languageCode'] = undefined;

/**
 * A list of available properties matching the given criteria.
 * @member {Array.<module:com.lodgea/com.lodgea.model/AvailablePropertiesInner>} list
 */
LocationSearchPost200Response.prototype['list'] = undefined;





/**
 * Allowed values for the <code>languageCode</code> property.
 * @enum {String}
 * @readonly
 */
LocationSearchPost200Response['LanguageCodeEnum'] = {

    /**
     * value: "af"
     * @const
     */
    "af": "af",

    /**
     * value: "ar"
     * @const
     */
    "ar": "ar",

    /**
     * value: "bg"
     * @const
     */
    "bg": "bg",

    /**
     * value: "ca"
     * @const
     */
    "ca": "ca",

    /**
     * value: "cs"
     * @const
     */
    "cs": "cs",

    /**
     * value: "da"
     * @const
     */
    "da": "da",

    /**
     * value: "de"
     * @const
     */
    "de": "de",

    /**
     * value: "el"
     * @const
     */
    "el": "el",

    /**
     * value: "en"
     * @const
     */
    "en": "en",

    /**
     * value: "es"
     * @const
     */
    "es": "es",

    /**
     * value: "et"
     * @const
     */
    "et": "et",

    /**
     * value: "fi"
     * @const
     */
    "fi": "fi",

    /**
     * value: "fr"
     * @const
     */
    "fr": "fr",

    /**
     * value: "he"
     * @const
     */
    "he": "he",

    /**
     * value: "hi"
     * @const
     */
    "hi": "hi",

    /**
     * value: "hr"
     * @const
     */
    "hr": "hr",

    /**
     * value: "hu"
     * @const
     */
    "hu": "hu",

    /**
     * value: "id"
     * @const
     */
    "id": "id",

    /**
     * value: "is"
     * @const
     */
    "is": "is",

    /**
     * value: "it"
     * @const
     */
    "it": "it",

    /**
     * value: "ja"
     * @const
     */
    "ja": "ja",

    /**
     * value: "ko"
     * @const
     */
    "ko": "ko",

    /**
     * value: "lt"
     * @const
     */
    "lt": "lt",

    /**
     * value: "lv"
     * @const
     */
    "lv": "lv",

    /**
     * value: "nl"
     * @const
     */
    "nl": "nl",

    /**
     * value: "no"
     * @const
     */
    "no": "no",

    /**
     * value: "pl"
     * @const
     */
    "pl": "pl",

    /**
     * value: "pt"
     * @const
     */
    "pt": "pt",

    /**
     * value: "ro"
     * @const
     */
    "ro": "ro",

    /**
     * value: "ru"
     * @const
     */
    "ru": "ru",

    /**
     * value: "sk"
     * @const
     */
    "sk": "sk",

    /**
     * value: "sl"
     * @const
     */
    "sl": "sl",

    /**
     * value: "sr"
     * @const
     */
    "sr": "sr",

    /**
     * value: "sv"
     * @const
     */
    "sv": "sv",

    /**
     * value: "th"
     * @const
     */
    "th": "th",

    /**
     * value: "tr"
     * @const
     */
    "tr": "tr",

    /**
     * value: "vi"
     * @const
     */
    "vi": "vi",

    /**
     * value: "zh"
     * @const
     */
    "zh": "zh"
};



export default LocationSearchPost200Response;

