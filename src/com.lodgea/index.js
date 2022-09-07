/**
 * lodgea-js
 * LODGEA SDK for Javascript. Check out https://docs.lodgea.io for more information.
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: support@lodgea.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AvailabilitySearch from './com.lodgea.model/AvailabilitySearch';
import LocationSearch from './com.lodgea.model/LocationSearch';
import PropertyGet from './com.lodgea.model/PropertyGet';
import V1AvailabilitySearchPost200Response from './com.lodgea.model/V1AvailabilitySearchPost200Response';
import V1AvailabilitySearchPost200ResponseListInner from './com.lodgea.model/V1AvailabilitySearchPost200ResponseListInner';
import V1AvailabilitySearchPost200ResponseListInnerAttractionListInner from './com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerAttractionListInner';
import V1AvailabilitySearchPost200ResponseListInnerAttractionListInnerDistance from './com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerAttractionListInnerDistance';
import V1AvailabilitySearchPost200ResponseListInnerGeo from './com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeo';
import V1AvailabilitySearchPost200ResponseListInnerGeoLocation from './com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeoLocation';
import V1AvailabilitySearchPost200ResponseListInnerLowestPrice from './com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerLowestPrice';
import V1AvailabilitySearchPost200ResponseListInnerMediaListInner from './com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerMediaListInner';
import V1LocationSearchPost200Response from './com.lodgea.model/V1LocationSearchPost200Response';
import V1LocationSearchPost200ResponseListInner from './com.lodgea.model/V1LocationSearchPost200ResponseListInner';
import V1PropertyGetPost200Response from './com.lodgea.model/V1PropertyGetPost200Response';
import V1PropertyGetPost200ResponseProductListInner from './com.lodgea.model/V1PropertyGetPost200ResponseProductListInner';
import V1PropertyGetPost200ResponseProductListInnerMealPlanListInner from './com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerMealPlanListInner';
import V1PropertyGetPost200ResponseProductListInnerPolicyInfo from './com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerPolicyInfo';
import V1PropertyGetPost200ResponseProductListInnerPolicyInfoCancellationPolicyListInner from './com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerPolicyInfoCancellationPolicyListInner';
import V1PropertyGetPost200ResponseProductListInnerRatePlanListInner from './com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRatePlanListInner';
import V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner from './com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner';
import V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInnerPriceList from './com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInnerPriceList';
import V1PropertyGetPost200ResponseProductListInnerRoomTypeListInner from './com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRoomTypeListInner';
import V1PropertyGetPost200ResponseProperty from './com.lodgea.model/V1PropertyGetPost200ResponseProperty';
import V1PropertyGetPost200ResponsePropertyAwardListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyAwardListInner';
import V1PropertyGetPost200ResponsePropertyCancellationGracePeriod from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyCancellationGracePeriod';
import V1PropertyGetPost200ResponsePropertyContactListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyContactListInner';
import V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner';
import V1PropertyGetPost200ResponsePropertyFacilityInfo from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfo';
import V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner';
import V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerAmenityListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerAmenityListInner';
import V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner';
import V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerRoomAmenityListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerRoomAmenityListInner';
import V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerTagListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerTagListInner';
import V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMessageListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMessageListInner';
import V1PropertyGetPost200ResponsePropertyGeo from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeo';
import V1PropertyGetPost200ResponsePropertyGeoDa from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoDa';
import V1PropertyGetPost200ResponsePropertyGeoDe from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoDe';
import V1PropertyGetPost200ResponsePropertyGeoDeLocation from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoDeLocation';
import V1PropertyGetPost200ResponsePropertyGeoEn from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoEn';
import V1PropertyGetPost200ResponsePropertyGeoNl from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoNl';
import V1PropertyGetPost200ResponsePropertyGuestInfo from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyGuestInfo';
import V1PropertyGetPost200ResponsePropertyMediaListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyMediaListInner';
import V1PropertyGetPost200ResponsePropertyMediaListInnerTagListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyMediaListInnerTagListInner';
import V1PropertyGetPost200ResponsePropertyPolicyListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyPolicyListInner';
import V1PropertyGetPost200ResponsePropertyPolicyListInnerPetsPolicy from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyPolicyListInnerPetsPolicy';
import V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner';
import V1PropertyGetPost200ResponsePropertyPropertyInfo from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfo';
import V1PropertyGetPost200ResponsePropertyPropertyInfoAcceptedPaymentListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfoAcceptedPaymentListInner';
import V1PropertyGetPost200ResponsePropertyPropertyInfoCategoryListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfoCategoryListInner';
import V1PropertyGetPost200ResponsePropertyPropertyInfoLocation from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfoLocation';
import V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner';
import V1PropertyGetPost200ResponsePropertyRecordCreated from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyRecordCreated';
import V1PropertyGetPost200ResponsePropertyRecordModified from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyRecordModified';
import V1PropertyGetPost200ResponsePropertyServiceListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyServiceListInner';
import V1PropertyGetPost200ResponsePropertyTransaction from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyTransaction';
import V1PropertyGetPost200ResponsePropertyTransactionExternalListInner from './com.lodgea.model/V1PropertyGetPost200ResponsePropertyTransactionExternalListInner';
import AvailabilityApi from './com.lodgea.controllers/AvailabilityApi';
import LocationApi from './com.lodgea.controllers/LocationApi';
import PropertyApi from './com.lodgea.controllers/PropertyApi';


/**
* LODGEA_SDK_for_Javascript__Check_out_https__docs_lodgea_io_for_more_information_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var LodgeaJs = require('com.lodgea/index'); // See note below*.
* var xxxSvc = new LodgeaJs.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new LodgeaJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['com.lodgea/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new LodgeaJs.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new LodgeaJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module com.lodgea/index
* @version 1.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:com.lodgea/ApiClient}
     */
    ApiClient,

    /**
     * The AvailabilitySearch model constructor.
     * @property {module:com.lodgea/com.lodgea.model/AvailabilitySearch}
     */
    AvailabilitySearch,

    /**
     * The LocationSearch model constructor.
     * @property {module:com.lodgea/com.lodgea.model/LocationSearch}
     */
    LocationSearch,

    /**
     * The PropertyGet model constructor.
     * @property {module:com.lodgea/com.lodgea.model/PropertyGet}
     */
    PropertyGet,

    /**
     * The V1AvailabilitySearchPost200Response model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200Response}
     */
    V1AvailabilitySearchPost200Response,

    /**
     * The V1AvailabilitySearchPost200ResponseListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInner}
     */
    V1AvailabilitySearchPost200ResponseListInner,

    /**
     * The V1AvailabilitySearchPost200ResponseListInnerAttractionListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerAttractionListInner}
     */
    V1AvailabilitySearchPost200ResponseListInnerAttractionListInner,

    /**
     * The V1AvailabilitySearchPost200ResponseListInnerAttractionListInnerDistance model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerAttractionListInnerDistance}
     */
    V1AvailabilitySearchPost200ResponseListInnerAttractionListInnerDistance,

    /**
     * The V1AvailabilitySearchPost200ResponseListInnerGeo model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeo}
     */
    V1AvailabilitySearchPost200ResponseListInnerGeo,

    /**
     * The V1AvailabilitySearchPost200ResponseListInnerGeoLocation model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerGeoLocation}
     */
    V1AvailabilitySearchPost200ResponseListInnerGeoLocation,

    /**
     * The V1AvailabilitySearchPost200ResponseListInnerLowestPrice model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerLowestPrice}
     */
    V1AvailabilitySearchPost200ResponseListInnerLowestPrice,

    /**
     * The V1AvailabilitySearchPost200ResponseListInnerMediaListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1AvailabilitySearchPost200ResponseListInnerMediaListInner}
     */
    V1AvailabilitySearchPost200ResponseListInnerMediaListInner,

    /**
     * The V1LocationSearchPost200Response model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1LocationSearchPost200Response}
     */
    V1LocationSearchPost200Response,

    /**
     * The V1LocationSearchPost200ResponseListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1LocationSearchPost200ResponseListInner}
     */
    V1LocationSearchPost200ResponseListInner,

    /**
     * The V1PropertyGetPost200Response model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200Response}
     */
    V1PropertyGetPost200Response,

    /**
     * The V1PropertyGetPost200ResponseProductListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInner}
     */
    V1PropertyGetPost200ResponseProductListInner,

    /**
     * The V1PropertyGetPost200ResponseProductListInnerMealPlanListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerMealPlanListInner}
     */
    V1PropertyGetPost200ResponseProductListInnerMealPlanListInner,

    /**
     * The V1PropertyGetPost200ResponseProductListInnerPolicyInfo model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerPolicyInfo}
     */
    V1PropertyGetPost200ResponseProductListInnerPolicyInfo,

    /**
     * The V1PropertyGetPost200ResponseProductListInnerPolicyInfoCancellationPolicyListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerPolicyInfoCancellationPolicyListInner}
     */
    V1PropertyGetPost200ResponseProductListInnerPolicyInfoCancellationPolicyListInner,

    /**
     * The V1PropertyGetPost200ResponseProductListInnerRatePlanListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRatePlanListInner}
     */
    V1PropertyGetPost200ResponseProductListInnerRatePlanListInner,

    /**
     * The V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner}
     */
    V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner,

    /**
     * The V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInnerPriceList model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInnerPriceList}
     */
    V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInnerPriceList,

    /**
     * The V1PropertyGetPost200ResponseProductListInnerRoomTypeListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProductListInnerRoomTypeListInner}
     */
    V1PropertyGetPost200ResponseProductListInnerRoomTypeListInner,

    /**
     * The V1PropertyGetPost200ResponseProperty model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponseProperty}
     */
    V1PropertyGetPost200ResponseProperty,

    /**
     * The V1PropertyGetPost200ResponsePropertyAwardListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyAwardListInner}
     */
    V1PropertyGetPost200ResponsePropertyAwardListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyCancellationGracePeriod model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyCancellationGracePeriod}
     */
    V1PropertyGetPost200ResponsePropertyCancellationGracePeriod,

    /**
     * The V1PropertyGetPost200ResponsePropertyContactListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyContactListInner}
     */
    V1PropertyGetPost200ResponsePropertyContactListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner}
     */
    V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyFacilityInfo model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfo}
     */
    V1PropertyGetPost200ResponsePropertyFacilityInfo,

    /**
     * The V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner}
     */
    V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerAmenityListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerAmenityListInner}
     */
    V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerAmenityListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner}
     */
    V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerRoomAmenityListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerRoomAmenityListInner}
     */
    V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerRoomAmenityListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerTagListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerTagListInner}
     */
    V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerTagListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMessageListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMessageListInner}
     */
    V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMessageListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyGeo model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeo}
     */
    V1PropertyGetPost200ResponsePropertyGeo,

    /**
     * The V1PropertyGetPost200ResponsePropertyGeoDa model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoDa}
     */
    V1PropertyGetPost200ResponsePropertyGeoDa,

    /**
     * The V1PropertyGetPost200ResponsePropertyGeoDe model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoDe}
     */
    V1PropertyGetPost200ResponsePropertyGeoDe,

    /**
     * The V1PropertyGetPost200ResponsePropertyGeoDeLocation model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoDeLocation}
     */
    V1PropertyGetPost200ResponsePropertyGeoDeLocation,

    /**
     * The V1PropertyGetPost200ResponsePropertyGeoEn model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoEn}
     */
    V1PropertyGetPost200ResponsePropertyGeoEn,

    /**
     * The V1PropertyGetPost200ResponsePropertyGeoNl model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGeoNl}
     */
    V1PropertyGetPost200ResponsePropertyGeoNl,

    /**
     * The V1PropertyGetPost200ResponsePropertyGuestInfo model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyGuestInfo}
     */
    V1PropertyGetPost200ResponsePropertyGuestInfo,

    /**
     * The V1PropertyGetPost200ResponsePropertyMediaListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyMediaListInner}
     */
    V1PropertyGetPost200ResponsePropertyMediaListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyMediaListInnerTagListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyMediaListInnerTagListInner}
     */
    V1PropertyGetPost200ResponsePropertyMediaListInnerTagListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyPolicyListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyPolicyListInner}
     */
    V1PropertyGetPost200ResponsePropertyPolicyListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyPolicyListInnerPetsPolicy model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyPolicyListInnerPetsPolicy}
     */
    V1PropertyGetPost200ResponsePropertyPolicyListInnerPetsPolicy,

    /**
     * The V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner}
     */
    V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyPropertyInfo model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfo}
     */
    V1PropertyGetPost200ResponsePropertyPropertyInfo,

    /**
     * The V1PropertyGetPost200ResponsePropertyPropertyInfoAcceptedPaymentListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfoAcceptedPaymentListInner}
     */
    V1PropertyGetPost200ResponsePropertyPropertyInfoAcceptedPaymentListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyPropertyInfoCategoryListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfoCategoryListInner}
     */
    V1PropertyGetPost200ResponsePropertyPropertyInfoCategoryListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyPropertyInfoLocation model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfoLocation}
     */
    V1PropertyGetPost200ResponsePropertyPropertyInfoLocation,

    /**
     * The V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner}
     */
    V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyRecordCreated model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyRecordCreated}
     */
    V1PropertyGetPost200ResponsePropertyRecordCreated,

    /**
     * The V1PropertyGetPost200ResponsePropertyRecordModified model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyRecordModified}
     */
    V1PropertyGetPost200ResponsePropertyRecordModified,

    /**
     * The V1PropertyGetPost200ResponsePropertyServiceListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyServiceListInner}
     */
    V1PropertyGetPost200ResponsePropertyServiceListInner,

    /**
     * The V1PropertyGetPost200ResponsePropertyTransaction model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyTransaction}
     */
    V1PropertyGetPost200ResponsePropertyTransaction,

    /**
     * The V1PropertyGetPost200ResponsePropertyTransactionExternalListInner model constructor.
     * @property {module:com.lodgea/com.lodgea.model/V1PropertyGetPost200ResponsePropertyTransactionExternalListInner}
     */
    V1PropertyGetPost200ResponsePropertyTransactionExternalListInner,

    /**
    * The AvailabilityApi service constructor.
    * @property {module:com.lodgea/com.lodgea.controllers/AvailabilityApi}
    */
    AvailabilityApi,

    /**
    * The LocationApi service constructor.
    * @property {module:com.lodgea/com.lodgea.controllers/LocationApi}
    */
    LocationApi,

    /**
    * The PropertyApi service constructor.
    * @property {module:com.lodgea/com.lodgea.controllers/PropertyApi}
    */
    PropertyApi
};
