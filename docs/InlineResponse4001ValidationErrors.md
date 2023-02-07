# LodgeaJs.InlineResponse4001ValidationErrors

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | The ZodIssueCode describing the issue. | 
**message** | **String** | A message describing the error in a human readable way. | 
**path** | **[String]** | An array describing the position of the faulty property. The first segment will always be either \&quot;body\&quot;, \&quot;pathParameters\&quot; or \&quot;queryParameters\&quot; indicating on which part of your request the error occurred. | 



## Enum: CodeEnum


* `invalid_type` (value: `"invalid_type"`)

* `invalid_literal` (value: `"invalid_literal"`)

* `custom` (value: `"custom"`)

* `invalid_union` (value: `"invalid_union"`)

* `invalid_union_discriminator` (value: `"invalid_union_discriminator"`)

* `invalid_enum_value` (value: `"invalid_enum_value"`)

* `unrecognized_keys` (value: `"unrecognized_keys"`)

* `invalid_arguments` (value: `"invalid_arguments"`)

* `invalid_return_type` (value: `"invalid_return_type"`)

* `invalid_date` (value: `"invalid_date"`)

* `invalid_string` (value: `"invalid_string"`)

* `too_small` (value: `"too_small"`)

* `too_big` (value: `"too_big"`)

* `invalid_intersection_types` (value: `"invalid_intersection_types"`)

* `not_multiple_of` (value: `"not_multiple_of"`)

* `not_finite` (value: `"not_finite"`)




