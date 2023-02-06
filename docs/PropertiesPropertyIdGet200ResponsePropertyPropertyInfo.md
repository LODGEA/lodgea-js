# LodgeaJs.PropertiesPropertyIdGet200ResponsePropertyPropertyInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unitCount** | **Number** | The amount of units the property has. | [optional] 
**messageList** | [**[PropertiesPropertyIdGet200ResponsePropertyPropertyInfoMessageListInner]**](PropertiesPropertyIdGet200ResponsePropertyPropertyInfoMessageListInner.md) | Contains a descriptive message for this property in all supported languages. | 
**categoryList** | **[Number]** | A list of code of the property class types that apply to the property. | 
**languageList** | **[String]** | The codes of languages the staff of this property can speak. Please note that these codes partially differ from the two character ISO language codes widely used throughout the API as they partially include country specific language code.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#languagecountry-code\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | 
**location** | [**AvailablePropertiesInner1GeoLocation**](AvailablePropertiesInner1GeoLocation.md) |  | [optional] 
**acceptedPaymentList** | [**[PropertiesPropertyIdGet200ResponsePropertyPropertyInfoAcceptedPaymentListInner]**](PropertiesPropertyIdGet200ResponsePropertyPropertyInfoAcceptedPaymentListInner.md) | A list of the accepted payment methods. Payment methods might subject to frequent change as payment providers come and go. You should always implement a way to handle new, unexpected payment methods.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#paymenttypes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | 



## Enum: [CategoryListEnum]


* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)

* `7` (value: `7`)

* `8` (value: `8`)

* `9` (value: `9`)

* `10` (value: `10`)

* `11` (value: `11`)

* `12` (value: `12`)

* `13` (value: `13`)

* `14` (value: `14`)

* `15` (value: `15`)

* `16` (value: `16`)

* `17` (value: `17`)

* `18` (value: `18`)

* `19` (value: `19`)

* `20` (value: `20`)

* `21` (value: `21`)

* `22` (value: `22`)

* `23` (value: `23`)

* `24` (value: `24`)

* `25` (value: `25`)

* `26` (value: `26`)

* `27` (value: `27`)

* `28` (value: `28`)

* `29` (value: `29`)

* `30` (value: `30`)

* `31` (value: `31`)

* `32` (value: `32`)

* `33` (value: `33`)

* `34` (value: `34`)

* `35` (value: `35`)

* `36` (value: `36`)

* `37` (value: `37`)

* `38` (value: `38`)

* `39` (value: `39`)

* `40` (value: `40`)

* `41` (value: `41`)

* `42` (value: `42`)

* `43` (value: `43`)

* `44` (value: `44`)

* `45` (value: `45`)

* `46` (value: `46`)

* `47` (value: `47`)

* `48` (value: `48`)

* `49` (value: `49`)

* `50` (value: `50`)

* `51` (value: `51`)

* `52` (value: `52`)

* `53` (value: `53`)

* `54` (value: `54`)

* `55` (value: `55`)

* `56` (value: `56`)

* `57` (value: `57`)

* `58` (value: `58`)

* `59` (value: `59`)

* `60` (value: `60`)

* `61` (value: `61`)

* `62` (value: `62`)

* `5000` (value: `5000`)

* `5001` (value: `5001`)

* `5002` (value: `5002`)

* `5003` (value: `5003`)

* `5004` (value: `5004`)

* `5005` (value: `5005`)

* `5006` (value: `5006`)

* `5007` (value: `5007`)

* `5008` (value: `5008`)

* `5009` (value: `5009`)





## Enum: [LanguageListEnum]


* `af` (value: `"af"`)

* `ar` (value: `"ar"`)

* `az` (value: `"az"`)

* `be` (value: `"be"`)

* `bg` (value: `"bg"`)

* `ca` (value: `"ca"`)

* `cs` (value: `"cs"`)

* `da` (value: `"da"`)

* `de` (value: `"de"`)

* `el` (value: `"el"`)

* `en` (value: `"en"`)

* `en-gb` (value: `"en-gb"`)

* `en-us` (value: `"en-us"`)

* `es` (value: `"es"`)

* `es-ar` (value: `"es-ar"`)

* `et` (value: `"et"`)

* `fr` (value: `"fr"`)

* `fi` (value: `"fi"`)

* `he` (value: `"he"`)

* `hi` (value: `"hi"`)

* `hr` (value: `"hr"`)

* `hu` (value: `"hu"`)

* `id` (value: `"id"`)

* `is` (value: `"is"`)

* `it` (value: `"it"`)

* `ja` (value: `"ja"`)

* `km` (value: `"km"`)

* `ko` (value: `"ko"`)

* `lo` (value: `"lo"`)

* `lt` (value: `"lt"`)

* `lv` (value: `"lv"`)

* `ms` (value: `"ms"`)

* `nl` (value: `"nl"`)

* `no` (value: `"no"`)

* `pl` (value: `"pl"`)

* `pt` (value: `"pt"`)

* `pt-br` (value: `"pt-br"`)

* `pt-pt` (value: `"pt-pt"`)

* `ro` (value: `"ro"`)

* `ru` (value: `"ru"`)

* `sk` (value: `"sk"`)

* `sl` (value: `"sl"`)

* `sr` (value: `"sr"`)

* `sv` (value: `"sv"`)

* `tl` (value: `"tl"`)

* `th` (value: `"th"`)

* `tr` (value: `"tr"`)

* `uk` (value: `"uk"`)

* `vi` (value: `"vi"`)

* `xa` (value: `"xa"`)

* `xb` (value: `"xb"`)

* `xs` (value: `"xs"`)

* `xt` (value: `"xt"`)

* `xu` (value: `"xu"`)

* `zh` (value: `"zh"`)

* `zh-cn` (value: `"zh-cn"`)

* `zh-tw` (value: `"zh-tw"`)




