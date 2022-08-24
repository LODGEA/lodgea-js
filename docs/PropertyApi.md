# LodgeaJs.PropertyApi

All URIs are relative to *https://api.eu.lodgea.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PropertyGetPost**](PropertyApi.md#v1PropertyGetPost) | **POST** /v1/property/get | Get Property by ID



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

