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
    instance = new LodgeaJs.V1LocationSearchPost200ResponseListInner();
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

  describe('V1LocationSearchPost200ResponseListInner', function() {
    it('should create an instance of V1LocationSearchPost200ResponseListInner', function() {
      // uncomment below and update the code to test V1LocationSearchPost200ResponseListInner
      //var instance = new LodgeaJs.V1LocationSearchPost200ResponseListInner();
      //expect(instance).to.be.a(LodgeaJs.V1LocationSearchPost200ResponseListInner);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LodgeaJs.V1LocationSearchPost200ResponseListInner();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new LodgeaJs.V1LocationSearchPost200ResponseListInner();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new LodgeaJs.V1LocationSearchPost200ResponseListInner();
      //expect(instance).to.be();
    });

    it('should have the property lowestPrice (base name: "lowestPrice")', function() {
      // uncomment below and update the code to test the property lowestPrice
      //var instance = new LodgeaJs.V1LocationSearchPost200ResponseListInner();
      //expect(instance).to.be();
    });

    it('should have the property propertyId (base name: "propertyId")', function() {
      // uncomment below and update the code to test the property propertyId
      //var instance = new LodgeaJs.V1LocationSearchPost200ResponseListInner();
      //expect(instance).to.be();
    });

    it('should have the property propertyUriName (base name: "propertyUriName")', function() {
      // uncomment below and update the code to test the property propertyUriName
      //var instance = new LodgeaJs.V1LocationSearchPost200ResponseListInner();
      //expect(instance).to.be();
    });

    it('should have the property propertyUriPath (base name: "propertyUriPath")', function() {
      // uncomment below and update the code to test the property propertyUriPath
      //var instance = new LodgeaJs.V1LocationSearchPost200ResponseListInner();
      //expect(instance).to.be();
    });

  });

}));
