# LodgeaJs.PropertyApi

All URIs are relative to *https://api.eu.lodgea.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PropertyGetPost**](PropertyApi.md#v1PropertyGetPost) | **POST** /v1/property/get | Get Property by ID
[**v1PropertyListPost**](PropertyApi.md#v1PropertyListPost) | **POST** /v1/property/list | List properties by a specific keyword



## v1PropertyGetPost

> V1PropertyGetPost200Response v1PropertyGetPost(propertyGet)

Get Property by ID

Get all information about a specific property by its ID. This parameter is required.

### Example

```javascript
import LodgeaJs from 'lodgea_js';
let defaultClient = LodgeaJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LodgeaJs.PropertyApi();
let propertyGet = new LodgeaJs.PropertyGet(); // PropertyGet | Provide the property ID to get more information about it
apiInstance.v1PropertyGetPost(propertyGet, (error, data, response) => {
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
 **propertyGet** | [**PropertyGet**](PropertyGet.md)| Provide the property ID to get more information about it | 

### Return type

[**V1PropertyGetPost200Response**](V1PropertyGetPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PropertyListPost

> V1PropertyListPost200Response v1PropertyListPost(propertyList)

List properties by a specific keyword

List properties by a specific keyword.

### Example

```javascript
import LodgeaJs from 'lodgea_js';
let defaultClient = LodgeaJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LodgeaJs.PropertyApi();
let propertyList = new LodgeaJs.PropertyList(); // PropertyList | Provide the search keyword and optionally a page token to fetch further responses. The page token can be added if additional results should be returned. It is a base64 encoded dictionary and included in the first response in case not all results were delivered
apiInstance.v1PropertyListPost(propertyList, (error, data, response) => {
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
 **propertyList** | [**PropertyList**](PropertyList.md)| Provide the search keyword and optionally a page token to fetch further responses. The page token can be added if additional results should be returned. It is a base64 encoded dictionary and included in the first response in case not all results were delivered | 

### Return type

[**V1PropertyListPost200Response**](V1PropertyListPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

