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
    instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyAwardListInner();
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

  describe('V1PropertyGetPost200ResponsePropertyAwardListInner', function() {
    it('should create an instance of V1PropertyGetPost200ResponsePropertyAwardListInner', function() {
      // uncomment below and update the code to test V1PropertyGetPost200ResponsePropertyAwardListInner
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyAwardListInner();
      //expect(instance).to.be.a(LodgeaJs.V1PropertyGetPost200ResponsePropertyAwardListInner);
    });

    it('should have the property provider (base name: "provider")', function() {
      // uncomment below and update the code to test the property provider
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyAwardListInner();
      //expect(instance).to.be();
    });

    it('should have the property rating (base name: "rating")', function() {
      // uncomment below and update the code to test the property rating
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyAwardListInner();
      //expect(instance).to.be();
    });

  });

}));
