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

/**
 * The V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner model module.
 * @module model/V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner
 * @version 1.0.0
 */
class V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner</code>.
     * @alias module:model/V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner
     */
    constructor() { 
        
        V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner} obj Optional instance to populate.
     * @return {module:model/V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner} The populated <code>V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner();

            if (data.hasOwnProperty('languageCode')) {
                obj['languageCode'] = ApiClient.convertToType(data['languageCode'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} languageCode
 */
V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner.prototype['languageCode'] = undefined;

/**
 * @member {String} text
 */
V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner.prototype['text'] = undefined;






export default V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner;

