/**
 * lodgea-js
 * LODGEA SDK for Javascript. Check out https://docs.lodgea.io for more information.
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: support@lodgea.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerAmenityListInner from './V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerAmenityListInner';
import V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner from './V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner';
import V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMessageListInner from './V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMessageListInner';

/**
 * The V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner model module.
 * @module com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner
 * @version 1.0.1
 */
class V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner
     */
    constructor() { 
        
        V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner} The populated <code>V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();

            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('roomId')) {
                obj['roomId'] = ApiClient.convertToType(data['roomId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('typeName')) {
                obj['typeName'] = ApiClient.convertToType(data['typeName'], 'String');
            }
            if (data.hasOwnProperty('descriptionText')) {
                obj['descriptionText'] = ApiClient.convertToType(data['descriptionText'], 'String');
            }
            if (data.hasOwnProperty('imageList')) {
                obj['imageList'] = ApiClient.convertToType(data['imageList'], ['String']);
            }
            if (data.hasOwnProperty('roomTypeCode')) {
                obj['roomTypeCode'] = ApiClient.convertToType(data['roomTypeCode'], 'String');
            }
            if (data.hasOwnProperty('isNonSmoking')) {
                obj['isNonSmoking'] = ApiClient.convertToType(data['isNonSmoking'], 'Boolean');
            }
            if (data.hasOwnProperty('roomTypeName')) {
                obj['roomTypeName'] = ApiClient.convertToType(data['roomTypeName'], 'String');
            }
            if (data.hasOwnProperty('amenityList')) {
                obj['amenityList'] = ApiClient.convertToType(data['amenityList'], [V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerAmenityListInner]);
            }
            if (data.hasOwnProperty('maxOccupancy')) {
                obj['maxOccupancy'] = ApiClient.convertToType(data['maxOccupancy'], 'String');
            }
            if (data.hasOwnProperty('messageList')) {
                obj['messageList'] = ApiClient.convertToType(data['messageList'], [V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMessageListInner]);
            }
            if (data.hasOwnProperty('mediaList')) {
                obj['mediaList'] = ApiClient.convertToType(data['mediaList'], [V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner]);
            }
            if (data.hasOwnProperty('maxAdultOccupancy')) {
                obj['maxAdultOccupancy'] = ApiClient.convertToType(data['maxAdultOccupancy'], 'String');
            }
            if (data.hasOwnProperty('maxChildOccupancy')) {
                obj['maxChildOccupancy'] = ApiClient.convertToType(data['maxChildOccupancy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isActive
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['isActive'] = undefined;

/**
 * @member {String} roomId
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['roomId'] = undefined;

/**
 * @member {String} name
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['name'] = undefined;

/**
 * @member {String} typeName
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['typeName'] = undefined;

/**
 * @member {String} descriptionText
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['descriptionText'] = undefined;

/**
 * @member {Array.<String>} imageList
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['imageList'] = undefined;

/**
 * @member {String} roomTypeCode
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['roomTypeCode'] = undefined;

/**
 * @member {Boolean} isNonSmoking
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['isNonSmoking'] = undefined;

/**
 * @member {String} roomTypeName
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['roomTypeName'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerAmenityListInner>} amenityList
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['amenityList'] = undefined;

/**
 * @member {String} maxOccupancy
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['maxOccupancy'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMessageListInner>} messageList
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['messageList'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner>} mediaList
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['mediaList'] = undefined;

/**
 * @member {String} maxAdultOccupancy
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['maxAdultOccupancy'] = undefined;

/**
 * @member {String} maxChildOccupancy
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.prototype['maxChildOccupancy'] = undefined;






export default V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner;

