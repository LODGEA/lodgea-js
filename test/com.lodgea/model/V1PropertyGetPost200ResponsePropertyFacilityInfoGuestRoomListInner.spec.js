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
    instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
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

  describe('V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner', function() {
    it('should create an instance of V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner', function() {
      // uncomment below and update the code to test V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be.a(LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner);
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property roomId (base name: "roomId")', function() {
      // uncomment below and update the code to test the property roomId
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property typeName (base name: "typeName")', function() {
      // uncomment below and update the code to test the property typeName
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property descriptionText (base name: "descriptionText")', function() {
      // uncomment below and update the code to test the property descriptionText
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property imageList (base name: "imageList")', function() {
      // uncomment below and update the code to test the property imageList
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property roomTypeCode (base name: "roomTypeCode")', function() {
      // uncomment below and update the code to test the property roomTypeCode
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property isNonSmoking (base name: "isNonSmoking")', function() {
      // uncomment below and update the code to test the property isNonSmoking
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property roomTypeName (base name: "roomTypeName")', function() {
      // uncomment below and update the code to test the property roomTypeName
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property amenityList (base name: "amenityList")', function() {
      // uncomment below and update the code to test the property amenityList
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property maxOccupancy (base name: "maxOccupancy")', function() {
      // uncomment below and update the code to test the property maxOccupancy
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property messageList (base name: "messageList")', function() {
      // uncomment below and update the code to test the property messageList
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property mediaList (base name: "mediaList")', function() {
      // uncomment below and update the code to test the property mediaList
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property maxAdultOccupancy (base name: "maxAdultOccupancy")', function() {
      // uncomment below and update the code to test the property maxAdultOccupancy
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

    it('should have the property maxChildOccupancy (base name: "maxChildOccupancy")', function() {
      // uncomment below and update the code to test the property maxChildOccupancy
      //var instance = new LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner();
      //expect(instance).to.be();
    });

  });

}));
