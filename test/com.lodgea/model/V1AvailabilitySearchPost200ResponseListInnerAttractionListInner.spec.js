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
    instance = new LodgeaJs.V1AvailabilitySearchPost200ResponseListInnerAttractionListInner();
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

  describe('V1AvailabilitySearchPost200ResponseListInnerAttractionListInner', function() {
    it('should create an instance of V1AvailabilitySearchPost200ResponseListInnerAttractionListInner', function() {
      // uncomment below and update the code to test V1AvailabilitySearchPost200ResponseListInnerAttractionListInner
      //var instance = new LodgeaJs.V1AvailabilitySearchPost200ResponseListInnerAttractionListInner();
      //expect(instance).to.be.a(LodgeaJs.V1AvailabilitySearchPost200ResponseListInnerAttractionListInner);
    });

    it('should have the property typeCode (base name: "typeCode")', function() {
      // uncomment below and update the code to test the property typeCode
      //var instance = new LodgeaJs.V1AvailabilitySearchPost200ResponseListInnerAttractionListInner();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LodgeaJs.V1AvailabilitySearchPost200ResponseListInnerAttractionListInner();
      //expect(instance).to.be();
    });

    it('should have the property distance (base name: "distance")', function() {
      // uncomment below and update the code to test the property distance
      //var instance = new LodgeaJs.V1AvailabilitySearchPost200ResponseListInnerAttractionListInner();
      //expect(instance).to.be();
    });

  });

}));
