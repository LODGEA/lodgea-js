/**
 * lodgea-js
 * LODGEA SDK for Javascript. Check out https://docs.lodgea.io for more information.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@lodgea.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1PropertyGetPost200ResponsePropertyGeoDa from './V1PropertyGetPost200ResponsePropertyGeoDa';
import V1PropertyGetPost200ResponsePropertyGeoDe from './V1PropertyGetPost200ResponsePropertyGeoDe';
import V1PropertyGetPost200ResponsePropertyGeoEn from './V1PropertyGetPost200ResponsePropertyGeoEn';
import V1PropertyGetPost200ResponsePropertyGeoNl from './V1PropertyGetPost200ResponsePropertyGeoNl';

/**
 * The V1PropertyGetPost200ResponsePropertyGeo model module.
 * @module com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeo
 * @version 1.0.0
 */
class V1PropertyGetPost200ResponsePropertyGeo {
    /**
     * Constructs a new <code>V1PropertyGetPost200ResponsePropertyGeo</code>.
     * @alias module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeo
     */
    constructor() { 
        
        V1PropertyGetPost200ResponsePropertyGeo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PropertyGetPost200ResponsePropertyGeo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeo} obj Optional instance to populate.
     * @return {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeo} The populated <code>V1PropertyGetPost200ResponsePropertyGeo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PropertyGetPost200ResponsePropertyGeo();

            if (data.hasOwnProperty('de')) {
                obj['de'] = V1PropertyGetPost200ResponsePropertyGeoDe.constructFromObject(data['de']);
            }
            if (data.hasOwnProperty('en')) {
                obj['en'] = V1PropertyGetPost200ResponsePropertyGeoEn.constructFromObject(data['en']);
            }
            if (data.hasOwnProperty('da')) {
                obj['da'] = V1PropertyGetPost200ResponsePropertyGeoDa.constructFromObject(data['da']);
            }
            if (data.hasOwnProperty('nl')) {
                obj['nl'] = V1PropertyGetPost200ResponsePropertyGeoNl.constructFromObject(data['nl']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoDe} de
 */
V1PropertyGetPost200ResponsePropertyGeo.prototype['de'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoEn} en
 */
V1PropertyGetPost200ResponsePropertyGeo.prototype['en'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoDa} da
 */
V1PropertyGetPost200ResponsePropertyGeo.prototype['da'] = undefined;

/**
 * @member {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoNl} nl
 */
V1PropertyGetPost200ResponsePropertyGeo.prototype['nl'] = undefined;






export default V1PropertyGetPost200ResponsePropertyGeo;

