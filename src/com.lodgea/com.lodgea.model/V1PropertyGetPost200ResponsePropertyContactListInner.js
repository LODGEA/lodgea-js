/**
 * lodgea-js
 * LODGEA SDK for Javascript. Check out https://docs.lodgea.io for more information.
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: support@lodgea.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner from './V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner';

/**
 * The V1PropertyGetPost200ResponsePropertyContactListInner model module.
 * @module com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyContactListInner
 * @version 1.0.2
 */
class V1PropertyGetPost200ResponsePropertyContactListInner {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponsePropertyContactListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyContactListInner
     */
    constructor() { 
        
        V1PropertyGetPost200ResponsePropertyContactListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponsePropertyContactListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyContactListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyContactListInner} The populated <code>V1PropertyGetPost200ResponsePropertyContactListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponsePropertyContactListInner();

            if (data.hasOwnProperty('profileType')) {
                obj['profileType'] = ApiClient.convertToType(data['profileType'], 'String');
            }
            if (data.hasOwnProperty('addressList')) {
                obj['addressList'] = ApiClient.convertToType(data['addressList'], [V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} profileType
 */
V1PropertyGetPost200ResponsePropertyContactListInner.prototype['profileType'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner>} addressList
 */
V1PropertyGetPost200ResponsePropertyContactListInner.prototype['addressList'] = undefined;






export default V1PropertyGetPost200ResponsePropertyContactListInner;

