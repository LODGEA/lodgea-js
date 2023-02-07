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
 * The PropertiesGet200ResponseListInner model module.
 * @module com.lodgea/com.lodgea.model/PropertiesGet200ResponseListInner
 * @version 1.1.5
 */
class PropertiesGet200ResponseListInner {
    /**
     * Constructs a new <code>PropertiesGet200ResponseListInner</code>.
     * @alias module:com.lodgea/com.lodgea.model/PropertiesGet200ResponseListInner
     * @param published {Boolean} Whether the property is in published state.
     * @param name {String} The name of the property.
     * @param propertyId {String} The unique identifier for the property.
     * @param image {String} The file name of the image for the property.
     * @param address {String} The address of the property.
     * @param lastUpdated {Number} The timestamp of the last update to the property (Unix in ms).
     */
    constructor(published, name, propertyId, image, address, lastUpdated) { 
        
        PropertiesGet200ResponseListInner.initialize(this, published, name, propertyId, image, address, lastUpdated);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, published, name, propertyId, image, address, lastUpdated) { 
        obj['published'] = published;
        obj['name'] = name;
        obj['propertyId'] = propertyId;
        obj['image'] = image;
        obj['address'] = address;
        obj['lastUpdated'] = lastUpdated;
    }

    /**
     * Constructs a <code>PropertiesGet200ResponseListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/PropertiesGet200ResponseListInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/PropertiesGet200ResponseListInner} The populated <code>PropertiesGet200ResponseListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertiesGet200ResponseListInner();

            if (data.hasOwnProperty('published')) {
                obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('lastUpdated')) {
                obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PropertiesGet200ResponseListInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropertiesGet200ResponseListInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PropertiesGet200ResponseListInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['propertyId'] && !(typeof data['propertyId'] === 'string' || data['propertyId'] instanceof String)) {
            throw new Error("Expected the field `propertyId` to be a primitive type in the JSON string but got " + data['propertyId']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }

        return true;
    }


}

PropertiesGet200ResponseListInner.RequiredProperties = ["published", "name", "propertyId", "image", "address", "lastUpdated"];

/**
 * Whether the property is in published state.
 * @member {Boolean} published
 */
PropertiesGet200ResponseListInner.prototype['published'] = undefined;

/**
 * The name of the property.
 * @member {String} name
 */
PropertiesGet200ResponseListInner.prototype['name'] = undefined;

/**
 * The unique identifier for the property.
 * @member {String} propertyId
 */
PropertiesGet200ResponseListInner.prototype['propertyId'] = undefined;

/**
 * The file name of the image for the property.
 * @member {String} image
 */
PropertiesGet200ResponseListInner.prototype['image'] = undefined;

/**
 * The address of the property.
 * @member {String} address
 */
PropertiesGet200ResponseListInner.prototype['address'] = undefined;

/**
 * The timestamp of the last update to the property (Unix in ms).
 * @member {Number} lastUpdated
 */
PropertiesGet200ResponseListInner.prototype['lastUpdated'] = undefined;






export default PropertiesGet200ResponseListInner;
