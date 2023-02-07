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

> InlineResponse2001 availabilitySearchPost(opts)

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
  'inlineObject1': new LodgeaJs.InlineObject1() // InlineObject1 | 
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
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## locationSearchPost

> InlineResponse200 locationSearchPost(opts)

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
  'inlineObject': new LodgeaJs.InlineObject() // InlineObject | 
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
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## propertiesGet

> InlineResponse2002 propertiesGet(opts)

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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## propertiesPropertyIdAvailabilityGet

> InlineResponse2004 propertiesPropertyIdAvailabilityGet(propertyId, currencyCode)

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

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## propertiesPropertyIdGet

> InlineResponse2003 propertiesPropertyIdGet(propertyId)

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

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

