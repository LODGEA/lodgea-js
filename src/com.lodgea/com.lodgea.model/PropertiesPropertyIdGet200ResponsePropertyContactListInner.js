/**
 * lodgea-js
 * LODGEA SDK for javascript. Check out https://docs.lodgea.io for more information.
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
import PropertiesPropertyIdGet200ResponsePropertyContactListInnerAddressListInner from './PropertiesPropertyIdGet200ResponsePropertyContactListInnerAddressListInner';

/**
 * The PropertiesPropertyIdGet200ResponsePropertyContactListInner model module.
 * @module com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyContactListInner
 * @version 1.1.0
 */
class PropertiesPropertyIdGet200ResponsePropertyContactListInner {
    /**
     * Constructs a new <code>PropertiesPropertyIdGet200ResponsePropertyContactListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyContactListInner
     * @param profileType {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyContactListInner.ProfileTypeEnum} The type of profile this contact belongs to.
     * @param addressList {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyContactListInnerAddressListInner>} A list of addresses for this contact
     */
    constructor(profileType, addressList) { 
        
        PropertiesPropertyIdGet200ResponsePropertyContactListInner.initialize(this, profileType, addressList);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, profileType, addressList) { 
        obj['profileType'] = profileType;
        obj['addressList'] = addressList;
    }

    /**
     * Constructs a <code>PropertiesPropertyIdGet200ResponsePropertyContactListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyContactListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyContactListInner} The populated <code>PropertiesPropertyIdGet200ResponsePropertyContactListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertiesPropertyIdGet200ResponsePropertyContactListInner();

            if (data.hasOwnProperty('profileType')) {
                obj['profileType'] = ApiClient.convertToType(data['profileType'], 'String');
            }
            if (data.hasOwnProperty('addressList')) {
                obj['addressList'] = ApiClient.convertToType(data['addressList'], [PropertiesPropertyIdGet200ResponsePropertyContactListInnerAddressListInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PropertiesPropertyIdGet200ResponsePropertyContactListInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropertiesPropertyIdGet200ResponsePropertyContactListInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PropertiesPropertyIdGet200ResponsePropertyContactListInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['profileType'] && !(typeof data['profileType'] === 'string' || data['profileType'] instanceof String)) {
            throw new Error("Expected the field `profileType` to be a primitive type in the JSON string but got " + data['profileType']);
        }
        if (data['addressList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['addressList'])) {
                throw new Error("Expected the field `addressList` to be an array in the JSON data but got " + data['addressList']);
            }
            // validate the optional field `addressList` (array)
            for (const item of data['addressList']) {
                PropertiesPropertyIdGet200ResponsePropertyContactListInnerAddressListInner.validateJsonObject(item);
            };
        }

        return true;
    }


}

PropertiesPropertyIdGet200ResponsePropertyContactListInner.RequiredProperties = ["profileType", "addressList"];

/**
 * The type of profile this contact belongs to.
 * @member {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyContactListInner.ProfileTypeEnum} profileType
 */
PropertiesPropertyIdGet200ResponsePropertyContactListInner.prototype['profileType'] = undefined;

/**
 * A list of addresses for this contact
 * @member {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyContactListInnerAddressListInner>} addressList
 */
PropertiesPropertyIdGet200ResponsePropertyContactListInner.prototype['addressList'] = undefined;





/**
 * Allowed values for the <code>profileType</code> property.
 * @enum {String}
 * @readonly
 */
PropertiesPropertyIdGet200ResponsePropertyContactListInner['ProfileTypeEnum'] = {

    /**
     * value: "general"
     * @const
     */
    "general": "general",

    /**
     * value: "contract"
     * @const
     */
    "contract": "contract",

    /**
     * value: "reservations"
     * @const
     */
    "reservations": "reservations",

    /**
     * value: "invoices"
     * @const
     */
    "invoices": "invoices",

    /**
     * value: "availability"
     * @const
     */
    "availability": "availability",

    /**
     * value: "site_content"
     * @const
     */
    "site_content": "site_content",

    /**
     * value: "parity"
     * @const
     */
    "parity": "parity",

    /**
     * value: "requests"
     * @const
     */
    "requests": "requests",

    /**
     * value: "central_reservations"
     * @const
     */
    "central_reservations": "central_reservations",

    /**
     * value: "physicallocation"
     * @const
     */
    "physicallocation": "physicallocation"
};



export default PropertiesPropertyIdGet200ResponsePropertyContactListInner;

