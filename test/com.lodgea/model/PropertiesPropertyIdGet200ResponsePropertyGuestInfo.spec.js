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
    instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyGuestInfo();
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

  describe('PropertiesPropertyIdGet200ResponsePropertyGuestInfo', function() {
    it('should create an instance of PropertiesPropertyIdGet200ResponsePropertyGuestInfo', function() {
      // uncomment below and update the code to test PropertiesPropertyIdGet200ResponsePropertyGuestInfo
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyGuestInfo();
      //expect(instance).to.be.a(LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyGuestInfo);
    });

    it('should have the property guestAddressRequired (base name: "guestAddressRequired")', function() {
      // uncomment below and update the code to test the property guestAddressRequired
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyGuestInfo();
      //expect(instance).to.be();
    });

    it('should have the property guestContactNumberRequired (base name: "guestContactNumberRequired")', function() {
      // uncomment below and update the code to test the property guestContactNumberRequired
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyGuestInfo();
      //expect(instance).to.be();
    });

    it('should have the property guestNameListRequired (base name: "guestNameListRequired")', function() {
      // uncomment below and update the code to test the property guestNameListRequired
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyGuestInfo();
      //expect(instance).to.be();
    });

  });

}));
