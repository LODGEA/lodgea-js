# LodgeaJs.InlineResponse2003PropertyPolicyList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkInTime** | **Number** | Check-in time (unix timestamp in ms). | 
**checkOutTime** | **Number** | Check-out time (unix timestamp in ms). | 
**totalGuestCount** | **Number** | The maximum number of guests allowed. | [optional] 
**cancellationPolicyList** | [**[InlineResponse2003PropertyCancellationPolicyList]**](InlineResponse2003PropertyCancellationPolicyList.md) | List of cancellation policies. | 
**advanceBookingMin** | **Number** | The minimum number of days in advance a booking must be made | 
**advanceBookingMax** | **Number** | The maximum number of days in advance a booking can be made | 
**petsPolicy** | [**InlineResponse2003PropertyPetsPolicy**](InlineResponse2003PropertyPetsPolicy.md) |  | [optional] 
**prepaymentPolicy** | **String** | The type of the prepayment policy. | [optional] 
**guaranteePolicy** | [**InlineResponse2003PropertyGuaranteePolicy**](InlineResponse2003PropertyGuaranteePolicy.md) |  | [optional] 
**taxPolicyList** | [**[InlineResponse2003PropertyTaxPolicyList]**](InlineResponse2003PropertyTaxPolicyList.md) | A list of taxes and their policies. | 
**feePolicyList** | [**[InlineResponse2003PropertyFeePolicyList]**](InlineResponse2003PropertyFeePolicyList.md) | A list of fees and their policies. | 
**name** | **String** | The name of this policy. | [optional] 



## Enum: PrepaymentPolicyEnum


* `cancellation_fee_begins` (value: `"after_cancellation_fee_begins"`)

* `reservation_is_made` (value: `"after_reservation_is_made"`)




