# LodgeaJs.InlineObject1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adultCount** | **Number** | The amount of adults that will stay at the property. | [optional] [default to 2]
**childCount** | **Number** | The amount of children that will stay at the property. | [optional] 
**childAgeList** | **[Number]** | A list describing the ages of the children that will stay at the property. If &lt;code&gt;childAgeList&lt;/code&gt; is set &lt;code&gt;childCount&lt;/code&gt; has to be set as well. If &lt;code&gt;childAgeList&lt;/code&gt; and &lt;code&gt;childCount&lt;/code&gt; are set, &lt;code&gt;childCount&lt;/code&gt; must be equal to the length of &lt;code&gt;childAgeList&lt;/code&gt;. | [optional] 
**currencyCode** | **String** | The currency code of the currency in which the lowest price for each found location should be returned.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#currencycodes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | 
**languageCode** | **String** | The language code of the language in which the descriptive texts for each found property should be returned.&lt;p&gt;Please note that beside the general restrictions listed below only languages configured during system setup for your respective tenant are allowed.&lt;/p&gt;&lt;p&gt;See also &lt;a href&#x3D;\&quot;#isolanguage-codes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | 
**unitSystem** | **String** | The unit system to use in the result. | [optional] [default to &#39;metric&#39;]
**minLengthOfStay** | **Number** | The desired minimum length of stay in nights. | [optional] 
**maxLengthOfStay** | **Number** | The desired maximum length of stay in nights. | [optional] 
**locationName** | **String** | The name of a location the properties should be located in.If &lt;code&gt;locationType&lt;/code&gt; is set, &lt;code&gt;locationName&lt;/code&gt; has to bet set as well. | [optional] 
**locationType** | **String** | Defines the type of&lt;code&gt;locationName&lt;/code&gt;. If &lt;code&gt;locationType&lt;/code&gt; is set, &lt;code&gt;locationName&lt;/code&gt; has to bet set as well.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#locationtypes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | [optional] 
**earliestArrival** | **String** | The earliest possible arrival date. Expects exactly the format of \&quot;YYYY-MM-DD\&quot;. | [optional] 
**latestReturn** | **String** | The latest possible departure date. Expects exactly the format of \&quot;YYYY-MM-DD\&quot;. | [optional] 
**sort** | **String** | The criteria to order the results by. Sort order for price is ascending, sort order for quality is always descending. Quality is an internally calculated score for the property.&#39;,           )} | [optional] 
**serviceList** | **[Number]** | A list of service codes indicating which services and amenities the entire property should offer. The codes are AND chained.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#servicecodes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | [optional] 
**typeList** | **[Number]** | A list of property class type codes specifying the desired property classes. The codes are OR chained.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#propertyclass-type-codes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | [optional] 
**unitTypeList** | **[Number]** | A list of unit and room type codes indicating which kinds of unit/room type is desired.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#unitand-room-type-codes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | [optional] 
**unitAmenityList** | **[Number]** | A list of room amenity type codes indicating which room level amenities are desired. The codes are AND chained.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#unitand-room-amenity-type-codes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | [optional] 
**mealPlanList** | **[Number]** | A list of meal plan type codes indicating which kinds of meal plan type is desired.&lt;p&gt;See also &lt;a href&#x3D;\&quot;#mealplan-type-codes\&quot;&gt;in the appendix&lt;/a&gt;.&lt;/p&gt; | [optional] 



## Enum: UnitSystemEnum


* `metric` (value: `"metric"`)

* `imperial` (value: `"imperial"`)





## Enum: SortEnum


* `quality` (value: `"quality"`)

* `price` (value: `"price"`)





## Enum: [ServiceListEnum]


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

* `63` (value: `63`)

* `64` (value: `64`)

* `65` (value: `65`)

* `66` (value: `66`)

* `67` (value: `67`)

* `68` (value: `68`)

* `69` (value: `69`)

* `70` (value: `70`)

* `71` (value: `71`)

* `72` (value: `72`)

* `73` (value: `73`)

* `74` (value: `74`)

* `75` (value: `75`)

* `76` (value: `76`)

* `77` (value: `77`)

* `78` (value: `78`)

* `79` (value: `79`)

* `80` (value: `80`)

* `81` (value: `81`)

* `82` (value: `82`)

* `83` (value: `83`)

* `84` (value: `84`)

* `85` (value: `85`)

* `86` (value: `86`)

* `87` (value: `87`)

* `88` (value: `88`)

* `89` (value: `89`)

* `90` (value: `90`)

* `91` (value: `91`)

* `92` (value: `92`)

* `93` (value: `93`)

* `94` (value: `94`)

* `95` (value: `95`)

* `96` (value: `96`)

* `97` (value: `97`)

* `98` (value: `98`)

* `99` (value: `99`)

* `100` (value: `100`)

* `101` (value: `101`)

* `102` (value: `102`)

* `103` (value: `103`)

* `104` (value: `104`)

* `105` (value: `105`)

* `106` (value: `106`)

* `107` (value: `107`)

* `108` (value: `108`)

* `109` (value: `109`)

* `110` (value: `110`)

* `111` (value: `111`)

* `112` (value: `112`)

* `113` (value: `113`)

* `114` (value: `114`)

* `115` (value: `115`)

* `116` (value: `116`)

* `117` (value: `117`)

* `118` (value: `118`)

* `119` (value: `119`)

* `120` (value: `120`)

* `121` (value: `121`)

* `122` (value: `122`)

* `123` (value: `123`)

* `124` (value: `124`)

* `125` (value: `125`)

* `126` (value: `126`)

* `127` (value: `127`)

* `128` (value: `128`)

* `129` (value: `129`)

* `130` (value: `130`)

* `131` (value: `131`)

* `132` (value: `132`)

* `133` (value: `133`)

* `134` (value: `134`)

* `135` (value: `135`)

* `136` (value: `136`)

* `137` (value: `137`)

* `138` (value: `138`)

* `139` (value: `139`)

* `140` (value: `140`)

* `141` (value: `141`)

* `142` (value: `142`)

* `143` (value: `143`)

* `144` (value: `144`)

* `145` (value: `145`)

* `146` (value: `146`)

* `147` (value: `147`)

* `148` (value: `148`)

* `149` (value: `149`)

* `150` (value: `150`)

* `151` (value: `151`)

* `152` (value: `152`)

* `153` (value: `153`)

* `154` (value: `154`)

* `155` (value: `155`)

* `156` (value: `156`)

* `157` (value: `157`)

* `158` (value: `158`)

* `159` (value: `159`)

* `160` (value: `160`)

* `161` (value: `161`)

* `162` (value: `162`)

* `163` (value: `163`)

* `164` (value: `164`)

* `165` (value: `165`)

* `166` (value: `166`)

* `167` (value: `167`)

* `168` (value: `168`)

* `169` (value: `169`)

* `170` (value: `170`)

* `171` (value: `171`)

* `172` (value: `172`)

* `173` (value: `173`)

* `174` (value: `174`)

* `175` (value: `175`)

* `176` (value: `176`)

* `177` (value: `177`)

* `178` (value: `178`)

* `179` (value: `179`)

* `180` (value: `180`)

* `181` (value: `181`)

* `182` (value: `182`)

* `183` (value: `183`)

* `184` (value: `184`)

* `185` (value: `185`)

* `186` (value: `186`)

* `187` (value: `187`)

* `188` (value: `188`)

* `189` (value: `189`)

* `190` (value: `190`)

* `191` (value: `191`)

* `192` (value: `192`)

* `193` (value: `193`)

* `194` (value: `194`)

* `195` (value: `195`)

* `196` (value: `196`)

* `197` (value: `197`)

* `198` (value: `198`)

* `199` (value: `199`)

* `200` (value: `200`)

* `201` (value: `201`)

* `202` (value: `202`)

* `203` (value: `203`)

* `204` (value: `204`)

* `205` (value: `205`)

* `206` (value: `206`)

* `207` (value: `207`)

* `208` (value: `208`)

* `209` (value: `209`)

* `210` (value: `210`)

* `211` (value: `211`)

* `212` (value: `212`)

* `213` (value: `213`)

* `214` (value: `214`)

* `215` (value: `215`)

* `216` (value: `216`)

* `217` (value: `217`)

* `218` (value: `218`)

* `219` (value: `219`)

* `220` (value: `220`)

* `221` (value: `221`)

* `222` (value: `222`)

* `223` (value: `223`)

* `224` (value: `224`)

* `225` (value: `225`)

* `226` (value: `226`)

* `227` (value: `227`)

* `228` (value: `228`)

* `229` (value: `229`)

* `230` (value: `230`)

* `231` (value: `231`)

* `232` (value: `232`)

* `233` (value: `233`)

* `234` (value: `234`)

* `235` (value: `235`)

* `236` (value: `236`)

* `237` (value: `237`)

* `238` (value: `238`)

* `239` (value: `239`)

* `240` (value: `240`)

* `241` (value: `241`)

* `242` (value: `242`)

* `243` (value: `243`)

* `244` (value: `244`)

* `245` (value: `245`)

* `246` (value: `246`)

* `247` (value: `247`)

* `248` (value: `248`)

* `249` (value: `249`)

* `250` (value: `250`)

* `251` (value: `251`)

* `252` (value: `252`)

* `253` (value: `253`)

* `254` (value: `254`)

* `255` (value: `255`)

* `256` (value: `256`)

* `257` (value: `257`)

* `258` (value: `258`)

* `259` (value: `259`)

* `260` (value: `260`)

* `261` (value: `261`)

* `262` (value: `262`)

* `263` (value: `263`)

* `264` (value: `264`)

* `265` (value: `265`)

* `266` (value: `266`)

* `267` (value: `267`)

* `268` (value: `268`)

* `269` (value: `269`)

* `270` (value: `270`)

* `271` (value: `271`)

* `272` (value: `272`)

* `273` (value: `273`)

* `274` (value: `274`)

* `275` (value: `275`)

* `276` (value: `276`)

* `277` (value: `277`)

* `278` (value: `278`)

* `279` (value: `279`)

* `280` (value: `280`)

* `281` (value: `281`)

* `282` (value: `282`)

* `283` (value: `283`)

* `284` (value: `284`)

* `285` (value: `285`)

* `286` (value: `286`)

* `287` (value: `287`)

* `288` (value: `288`)

* `289` (value: `289`)

* `290` (value: `290`)

* `291` (value: `291`)

* `292` (value: `292`)

* `293` (value: `293`)

* `294` (value: `294`)

* `295` (value: `295`)

* `296` (value: `296`)

* `297` (value: `297`)

* `298` (value: `298`)

* `299` (value: `299`)

* `300` (value: `300`)

* `301` (value: `301`)

* `302` (value: `302`)

* `303` (value: `303`)

* `304` (value: `304`)

* `305` (value: `305`)

* `306` (value: `306`)

* `307` (value: `307`)

* `308` (value: `308`)

* `309` (value: `309`)

* `310` (value: `310`)

* `311` (value: `311`)

* `312` (value: `312`)

* `313` (value: `313`)

* `314` (value: `314`)

* `315` (value: `315`)

* `316` (value: `316`)

* `317` (value: `317`)

* `318` (value: `318`)

* `319` (value: `319`)

* `320` (value: `320`)

* `321` (value: `321`)

* `322` (value: `322`)

* `323` (value: `323`)

* `324` (value: `324`)

* `325` (value: `325`)

* `326` (value: `326`)

* `327` (value: `327`)

* `328` (value: `328`)

* `329` (value: `329`)

* `331` (value: `331`)

* `332` (value: `332`)

* `333` (value: `333`)

* `334` (value: `334`)

* `335` (value: `335`)

* `336` (value: `336`)

* `337` (value: `337`)

* `338` (value: `338`)

* `339` (value: `339`)

* `340` (value: `340`)

* `341` (value: `341`)

* `342` (value: `342`)

* `343` (value: `343`)

* `344` (value: `344`)

* `345` (value: `345`)

* `348` (value: `348`)

* `349` (value: `349`)

* `350` (value: `350`)

* `351` (value: `351`)

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

* `5010` (value: `5010`)

* `5011` (value: `5011`)

* `5012` (value: `5012`)

* `5013` (value: `5013`)

* `5014` (value: `5014`)

* `5015` (value: `5015`)

* `5016` (value: `5016`)

* `5017` (value: `5017`)

* `5018` (value: `5018`)

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

* `5034` (value: `5034`)

* `5035` (value: `5035`)

* `5036` (value: `5036`)

* `5037` (value: `5037`)

* `5039` (value: `5039`)

* `5040` (value: `5040`)

* `5041` (value: `5041`)

* `5042` (value: `5042`)

* `5043` (value: `5043`)

* `5044` (value: `5044`)

* `5045` (value: `5045`)

* `5046` (value: `5046`)

* `5047` (value: `5047`)

* `5048` (value: `5048`)

* `5049` (value: `5049`)

* `5050` (value: `5050`)

* `5051` (value: `5051`)

* `5052` (value: `5052`)

* `5053` (value: `5053`)

* `5054` (value: `5054`)

* `5055` (value: `5055`)

* `5056` (value: `5056`)

* `5057` (value: `5057`)

* `5058` (value: `5058`)

* `5059` (value: `5059`)

* `5060` (value: `5060`)

* `5061` (value: `5061`)

* `5062` (value: `5062`)

* `5063` (value: `5063`)

* `5064` (value: `5064`)

* `5065` (value: `5065`)

* `5066` (value: `5066`)

* `5067` (value: `5067`)

* `5068` (value: `5068`)

* `5069` (value: `5069`)

* `5070` (value: `5070`)

* `5071` (value: `5071`)

* `5072` (value: `5072`)

* `5073` (value: `5073`)

* `5074` (value: `5074`)

* `5075` (value: `5075`)

* `5076` (value: `5076`)

* `5077` (value: `5077`)

* `5078` (value: `5078`)

* `5079` (value: `5079`)

* `5080` (value: `5080`)

* `5081` (value: `5081`)

* `5082` (value: `5082`)

* `5083` (value: `5083`)

* `5084` (value: `5084`)

* `5085` (value: `5085`)

* `5086` (value: `5086`)

* `5087` (value: `5087`)

* `5088` (value: `5088`)

* `5089` (value: `5089`)

* `5090` (value: `5090`)

* `5091` (value: `5091`)

* `5092` (value: `5092`)

* `5093` (value: `5093`)

* `5094` (value: `5094`)

* `5095` (value: `5095`)

* `5096` (value: `5096`)

* `5097` (value: `5097`)

* `5098` (value: `5098`)

* `5099` (value: `5099`)

* `5100` (value: `5100`)

* `5101` (value: `5101`)

* `5102` (value: `5102`)

* `5103` (value: `5103`)

* `5104` (value: `5104`)

* `5105` (value: `5105`)

* `5106` (value: `5106`)

* `5107` (value: `5107`)

* `5108` (value: `5108`)

* `5109` (value: `5109`)

* `5110` (value: `5110`)

* `5111` (value: `5111`)

* `5112` (value: `5112`)

* `5113` (value: `5113`)

* `5114` (value: `5114`)

* `5115` (value: `5115`)

* `5116` (value: `5116`)

* `5117` (value: `5117`)

* `5118` (value: `5118`)

* `5119` (value: `5119`)

* `5120` (value: `5120`)

* `5121` (value: `5121`)

* `5122` (value: `5122`)

* `5123` (value: `5123`)

* `5124` (value: `5124`)

* `5125` (value: `5125`)

* `5126` (value: `5126`)

* `5127` (value: `5127`)

* `5128` (value: `5128`)

* `5129` (value: `5129`)

* `5130` (value: `5130`)

* `5131` (value: `5131`)

* `5132` (value: `5132`)

* `5133` (value: `5133`)

* `5134` (value: `5134`)

* `5135` (value: `5135`)

* `5136` (value: `5136`)

* `5137` (value: `5137`)

* `5138` (value: `5138`)

* `5139` (value: `5139`)

* `5140` (value: `5140`)

* `5141` (value: `5141`)

* `5142` (value: `5142`)

* `5143` (value: `5143`)

* `5144` (value: `5144`)

* `5145` (value: `5145`)

* `5146` (value: `5146`)

* `5147` (value: `5147`)

* `5148` (value: `5148`)

* `5149` (value: `5149`)

* `5150` (value: `5150`)

* `5151` (value: `5151`)

* `5152` (value: `5152`)

* `5153` (value: `5153`)

* `5154` (value: `5154`)

* `5156` (value: `5156`)

* `5157` (value: `5157`)

* `5158` (value: `5158`)

* `5159` (value: `5159`)

* `5160` (value: `5160`)

* `5161` (value: `5161`)

* `5162` (value: `5162`)

* `5163` (value: `5163`)

* `5164` (value: `5164`)

* `5165` (value: `5165`)

* `5166` (value: `5166`)

* `5167` (value: `5167`)

* `5168` (value: `5168`)

* `5169` (value: `5169`)

* `5170` (value: `5170`)

* `5171` (value: `5171`)

* `5172` (value: `5172`)

* `5173` (value: `5173`)

* `5174` (value: `5174`)

* `5175` (value: `5175`)

* `5176` (value: `5176`)

* `5177` (value: `5177`)

* `5178` (value: `5178`)

* `6000` (value: `6000`)

* `6001` (value: `6001`)

* `90001` (value: `90001`)





## Enum: [TypeListEnum]


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





## Enum: [UnitTypeListEnum]


* `1` (value: `1`)

* `4` (value: `4`)

* `5` (value: `5`)

* `7` (value: `7`)

* `8` (value: `8`)

* `9` (value: `9`)

* `10` (value: `10`)

* `12` (value: `12`)

* `13` (value: `13`)

* `24` (value: `24`)

* `25` (value: `25`)

* `26` (value: `26`)

* `27` (value: `27`)

* `28` (value: `28`)

* `29` (value: `29`)

* `31` (value: `31`)

* `32` (value: `32`)

* `33` (value: `33`)





## Enum: [UnitAmenityListEnum]


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

* `63` (value: `63`)

* `64` (value: `64`)

* `65` (value: `65`)

* `66` (value: `66`)

* `67` (value: `67`)

* `68` (value: `68`)

* `69` (value: `69`)

* `70` (value: `70`)

* `71` (value: `71`)

* `72` (value: `72`)

* `73` (value: `73`)

* `74` (value: `74`)

* `75` (value: `75`)

* `76` (value: `76`)

* `77` (value: `77`)

* `78` (value: `78`)

* `79` (value: `79`)

* `80` (value: `80`)

* `81` (value: `81`)

* `82` (value: `82`)

* `83` (value: `83`)

* `84` (value: `84`)

* `85` (value: `85`)

* `86` (value: `86`)

* `87` (value: `87`)

* `88` (value: `88`)

* `89` (value: `89`)

* `90` (value: `90`)

* `91` (value: `91`)

* `92` (value: `92`)

* `93` (value: `93`)

* `94` (value: `94`)

* `95` (value: `95`)

* `96` (value: `96`)

* `97` (value: `97`)

* `98` (value: `98`)

* `99` (value: `99`)

* `100` (value: `100`)

* `101` (value: `101`)

* `102` (value: `102`)

* `103` (value: `103`)

* `104` (value: `104`)

* `105` (value: `105`)

* `106` (value: `106`)

* `107` (value: `107`)

* `108` (value: `108`)

* `109` (value: `109`)

* `110` (value: `110`)

* `111` (value: `111`)

* `112` (value: `112`)

* `113` (value: `113`)

* `114` (value: `114`)

* `115` (value: `115`)

* `116` (value: `116`)

* `117` (value: `117`)

* `118` (value: `118`)

* `119` (value: `119`)

* `120` (value: `120`)

* `121` (value: `121`)

* `122` (value: `122`)

* `123` (value: `123`)

* `124` (value: `124`)

* `125` (value: `125`)

* `126` (value: `126`)

* `127` (value: `127`)

* `128` (value: `128`)

* `129` (value: `129`)

* `130` (value: `130`)

* `131` (value: `131`)

* `132` (value: `132`)

* `133` (value: `133`)

* `134` (value: `134`)

* `135` (value: `135`)

* `136` (value: `136`)

* `137` (value: `137`)

* `138` (value: `138`)

* `139` (value: `139`)

* `140` (value: `140`)

* `141` (value: `141`)

* `142` (value: `142`)

* `143` (value: `143`)

* `144` (value: `144`)

* `145` (value: `145`)

* `146` (value: `146`)

* `147` (value: `147`)

* `148` (value: `148`)

* `149` (value: `149`)

* `150` (value: `150`)

* `151` (value: `151`)

* `152` (value: `152`)

* `153` (value: `153`)

* `154` (value: `154`)

* `155` (value: `155`)

* `156` (value: `156`)

* `157` (value: `157`)

* `158` (value: `158`)

* `159` (value: `159`)

* `160` (value: `160`)

* `161` (value: `161`)

* `162` (value: `162`)

* `163` (value: `163`)

* `164` (value: `164`)

* `165` (value: `165`)

* `166` (value: `166`)

* `167` (value: `167`)

* `168` (value: `168`)

* `169` (value: `169`)

* `170` (value: `170`)

* `171` (value: `171`)

* `172` (value: `172`)

* `173` (value: `173`)

* `174` (value: `174`)

* `175` (value: `175`)

* `176` (value: `176`)

* `177` (value: `177`)

* `178` (value: `178`)

* `179` (value: `179`)

* `180` (value: `180`)

* `181` (value: `181`)

* `182` (value: `182`)

* `183` (value: `183`)

* `184` (value: `184`)

* `185` (value: `185`)

* `186` (value: `186`)

* `187` (value: `187`)

* `188` (value: `188`)

* `189` (value: `189`)

* `190` (value: `190`)

* `191` (value: `191`)

* `192` (value: `192`)

* `193` (value: `193`)

* `194` (value: `194`)

* `195` (value: `195`)

* `196` (value: `196`)

* `197` (value: `197`)

* `198` (value: `198`)

* `199` (value: `199`)

* `200` (value: `200`)

* `201` (value: `201`)

* `202` (value: `202`)

* `203` (value: `203`)

* `204` (value: `204`)

* `205` (value: `205`)

* `206` (value: `206`)

* `207` (value: `207`)

* `208` (value: `208`)

* `209` (value: `209`)

* `210` (value: `210`)

* `211` (value: `211`)

* `212` (value: `212`)

* `213` (value: `213`)

* `214` (value: `214`)

* `215` (value: `215`)

* `216` (value: `216`)

* `217` (value: `217`)

* `218` (value: `218`)

* `219` (value: `219`)

* `220` (value: `220`)

* `221` (value: `221`)

* `222` (value: `222`)

* `223` (value: `223`)

* `224` (value: `224`)

* `225` (value: `225`)

* `226` (value: `226`)

* `227` (value: `227`)

* `228` (value: `228`)

* `229` (value: `229`)

* `230` (value: `230`)

* `231` (value: `231`)

* `232` (value: `232`)

* `233` (value: `233`)

* `234` (value: `234`)

* `235` (value: `235`)

* `236` (value: `236`)

* `237` (value: `237`)

* `238` (value: `238`)

* `239` (value: `239`)

* `240` (value: `240`)

* `241` (value: `241`)

* `242` (value: `242`)

* `243` (value: `243`)

* `244` (value: `244`)

* `245` (value: `245`)

* `246` (value: `246`)

* `247` (value: `247`)

* `248` (value: `248`)

* `249` (value: `249`)

* `250` (value: `250`)

* `251` (value: `251`)

* `252` (value: `252`)

* `253` (value: `253`)

* `254` (value: `254`)

* `255` (value: `255`)

* `256` (value: `256`)

* `257` (value: `257`)

* `258` (value: `258`)

* `259` (value: `259`)

* `260` (value: `260`)

* `261` (value: `261`)

* `262` (value: `262`)

* `263` (value: `263`)

* `264` (value: `264`)

* `265` (value: `265`)

* `266` (value: `266`)

* `267` (value: `267`)

* `268` (value: `268`)

* `269` (value: `269`)

* `270` (value: `270`)

* `271` (value: `271`)

* `272` (value: `272`)

* `273` (value: `273`)

* `274` (value: `274`)

* `275` (value: `275`)

* `276` (value: `276`)

* `277` (value: `277`)

* `278` (value: `278`)

* `279` (value: `279`)

* `280` (value: `280`)

* `281` (value: `281`)

* `282` (value: `282`)

* `283` (value: `283`)

* `5001` (value: `5001`)

* `5002` (value: `5002`)

* `5003` (value: `5003`)

* `5004` (value: `5004`)

* `5005` (value: `5005`)

* `5006` (value: `5006`)

* `5007` (value: `5007`)

* `5008` (value: `5008`)

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

* `5034` (value: `5034`)

* `5035` (value: `5035`)

* `5036` (value: `5036`)

* `5037` (value: `5037`)

* `5038` (value: `5038`)

* `5039` (value: `5039`)

* `5040` (value: `5040`)

* `5041` (value: `5041`)

* `5042` (value: `5042`)

* `5043` (value: `5043`)

* `5044` (value: `5044`)

* `5045` (value: `5045`)

* `5046` (value: `5046`)

* `5068` (value: `5068`)

* `5069` (value: `5069`)

* `5070` (value: `5070`)

* `5071` (value: `5071`)

* `5072` (value: `5072`)

* `5073` (value: `5073`)

* `5074` (value: `5074`)

* `5075` (value: `5075`)

* `5076` (value: `5076`)

* `5077` (value: `5077`)

* `5079` (value: `5079`)

* `5080` (value: `5080`)

* `5081` (value: `5081`)

* `5082` (value: `5082`)

* `5083` (value: `5083`)

* `5084` (value: `5084`)

* `5085` (value: `5085`)

* `5086` (value: `5086`)

* `5087` (value: `5087`)

* `5088` (value: `5088`)

* `5089` (value: `5089`)

* `5090` (value: `5090`)

* `5091` (value: `5091`)

* `5092` (value: `5092`)

* `5093` (value: `5093`)

* `5094` (value: `5094`)

* `5095` (value: `5095`)

* `5096` (value: `5096`)

* `5097` (value: `5097`)

* `5098` (value: `5098`)

* `5099` (value: `5099`)

* `5100` (value: `5100`)

* `5101` (value: `5101`)

* `5102` (value: `5102`)

* `5103` (value: `5103`)

* `5104` (value: `5104`)

* `5105` (value: `5105`)

* `5106` (value: `5106`)

* `5107` (value: `5107`)

* `5108` (value: `5108`)

* `5109` (value: `5109`)

* `5110` (value: `5110`)

* `5111` (value: `5111`)

* `5112` (value: `5112`)

* `5113` (value: `5113`)

* `5114` (value: `5114`)

* `5115` (value: `5115`)

* `5116` (value: `5116`)

* `5117` (value: `5117`)

* `5118` (value: `5118`)

* `5119` (value: `5119`)

* `5120` (value: `5120`)

* `5121` (value: `5121`)

* `5122` (value: `5122`)

* `5123` (value: `5123`)

* `5124` (value: `5124`)

* `5125` (value: `5125`)

* `5126` (value: `5126`)

* `5127` (value: `5127`)

* `5129` (value: `5129`)

* `5130` (value: `5130`)

* `5131` (value: `5131`)

* `5132` (value: `5132`)

* `5133` (value: `5133`)

* `5134` (value: `5134`)

* `5135` (value: `5135`)

* `5136` (value: `5136`)

* `5137` (value: `5137`)

* `5138` (value: `5138`)

* `5139` (value: `5139`)

* `5140` (value: `5140`)

* `5141` (value: `5141`)

* `5142` (value: `5142`)

* `5143` (value: `5143`)

* `5144` (value: `5144`)

* `5145` (value: `5145`)

* `5146` (value: `5146`)

* `5147` (value: `5147`)

* `5148` (value: `5148`)

* `5149` (value: `5149`)

* `5150` (value: `5150`)

* `5151` (value: `5151`)

* `5152` (value: `5152`)

* `5153` (value: `5153`)

* `5154` (value: `5154`)

* `5157` (value: `5157`)

* `5158` (value: `5158`)

* `5159` (value: `5159`)

* `5160` (value: `5160`)

* `5161` (value: `5161`)

* `5162` (value: `5162`)

* `5163` (value: `5163`)

* `5164` (value: `5164`)

* `5165` (value: `5165`)

* `5166` (value: `5166`)

* `5167` (value: `5167`)

* `5168` (value: `5168`)

* `5169` (value: `5169`)

* `5170` (value: `5170`)

* `5171` (value: `5171`)

* `5172` (value: `5172`)

* `5173` (value: `5173`)

* `5174` (value: `5174`)

* `5175` (value: `5175`)

* `5176` (value: `5176`)

* `5177` (value: `5177`)

* `5178` (value: `5178`)

* `5179` (value: `5179`)

* `5180` (value: `5180`)

* `5181` (value: `5181`)

* `5182` (value: `5182`)

* `5184` (value: `5184`)

* `5185` (value: `5185`)

* `5186` (value: `5186`)

* `5187` (value: `5187`)

* `5188` (value: `5188`)

* `5189` (value: `5189`)

* `5190` (value: `5190`)

* `5191` (value: `5191`)

* `5196` (value: `5196`)

* `5198` (value: `5198`)

* `5199` (value: `5199`)

* `5200` (value: `5200`)

* `5201` (value: `5201`)

* `5202` (value: `5202`)

* `5203` (value: `5203`)

* `5204` (value: `5204`)

* `5205` (value: `5205`)

* `5206` (value: `5206`)

* `5207` (value: `5207`)

* `5211` (value: `5211`)

* `5212` (value: `5212`)

* `90001` (value: `90001`)

* `90002` (value: `90002`)

* `90003` (value: `90003`)

* `90004` (value: `90004`)

* `90005` (value: `90005`)

* `90006` (value: `90006`)

* `90007` (value: `90007`)

* `90008` (value: `90008`)

* `90009` (value: `90009`)

* `90010` (value: `90010`)

* `90011` (value: `90011`)





## Enum: [MealPlanListEnum]


* `0` (value: `0`)

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

* `90001` (value: `90001`)




