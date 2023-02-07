# LodgeaJs.InlineResponse2003PropertyTaxPolicyList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**typeCode** | **Number** | The code that represents the type of tax.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#taxtype-codes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | 
**percent** | **Number** | The charged percentage if applicable. | [optional] 
**chargeType** | **String** | The type of charge. | 
**chargeFrequencyCode** | **Number** | The code that represents the frequency of charge.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#chargetype-codes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | 
**currencyCode** | **String** | The currency code of the currency in that the charge is applied.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#currencycodes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | 
**conditionList** | **[String]** | A list of conditions for the tax. Is empty if &lt;code&gt;chargeType&lt;/code&gt; is not &lt;code&gt;conditional&lt;/code&gt;. | 



## Enum: TypeCodeEnum


* `1` (value: `1`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)

* `7` (value: `7`)

* `8` (value: `8`)

* `10` (value: `10`)

* `13` (value: `13`)

* `15` (value: `15`)

* `17` (value: `17`)

* `18` (value: `18`)

* `19` (value: `19`)

* `28` (value: `28`)

* `30` (value: `30`)

* `35` (value: `35`)

* `36` (value: `36`)

* `39` (value: `39`)

* `43` (value: `43`)

* `46` (value: `46`)

* `5001` (value: `5001`)

* `5002` (value: `5002`)

* `5004` (value: `5004`)

* `5007` (value: `5007`)

* `5008` (value: `5008`)





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




