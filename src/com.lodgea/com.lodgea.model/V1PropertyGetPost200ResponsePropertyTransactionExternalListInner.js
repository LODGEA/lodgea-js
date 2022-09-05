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
 * The V1PropertyGetPost200ResponsePropertyTransactionExternalListInner model module.
 * @module com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyTransactionExternalListInner
 * @version 1.0.0
 */
class V1PropertyGetPost200ResponsePropertyTransactionExternalListInner {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponsePropertyTransactionExternalListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyTransactionExternalListInner
     */
    constructor() { 
        
        V1PropertyGetPost200ResponsePropertyTransactionExternalListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponsePropertyTransactionExternalListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyTransactionExternalListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyTransactionExternalListInner} The populated <code>V1PropertyGetPost200ResponsePropertyTransactionExternalListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponsePropertyTransactionExternalListInner();

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
V1PropertyGetPost200ResponsePropertyTransactionExternalListInner.prototype['languageCode'] = undefined;

/**
 * @member {String} text
 */
V1PropertyGetPost200ResponsePropertyTransactionExternalListInner.prototype['text'] = undefined;






export default V1PropertyGetPost200ResponsePropertyTransactionExternalListInner;

