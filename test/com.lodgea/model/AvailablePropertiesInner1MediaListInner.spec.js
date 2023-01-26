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
    instance = new LodgeaJs.AvailablePropertiesInner1MediaListInner();
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

  describe('AvailablePropertiesInner1MediaListInner', function() {
    it('should create an instance of AvailablePropertiesInner1MediaListInner', function() {
      // uncomment below and update the code to test AvailablePropertiesInner1MediaListInner
      //var instance = new LodgeaJs.AvailablePropertiesInner1MediaListInner();
      //expect(instance).to.be.a(LodgeaJs.AvailablePropertiesInner1MediaListInner);
    });

    it('should have the property tagList (base name: "tagList")', function() {
      // uncomment below and update the code to test the property tagList
      //var instance = new LodgeaJs.AvailablePropertiesInner1MediaListInner();
      //expect(instance).to.be();
    });

    it('should have the property isMainImage (base name: "isMainImage")', function() {
      // uncomment below and update the code to test the property isMainImage
      //var instance = new LodgeaJs.AvailablePropertiesInner1MediaListInner();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new LodgeaJs.AvailablePropertiesInner1MediaListInner();
      //expect(instance).to.be();
    });

    it('should have the property sortOrder (base name: "sortOrder")', function() {
      // uncomment below and update the code to test the property sortOrder
      //var instance = new LodgeaJs.AvailablePropertiesInner1MediaListInner();
      //expect(instance).to.be();
    });

  });

}));
