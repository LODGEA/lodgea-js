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
import AvailablePropertiesInner1Geo from './AvailablePropertiesInner1Geo';
import PropertiesPropertyIdGet200ResponsePropertyAwardListInner from './PropertiesPropertyIdGet200ResponsePropertyAwardListInner';
import PropertiesPropertyIdGet200ResponsePropertyCancellationGracePeriod from './PropertiesPropertyIdGet200ResponsePropertyCancellationGracePeriod';
import PropertiesPropertyIdGet200ResponsePropertyContactListInner from './PropertiesPropertyIdGet200ResponsePropertyContactListInner';
import PropertiesPropertyIdGet200ResponsePropertyFacilityInfo from './PropertiesPropertyIdGet200ResponsePropertyFacilityInfo';
import PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner from './PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner';
import PropertiesPropertyIdGet200ResponsePropertyGuestInfo from './PropertiesPropertyIdGet200ResponsePropertyGuestInfo';
import PropertiesPropertyIdGet200ResponsePropertyPolicyListInner from './PropertiesPropertyIdGet200ResponsePropertyPolicyListInner';
import PropertiesPropertyIdGet200ResponsePropertyPropertyInfo from './PropertiesPropertyIdGet200ResponsePropertyPropertyInfo';
import PropertiesPropertyIdGet200ResponsePropertyRecordCreated from './PropertiesPropertyIdGet200ResponsePropertyRecordCreated';
import PropertiesPropertyIdGet200ResponsePropertyRecordModified from './PropertiesPropertyIdGet200ResponsePropertyRecordModified';
import PropertiesPropertyIdGet200ResponsePropertyServiceListInner from './PropertiesPropertyIdGet200ResponsePropertyServiceListInner';

/**
 * The PropertiesPropertyIdGet200ResponseProperty model module.
 * @module com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponseProperty
 * @version 1.1.5
 */
class PropertiesPropertyIdGet200ResponseProperty {
    /**
     * Constructs a new <code>PropertiesPropertyIdGet200ResponseProperty</code>.
     * An object containing all available base data for the requested property.
     * @alias module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponseProperty
     * @param code {String} The properties unique identifier.
     * @param name {String} The properties name.
     * @param recordCreated {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyRecordCreated} 
     * @param recordModified {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyRecordModified} 
     * @param propertyInfo {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPropertyInfo} 
     * @param awardList {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyAwardListInner>} A list of the ratings available for this property.
     * @param contactList {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyContactListInner>} A contact with a profile type and a list of addresses
     * @param mediaList {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner>} A list of media objects for the property.
     * @param published {Boolean} Indicates whether the policy has been published or not.
     * @param policyList {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInner>} A list of policies associated with the property.
     * @param serviceList {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyServiceListInner>} A list of objects each describing an available service, its pricing and its availability.
     */
    constructor(code, name, recordCreated, recordModified, propertyInfo, awardList, contactList, mediaList, published, policyList, serviceList) { 
        
        PropertiesPropertyIdGet200ResponseProperty.initialize(this, code, name, recordCreated, recordModified, propertyInfo, awardList, contactList, mediaList, published, policyList, serviceList);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, name, recordCreated, recordModified, propertyInfo, awardList, contactList, mediaList, published, policyList, serviceList) { 
        obj['code'] = code;
        obj['name'] = name;
        obj['recordCreated'] = recordCreated;
        obj['recordModified'] = recordModified;
        obj['propertyInfo'] = propertyInfo;
        obj['awardList'] = awardList;
        obj['contactList'] = contactList;
        obj['mediaList'] = mediaList;
        obj['published'] = published;
        obj['policyList'] = policyList;
        obj['serviceList'] = serviceList;
    }

