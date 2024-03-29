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
    instance = new LodgeaJs.InlineResponse2003PropertyServiceList();
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

  describe('InlineResponse2003PropertyServiceList', function() {
    it('should create an instance of InlineResponse2003PropertyServiceList', function() {
      // uncomment below and update the code to test InlineResponse2003PropertyServiceList
      //var instance = new LodgeaJs.InlineResponse2003PropertyServiceList();
      //expect(instance).to.be.a(LodgeaJs.InlineResponse2003PropertyServiceList);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new LodgeaJs.InlineResponse2003PropertyServiceList();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new LodgeaJs.InlineResponse2003PropertyServiceList();
      //expect(instance).to.be();
    });

    it('should have the property exists (base name: "exists")', function() {
      // uncomment below and update the code to test the property exists
      //var instance = new LodgeaJs.InlineResponse2003PropertyServiceList();
      //expect(instance).to.be();
    });

    it('should have the property included (base name: "included")', function() {
      // uncomment below and update the code to test the property included
      //var instance = new LodgeaJs.InlineResponse2003PropertyServiceList();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new LodgeaJs.InlineResponse2003PropertyServiceList();
      //expect(instance).to.be();
    });

    it('should have the property featureList (base name: "featureList")', function() {
      // uncomment below and update the code to test the property featureList
      //var instance = new LodgeaJs.InlineResponse2003PropertyServiceList();
      //expect(instance).to.be();
    });

    it('should have the property typeList (base name: "typeList")', function() {
      // uncomment below and update the code to test the property typeList
      //var instance = new LodgeaJs.InlineResponse2003PropertyServiceList();
      //expect(instance).to.be();
    });

    it('should have the property itemList (base name: "itemList")', function() {
      // uncomment below and update the code to test the property itemList
      //var instance = new LodgeaJs.InlineResponse2003PropertyServiceList();
      //expect(instance).to.be();
    });

    it('should have the property operationTimeList (base name: "operationTimeList")', function() {
      // uncomment below and update the code to test the property operationTimeList
      //var instance = new LodgeaJs.InlineResponse2003PropertyServiceList();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LodgeaJs.InlineResponse2003PropertyServiceList();
      //expect(instance).to.be();
    });

  });

}));
