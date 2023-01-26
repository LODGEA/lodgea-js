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
    instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner();
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

  describe('PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner', function() {
    it('should create an instance of PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner', function() {
      // uncomment below and update the code to test PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner();
      //expect(instance).to.be.a(LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner);
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner();
      //expect(instance).to.be();
    });

    it('should have the property end (base name: "end")', function() {
      // uncomment below and update the code to test the property end
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner();
      //expect(instance).to.be();
    });

    it('should have the property monday (base name: "monday")', function() {
      // uncomment below and update the code to test the property monday
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner();
      //expect(instance).to.be();
    });

    it('should have the property tuesday (base name: "tuesday")', function() {
      // uncomment below and update the code to test the property tuesday
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner();
      //expect(instance).to.be();
    });

    it('should have the property wednesday (base name: "wednesday")', function() {
      // uncomment below and update the code to test the property wednesday
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner();
      //expect(instance).to.be();
    });

    it('should have the property thursday (base name: "thursday")', function() {
      // uncomment below and update the code to test the property thursday
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner();
      //expect(instance).to.be();
    });

    it('should have the property friday (base name: "friday")', function() {
      // uncomment below and update the code to test the property friday
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner();
      //expect(instance).to.be();
    });

    it('should have the property saturday (base name: "saturday")', function() {
      // uncomment below and update the code to test the property saturday
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner();
      //expect(instance).to.be();
    });

    it('should have the property sunday (base name: "sunday")', function() {
      // uncomment below and update the code to test the property sunday
      //var instance = new LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner();
      //expect(instance).to.be();
    });

  });

}));
