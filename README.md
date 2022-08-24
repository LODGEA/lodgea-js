# lodgea_js

LodgeaJs - JavaScript client for lodgea_js
LODGEA SDK for Javascript. Check out https://lodgea.redoc.ly for more information.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install lodgea_js --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your lodgea_js from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var LodgeaJs = require('lodgea_js');

var defaultClient = LodgeaJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['apiKey'] = "Token"

var api = new LodgeaJs.AvailabilityApi()
var opts = {
  'availabilitySearch': new LodgeaJs.AvailabilitySearch() // {AvailabilitySearch} Search Criteria, all parameters are optional
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.v1AvailabilitySearchPost(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.eu.lodgea.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LodgeaJs.AvailabilityApi* | [**v1AvailabilitySearchPost**](docs/AvailabilityApi.md#v1AvailabilitySearchPost) | **POST** /v1/availability/search | Search for Availability
*LodgeaJs.LocationApi* | [**v1LocationSearchPost**](docs/LocationApi.md#v1LocationSearchPost) | **POST** /v1/location/search | Search for Location
*LodgeaJs.PropertyApi* | [**v1PropertyGetPost**](docs/PropertyApi.md#v1PropertyGetPost) | **POST** /v1/property/get | Get Property by ID


## Documentation for Models

 - [LodgeaJs.AvailabilitySearch](docs/AvailabilitySearch.md)
 - [LodgeaJs.LocationSearch](docs/LocationSearch.md)
 - [LodgeaJs.PropertyGet](docs/PropertyGet.md)
 - [LodgeaJs.V1AvailabilitySearchPost200Response](docs/V1AvailabilitySearchPost200Response.md)
 - [LodgeaJs.V1AvailabilitySearchPost200ResponseListInner](docs/V1AvailabilitySearchPost200ResponseListInner.md)
 - [LodgeaJs.V1AvailabilitySearchPost200ResponseListInnerAttractionListInner](docs/V1AvailabilitySearchPost200ResponseListInnerAttractionListInner.md)
 - [LodgeaJs.V1AvailabilitySearchPost200ResponseListInnerAttractionListInnerDistance](docs/V1AvailabilitySearchPost200ResponseListInnerAttractionListInnerDistance.md)
 - [LodgeaJs.V1AvailabilitySearchPost200ResponseListInnerGeo](docs/V1AvailabilitySearchPost200ResponseListInnerGeo.md)
 - [LodgeaJs.V1AvailabilitySearchPost200ResponseListInnerGeoLocation](docs/V1AvailabilitySearchPost200ResponseListInnerGeoLocation.md)
 - [LodgeaJs.V1AvailabilitySearchPost200ResponseListInnerLowestPrice](docs/V1AvailabilitySearchPost200ResponseListInnerLowestPrice.md)
 - [LodgeaJs.V1AvailabilitySearchPost200ResponseListInnerMediaListInner](docs/V1AvailabilitySearchPost200ResponseListInnerMediaListInner.md)
 - [LodgeaJs.V1LocationSearchPost200Response](docs/V1LocationSearchPost200Response.md)
 - [LodgeaJs.V1LocationSearchPost200ResponseListInner](docs/V1LocationSearchPost200ResponseListInner.md)
 - [LodgeaJs.V1PropertyGetPost200Response](docs/V1PropertyGetPost200Response.md)
 - [LodgeaJs.V1PropertyGetPost200ResponseProductListInner](docs/V1PropertyGetPost200ResponseProductListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponseProductListInnerMealPlanListInner](docs/V1PropertyGetPost200ResponseProductListInnerMealPlanListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponseProductListInnerPolicyInfo](docs/V1PropertyGetPost200ResponseProductListInnerPolicyInfo.md)
 - [LodgeaJs.V1PropertyGetPost200ResponseProductListInnerPolicyInfoCancellationPolicyListInner](docs/V1PropertyGetPost200ResponseProductListInnerPolicyInfoCancellationPolicyListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponseProductListInnerRatePlanListInner](docs/V1PropertyGetPost200ResponseProductListInnerRatePlanListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner](docs/V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInnerPriceList](docs/V1PropertyGetPost200ResponseProductListInnerRatePlanListInnerPricingListInnerPriceList.md)
 - [LodgeaJs.V1PropertyGetPost200ResponseProductListInnerRoomTypeListInner](docs/V1PropertyGetPost200ResponseProductListInnerRoomTypeListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponseProperty](docs/V1PropertyGetPost200ResponseProperty.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyAwardListInner](docs/V1PropertyGetPost200ResponsePropertyAwardListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyCancellationGracePeriod](docs/V1PropertyGetPost200ResponsePropertyCancellationGracePeriod.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyContactListInner](docs/V1PropertyGetPost200ResponsePropertyContactListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner](docs/V1PropertyGetPost200ResponsePropertyContactListInnerAddressListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfo](docs/V1PropertyGetPost200ResponsePropertyFacilityInfo.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner](docs/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerAmenityListInner](docs/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerAmenityListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner](docs/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerRoomAmenityListInner](docs/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerRoomAmenityListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerTagListInner](docs/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInnerTagListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMessageListInner](docs/V1PropertyGetPost200ResponsePropertyFacilityInfoGuestRoomListInnerMessageListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyGeo](docs/V1PropertyGetPost200ResponsePropertyGeo.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDa](docs/V1PropertyGetPost200ResponsePropertyGeoDa.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDe](docs/V1PropertyGetPost200ResponsePropertyGeoDe.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoDeLocation](docs/V1PropertyGetPost200ResponsePropertyGeoDeLocation.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoEn](docs/V1PropertyGetPost200ResponsePropertyGeoEn.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyGeoNl](docs/V1PropertyGetPost200ResponsePropertyGeoNl.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyGuestInfo](docs/V1PropertyGetPost200ResponsePropertyGuestInfo.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyMediaListInner](docs/V1PropertyGetPost200ResponsePropertyMediaListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyMediaListInnerTagListInner](docs/V1PropertyGetPost200ResponsePropertyMediaListInnerTagListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyPolicyListInner](docs/V1PropertyGetPost200ResponsePropertyPolicyListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyPolicyListInnerPetsPolicy](docs/V1PropertyGetPost200ResponsePropertyPolicyListInnerPetsPolicy.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner](docs/V1PropertyGetPost200ResponsePropertyPolicyListInnerTaxPolicyListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyPropertyInfo](docs/V1PropertyGetPost200ResponsePropertyPropertyInfo.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyPropertyInfoAcceptedPaymentListInner](docs/V1PropertyGetPost200ResponsePropertyPropertyInfoAcceptedPaymentListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyPropertyInfoCategoryListInner](docs/V1PropertyGetPost200ResponsePropertyPropertyInfoCategoryListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyPropertyInfoLocation](docs/V1PropertyGetPost200ResponsePropertyPropertyInfoLocation.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner](docs/V1PropertyGetPost200ResponsePropertyPropertyInfoMessageListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyRecordCreated](docs/V1PropertyGetPost200ResponsePropertyRecordCreated.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyRecordModified](docs/V1PropertyGetPost200ResponsePropertyRecordModified.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyServiceListInner](docs/V1PropertyGetPost200ResponsePropertyServiceListInner.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyTransaction](docs/V1PropertyGetPost200ResponsePropertyTransaction.md)
 - [LodgeaJs.V1PropertyGetPost200ResponsePropertyTransactionExternalListInner](docs/V1PropertyGetPost200ResponsePropertyTransactionExternalListInner.md)


## Documentation for Authorization



### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: apiKey
- **Location**: HTTP header

