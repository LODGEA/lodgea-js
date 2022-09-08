/**
 * lodgea-js
 * LODGEA SDK for Javascript. Check out https://docs.lodgea.io for more information.
 *
 * The version of the OpenAPI document: 1.0.2
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
    instance = new LodgeaJs.V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner();
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

  describe('V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner', function() {
    it('should create an instance of V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner', function() {
      // uncomment below and update the code to test V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner
      //var instance = new LodgeaJs.V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner();
      //expect(instance).to.be.a(LodgeaJs.V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner);
    });

    it('should have the property dateTime (base name: "dateTime")', function() {
      // uncomment below and update the code to test the property dateTime
      //var instance = new LodgeaJs.V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner();
      //expect(instance).to.be();
    });

    it('should have the property occupancy (base name: "occupancy")', function() {
      // uncomment below and update the code to test the property occupancy
      //var instance = new LodgeaJs.V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner();
      //expect(instance).to.be();
    });

    it('should have the property priceList (base name: "priceList")', function() {
      // uncomment below and update the code to test the property priceList
      //var instance = new LodgeaJs.V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new LodgeaJs.V1AvailabilityGetPost200ResponseRatePlanListInnerPricingListInner();
      //expect(instance).to.be();
    });

  });

}));