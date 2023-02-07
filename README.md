# lodgea_js

LodgeaJs - JavaScript client for lodgea_js
LODGEA SDK for javascript. Check out https://docs.lodgea.io for more information.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.1.0
- Package version: 1.1.5
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

var api = new LodgeaJs.DefaultApi()
var opts = {
  'availabilitySearchPostRequest': new LodgeaJs.AvailabilitySearchPostRequest() // {AvailabilitySearchPostRequest} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.availabilitySearchPost(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.eu.lodgea.io/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LodgeaJs.DefaultApi* | [**availabilitySearchPost**](docs/DefaultApi.md#availabilitySearchPost) | **POST** /availability/search | Search for availability
*LodgeaJs.DefaultApi* | [**locationSearchPost**](docs/DefaultApi.md#locationSearchPost) | **POST** /location/search | Search for location
*LodgeaJs.DefaultApi* | [**propertiesGet**](docs/DefaultApi.md#propertiesGet) | **GET** /properties | List (filtered) properties
*LodgeaJs.DefaultApi* | [**propertiesPropertyIdAvailabilityGet**](docs/DefaultApi.md#propertiesPropertyIdAvailabilityGet) | **GET** /properties/{propertyId}/availability | Get a properties availability
*LodgeaJs.DefaultApi* | [**propertiesPropertyIdGet**](docs/DefaultApi.md#propertiesPropertyIdGet) | **GET** /properties/{propertyId} | Get a properties details


## Documentation for Models

 - [LodgeaJs.AvailabilitySearchPost200Response](docs/AvailabilitySearchPost200Response.md)
 - [LodgeaJs.AvailabilitySearchPostRequest](docs/AvailabilitySearchPostRequest.md)
 - [LodgeaJs.AvailablePropertiesInner](docs/AvailablePropertiesInner.md)
 - [LodgeaJs.AvailablePropertiesInner1](docs/AvailablePropertiesInner1.md)
 - [LodgeaJs.AvailablePropertiesInner1AttractionListInner](docs/AvailablePropertiesInner1AttractionListInner.md)
 - [LodgeaJs.AvailablePropertiesInner1AttractionListInnerDistance](docs/AvailablePropertiesInner1AttractionListInnerDistance.md)
 - [LodgeaJs.AvailablePropertiesInner1Geo](docs/AvailablePropertiesInner1Geo.md)
 - [LodgeaJs.AvailablePropertiesInner1GeoLocation](docs/AvailablePropertiesInner1GeoLocation.md)
 - [LodgeaJs.AvailablePropertiesInner1LowestPrice](docs/AvailablePropertiesInner1LowestPrice.md)
 - [LodgeaJs.AvailablePropertiesInner1MediaListInner](docs/AvailablePropertiesInner1MediaListInner.md)
 - [LodgeaJs.LocationSearchPost200Response](docs/LocationSearchPost200Response.md)
 - [LodgeaJs.LocationSearchPost400Response](docs/LocationSearchPost400Response.md)
 - [LodgeaJs.LocationSearchPost400ResponseValidationErrorsInner](docs/LocationSearchPost400ResponseValidationErrorsInner.md)
 - [LodgeaJs.LocationSearchPostRequest](docs/LocationSearchPostRequest.md)
 - [LodgeaJs.PropertiesGet200Response](docs/PropertiesGet200Response.md)
 - [LodgeaJs.PropertiesGet200ResponseListInner](docs/PropertiesGet200ResponseListInner.md)
 - [LodgeaJs.PropertiesPropertyIdAvailabilityGet200Response](docs/PropertiesPropertyIdAvailabilityGet200Response.md)
 - [LodgeaJs.PropertiesPropertyIdAvailabilityGet200ResponseAvailabilityListInner](docs/PropertiesPropertyIdAvailabilityGet200ResponseAvailabilityListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200Response](docs/PropertiesPropertyIdGet200Response.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponseProductListInner](docs/PropertiesPropertyIdGet200ResponseProductListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponseProductListInnerPolicyInfo](docs/PropertiesPropertyIdGet200ResponseProductListInnerPolicyInfo.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponseProductListInnerRatePlanListInner](docs/PropertiesPropertyIdGet200ResponseProductListInnerRatePlanListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponseProductListInnerRatePlanListInnerPricingListInner](docs/PropertiesPropertyIdGet200ResponseProductListInnerRatePlanListInnerPricingListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponseProperty](docs/PropertiesPropertyIdGet200ResponseProperty.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyAwardListInner](docs/PropertiesPropertyIdGet200ResponsePropertyAwardListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyCancellationGracePeriod](docs/PropertiesPropertyIdGet200ResponsePropertyCancellationGracePeriod.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyContactListInner](docs/PropertiesPropertyIdGet200ResponsePropertyContactListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyContactListInnerAddressListInner](docs/PropertiesPropertyIdGet200ResponsePropertyContactListInnerAddressListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyFacilityInfo](docs/PropertiesPropertyIdGet200ResponsePropertyFacilityInfo.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInner](docs/PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInnerAmenityListInner](docs/PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInnerAmenityListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner](docs/PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInnerMediaListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInnerMessageListInner](docs/PropertiesPropertyIdGet200ResponsePropertyFacilityInfoGuestRoomListInnerMessageListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyGuestInfo](docs/PropertiesPropertyIdGet200ResponsePropertyGuestInfo.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyPolicyListInner](docs/PropertiesPropertyIdGet200ResponsePropertyPolicyListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerCancellationPolicyListInner](docs/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerCancellationPolicyListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerFeePolicyListInner](docs/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerFeePolicyListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy](docs/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy](docs/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerTaxPolicyListInner](docs/PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerTaxPolicyListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyPropertyInfo](docs/PropertiesPropertyIdGet200ResponsePropertyPropertyInfo.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyPropertyInfoAcceptedPaymentListInner](docs/PropertiesPropertyIdGet200ResponsePropertyPropertyInfoAcceptedPaymentListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyPropertyInfoMessageListInner](docs/PropertiesPropertyIdGet200ResponsePropertyPropertyInfoMessageListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyRecordCreated](docs/PropertiesPropertyIdGet200ResponsePropertyRecordCreated.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyRecordModified](docs/PropertiesPropertyIdGet200ResponsePropertyRecordModified.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInner](docs/PropertiesPropertyIdGet200ResponsePropertyServiceListInner.md)
 - [LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner](docs/PropertiesPropertyIdGet200ResponsePropertyServiceListInnerOperationTimeListInner.md)


## Documentation for Authorization



### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: apiKey
- **Location**: HTTP header

