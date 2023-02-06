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

/**
 * The PropertiesPropertyIdGet200ResponsePropertyRecordModified model module.
 * @module com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyRecordModified
 * @version 1.1.5
 */
class PropertiesPropertyIdGet200ResponsePropertyRecordModified {
    /**
     * Constructs a new <code>PropertiesPropertyIdGet200ResponsePropertyRecordModified</code>.
     * Information regarding the last modification of the property object.
     * @alias module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyRecordModified
     * @param user {String} The user that performed the edit action on the property.
     * @param tenant {String} The tenant for which the user performed the edit action on the property.
     * @param time {Number} The timestamp at which the edit action was performed.
     */
    constructor(user, tenant, time) { 
        
        PropertiesPropertyIdGet200ResponsePropertyRecordModified.initialize(this, user, tenant, time);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, user, tenant, time) { 
        obj['user'] = user;
        obj['tenant'] = tenant;
        obj['time'] = time;
    }

    /**
     * Constructs a <code>PropertiesPropertyIdGet200ResponsePropertyRecordModified</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyRecordModified} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/PropertiesPropertyIdGet200ResponsePropertyRecordModified} The populated <code>PropertiesPropertyIdGet200ResponsePropertyRecordModified</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertiesPropertyIdGet200ResponsePropertyRecordModified();

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

    /**
     * Validates the JSON data with respect to <code>PropertiesPropertyIdGet200ResponsePropertyRecordModified</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropertiesPropertyIdGet200ResponsePropertyRecordModified</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PropertiesPropertyIdGet200ResponsePropertyRecordModified.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['user'] && !(typeof data['user'] === 'string' || data['user'] instanceof String)) {
            throw new Error("Expected the field `user` to be a primitive type in the JSON string but got " + data['user']);
        }
        // ensure the json data is a string
        if (data['tenant'] && !(typeof data['tenant'] === 'string' || data['tenant'] instanceof String)) {
            throw new Error("Expected the field `tenant` to be a primitive type in the JSON string but got " + data['tenant']);
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }

        return true;
    }


}

PropertiesPropertyIdGet200ResponsePropertyRecordModified.RequiredProperties = ["user", "tenant", "time"];

/**
 * The user that performed the edit action on the property.
 * @member {String} user
 */
PropertiesPropertyIdGet200ResponsePropertyRecordModified.prototype['user'] = undefined;

/**
 * The tenant for which the user performed the edit action on the property.
 * @member {String} tenant
 */
PropertiesPropertyIdGet200ResponsePropertyRecordModified.prototype['tenant'] = undefined;

/**
 * The role of the user that performed the edit action on the property.
 * @member {String} role
 */
PropertiesPropertyIdGet200ResponsePropertyRecordModified.prototype['role'] = undefined;

/**
 * The timestamp at which the edit action was performed.
 * @member {Number} time
 */
PropertiesPropertyIdGet200ResponsePropertyRecordModified.prototype['time'] = undefined;






export default PropertiesPropertyIdGet200ResponsePropertyRecordModified;

