# LodgeaJs.InlineResponse2003PropertyFeePolicyList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**typeCode** | **Number** | The code that represents the type of fee.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#feetype-codes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | 
**percent** | **Number** | The charged percentage if applicable. | [optional] 
**chargeType** | **String** | The type of charge. | 
**chargeFrequencyCode** | **Number** | The code that represents the frequency of charge.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#chargetype-codes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | 
**currencyCode** | **String** | The currency code of the currency in that the charge is applied.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#currencycodes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | 
**conditionList** | **[String]** | A list of conditions for the tax. Is empty if &lt;code&gt;chargeType&lt;/code&gt; is not &lt;code&gt;conditional&lt;/code&gt;. | 



## Enum: TypeCodeEnum


* `2` (value: `2`)

* `9` (value: `9`)

* `11` (value: `11`)

* `12` (value: `12`)

* `14` (value: `14`)

* `16` (value: `16`)

* `27` (value: `27`)

* `29` (value: `29`)

* `31` (value: `31`)

* `32` (value: `32`)

* `33` (value: `33`)

* `34` (value: `34`)

* `37` (value: `37`)

* `38` (value: `38`)

* `40` (value: `40`)

* `41` (value: `41`)

* `42` (value: `42`)

* `44` (value: `44`)

* `45` (value: `45`)

* `47` (value: `47`)

* `51` (value: `51`)

* `52` (value: `52`)

* `53` (value: `53`)

* `54` (value: `54`)

* `55` (value: `55`)

* `56` (value: `56`)

* `5000` (value: `5000`)

* `5003` (value: `5003`)

* `5005` (value: `5005`)

* `5006` (value: `5006`)

* `5009` (value: `5009`)

* `5010` (value: `5010`)

* `5011` (value: `5011`)

* `5012` (value: `5012`)

* `5013` (value: `5013`)

* `5014` (value: `5014`)

* `5015` (value: `5015`)

* `5016` (value: `5016`)

* `5017` (value: `5017`)

* `5018` (value: `5018`)

* `5019` (value: `5019`)

* `5020` (value: `5020`)

* `5021` (value: `5021`)

* `5022` (value: `5022`)

* `5023` (value: `5023`)

* `5024` (value: `5024`)

* `5025` (value: `5025`)

* `5026` (value: `5026`)

* `5027` (value: `5027`)

* `5028` (value: `5028`)

* `5029` (value: `5029`)

* `5030` (value: `5030`)

* `5031` (value: `5031`)

* `5032` (value: `5032`)

* `5033` (value: `5033`)

* `5035` (value: `5035`)

* `5036` (value: `5036`)

* `20001` (value: `20001`)





## Enum: ChargeTypeEnum


* `included` (value: `"included"`)

* `excluded` (value: `"excluded"`)

* `conditional` (value: `"conditional"`)





## Enum: ChargeFrequencyCodeEnum


* `1` (value: `1`)

* `2` (value: `2`)

* `7` (value: `7`)

* `10` (value: `10`)

* `12` (value: `12`)

* `17` (value: `17`)

* `19` (value: `19`)

* `20` (value: `20`)

* `21` (value: `21`)

* `25` (value: `25`)

* `31` (value: `31`)

* `5000` (value: `5000`)

* `5001` (value: `5001`)

* `5002` (value: `5002`)

* `5010` (value: `5010`)

* `5011` (value: `5011`)

* `5012` (value: `5012`)

* `5013` (value: `5013`)

* `5014` (value: `5014`)

* `5015` (value: `5015`)

* `5016` (value: `5016`)

* `5017` (value: `5017`)

* `90010` (value: `90010`)

* `90011` (value: `90011`)

* `90012` (value: `90012`)

* `90013` (value: `90013`)





## Enum: [ConditionListEnum]


* `brings_pet` (value: `"guest_brings_pet"`)

* `doesnt_clean_before_checkout` (value: `"guest_doesnt_clean_before_checkout"`)

* `smokes` (value: `"guest_smokes"`)