    /**
     * Constructs a <code>PropertiesPropertyIdGet200ResponseProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponseProperty} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponseProperty} The populated <code>PropertiesPropertyIdGet200ResponseProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertiesPropertyIdGet200ResponseProperty();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('recordCreated')) {
                obj['recordCreated'] = PropertiesPropertyIdGet200ResponsePropertyRecordCreated.constructFromObject(data['recordCreated']);
            }
            if (data.hasOwnProperty('recordModified')) {
                obj['recordModified'] = PropertiesPropertyIdGet200ResponsePropertyRecordModified.constructFromObject(data['recordModified']);
            }
            if (data.hasOwnProperty('propertyInfo')) {
                obj['propertyInfo'] = PropertiesPropertyIdGet200ResponsePropertyPropertyInfo.constructFromObject(data['propertyInfo']);
            }
            if (data.hasOwnProperty('guestInfo')) {
                obj['guestInfo'] = PropertiesPropertyIdGet200ResponsePropertyGuestInfo.constructFromObject(data['guestInfo']);
            }
            if (data.hasOwnProperty('awardList')) {
                obj['awardList'] = ApiClient.convertToType(data['awardList'], [PropertiesPropertyIdGet200ResponsePropertyAwardListInner]);
            }
            if (data.hasOwnProperty('contactList')) {
                obj['contactList'] = ApiClient.convertToType(data['contactList'], [PropertiesPropertyIdGet200ResponsePropertyContactListInner]);
            }
            if (data.hasOwnProperty('facilityInfo')) {
                obj['facilityInfo'] = PropertiesPropertyIdGet200ResponsePropertyFacilityInfo.constructFromObject(data['facilityInfo']);
            }
            if (data.hasOwnProperty('mediaList')) {
                obj['mediaList'] = ApiClient.convertToType(data['mediaList'], [PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner]);
            }
            if (data.hasOwnProperty('geo')) {
                obj['geo'] = ApiClient.convertToType(data['geo'], {'String': AvailablePropertiesInner1Geo});
            }
            if (data.hasOwnProperty('published')) {
                obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
            }
            if (data.hasOwnProperty('policyList')) {
                obj['policyList'] = ApiClient.convertToType(data['policyList'], [PropertiesPropertyIdGet200ResponsePropertyPolicyListInner]);
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('cancellationGracePeriod')) {
                obj['cancellationGracePeriod'] = PropertiesPropertyIdGet200ResponsePropertyCancellationGracePeriod.constructFromObject(data['cancellationGracePeriod']);
            }
            if (data.hasOwnProperty('serviceList')) {
                obj['serviceList'] = ApiClient.convertToType(data['serviceList'], [PropertiesPropertyIdGet200ResponsePropertyServiceListInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PropertiesPropertyIdGet200ResponseProperty</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropertiesPropertyIdGet200ResponseProperty</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PropertiesPropertyIdGet200ResponseProperty.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `recordCreated`
        if (data['recordCreated']) { // data not null
          PropertiesPropertyIdGet200ResponsePropertyRecordCreated.validateJSON(data['recordCreated']);
        }
        // validate the optional field `recordModified`
        if (data['recordModified']) { // data not null
          PropertiesPropertyIdGet200ResponsePropertyRecordModified.validateJSON(data['recordModified']);
        }
        // validate the optional field `propertyInfo`
        if (data['propertyInfo']) { // data not null
          PropertiesPropertyIdGet200ResponsePropertyPropertyInfo.validateJSON(data['propertyInfo']);
        }
        // validate the optional field `guestInfo`
        if (data['guestInfo']) { // data not null
          PropertiesPropertyIdGet200ResponsePropertyGuestInfo.validateJSON(data['guestInfo']);
        }
        if (data['awardList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['awardList'])) {
                throw new Error("Expected the field `awardList` to be an array in the JSON data but got " + data['awardList']);
            }
            // validate the optional field `awardList` (array)
            for (const item of data['awardList']) {
                PropertiesPropertyIdGet200ResponsePropertyAwardListInner.validateJsonObject(item);
            };
        }
        if (data['contactList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['contactList'])) {
                throw new Error("Expected the field `contactList` to be an array in the JSON data but got " + data['contactList']);
            }
            // validate the optional field `contactList` (array)
            for (const item of data['contactList']) {
                PropertiesPropertyIdGet200ResponsePropertyContactListInner.validateJsonObject(item);
            };
        }
        // validate the optional field `facilityInfo`
        if (data['facilityInfo']) { // data not null
          PropertiesPropertyIdGet200ResponsePropertyFacilityInfo.validateJSON(data['facilityInfo']);
        }
        if (data['mediaList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['mediaList'])) {
                throw new Error("Expected the field `mediaList` to be an array in the JSON data but got " + data['mediaList']);
            }
            // validate the optional field `mediaList` (array)
            for (const item of data['mediaList']) {
                PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner.validateJsonObject(item);
            };
        }
        if (data['policyList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['policyList'])) {
                throw new Error("Expected the field `policyList` to be an array in the JSON data but got " + data['policyList']);
            }
            // validate the optional field `policyList` (array)
            for (const item of data['policyList']) {
                PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['uri'] && !(typeof data['uri'] === 'string' || data['uri'] instanceof String)) {
            throw new Error("Expected the field `uri` to be a primitive type in the JSON string but got " + data['uri']);
        }
        // validate the optional field `cancellationGracePeriod`
        if (data['cancellationGracePeriod']) { // data not null
          PropertiesPropertyIdGet200ResponsePropertyCancellationGracePeriod.validateJSON(data['cancellationGracePeriod']);
        }
        if (data['serviceList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['serviceList'])) {
                throw new Error("Expected the field `serviceList` to be an array in the JSON data but got " + data['serviceList']);
            }
            // validate the optional field `serviceList` (array)
            for (const item of data['serviceList']) {
                PropertiesPropertyIdGet200ResponsePropertyServiceListInner.validateJsonObject(item);
            };
        }

        return true;
    }


}

PropertiesPropertyIdGet200ResponseProperty.RequiredProperties = ["code", "name", "recordCreated", "recordModified", "propertyInfo", "awardList", "contactList", "mediaList", "published", "policyList", "serviceList"];

/**
 * The properties unique identifier.
 * @member {String} code
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['code'] = undefined;

/**
 * The properties name.
 * @member {String} name
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['name'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyRecordCreated} recordCreated
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['recordCreated'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyRecordModified} recordModified
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['recordModified'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPropertyInfo} propertyInfo
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['propertyInfo'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyGuestInfo} guestInfo
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['guestInfo'] = undefined;

/**
 * A list of the ratings available for this property.
 * @member {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyAwardListInner>} awardList
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['awardList'] = undefined;

/**
 * A contact with a profile type and a list of addresses
 * @member {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyContactListInner>} contactList
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['contactList'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyFacilityInfo} facilityInfo
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['facilityInfo'] = undefined;

/**
 * A list of media objects for the property.
 * @member {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner>} mediaList
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['mediaList'] = undefined;

/**
 * An object containing language codes as keys and objects describing the properties geographical location as values.
 * @member {Object.<String, module:com.lodgea/com.lodgea.model/AvailablePropertiesInner1Geo>} geo
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['geo'] = undefined;

/**
 * Indicates whether the policy has been published or not.
 * @member {Boolean} published
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['published'] = undefined;

/**
 * A list of policies associated with the property.
 * @member {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyPolicyListInner>} policyList
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['policyList'] = undefined;

/**
 * A unique identifier for the accommodation.
 * @member {String} uri
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['uri'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyCancellationGracePeriod} cancellationGracePeriod
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['cancellationGracePeriod'] = undefined;

/**
 * A list of objects each describing an available service, its pricing and its availability.
 * @member {Array.<module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyServiceListInner>} serviceList
 */
PropertiesPropertyIdGet200ResponseProperty.prototype['serviceList'] = undefined;






export default PropertiesPropertyIdGet200ResponseProperty;

