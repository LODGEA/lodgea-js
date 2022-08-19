# LodgeaOtaServiceApiReference.LocationApi

All URIs are relative to *https://api.eu.lodgea.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1LocationSearchPost**](LocationApi.md#v1LocationSearchPost) | **POST** /v1/location/search | Search for Location



## v1LocationSearchPost

> V1LocationSearchPost200Response v1LocationSearchPost(locationSearch)

Search for Location

Get a location by search text in free from. This parameter is required.

### Example

```javascript
import LodgeaOtaServiceApiReference from 'lodgea_ota_service_api_reference';
let defaultClient = LodgeaOtaServiceApiReference.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LodgeaOtaServiceApiReference.LocationApi();
let locationSearch = new LodgeaOtaServiceApiReference.LocationSearch(); // LocationSearch | Free-text search criteria
apiInstance.v1LocationSearchPost(locationSearch, (error, data, response) => {
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
 **locationSearch** | [**LocationSearch**](LocationSearch.md)| Free-text search criteria | 

### Return type

[**V1LocationSearchPost200Response**](V1LocationSearchPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

