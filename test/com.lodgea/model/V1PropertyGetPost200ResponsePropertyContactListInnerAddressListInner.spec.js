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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/com.lodgea/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/com.lodgea/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LodgeaJs);
  }
}(this, function(expect, LodgeaJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner', function() {
    it('should create an instance of V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner', function() {
      // uncomment below and update the code to test V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner();
      //expect(instance).to.be.a(LodgeaJs.V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner);
    });

    it('should have the property addressLine (base name: "addressLine")', function() {
      // uncomment below and update the code to test the property addressLine
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner();
      //expect(instance).to.be();
    });

    it('should have the property propertyName (base name: "propertyName")', function() {
      // uncomment below and update the code to test the property propertyName
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner();
      //expect(instance).to.be();
    });

    it('should have the property cityName (base name: "cityName")', function() {
      // uncomment below and update the code to test the property cityName
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "countryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner();
      //expect(instance).to.be();
    });

  });

}));
