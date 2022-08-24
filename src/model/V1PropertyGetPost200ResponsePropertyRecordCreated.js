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
 * The V1PropertyGetPost200ResponsePropertyRecordCreated model module.
 * @module model/V1PropertyGetPost200ResponsePropertyRecordCreated
 * @version 1.0.0
 */
class V1PropertyGetPost200ResponsePropertyRecordCreated {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponsePropertyRecordCreated</code>.
     * @alias module:model/V1PropertyGetPost200ResponsePropertyRecordCreated
     */
    constructor() { 
        
        V1PropertyGetPost200ResponsePropertyRecordCreated.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponsePropertyRecordCreated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PropertyGetPost200ResponsePropertyRecordCreated} obj Optional instance to populate.
     * @return {module:model/V1PropertyGetPost200ResponsePropertyRecordCreated} The populated <code>V1PropertyGetPost200ResponsePropertyRecordCreated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponsePropertyRecordCreated();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = ApiClient.convertToType(data['tenant'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} user
 */
V1PropertyGetPost200ResponsePropertyRecordCreated.prototype['user'] = undefined;

/**
 * @member {String} tenant
 */
V1PropertyGetPost200ResponsePropertyRecordCreated.prototype['tenant'] = undefined;

/**
 * @member {String} role
 */
V1PropertyGetPost200ResponsePropertyRecordCreated.prototype['role'] = undefined;

/**
 * @member {Number} time
 */
V1PropertyGetPost200ResponsePropertyRecordCreated.prototype['time'] = undefined;






export default V1PropertyGetPost200ResponsePropertyRecordCreated;

