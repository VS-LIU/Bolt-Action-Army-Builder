

## dump


`"unitDamageValue" = null` --> the value depends on the veterancy option selected by the user





<br><br>

## Nation

### `nation` object
| key                 | type                                   | default    | nulls? | notes                                                                                                                                |
| ------------------- | -------------------------------------- | ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `nationName`        | `string`                               |            | no     | Frontend use. First letter should be capitalized e.g. `"Soviet Union"`                                                               |
| `nationID`          | `string`                               |            | no     | Backend identifier. First letter should be lowercase e.g. `"sovietUnion"`                                                            |
| `nationDescription` | `string`                               |            | yes    | Description text e.g. `"Armies of the Soviet Union"`                                                                                 |
| `nationRules`       | `string[]`                             |            | no     | Should reference a `specialRuleID` value e.g. `"ruleExampleRule"`                                                                    |
| `_source`           | `_source`<br>[object](#_source-object) |            | yes    | The source name and the page number (optional) e.g. `"Bolt Action 2nd Edition Rulebook": 189`, `"Armies Of The Soviet Union": null"` |
| `_dataType`         | `string`                               | `"nation"` | no     | metadata.                                                                                                                            |

<br>

<br>


## Categories

### `defaultCategory` object

| key                   | type      | default                                      | nulls | notes                                                                                       |
| --------------------- | --------- | -------------------------------------------- | ----- | ------------------------------------------------------------------------------------------- |
| `categoryName`        | `string`  |                                              | no    | Frontend use e.g. `"Bomber Aircraft"`                                                       |
| `categoryID`          | `string`  |                                              | no    | Backend identifier  e.g. `"bomberAircraft"`                                                 |
| `categoryHeading`     | `string`  |                                              | no    | The frontend heading it should belong under e.g. `"Aircraft"`                               |
| `categoryUnitQtyMin`  | `number`  | `0`                                          | no    | The minimum number of units you must add to this category.                                  |
| `categoryUnitQtyMax`  | `number`  |                                              | no    | The maximum number of units you can add to this category. `0` = unlimited                   |
| `categoryIsExclusive` | `boolean` | `false`                                      | no    | If `true`, unit quantity is shared among other categories under the  same `categoryHeading` |
| `_isType`             | `string`  | `"artillery"` \| `"infantry"` \| `"vehicle"` | no    | metadata e.g. `"aircraft"`                                                                  |
| `_dataType`           | `string`  | `"category"`                                 | no    | metadata.                                                                                   |

<br>

Example 

```json
{
	"categoryName": "Infantry (required)",
	"categoryID": "infantryRequired",
	"categoryHeading": "Infantry",
	"categoryMinUnits": 2,
	"categoryMaxUnits": 2,
	"categoryIsExclusive": false,
	"_isType": "infantry",
	"_dataType": "category"
},
{
	"categoryName": "Infantry (optional)",
	"categoryID": "infantryOptional",
	"categoryHeading": "Infantry",
	"categoryMinUnits": 0,
	"categoryMaxUnits": 3,
	"categoryIsExclusive": false,
	"_isType": "infantry",
	"_dataType": "category"
},
```

### Category List
| name                     | id                       | heading               |
| ------------------------ | ------------------------ | --------------------- |
| Officer                  | `officerMandatory`       | `Headquarters`        |
| Higher Officer           | `higherOfficer`          | `Headquarters`        |
| Forward Observer         | `forwardObserver`        | `Headquarters`        |
| Medic                    | `medic`                  | `Headquarters`        |
| Infantry (mandatory)     | `infantryMandatory`      | `Infantry`            |
| Infantry (optional)      | `infantryOptional`       | `Infantry`            |
| Machine Gun Team         | `machineGunTeam`         | `Weapon Teams`        |
| Mortar Team              | `mortarTeam`             | `Weapon Teams`        |
| Sniper Team              | `sniperTeam`             | `Weapon Teams`        |
| Flamethrower Team        | `flamethrowerTeam`       | `Weapon Teams`        |
| Anti-tank Team           | `antiTankTeam`           | `Weapon Teams`        |
| Field Artillery          | `fieldArtillery`         | `Artillery`           |
| Anti-aircraft Guns       | `antiAircraftGuns`       | `Artillery`           |
| Anti-tank Guns           | `antiTankGuns`           | `Artillery`           |
| Armoured Cars            | `armouredCars`           | `Armoured Cars`       |
| Tanks                    | `tanks`                  | `Vehicles`            |
| Tank Destroyers          | `tankDestroyers`         | `Vehicles`            |
| Anti-aircraft Vehicles   | `antiAircraftVehicles`   | `Vehicles`            |
| Self-propelled Artillery | `selfpropelledArtillery` | `Vehicles`            |
| Transports               | `transports`             | `"Transports & Tows"` |
| Tows                     | `tows`                   | `"Transports & Tows"` |

---

<br><br>

## Upgrades

### `defaultUpgrades` object

| key                     | type                               | default                                      | null | notes                                                                                                                                                          |
| ----------------------- | ---------------------------------- | -------------------------------------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `upgradeName`           | `string`                           |                                              | no   | Frontend use e.g. `Bazooka`                                                                                                                                    |
| `upgradeID`             | `string`                           |                                              | no   | Backend identifier e.g. `upgradeBazooka`                                                                                                                       |
| `upgradeDescription`    | `string`                           |                                              | no   | Frontend use. Taken from official text                                                                                                                         |
| `upgradeTargets`        | `string`                           | `"selection"` \| `"unit"`                    | no   | `"selection"` if the upgrade applies to only a model(s)<br>`"unit"` if the upgrade applies to the entire unit i.e. all models                                  |
| `upgradeReplacesWeapon` | `boolean`                          |                                              | no   | if `true`, the quantity of the model's original weapon profile will be subtracted                                                                              |
| `upgradeQtyMax`         | `number`                           |                                              | no   | The maximum number of times this upgrade can be added                                                                                                          |
| `upgradePointsCost`     | `number`                           |                                              | no   | The cost of adding this upgrade to one selection                                                                                                               |
| `upgradeIsPerModel`     | `boolean`                          |                                              | no   | If `true`, the upgrade applies to the entire unit or all selections. In addition, the following should be: `"upgradeTargets": "unit"` and `"upgradeQtyMax": 1` |
| `upgradeIsExclusive`    | `boolean`                          | `false`                                      | no   | If `true`, only allows one exclusive upgrade to be added to the unit at a time                                                                                 |
| `upgradeExtraReqs`      | [object](#upgradeextrareqs-object) | `null`                                       | yes  | Checks for any other requirements needed before adding this upgrade                                                                                            |
| `upgradeAddsProfile`    | `string`                           |                                              | no   | References a `profileID`                                                                                                                                       |
| `_isType`               | `string`                           | `"artillery"` \| `"infantry"` \| `"vehicle"` | no   | metadata. The unit type this upgrade applies to                                                                                                                |
| `_dataType`             | `string`                           | `"upgrade"`                                  | no   | metadata                                                                                                                                                       |

<br>

Example (taken from `upgradeARInfantry`)

```json
"defaultUpgrades": [
	{
		"upgradeName": "Assault Rifle",
		"upgradeID": "upgradeARInfantry",
		"upgradeDescription": "Up to 2 men can have assault rifles instead of rifles for +5pts",
		"upgradeTargets": "selection",
		"upgradeReplacesWeapon": true,
		"upgradeQtyMax": 2,
		"upgradePointsCost": 5,
		"upgradeIsPerModel": false,
		"upgradeIsExclusive": false,
		"upgradeExtraReqs": null,
		"upgradeAddsProfile": "assaultRifle",
		"_isType": "infantry",
		"_dataType": "upgrade"
	}
]
```


### Custom Upgrades

You can modify existing available upgrades for an object to use. 

As with all custom items, first reference the original id under `upgradesAvailable` and then include the same id in a new object under `upgradesCustom`, followed by the field(s) you would like to change. 

Example taken from `heerGrenadierSquadVeteran`:
```json
"selectionUpgrades": {
	"upgradesAvailable": [
		"upgradeARInfantry"
	],
	"upgradesCustom": [
		{
			"upgradeID": "upgradeARInfantry",
			"upgradeDescription": "Up to 9 men can have assault rifles instead of rifles for +5pts",
			"upgradeQtyMax": 9
		}
	]
}
```
> In the example above, we take the existing upgrade `upgradeARInfantry` and modify its description and maximum quantity the upgrade can be taken. Remember you do not have to copy and paste the entire entry except the `upgradeID` and the field(s) you would like to change. 

<br>

### Adding a new upgrade (single-use)

You can also add a new upgrade for one unit/ object to use.

The app will recognise a new custom upgrade when `"upgradeID": null` because it does not reference an existing upgrade from the `defaultUpgrades` list. Custom upgrades created in this way require all fields to be filled out following the [`defaultUpgrades` object](#defaultupgrades-object).

<br>

### `upgradeExtraReqs` object

If included, the app will check if the conditions are passed before adding the upgrade.

| condition       | checks            | notes                              |
| --------------- | ----------------- | ---------------------------------- |
| `includedUnits` | `unitID` && `qty` | The listed unit(s) and minimum qty |

<br>

Example - `includedUnits`

```
"upgradeExtraReqs": {
	"includedUnits": {
		"heerPioneerSquad": 1
	}
}
```
- Checks if the platoon contains at least `1` unit of `heerPioneerSquad`... else display error and disable? option to add this upgrade



### Upgrades List

| upgrade             | id                            | upgradeTargets | profile                | _isType    |
| ------------------- | ----------------------------- | -------------- | ---------------------- | ---------- |
| Anti-tank Grenades  | `upgradeAntitankGrenades`     | `unit`         | `antiTankGrenades`     | `infantry` |
| Assault Rifle       | `upgradeARInfantry`           | `selection`    | `assaultRifle`         | `infantry` |
| Assault Rifle (NCO) | `upgradeARNCO`                | `selection`    | `assaultRifle`         | `infantry` |
| Bicycles            | `upgradeBicycle`              | `unit`         | `bicycle`              | `infantry` |
| Flamethrower        | `upgradeFlamethrowerInfantry` | `selection`    | `flamethrowerInfantry` | `infantry` |
| Flamethrower        | `upgradeFlamethrowerVehicle`  | `selection`    | `flamethrowerVehicle`  | `vehicle`  |
| LMG                 | `upgradeLMGInfantry`          | `selection`    | `LMG`                  | `infantry` |
| Motorbikes          | `upgradeMotorbike`            | `unit`         | `motorbike`            | `infantry` |
| Panzerfaust         | `upgradePanzerfaust`          | `selection`    | `panzerfaust`          | `infantry` |
| SMG                 | `upgradeSMGInfantry`          | `selection`    | `submachineGun`        | `infantry` |
| SMG (NCO)           | `upgradeSMGNCO`               | `selection`    | `submachineGun`        | `infantry` |
| ...                 | `...`                         | `selection`    |                        | `infantry` |
| ...                 | `...`                         | `selection`    |                        | `infantry` |
| ...                 | `...`                         | `selection`    |                        | `infantry` |
| ...                 | `...`                         | `selection`    |                        | `infantry` |
| ...                 | `...`                         | `selection`    |                        | `infantry` |
| ...                 | `...`                         | `selection`    |                        | `infantry` |
| ...                 | `...`                         | `selection`    |                        | `infantry` |
| ...                 | `...`                         | `selection`    |                        | `infantry` |
| ...                 | `...`                         | `selection`    |                        | `infantry` |

---



<br><br>

## Special Rules

Special rules may apply to various objects, such as platoons, theater selectors, units, and weapon profiles. These rules are located under `defaultSpecialRules` in the data file.


### `defaultSpecialRules` object

| key                      | type                      | default                                      | nulls | notes                                    |
| ------------------------ | ------------------------- | -------------------------------------------- | ----- | ---------------------------------------- |
| `specialRuleName`        | `string`                  |                                              | no    | Frontend use e.g. `"Assault"`            |
| `specialRuleID`          | `string`                  |                                              | no    | Backend identifier  e.g. `"ruleAssault"` |
| `specialRuleDescription` | `string`                  |                                              | no    | The official rule text                   |
| `_source`                | [object](#_source-object) |                                              | no    | The source of this rule                  |
| `_isType`                | `string`                  | `"artillery"` \| `"infantry"` \| `"vehicle"` | no    | metadata                                 |
| `_dataType`              | `string`                  | `"rule"`                                     | no    | metadata.                                |


Example taken from `ruleGunShield`
```json
"defaultSpecialRules": [
	{
		"specialRuleName": "Gun Shield",
		"specialRuleID": "ruleGunShield",
		"specialRuleDescription": "If a gun is equipped with a gun shield, the die roll an enemy requires to score damage for a hit from the front arc of the gun as described above is increased by +1. This die roll is modified by the penetration value of the weapon in the usual way. Note that hits from HE (both direct and indirect fire), flamethrowers and close quarters attacks ignore the gun shield rule.",
		"_source": {
			"Bolt Action 2nd Edition Rulebook": 95
		},
		"_isType": "artillery",
		"_dataType": "rule"
	},
]
```

### Modifying an existing rule 

Although rare, you can modify existing rules for an object to use. 

As with all custom items, first reference the original id under `specialRulesIncluded` and then include the same id in a new object under `specialRulesCustom`, followed by the field(s) you would like to change.

```json
 "unitSpecialRules": {
	"specialRulesIncluded": [
		"ruleLowVelocity"
	],
	"specialRulesCustom": [
		{
			"specialRuleID": "ruleLowVelocity",
			"specialRuleDescription": "The penetration rating of this gun is +2 instead of the usual +4.",
			"_source": {
				"Some_source_title": 99
			}
		}
	]
},
```
> In the example above, we take the existing rule `ruleLowVelocity` and modify its description and the source where this rule is found. Remember you do not have to copy and paste the entire entry except the `specialRuleID` and the field(s) you would like to change. 

<br>

### Adding a new rule (single-use)

You can also add a new rule for one unit/ object to use.

The app will recognise a new custom rule when `"specialRuleID": null` because it does not reference an existing rule from the `defaultSpecialRules` list. Custom rules created in this way require all fields to be filled out following the [`defaultSpecialRules` object](#defaultspecialrules-object).

Example taken from `panzerIIIHJ`:
```json
"specialRulesCustom": [
	{
		"specialRuleName": "Reinforced Rear Armour",
		"specialRuleID": null,
		"specialRuleDescription": "The Ausf H and J treat hits against the rear armour as hits against the side armour (i.e. +1 penetration modifier rather than +2).",
		"_source": {
			"Armies of Germany 2nd Edition": 45
		},
		"_isType": "vehicle",
		"dataType": "_rule"
	}
]
```






---------------

## objects miscellaneous

This section includes miscellaneous objects used throughout the data file

<br>

### `_source` object

The `_source` object references the original source of data.

`{ "_source": {string: number} }` = source name and page  
`{ "_source": {string: [number, number, ...]} }` = source name and multiple pages  
`{ "_source": {string: null} }` = source name but no page  
`{ "_source": {} }` = no source given

Example - The source of some data can be found in...
```json
{
  "source": {
    "Book_A": 23,
	"Book_B": [10, 56],
	"PDF_A": null, 
	"PDF_B": 12
  }
}
```
In the above example, the sources are...
> `Book_A`: on page 23,  
> `Book_B`: on pages 10 and 56,  
> `PDF_A`: no page given,  
> `PDF_B`: on page 12  


---

## gunOptions

If a gunOption has a description, than this entry should be added onto and displayed under Special Rules component

---



---
## Selections

If `"selectionQuantity" = null` or `"selectionQuantity" = 0` --> do not display in VIEW mode


`selectionQtyMin` is the minimum and default value



### Selection - Vehicles
If `"unitTransport": null` --> Do not display in LIST or VIEW mode 
If `"unitTow": null` --> do not display in LIST or VIEW mode 


#### Selection - Vehicles - Upgrades

If `"upgradeReplacesWeapon": false` --> set selectionQuantity to 1
If `"upgradeReplacesWeapon": true` --> do not adjust selectionQuantity


























