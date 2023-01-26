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

/**
 * The PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy model module.
 * @module com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy
 * @version 1.1.0
 */
class PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy {
    /**
     * Constructs a new <code>PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy</code>.
     * Contains information about the pets policy of the property
     * @alias module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy
     * @param allowed {Boolean} Indicates if pets are allowed in the property.
     * @param byArrangement {Boolean} Indicates if pets are allowed by arrangement.
     * @param freeOfCharge {Boolean} Indicates if pets are allowed without any additional charge.
     */
    constructor(allowed, byArrangement, freeOfCharge) { 
        
        PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy.initialize(this, allowed, byArrangement, freeOfCharge);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, allowed, byArrangement, freeOfCharge) { 
        obj['allowed'] = allowed;
        obj['byArrangement'] = byArrangement;
        obj['freeOfCharge'] = freeOfCharge;
    }

    /**
     * Constructs a <code>PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy} The populated <code>PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy();

            if (data.hasOwnProperty('allowed')) {
                obj['allowed'] = ApiClient.convertToType(data['allowed'], 'Boolean');
            }
            if (data.hasOwnProperty('byArrangement')) {
                obj['byArrangement'] = ApiClient.convertToType(data['byArrangement'], 'Boolean');
            }
            if (data.hasOwnProperty('freeOfCharge')) {
                obj['freeOfCharge'] = ApiClient.convertToType(data['freeOfCharge'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Indicates if pets are allowed in the property.
 * @member {Boolean} allowed
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy.prototype['allowed'] = undefined;

/**
 * Indicates if pets are allowed by arrangement.
 * @member {Boolean} byArrangement
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy.prototype['byArrangement'] = undefined;

/**
 * Indicates if pets are allowed without any additional charge.
 * @member {Boolean} freeOfCharge
 */
PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy.prototype['freeOfCharge'] = undefined;






export default PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy;

