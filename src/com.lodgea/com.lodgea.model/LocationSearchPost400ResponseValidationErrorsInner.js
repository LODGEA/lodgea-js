/**
 * lodgea-js
 * LODGEA SDK for Javascript. Check out https://docs.lodgea.io for more information.
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
 * The LocationSearchPost400ResponseValidationErrorsInner model module.
 * @module com.lodgea/com.lodgea.model/LocationSearchPost400ResponseValidationErrorsInner
 * @version 1.1.0
 */
class LocationSearchPost400ResponseValidationErrorsInner {
    /**
     * Constructs a new <code>LocationSearchPost400ResponseValidationErrorsInner</code>.
     * A Zod issue. More fields can be present depending on the issue type.
     * @alias module:com.lodgea/com.lodgea.model/LocationSearchPost400ResponseValidationErrorsInner
     * @param code {module:com.lodgea/com.lodgea.model/LocationSearchPost400ResponseValidationErrorsInner.CodeEnum} The ZodIssueCode describing the issue.
     * @param message {String} A message describing the error in a human readable way.
     * @param path {Array.<String>} An array describing the position of the faulty property. The first segment will always be either \"body\", \"pathParameters\" or \"queryParameters\" indicating on which part of your request the error occurred.
     */
    constructor(code, message, path) { 
        
        LocationSearchPost400ResponseValidationErrorsInner.initialize(this, code, message, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, message, path) { 
        obj['code'] = code;
        obj['message'] = message;
        obj['path'] = path;
    }

    /**
     * Constructs a <code>LocationSearchPost400ResponseValidationErrorsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/LocationSearchPost400ResponseValidationErrorsInner} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/LocationSearchPost400ResponseValidationErrorsInner} The populated <code>LocationSearchPost400ResponseValidationErrorsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationSearchPost400ResponseValidationErrorsInner();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The ZodIssueCode describing the issue.
 * @member {module:com.lodgea/com.lodgea.model/LocationSearchPost400ResponseValidationErrorsInner.CodeEnum} code
 */
LocationSearchPost400ResponseValidationErrorsInner.prototype['code'] = undefined;

/**
 * A message describing the error in a human readable way.
 * @member {String} message
 */
LocationSearchPost400ResponseValidationErrorsInner.prototype['message'] = undefined;

/**
 * An array describing the position of the faulty property. The first segment will always be either \"body\", \"pathParameters\" or \"queryParameters\" indicating on which part of your request the error occurred.
 * @member {Array.<String>} path
 */
LocationSearchPost400ResponseValidationErrorsInner.prototype['path'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
LocationSearchPost400ResponseValidationErrorsInner['CodeEnum'] = {

    /**
     * value: "invalid_type"
     * @const
     */
    "invalid_type": "invalid_type",

    /**
     * value: "invalid_literal"
     * @const
     */
    "invalid_literal": "invalid_literal",

    /**
     * value: "custom"
     * @const
     */
    "custom": "custom",

    /**
     * value: "invalid_union"
     * @const
     */
    "invalid_union": "invalid_union",

    /**
     * value: "invalid_union_discriminator"
     * @const
     */
    "invalid_union_discriminator": "invalid_union_discriminator",

    /**
     * value: "invalid_enum_value"
     * @const
     */
    "invalid_enum_value": "invalid_enum_value",

    /**
     * value: "unrecognized_keys"
     * @const
     */
    "unrecognized_keys": "unrecognized_keys",

    /**
     * value: "invalid_arguments"
     * @const
     */
    "invalid_arguments": "invalid_arguments",

    /**
     * value: "invalid_return_type"
     * @const
     */
    "invalid_return_type": "invalid_return_type",

    /**
     * value: "invalid_date"
     * @const
     */
    "invalid_date": "invalid_date",

    /**
     * value: "invalid_string"
     * @const
     */
    "invalid_string": "invalid_string",

    /**
     * value: "too_small"
     * @const
     */
    "too_small": "too_small",

    /**
     * value: "too_big"
     * @const
     */
    "too_big": "too_big",

    /**
     * value: "invalid_intersection_types"
     * @const
     */
    "invalid_intersection_types": "invalid_intersection_types",

    /**
     * value: "not_multiple_of"
     * @const
     */
    "not_multiple_of": "not_multiple_of",

    /**
     * value: "not_finite"
     * @const
     */
    "not_finite": "not_finite"
};



export default LocationSearchPost400ResponseValidationErrorsInner;

