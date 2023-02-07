/**
 * lodgea-js
 * LODGEA SDK for javascript. Check out https://docs.lodgea.io for more information.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support@lodgea.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse4001ValidationErrors from './InlineResponse4001ValidationErrors';

/**
 * The InlineResponse4001 model module.
 * @module com.lodgea/com.lodgea.model/InlineResponse4001
 * @version 1.2.0
 */
class InlineResponse4001 {
    /**
     * Constructs a new <code>InlineResponse4001</code>.
     * @alias module:com.lodgea/com.lodgea.model/InlineResponse4001
     * @param validationErrors {Array.<module:com.lodgea/com.lodgea.model/InlineResponse4001ValidationErrors>} 
     */
    constructor(validationErrors) { 
        
        InlineResponse4001.initialize(this, validationErrors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, validationErrors) { 
        obj['validationErrors'] = validationErrors;
    }

    /**
     * Constructs a <code>InlineResponse4001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/InlineResponse4001} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/InlineResponse4001} The populated <code>InlineResponse4001</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse4001();

            if (data.hasOwnProperty('validationErrors')) {
                obj['validationErrors'] = ApiClient.convertToType(data['validationErrors'], [InlineResponse4001ValidationErrors]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:com.lodgea/com.lodgea.model/InlineResponse4001ValidationErrors>} validationErrors
 */
InlineResponse4001.prototype['validationErrors'] = undefined;






export default InlineResponse4001;

