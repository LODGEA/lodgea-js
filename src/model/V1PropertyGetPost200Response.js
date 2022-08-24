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
import V1PropertyGetPost200ResponseProductListInner from './V1PropertyGetPost200ResponseProductListInner';
import V1PropertyGetPost200ResponseProperty from './V1PropertyGetPost200ResponseProperty';

/**
 * The V1PropertyGetPost200Response model module.
 * @module model/V1PropertyGetPost200Response
 * @version 1.0.0
 */
class V1PropertyGetPost200Response {
    /**
     * Constructs a new <code>V1PropertyGetPost200Response</code>.
     * @alias module:model/V1PropertyGetPost200Response
     */
    constructor() { 
        
        V1PropertyGetPost200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PropertyGetPost200Response} obj Optional instance to populate.
     * @return {module:model/V1PropertyGetPost200Response} The populated <code>V1PropertyGetPost200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200Response();

            if (data.hasOwnProperty('versionId')) {
                obj['versionId'] = ApiClient.convertToType(data['versionId'], 'String');
            }
            if (data.hasOwnProperty('property')) {
                obj['property'] = V1PropertyGetPost200ResponseProperty.constructFromObject(data['property']);
            }
            if (data.hasOwnProperty('productList')) {
                obj['productList'] = ApiClient.convertToType(data['productList'], [V1PropertyGetPost200ResponseProductListInner]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} versionId
 */
V1PropertyGetPost200Response.prototype['versionId'] = undefined;

/**
 * @member {module:model/V1PropertyGetPost200ResponseProperty} property
 */
V1PropertyGetPost200Response.prototype['property'] = undefined;

/**
 * @member {Array.<module:model/V1PropertyGetPost200ResponseProductListInner>} productList
 */
V1PropertyGetPost200Response.prototype['productList'] = undefined;






export default V1PropertyGetPost200Response;
