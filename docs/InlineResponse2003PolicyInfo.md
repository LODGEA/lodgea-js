# LodgeaJs.InlineResponse2003PolicyInfo

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
**taxPolicyList** | [**[InlineResponse2003PolicyInfoTaxPolicyList]**](InlineResponse2003PolicyInfoTaxPolicyList.md) | A list of taxes and their policies. | 
**feePolicyList** | [**[InlineResponse2003PolicyInfoFeePolicyList]**](InlineResponse2003PolicyInfoFeePolicyList.md) | A list of fees and their policies. | 
**name** | **String** | The name of this policy. | [optional] 


