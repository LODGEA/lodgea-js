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
 * The InlineResponse2003PropertyGuestInfo model module.
 * @module com.lodgea/com.lodgea.model/InlineResponse2003PropertyGuestInfo
 * @version 1.2.0
 */
class InlineResponse2003PropertyGuestInfo {
    /**
     * Constructs a new <code>InlineResponse2003PropertyGuestInfo</code>.
     * Information regarding requirements towards guests.
     * @alias module:com.lodgea/com.lodgea.model/InlineResponse2003PropertyGuestInfo
     * @param guestAddressRequired {Boolean} Whether the address of the guest is required to book this property.
     * @param guestContactNumberRequired {Boolean} Whether the phone number of the guest is required to book this property.
     * @param guestNameListRequired {Boolean} Whether a list of the guests names is required to book this property.
     */
    constructor(guestAddressRequired, guestContactNumberRequired, guestNameListRequired) { 
        
        InlineResponse2003PropertyGuestInfo.initialize(this, guestAddressRequired, guestContactNumberRequired, guestNameListRequired);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, guestAddressRequired, guestContactNumberRequired, guestNameListRequired) { 
        obj['guestAddressRequired'] = guestAddressRequired;
        obj['guestContactNumberRequired'] = guestContactNumberRequired;
        obj['guestNameListRequired'] = guestNameListRequired;
    }

    /**
     * Constructs a <code>InlineResponse2003PropertyGuestInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/InlineResponse2003PropertyGuestInfo} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/InlineResponse2003PropertyGuestInfo} The populated <code>InlineResponse2003PropertyGuestInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003PropertyGuestInfo();

            if (data.hasOwnProperty('guestAddressRequired')) {
                obj['guestAddressRequired'] = ApiClient.convertToType(data['guestAddressRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('guestContactNumberRequired')) {
                obj['guestContactNumberRequired'] = ApiClient.convertToType(data['guestContactNumberRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('guestNameListRequired')) {
                obj['guestNameListRequired'] = ApiClient.convertToType(data['guestNameListRequired'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Whether the address of the guest is required to book this property.
 * @member {Boolean} guestAddressRequired
 */
InlineResponse2003PropertyGuestInfo.prototype['guestAddressRequired'] = undefined;

/**
 * Whether the phone number of the guest is required to book this property.
 * @member {Boolean} guestContactNumberRequired
 */
InlineResponse2003PropertyGuestInfo.prototype['guestContactNumberRequired'] = undefined;

/**
 * Whether a list of the guests names is required to book this property.
 * @member {Boolean} guestNameListRequired
 */
InlineResponse2003PropertyGuestInfo.prototype['guestNameListRequired'] = undefined;






export default InlineResponse2003PropertyGuestInfo;
