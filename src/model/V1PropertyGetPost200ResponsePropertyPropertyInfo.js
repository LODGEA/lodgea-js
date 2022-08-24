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
import V1PropertyGetPost200ResponsePropertyPropertyInfoAcceptedPaymentListInner from './V1PropertyGetPost200ResponsePropertyPropertyInfoAcceptedPaymentListInner';
import V1PropertyGetPost200ResponsePropertyPropertyInfoCategoryListInner from './V1PropertyGetPost200ResponsePropertyPropertyInfoCategoryListInner';
import V1PropertyGetPost200ResponsePropertyPropertyInfoLocation from './V1PropertyGetPost200ResponsePropertyPropertyInfoLocation';
import V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner from './V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner';

/**
 * The V1PropertyGetPost200ResponsePropertyPropertyInfo model module.
 * @module model/V1PropertyGetPost200ResponsePropertyPropertyInfo
 * @version 1.0.0
 */
class V1PropertyGetPost200ResponsePropertyPropertyInfo {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponsePropertyPropertyInfo</code>.
     * @alias module:model/V1PropertyGetPost200ResponsePropertyPropertyInfo
     */
    constructor() { 
        
        V1PropertyGetPost200ResponsePropertyPropertyInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponsePropertyPropertyInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PropertyGetPost200ResponsePropertyPropertyInfo} obj Optional instance to populate.
     * @return {module:model/V1PropertyGetPost200ResponsePropertyPropertyInfo} The populated <code>V1PropertyGetPost200ResponsePropertyPropertyInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponsePropertyPropertyInfo();

            if (data.hasOwnProperty('unitCount')) {
                obj['unitCount'] = ApiClient.convertToType(data['unitCount'], 'Number');
            }
            if (data.hasOwnProperty('messageList')) {
                obj['messageList'] = ApiClient.convertToType(data['messageList'], [V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner]);
            }
            if (data.hasOwnProperty('categoryList')) {
                obj['categoryList'] = ApiClient.convertToType(data['categoryList'], [V1PropertyGetPost200ResponsePropertyPropertyInfoCategoryListInner]);
            }
            if (data.hasOwnProperty('languageList')) {
                obj['languageList'] = ApiClient.convertToType(data['languageList'], ['String']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = V1PropertyGetPost200ResponsePropertyPropertyInfoLocation.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('acceptedPaymentList')) {
                obj['acceptedPaymentList'] = ApiClient.convertToType(data['acceptedPaymentList'], [V1PropertyGetPost200ResponsePropertyPropertyInfoAcceptedPaymentListInner]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} unitCount
 */
V1PropertyGetPost200ResponsePropertyPropertyInfo.prototype['unitCount'] = undefined;

/**
 * @member {Array.<module:model/V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner>} messageList
 */
V1PropertyGetPost200ResponsePropertyPropertyInfo.prototype['messageList'] = undefined;

/**
 * @member {Array.<module:model/V1PropertyGetPost200ResponsePropertyPropertyInfoCategoryListInner>} categoryList
 */
V1PropertyGetPost200ResponsePropertyPropertyInfo.prototype['categoryList'] = undefined;

/**
 * @member {Array.<String>} languageList
 */
V1PropertyGetPost200ResponsePropertyPropertyInfo.prototype['languageList'] = undefined;

/**
 * @member {module:model/V1PropertyGetPost200ResponsePropertyPropertyInfoLocation} location
 */
V1PropertyGetPost200ResponsePropertyPropertyInfo.prototype['location'] = undefined;

/**
 * @member {Array.<module:model/V1PropertyGetPost200ResponsePropertyPropertyInfoAcceptedPaymentListInner>} acceptedPaymentList
 */
V1PropertyGetPost200ResponsePropertyPropertyInfo.prototype['acceptedPaymentList'] = undefined;






export default V1PropertyGetPost200ResponsePropertyPropertyInfo;

