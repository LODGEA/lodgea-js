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
import V1PropertyGetPost200ResponseProductListInnerPolicyInfoCancellationPolicyListInner from './V1PropertyGetPost200ResponseProductListInnerPolicyInfoCancellationPolicyListInner';
import V1PropertyGetPost200ResponsePropertyPolicyListInnerPetsPolicy from './V1PropertyGetPost200ResponsePropertyPolicyListInnerPetsPolicy';
import V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner from './V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner';

/**
 * The V1PropertyGetPost200ResponseProductListInnerPolicyInfo model module.
 * @module model/V1PropertyGetPost200ResponseProductListInnerPolicyInfo
 * @version 1.0.0
 */
class V1PropertyGetPost200ResponseProductListInnerPolicyInfo {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponseProductListInnerPolicyInfo</code>.
     * @alias module:model/V1PropertyGetPost200ResponseProductListInnerPolicyInfo
     */
    constructor() { 
        
        V1PropertyGetPost200ResponseProductListInnerPolicyInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponseProductListInnerPolicyInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PropertyGetPost200ResponseProductListInnerPolicyInfo} obj Optional instance to populate.
     * @return {module:model/V1PropertyGetPost200ResponseProductListInnerPolicyInfo} The populated <code>V1PropertyGetPost200ResponseProductListInnerPolicyInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponseProductListInnerPolicyInfo();

            if (data.hasOwnProperty('checkInTime')) {
                obj['checkInTime'] = ApiClient.convertToType(data['checkInTime'], 'Number');
            }
            if (data.hasOwnProperty('checkOutTime')) {
                obj['checkOutTime'] = ApiClient.convertToType(data['checkOutTime'], 'Number');
            }
            if (data.hasOwnProperty('totalGuestCount')) {
                obj['totalGuestCount'] = ApiClient.convertToType(data['totalGuestCount'], 'Number');
            }
            if (data.hasOwnProperty('cancellationPolicyList')) {
                obj['cancellationPolicyList'] = ApiClient.convertToType(data['cancellationPolicyList'], [V1PropertyGetPost200ResponseProductListInnerPolicyInfoCancellationPolicyListInner]);
            }
            if (data.hasOwnProperty('advanceBookingMin')) {
                obj['advanceBookingMin'] = ApiClient.convertToType(data['advanceBookingMin'], 'Number');
            }
            if (data.hasOwnProperty('advanceBookingMax')) {
                obj['advanceBookingMax'] = ApiClient.convertToType(data['advanceBookingMax'], 'Number');
            }
            if (data.hasOwnProperty('petsPolicy')) {
                obj['petsPolicy'] = V1PropertyGetPost200ResponsePropertyPolicyListInnerPetsPolicy.constructFromObject(data['petsPolicy']);
            }
            if (data.hasOwnProperty('prepaymentPolicy')) {
                obj['prepaymentPolicy'] = ApiClient.convertToType(data['prepaymentPolicy'], 'String');
            }
            if (data.hasOwnProperty('guaranteePolicy')) {
                obj['guaranteePolicy'] = ApiClient.convertToType(data['guaranteePolicy'], 'String');
            }
            if (data.hasOwnProperty('taxPolicyList')) {
                obj['taxPolicyList'] = ApiClient.convertToType(data['taxPolicyList'], [V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner]);
            }
            if (data.hasOwnProperty('feePolicyList')) {
                obj['feePolicyList'] = ApiClient.convertToType(data['feePolicyList'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} checkInTime
 */
V1PropertyGetPost200ResponseProductListInnerPolicyInfo.prototype['checkInTime'] = undefined;

/**
 * @member {Number} checkOutTime
 */
V1PropertyGetPost200ResponseProductListInnerPolicyInfo.prototype['checkOutTime'] = undefined;

/**
 * @member {Number} totalGuestCount
 */
V1PropertyGetPost200ResponseProductListInnerPolicyInfo.prototype['totalGuestCount'] = undefined;

/**
 * @member {Array.<module:model/V1PropertyGetPost200ResponseProductListInnerPolicyInfoCancellationPolicyListInner>} cancellationPolicyList
 */
V1PropertyGetPost200ResponseProductListInnerPolicyInfo.prototype['cancellationPolicyList'] = undefined;

/**
 * @member {Number} advanceBookingMin
 */
V1PropertyGetPost200ResponseProductListInnerPolicyInfo.prototype['advanceBookingMin'] = undefined;

/**
 * @member {Number} advanceBookingMax
 */
V1PropertyGetPost200ResponseProductListInnerPolicyInfo.prototype['advanceBookingMax'] = undefined;

/**
 * @member {module:model/V1PropertyGetPost200ResponsePropertyPolicyListInnerPetsPolicy} petsPolicy
 */
V1PropertyGetPost200ResponseProductListInnerPolicyInfo.prototype['petsPolicy'] = undefined;

/**
 * @member {String} prepaymentPolicy
 */
V1PropertyGetPost200ResponseProductListInnerPolicyInfo.prototype['prepaymentPolicy'] = undefined;

/**
 * @member {String} guaranteePolicy
 */
V1PropertyGetPost200ResponseProductListInnerPolicyInfo.prototype['guaranteePolicy'] = undefined;

/**
 * @member {Array.<module:model/V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner>} taxPolicyList
 */
V1PropertyGetPost200ResponseProductListInnerPolicyInfo.prototype['taxPolicyList'] = undefined;

/**
 * @member {Array.<String>} feePolicyList
 */
V1PropertyGetPost200ResponseProductListInnerPolicyInfo.prototype['feePolicyList'] = undefined;

/**
 * @member {String} name
 */
V1PropertyGetPost200ResponseProductListInnerPolicyInfo.prototype['name'] = undefined;






export default V1PropertyGetPost200ResponseProductListInnerPolicyInfo;

