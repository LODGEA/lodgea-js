# LodgeaOtaServiceApiReference.AvailabilityApi

All URIs are relative to *https://api.eu.lodgea.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AvailabilitySearchPost**](AvailabilityApi.md#v1AvailabilitySearchPost) | **POST** /v1/availability/search | Search for Availability



## v1AvailabilitySearchPost

> V1AvailabilitySearchPost200Response v1AvailabilitySearchPost(opts)

Search for Availability

Get availability information based on search criteria. The possible values for the different content parameters are listed below. All parameters are optional.

### Example

```javascript
import LodgeaOtaServiceApiReference from 'lodgea_ota_service_api_reference';
let defaultClient = LodgeaOtaServiceApiReference.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LodgeaOtaServiceApiReference.AvailabilityApi();
let opts = {
  'availabilitySearch': new LodgeaOtaServiceApiReference.AvailabilitySearch() // AvailabilitySearch | Search Criteria, all parameters are optional
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

