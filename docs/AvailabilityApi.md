# LodgeaJs.AvailabilityApi

All URIs are relative to *https://api.eu.lodgea.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AvailabilityGetPost**](AvailabilityApi.md#v1AvailabilityGetPost) | **POST** /v1/availability/get | Get Availability for Property
[**v1AvailabilitySearchPost**](AvailabilityApi.md#v1AvailabilitySearchPost) | **POST** /v1/availability/search | Search for Availability



## v1AvailabilityGetPost

> V1AvailabilityGetPost200Response v1AvailabilityGetPost(availabilityGet)

Get Availability for Property

Get availability information based on a specific property.

### Example

```javascript
import LodgeaJs from 'lodgea_js';
let defaultClient = LodgeaJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LodgeaJs.AvailabilityApi();
let availabilityGet = new LodgeaJs.AvailabilityGet(); // AvailabilityGet | Availability get parameter
apiInstance.v1AvailabilityGetPost(availabilityGet, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **availabilityGet** | [**AvailabilityGet**](AvailabilityGet.md)| Availability get parameter | 

### Return type

[**V1AvailabilityGetPost200Response**](V1AvailabilityGetPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AvailabilitySearchPost

> V1AvailabilitySearchPost200Response v1AvailabilitySearchPost(opts)

Search for Availability

Get availability information based on search criteria. The possible values for the different content parameters are listed below. All parameters are optional.

### Example

```javascript
import LodgeaJs from 'lodgea_js';
let defaultClient = LodgeaJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LodgeaJs.AvailabilityApi();
let opts = {
  'availabilitySearch': new LodgeaJs.AvailabilitySearch() // AvailabilitySearch | Search Criteria, all parameters are optional
};
apiInstance.v1AvailabilitySearchPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **availabilitySearch** | [**AvailabilitySearch**](AvailabilitySearch.md)| Search Criteria, all parameters are optional | [optional] 

### Return type

[**V1AvailabilitySearchPost200Response**](V1AvailabilitySearchPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

