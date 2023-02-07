# LodgeaJs.PropertiesPropertyIdGet200ResponseProductListInnerPolicyInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkInTime** | **Number** | Check-in time (unix timestamp in ms). | 
**checkOutTime** | **Number** | Check-out time (unix timestamp in ms). | 
**totalGuestCount** | **Number** | The maximum number of guests allowed. | [optional] 
**cancellationPolicyList** | [**[PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerCancellationPolicyListInner]**](PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerCancellationPolicyListInner.md) | List of cancellation policies. | 
**advanceBookingMin** | **Number** | The minimum number of days in advance a booking must be made | 
**advanceBookingMax** | **Number** | The maximum number of days in advance a booking can be made | 
**petsPolicy** | [**PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy**](PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerPetsPolicy.md) |  | [optional] 
**prepaymentPolicy** | **String** | The type of the prepayment policy. | [optional] 
**guaranteePolicy** | [**PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy**](PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerGuaranteePolicy.md) |  | [optional] 
**taxPolicyList** | [**[PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerTaxPolicyListInner]**](PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerTaxPolicyListInner.md) | A list of taxes and their policies. | 
**feePolicyList** | [**[PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerFeePolicyListInner]**](PropertiesPropertyIdGet200ResponsePropertyPolicyListInnerFeePolicyListInner.md) | A list of fees and their policies. | 
**name** | **String** | The name of this policy. | [optional] 



## Enum: PrepaymentPolicyEnum


* `cancellation_fee_begins` (value: `"after_cancellation_fee_begins"`)

* `reservation_is_made` (value: `"after_reservation_is_made"`)




