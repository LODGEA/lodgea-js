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
    instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
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

  describe('V1PropertyGetPost200ResponsePropertyGeoDa', function() {
    it('should create an instance of V1PropertyGetPost200ResponsePropertyGeoDa', function() {
      // uncomment below and update the code to test V1PropertyGetPost200ResponsePropertyGeoDa
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be.a(LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa);
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property formattedAddress (base name: "formatted_address")', function() {
      // uncomment below and update the code to test the property formattedAddress
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property placeId (base name: "place_id")', function() {
      // uncomment below and update the code to test the property placeId
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property locality (base name: "locality")', function() {
      // uncomment below and update the code to test the property locality
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property administrativeAreaLevel3 (base name: "administrative_area_level_3")', function() {
      // uncomment below and update the code to test the property administrativeAreaLevel3
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property administrativeAreaLevel1 (base name: "administrative_area_level_1")', function() {
      // uncomment below and update the code to test the property administrativeAreaLevel1
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property stateCode (base name: "state_code")', function() {
      // uncomment below and update the code to test the property stateCode
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "country_code")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal_code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property naturalFeature (base name: "natural_feature")', function() {
      // uncomment below and update the code to test the property naturalFeature
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property establishment (base name: "establishment")', function() {
      // uncomment below and update the code to test the property establishment
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property sublocality (base name: "sublocality")', function() {
      // uncomment below and update the code to test the property sublocality
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property sublocalityLevel1 (base name: "sublocality_level_1")', function() {
      // uncomment below and update the code to test the property sublocalityLevel1
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property streetNumber (base name: "street_number")', function() {
      // uncomment below and update the code to test the property streetNumber
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

    it('should have the property route (base name: "route")', function() {
      // uncomment below and update the code to test the property route
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa();
      //expect(instance).to.be();
    });

  });

}));
