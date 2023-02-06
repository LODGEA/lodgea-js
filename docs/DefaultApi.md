# LodgeaJs.DefaultApi

All URIs are relative to *https://api.eu.lodgea.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**availabilitySearchPost**](DefaultApi.md#availabilitySearchPost) | **POST** /availability/search | Search for availability
[**locationSearchPost**](DefaultApi.md#locationSearchPost) | **POST** /location/search | Search for location
[**propertiesGet**](DefaultApi.md#propertiesGet) | **GET** /properties | List (filtered) properties
[**propertiesPropertyIdAvailabilityGet**](DefaultApi.md#propertiesPropertyIdAvailabilityGet) | **GET** /properties/{propertyId}/availability | Get a properties availability
[**propertiesPropertyIdGet**](DefaultApi.md#propertiesPropertyIdGet) | **GET** /properties/{propertyId} | Get a properties details



## availabilitySearchPost

> AvailabilitySearchPost200Response availabilitySearchPost(opts)

Search for availability

Get availability information based on search criteria.

### Example

```javascript
import LodgeaJs from 'lodgea_js';
let defaultClient = LodgeaJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LodgeaJs.DefaultApi();
let opts = {
  'availabilitySearchPostRequest': new LodgeaJs.AvailabilitySearchPostRequest() // AvailabilitySearchPostRequest | 
};
apiInstance.availabilitySearchPost(opts, (error, data, response) => {
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
 **availabilitySearchPostRequest** | [**AvailabilitySearchPostRequest**](AvailabilitySearchPostRequest.md)|  | [optional] 

### Return type

[**AvailabilitySearchPost200Response**](AvailabilitySearchPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## locationSearchPost

> LocationSearchPost200Response locationSearchPost(opts)

Search for location

Get a list of locations and their lowest available rate related to a given keyword.

### Example

```javascript
import LodgeaJs from 'lodgea_js';
let defaultClient = LodgeaJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LodgeaJs.DefaultApi();
let opts = {
  'locationSearchPostRequest': new LodgeaJs.LocationSearchPostRequest() // LocationSearchPostRequest | 
};
apiInstance.locationSearchPost(opts, (error, data, response) => {
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
 **locationSearchPostRequest** | [**LocationSearchPostRequest**](LocationSearchPostRequest.md)|  | [optional] 

### Return type

[**LocationSearchPost200Response**](LocationSearchPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## propertiesGet

> PropertiesGet200Response propertiesGet(opts)

List (filtered) properties

List properties, optionally filtered by a keyword.

### Example

```javascript
import LodgeaJs from 'lodgea_js';
let defaultClient = LodgeaJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LodgeaJs.DefaultApi();
let opts = {
  'keyword': Strandresidenz Sylt, // String | 
  'pageToken': eyJ0ZW5hbnRDb2RlIjoiZG1vLWRlbW8iLCJuYW1lIjoiTGFuZGhhdXMgVHJlc2tlcnNhbmQiLCJwcm9wZXJ0eUlkIjoibGFuZGhhdXMtdHJlc2tlcnNhbmQifQ== // String | 
};
apiInstance.propertiesGet(opts, (error, data, response) => {
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
 **keyword** | **String**|  | [optional] 
 **pageToken** | **String**|  | [optional] 

### Return type

[**PropertiesGet200Response**](PropertiesGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## propertiesPropertyIdAvailabilityGet

> PropertiesPropertyIdAvailabilityGet200Response propertiesPropertyIdAvailabilityGet(propertyId, currencyCode)

Get a properties availability

Get detailed availability information for a specific property.

### Example

```javascript
import LodgeaJs from 'lodgea_js';
let defaultClient = LodgeaJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LodgeaJs.DefaultApi();
let propertyId = strandresidenz-sylt; // String | 
let currencyCode = EUR; // String | 
apiInstance.propertiesPropertyIdAvailabilityGet(propertyId, currencyCode, (error, data, response) => {
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
 **propertyId** | **String**|  | 
 **currencyCode** | **String**|  | 

### Return type

[**PropertiesPropertyIdAvailabilityGet200Response**](PropertiesPropertyIdAvailabilityGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## propertiesPropertyIdGet

> PropertiesPropertyIdGet200Response propertiesPropertyIdGet(propertyId)

Get a properties details

Get all information about a specific property by its ID.

### Example

```javascript
import LodgeaJs from 'lodgea_js';
let defaultClient = LodgeaJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LodgeaJs.DefaultApi();
let propertyId = strandresidenz-sylt; // String | 
apiInstance.propertiesPropertyIdGet(propertyId, (error, data, response) => {
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
 **propertyId** | **String**|  | 

### Return type

[**PropertiesPropertyIdGet200Response**](PropertiesPropertyIdGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

