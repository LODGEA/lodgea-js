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
import V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerRoomAmenityListInner from './V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerRoomAmenityListInner';
import V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerTagListInner from './V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerTagListInner';

/**
 * The V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner model module.
 * @module com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner
 * @version 1.0.2
 */
class V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner
     */
    constructor() { 
        
        V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner} The populated <code>V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner();

            if (data.hasOwnProperty('isMainImage')) {
                obj['isMainImage'] = ApiClient.convertToType(data['isMainImage'], 'Boolean');
            }
            if (data.hasOwnProperty('sortOrder')) {
                obj['sortOrder'] = ApiClient.convertToType(data['sortOrder'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('tagList')) {
                obj['tagList'] = ApiClient.convertToType(data['tagList'], [V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerTagListInner]);
            }
            if (data.hasOwnProperty('moderationLabelList')) {
                obj['moderationLabelList'] = ApiClient.convertToType(data['moderationLabelList'], ['String']);
            }
            if (data.hasOwnProperty('detectionLabelList')) {
                obj['detectionLabelList'] = ApiClient.convertToType(data['detectionLabelList'], ['String']);
            }
            if (data.hasOwnProperty('propertyAmenityList')) {
                obj['propertyAmenityList'] = ApiClient.convertToType(data['propertyAmenityList'], ['String']);
            }
            if (data.hasOwnProperty('roomAmenityList')) {
                obj['roomAmenityList'] = ApiClient.convertToType(data['roomAmenityList'], [V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerRoomAmenityListInner]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isMainImage
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner.prototype['isMainImage'] = undefined;

/**
 * @member {Number} sortOrder
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner.prototype['sortOrder'] = undefined;

/**
 * @member {String} url
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner.prototype['url'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerTagListInner>} tagList
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner.prototype['tagList'] = undefined;

/**
 * @member {Array.<String>} moderationLabelList
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner.prototype['moderationLabelList'] = undefined;

/**
 * @member {Array.<String>} detectionLabelList
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner.prototype['detectionLabelList'] = undefined;

/**
 * @member {Array.<String>} propertyAmenityList
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner.prototype['propertyAmenityList'] = undefined;

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerRoomAmenityListInner>} roomAmenityList
 */
V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner.prototype['roomAmenityList'] = undefined;






export default V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner;

