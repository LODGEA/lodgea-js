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

/**
 * The V1PropertyGetPost200ResponsePropertyServiceListInner model module.
 * @module com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyServiceListInner
 * @version 1.0.0
 */
class V1PropertyGetPost200ResponsePropertyServiceListInner {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponsePropertyServiceListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyServiceListInner
     */
    constructor() { 
        
        V1PropertyGetPost200ResponsePropertyServiceListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponsePropertyServiceListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyServiceListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyServiceListInner} The populated <code>V1PropertyGetPost200ResponsePropertyServiceListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponsePropertyServiceListInner();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('exists')) {
                obj['exists'] = ApiClient.convertToType(data['exists'], 'Boolean');
            }
            if (data.hasOwnProperty('included')) {
                obj['included'] = ApiClient.convertToType(data['included'], 'Boolean');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('featureList')) {
                obj['featureList'] = ApiClient.convertToType(data['featureList'], ['String']);
            }
            if (data.hasOwnProperty('typeList')) {
                obj['typeList'] = ApiClient.convertToType(data['typeList'], ['String']);
            }
            if (data.hasOwnProperty('itemList')) {
                obj['itemList'] = ApiClient.convertToType(data['itemList'], ['String']);
            }
            if (data.hasOwnProperty('operationTimeList')) {
                obj['operationTimeList'] = ApiClient.convertToType(data['operationTimeList'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} code
 */
V1PropertyGetPost200ResponsePropertyServiceListInner.prototype['code'] = undefined;

/**
 * @member {Number} price
 */
V1PropertyGetPost200ResponsePropertyServiceListInner.prototype['price'] = undefined;

/**
 * @member {Boolean} exists
 */
V1PropertyGetPost200ResponsePropertyServiceListInner.prototype['exists'] = undefined;

/**
 * @member {Boolean} included
 */
V1PropertyGetPost200ResponsePropertyServiceListInner.prototype['included'] = undefined;

/**
 * @member {String} currencyCode
 */
V1PropertyGetPost200ResponsePropertyServiceListInner.prototype['currencyCode'] = undefined;

/**
 * @member {Array.<String>} featureList
 */
V1PropertyGetPost200ResponsePropertyServiceListInner.prototype['featureList'] = undefined;

/**
 * @member {Array.<String>} typeList
 */
V1PropertyGetPost200ResponsePropertyServiceListInner.prototype['typeList'] = undefined;

/**
 * @member {Array.<String>} itemList
 */
V1PropertyGetPost200ResponsePropertyServiceListInner.prototype['itemList'] = undefined;

/**
 * @member {Array.<String>} operationTimeList
 */
V1PropertyGetPost200ResponsePropertyServiceListInner.prototype['operationTimeList'] = undefined;

/**
 * @member {String} name
 */
V1PropertyGetPost200ResponsePropertyServiceListInner.prototype['name'] = undefined;






export default V1PropertyGetPost200ResponsePropertyServiceListInner;

