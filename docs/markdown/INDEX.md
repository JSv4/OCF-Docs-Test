## Schemas are divided into five folders:

### Files

_Describes the eight top-level files that hold OCF objects and are required to export or import a cap table._

- **OCF Manifest File**

  - **Id:** `https://opencaptablecoalition.com/schema/files/OCFManifestFile.schema.json`
  - **Description:** Top-level schema describing the OCF Manifest, which holds issuer information and references ocf files containing transactions, stakeholders, stock classes, etc.
  - **View more:** [schema/files/OCFManifestFile](schema/files/OCFManifestFile.md)

- **File - Stakeholders**

  - **Id:** `https://opencaptablecoalition.com/schema/files/StakeholdersFile.schema.json`
  - **Description:** JSON containing file type identifier and list of stakeholders
  - **View more:** [schema/files/StakeholdersFile](schema/files/StakeholdersFile.md)

- **File - Stock Classes**

  - **Id:** `https://opencaptablecoalition.com/schema/files/StockClassesFile.schema.json`
  - **Description:** JSON containing file type identifier and list of stock classes
  - **View more:** [schema/files/StockClassesFile](schema/files/StockClassesFile.md)

- **File - Stock Legend Templates**

  - **Id:** `https://opencaptablecoalition.com/schema/files/StockLegendTemplatesFile.schema.json`
  - **Description:** JSON containing file type identifier and list of stock legend templates
  - **View more:** [schema/files/StockLegendTemplatesFile](schema/files/StockLegendTemplatesFile.md)

- **File - Stock Plans**

  - **Id:** `https://opencaptablecoalition.com/schema/files/StockPlansFile.schema.json`
  - **Description:** JSON containing file type identifier and list of stock plans
  - **View more:** [schema/files/StockPlansFile](schema/files/StockPlansFile.md)

- **File - Transactions**

  - **Id:** `https://opencaptablecoalition.com/schema/files/TransactionsFile.schema.json`
  - **Description:** JSON containing file type identifier and list transactions
  - **View more:** [schema/files/TransactionsFile](schema/files/TransactionsFile.md)

- **File - Valuations**

  - **Id:** `https://opencaptablecoalition.com/schema/files/ValuationsFile.schema.json`
  - **Description:** JSON containing file type identifier and list of valuations
  - **View more:** [schema/files/ValuationsFile](schema/files/ValuationsFile.md)

- **File - Vesting Terms**

  - **Id:** `https://opencaptablecoalition.com/schema/files/VestingTermsFile.schema.json`
  - **Description:** JSON containing file type identifier and list of vesting terms
  - **View more:** [schema/files/VestingTermsFile](schema/files/VestingTermsFile.md)

### Objects

_Describing the structure of OCF -- these contain the common object properties `id` and `comments`_

- **Object - Issuer**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/Issuer.schema.json`
  - **Description:** Object describing the issuer of the cap table (the company whose cap table this is)
  - **View more:** [schema/objects/Issuer](schema/objects/Issuer.md)

- **Object - Stakeholder**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/Stakeholder.schema.json`
  - **Description:** Object describing a stakeholder
  - **View more:** [schema/objects/Stakeholder](schema/objects/Stakeholder.md)

- **Object - Stock Class**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/StockClass.schema.json`
  - **Description:** Object describing a class of stock issued by the issuer
  - **View more:** [schema/objects/StockClass](schema/objects/StockClass.md)

- **Object - Stock Legend Template**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/StockLegendTemplate.schema.json`
  - **Description:** Object describing a stock legend template
  - **View more:** [schema/objects/StockLegendTemplate](schema/objects/StockLegendTemplate.md)

- **Object - Stock Plan**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json`
  - **Description:** Object describing a plan which stock options are issued from
  - **View more:** [schema/objects/StockPlan](schema/objects/StockPlan.md)

- **Object - Valuation**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/Valuation.schema.json`
  - **Description:** Object describing a valuation used in the cap table
  - **View more:** [schema/objects/Valuation](schema/objects/Valuation.md)

- **Object - Vesting Terms**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/VestingTerms.schema.json`
  - **Description:** Object describing the terms under which a security vests
  - **View more:** [schema/objects/VestingTerms](schema/objects/VestingTerms.md)

- **Object - Vesting Event Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/vesting/VestingEvent.schema.json`
  - **Description:** Object describing the transaction of an non-schedule-driven vesting event associated with a security
  - **View more:** [schema/objects/transactions/vesting/VestingEvent](schema/objects/transactions/vesting/VestingEvent.md)

- **Object - Vesting Start Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/vesting/VestingStart.schema.json`
  - **Description:** Object describing the transaction of vesting schedule start / commencement associated with a security
  - **View more:** [schema/objects/transactions/vesting/VestingStart](schema/objects/transactions/vesting/VestingStart.md)

- **Object - Convertible Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json`
  - **Description:** Object describing a transfer or secondary sale of a convertible security
  - **View more:** [schema/objects/transactions/transfer/ConvertibleTransfer](schema/objects/transactions/transfer/ConvertibleTransfer.md)

- **Object - Plan Security Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/PlanSecurityTransfer.schema.json`
  - **Description:** Object describing a transfer of a plan security
  - **View more:** [schema/objects/transactions/transfer/PlanSecurityTransfer](schema/objects/transactions/transfer/PlanSecurityTransfer.md)

- **Object - Stock Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/StockTransfer.schema.json`
  - **Description:** Object describing a transfer or secondary sale of a stock security
  - **View more:** [schema/objects/transactions/transfer/StockTransfer](schema/objects/transactions/transfer/StockTransfer.md)

- **Object - Warrant Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/WarrantTransfer.schema.json`
  - **Description:** Object describing a transfer or secondary sale of a warrant security
  - **View more:** [schema/objects/transactions/transfer/WarrantTransfer](schema/objects/transactions/transfer/WarrantTransfer.md)

- **Object - Stock Split Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/split/StockClassSplit.schema.json`
  - **Description:** Object describing a split of a stock class
  - **View more:** [schema/objects/transactions/split/StockClassSplit](schema/objects/transactions/split/StockClassSplit.md)

- **Object - Convertible Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/ConvertibleRetraction.schema.json`
  - **Description:** Object describing a retraction of a convertible security
  - **View more:** [schema/objects/transactions/retraction/ConvertibleRetraction](schema/objects/transactions/retraction/ConvertibleRetraction.md)

- **Object - Plan Security Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/PlanSecurityRetraction.schema.json`
  - **Description:** Object describing a retraction of a plan security
  - **View more:** [schema/objects/transactions/retraction/PlanSecurityRetraction](schema/objects/transactions/retraction/PlanSecurityRetraction.md)

- **Object - Stock Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/StockRetraction.schema.json`
  - **Description:** Object describing a retraction of a stock security
  - **View more:** [schema/objects/transactions/retraction/StockRetraction](schema/objects/transactions/retraction/StockRetraction.md)

- **Object - Warrant Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/WarrantRetraction.schema.json`
  - **Description:** Object describing a retraction of a warrant security
  - **View more:** [schema/objects/transactions/retraction/WarrantRetraction](schema/objects/transactions/retraction/WarrantRetraction.md)

- **Object - Stock Repurchase Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json`
  - **Description:** Object describing a stock repurchase transaction
  - **View more:** [schema/objects/transactions/repurchase/StockRepurchase](schema/objects/transactions/repurchase/StockRepurchase.md)

- **Object - Plan Security Release Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/release/PlanSecurityRelease.schema.json`
  - **Description:** Object describing a plan security release transaction
  - **View more:** [schema/objects/transactions/release/PlanSecurityRelease](schema/objects/transactions/release/PlanSecurityRelease.md)

- **Object - Stock Re-issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json`
  - **Description:** Object describing a re-issuance of stock
  - **View more:** [schema/objects/transactions/reissuance/StockReissuance](schema/objects/transactions/reissuance/StockReissuance.md)

- **Object - Convertible Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json`
  - **Description:** Object describing convertible instrument issuance transaction by the issuer and held by a stakeholder
  - **View more:** [schema/objects/transactions/issuance/ConvertibleIssuance](schema/objects/transactions/issuance/ConvertibleIssuance.md)

- **Object - Plan Security Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/PlanSecurityIssuance.schema.json`
  - **Description:** Object describing securities issuance transaction from a plan by the issuer and held by a stakeholder
  - **View more:** [schema/objects/transactions/issuance/PlanSecurityIssuance](schema/objects/transactions/issuance/PlanSecurityIssuance.md)

- **Object - Stock Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/StockIssuance.schema.json`
  - **Description:** Object describing a stock issuance transaction by the issuer and held by a stakeholder
  - **View more:** [schema/objects/transactions/issuance/StockIssuance](schema/objects/transactions/issuance/StockIssuance.md)

- **Object - Warrant Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/WarrantIssuance.schema.json`
  - **Description:** Object describing warrant issuance transaction by the issuer and held by a stakeholder
  - **View more:** [schema/objects/transactions/issuance/WarrantIssuance](schema/objects/transactions/issuance/WarrantIssuance.md)

- **Object - Plan Security Exercise Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/exercise/PlanSecurityExercise.schema.json`
  - **Description:** Object describing a plan security exercise transaction
  - **View more:** [schema/objects/transactions/exercise/PlanSecurityExercise](schema/objects/transactions/exercise/PlanSecurityExercise.md)

- **Object - Warrant Exercise Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/exercise/WarrantExercise.schema.json`
  - **Description:** Object describing a warrant exercise transaction
  - **View more:** [schema/objects/transactions/exercise/WarrantExercise](schema/objects/transactions/exercise/WarrantExercise.md)

- **Object - Convertible Conversion Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/conversion/ConvertibleConversion.schema.json`
  - **Description:** Object describing a conversion of a convertible security
  - **View more:** [schema/objects/transactions/conversion/ConvertibleConversion](schema/objects/transactions/conversion/ConvertibleConversion.md)

- **Object - Stock Conversion Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json`
  - **Description:** Object describing a conversion of stock
  - **View more:** [schema/objects/transactions/conversion/StockConversion](schema/objects/transactions/conversion/StockConversion.md)

- **Object - Convertible Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/ConvertibleCancellation.schema.json`
  - **Description:** Object describing a cancellation of a convertible security
  - **View more:** [schema/objects/transactions/cancellation/ConvertibleCancellation](schema/objects/transactions/cancellation/ConvertibleCancellation.md)

- **Object - Plan Security Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/PlanSecurityCancellation.schema.json`
  - **Description:** Object describing a cancellation of a plan security
  - **View more:** [schema/objects/transactions/cancellation/PlanSecurityCancellation](schema/objects/transactions/cancellation/PlanSecurityCancellation.md)

- **Object - Stock Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/StockCancellation.schema.json`
  - **Description:** Object describing a cancellation of a stock security
  - **View more:** [schema/objects/transactions/cancellation/StockCancellation](schema/objects/transactions/cancellation/StockCancellation.md)

- **Object - Warrant Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/WarrantCancellation.schema.json`
  - **Description:** Object describing a cancellation of a warrant security
  - **View more:** [schema/objects/transactions/cancellation/WarrantCancellation](schema/objects/transactions/cancellation/WarrantCancellation.md)

- **Object - Convertible Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/ConvertibleAcceptance.schema.json`
  - **Description:** Object describing a convertible acceptance transaction
  - **View more:** [schema/objects/transactions/acceptance/ConvertibleAcceptance](schema/objects/transactions/acceptance/ConvertibleAcceptance.md)

- **Object - Plan Security Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json`
  - **Description:** Object describing a plan security acceptance transaction
  - **View more:** [schema/objects/transactions/acceptance/PlanSecurityAcceptance](schema/objects/transactions/acceptance/PlanSecurityAcceptance.md)

- **Object - Stock Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/StockAcceptance.schema.json`
  - **Description:** Object describing a stock acceptance transaction
  - **View more:** [schema/objects/transactions/acceptance/StockAcceptance](schema/objects/transactions/acceptance/StockAcceptance.md)

- **Object - Warrant Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/WarrantAcceptance.schema.json`
  - **Description:** Object describing a warrant acceptance transaction
  - **View more:** [schema/objects/transactions/acceptance/WarrantAcceptance](schema/objects/transactions/acceptance/WarrantAcceptance.md)

### Enums

_Key enumerations used throughout the schemas_

- **Enum - Accrual Period Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/AccrualPeriodType.schema.json`
  - **Description:** Enumeration of interest accrual period types
  - **View more:** [schema/enums/AccrualPeriodType](schema/enums/AccrualPeriodType.md)

- **Enum - Address Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/AddressType.schema.json`
  - **Description:** Enumeration of address types
  - **View more:** [schema/enums/AddressType](schema/enums/AddressType.md)

- **Enum - Allocation Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/AllocationType.schema.json`
  - **Description:** Enumeration of allocation types for vesting terms. Using an example of 18 shares split across 4 tranches, each allocation type results in a different schedule as follows:
    1.  Cumulative Rounding (5 - 4 - 5 - 4)
    2.  Cumulative Round Down (4 - 5 - 4 - 5)
    3.  Front Loaded (5 - 5 - 4 - 4)
    4.  Back Loaded (4 - 4 - 5 - 5)
    5.  Front Loaded to Single Tranche (6 - 4 - 4 - 4)
    6.  Back Loaded to Single Tranche (4 - 4 - 4 - 6)
    7.  Fractional (4.5 - 4.5 - 4.5 - 4.5)
  - **View more:** [schema/enums/AllocationType](schema/enums/AllocationType.md)

- **Enum - Compensation Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/CompensationType.schema.json`
  - **Description:** Enumeration of stock compensation types
  - **View more:** [schema/enums/CompensationType](schema/enums/CompensationType.md)

- **Enum - Compounding Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/CompoundingType.schema.json`
  - **Description:** Enumeration of interest compounding types
  - **View more:** [schema/enums/CompoundingType](schema/enums/CompoundingType.md)

- **Enum - Conversion Mechanism Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ConversionMechanismType.schema.json`
  - **Description:** Enumeration of convertible conversion calculation types.
  - **View more:** [schema/enums/ConversionMechanismType](schema/enums/ConversionMechanismType.md)

- **Enum - Conversion Right Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ConversionRightType.schema.json`
  - **Description:** Enumeration of types of conversion rights.
  - **View more:** [schema/enums/ConversionRightType](schema/enums/ConversionRightType.md)

- **Enum - Trigger Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ConversionTriggerType.schema.json`
  - **Description:** Enumeration of types of triggers common to various legal rights - e.g. does the satisfaction of a condition trigger an automatic conversion or merely a right to convert? If `UNSPECIFIED`, the system of record cannot represent this data in a structured form.
  - **View more:** [schema/enums/ConversionTriggerType](schema/enums/ConversionTriggerType.md)

- **Enum - Convertible Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ConvertibleType.schema.json`
  - **Description:** Enumeration of convertible instrument types
  - **View more:** [schema/enums/ConvertibleType](schema/enums/ConvertibleType.md)

- **Enum - Day Count Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/DayCountType.schema.json`
  - **Description:** Enumeration of how the number of days are determined per period
  - **View more:** [schema/enums/DayCountType](schema/enums/DayCountType.md)

- **Enum - Email Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/EmailType.schema.json`
  - **Description:** Enumeration of email types
  - **View more:** [schema/enums/EmailType](schema/enums/EmailType.md)

- **Enum - OCF File Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/FileType.schema.json`
  - **Description:** Enumeration of different OCF file types which are used to load proper schemas for validation
  - **View more:** [schema/enums/FileType](schema/enums/FileType.md)

- **Enum - Interest Payout Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/InterestPayoutType.schema.json`
  - **Description:** Enumeration of interest payout types (e.g. deferred or cash payment)
  - **View more:** [schema/enums/InterestPayoutType](schema/enums/InterestPayoutType.md)

- **Enum - OCF Version Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/OCFVersionType.schema.json`
  - **Description:** Enumeration of recognized OCF versions
  - **View more:** [schema/enums/OCFVersionType](schema/enums/OCFVersionType.md)

- **Enum - Object Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ObjectType.schema.json`
  - **Description:** Enumeration of object types
  - **View more:** [schema/enums/ObjectType](schema/enums/ObjectType.md)

- **Enum - Option Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/OptionType.schema.json`
  - **Description:** Enumeration of option types
  - **View more:** [schema/enums/OptionType](schema/enums/OptionType.md)

- **Enum - Parent Security Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ParentSecurityType.schema.json`
  - **Description:** Enumeration of parent sources a stock can be issued or created from
  - **View more:** [schema/enums/ParentSecurityType](schema/enums/ParentSecurityType.md)

- **Enum - Period Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/PeriodType.schema.json`
  - **Description:** Enumeration of time period types
  - **View more:** [schema/enums/PeriodType](schema/enums/PeriodType.md)

- **Enum - Phone Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/PhoneType.schema.json`
  - **Description:** Enumeration of phone number types
  - **View more:** [schema/enums/PhoneType](schema/enums/PhoneType.md)

- **Enum - Rounding Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/RoundingType.schema.json`
  - **Description:** Enumeration of rounding types
  - **View more:** [schema/enums/RoundingType](schema/enums/RoundingType.md)

- **Enum - Stakeholder Relationship Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/StakeholderRelationshipType.schema.json`
  - **Description:** Enumeration of types of relationships between stakeholder and issuer
  - **View more:** [schema/enums/StakeholderRelationshipType](schema/enums/StakeholderRelationshipType.md)

- **Enum - Stakeholder Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/StakeholderType.schema.json`
  - **Description:** Enumeration of stakeholder types - individual (human) or institution (entity)
  - **View more:** [schema/enums/StakeholderType](schema/enums/StakeholderType.md)

- **Enum - Stock Class Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/StockClassType.schema.json`
  - **Description:** Enumeration of stock class types
  - **View more:** [schema/enums/StockClassType](schema/enums/StockClassType.md)

- **Enum - Termination Window Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/TerminationWindowType.schema.json`
  - **Description:** Enumeration of termination window types
  - **View more:** [schema/enums/TerminationWindowType](schema/enums/TerminationWindowType.md)

- **Enum - Valuation Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ValuationType.schema.json`
  - **Description:** Enumeration of valuation types
  - **View more:** [schema/enums/ValuationType](schema/enums/ValuationType.md)

- **Enum - Vesting Day of Month**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/VestingDayOfMonth.schema.json`
  - **Description:** Enumeration representing a vesting "day of month". Since not all months have 29, 30, or 31 days, this enum requires those values to also specify an overflow behavior.
   - `01` - `28` : Day 1, 2... 28 of the month; e.g. `03` means vesting occurs on the 3rd of the month.
   - `29_OR_LAST_DAY_OF_MONTH` - `31_OR_LAST_DAY_OF_MONTH` : Day 29, 30, or 31 of the month, defaulting to the last day of the month for shorter months; e.g. `31_OR_LAST_DAY_OF_MONTH` means monthly vesting occurs on Jan 31, Feb 28/29, Mar 31, Apr 30, etc.
   - `VESTING_START_DAY_OR_LAST_DAY_OF_MONTH` vests on the same day of month as the day of the `VESTING_START` condition; e.g. if vesting commences on Jan 15 then any vesting will accrue on the 15th of future vesting months. If vesting commencement occurs on days 29-31, this has the same behavior as the other `*_LAST_DAY_OF_MONTH` values.
  - **View more:** [schema/enums/VestingDayOfMonth](schema/enums/VestingDayOfMonth.md)

- **Enum - Vesting Trigger Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/VestingTriggerType.schema.json`
  - **Description:** Enumeration of vesting trigger types
  - **View more:** [schema/enums/VestingTriggerType](schema/enums/VestingTriggerType.md)

### Types

_Used as common building blocks for properties that are more complex than primitives but don't need separate unique Ids._

- **Type - Address**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Address.schema.json`
  - **Description:** Type representation of an address
  - **View more:** [schema/types/Address](schema/types/Address.md)

- **Type - Capitalization Definition**

  - **Id:** `https://opencaptablecoalition.com/schema/types/CapitalizationDefinition.schema.json`
  - **Description:** Type represents a group of securities that constitutes some formally defined part of the company (e.g. post-money capitalization vs pre-money for a security)
  - **View more:** [schema/types/CapitalizationDefinition](schema/types/CapitalizationDefinition.md)

- **Type - Contact Info**

  - **Id:** `https://opencaptablecoalition.com/schema/types/ContactInfo.schema.json`
  - **Description:** Type representation of a primary contact person for a stakeholder (e.g. a fund)
  - **View more:** [schema/types/ContactInfo](schema/types/ContactInfo.md)

- **Type - Country Code**

  - **Id:** `https://opencaptablecoalition.com/schema/types/CountryCode.schema.json`
  - **Description:** Type representation of an ISO 3166-1 alpha 2 country code
  - **View more:** [schema/types/CountryCode](schema/types/CountryCode.md)

- **Type - Country Subdivision Code**

  - **Id:** `https://opencaptablecoalition.com/schema/types/CountrySubdivisionCode.schema.json`
  - **Description:** Type representation of the second part of an ISO 3166-2 country subdivision code
  - **View more:** [schema/types/CountrySubdivisionCode](schema/types/CountrySubdivisionCode.md)

- **Type - Currency Code**

  - **Id:** `https://opencaptablecoalition.com/schema/types/CurrencyCode.schema.json`
  - **Description:** Type representation of an ISO 4217 currency code
  - **View more:** [schema/types/CurrencyCode](schema/types/CurrencyCode.md)

- **Type - Date**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Date.schema.json`
  - **Description:** Type represention of an ISO-8601 date, e.g. 2022-01-28
  - **View more:** [schema/types/Date](schema/types/Date.md)

- **Type - Email**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Email.schema.json`
  - **Description:** Type representation of an email address
  - **View more:** [schema/types/Email](schema/types/Email.md)

- **Type - File**

  - **Id:** `https://opencaptablecoalition.com/schema/types/File.schema.json`
  - **Description:** Type representation of a file
  - **View more:** [schema/types/File](schema/types/File.md)

- **Type - MD5 Hash**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Md5.schema.json`
  - **Description:** String representation of MD5 hash with basic validation for a string of 32 characters composed of letters (uppercase or lowercase) and numbers
  - **View more:** [schema/types/Md5](schema/types/Md5.md)

- **Type - Monetary**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Monetary.schema.json`
  - **Description:** Type representation of an amount of money in a specified currency
  - **View more:** [schema/types/Monetary](schema/types/Monetary.md)

- **Type - Name**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Name.schema.json`
  - **Description:** Type comprising of multiple name components
  - **View more:** [schema/types/Name](schema/types/Name.md)

- **Type - Numeric**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Numeric.schema.json`
  - **Description:** Fixed-point string representation of a number (up to 10 decimal places supported)
  - **View more:** [schema/types/Numeric](schema/types/Numeric.md)

- **Type - Percentage**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Percentage.schema.json`
  - **Description:** Fixed-point string representation of a percentage as a decimal between 0.0 and 1.0 (up to 10 decimal places supported)
  - **View more:** [schema/types/Percentage](schema/types/Percentage.md)

- **Type - Phone**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Phone.schema.json`
  - **Description:** Type representation of a phone number
  - **View more:** [schema/types/Phone](schema/types/Phone.md)

- **Type - Pre-Release Omission**

  - **Id:** `https://opencaptablecoalition.com/schema/types/PreReleaseOmission.schema.json`
  - **Description:** Transitional type; allows an otherwise "required" field to support omission by an implementation that can not yet support all fields. This is not intended to be permanent; rather it is a communication mechanism indicating that a field added in a pre-release version of the spec will need to be implemented to support the next release.
  - **View more:** [schema/types/PreReleaseOmission](schema/types/PreReleaseOmission.md)

- **Type - Ratio**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Ratio.schema.json`
  - **Description:** Type representation of a ratio as two parts of a quotient, i.e. numerator and denominator numeric values
  - **View more:** [schema/types/Ratio](schema/types/Ratio.md)

- **Type - Security Exemption**

  - **Id:** `https://opencaptablecoalition.com/schema/types/SecurityExemption.schema.json`
  - **Description:** Type representation of a securities issuance exemption that includes an unstructured description and a country code for ease of processing and analysis
  - **View more:** [schema/types/SecurityExemption](schema/types/SecurityExemption.md)

- **Type - Stock Parent**

  - **Id:** `https://opencaptablecoalition.com/schema/types/StockParent.schema.json`
  - **Description:** Type representation of the parent security of a given stock issuance (e.g. if a stock issuance came from a plan, such as an RSA, or if a stock came from a previous stock entry)
  - **View more:** [schema/types/StockParent](schema/types/StockParent.md)

- **Type - Tax Identifier**

  - **Id:** `https://opencaptablecoalition.com/schema/types/TaxID.schema.json`
  - **Description:** Type representation of a government identifier for tax purposes (e.g. EIN) and corresponding country code (ISO-3166)
  - **View more:** [schema/types/TaxID](schema/types/TaxID.md)

- **Type - Termination Window**

  - **Id:** `https://opencaptablecoalition.com/schema/types/TerminationWindow.schema.json`
  - **Description:** Type representation of a termination window
  - **View more:** [schema/types/TerminationWindow](schema/types/TerminationWindow.md)

- **Type - Vesting Condition**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingCondition.schema.json`
  - **Description:** Describes condition / triggers to be satisfied for vesting to occur
  - **View more:** [schema/types/vesting/VestingCondition](schema/types/vesting/VestingCondition.md)

- **Type - Vesting Condition Portion**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingConditionPortion.schema.json`
  - **Description:** Describes a fractional portion (ratio) of shares associated with a Vesting Condition
  - **View more:** [schema/types/vesting/VestingConditionPortion](schema/types/vesting/VestingConditionPortion.md)

- **Type - Vesting Event Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingEventTrigger.schema.json`
  - **Description:** Describes a vesting condition satisfied when a particular unscheduled event occurs
  - **View more:** [schema/types/vesting/VestingEventTrigger](schema/types/vesting/VestingEventTrigger.md)

- **Type - Vesting Period in Days**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingPeriodInDays.schema.json`
  - **Description:** Describes a period of time expressed in days (e.g. 365 days) for use in Vesting Terms
  - **View more:** [schema/types/vesting/VestingPeriodInDays](schema/types/vesting/VestingPeriodInDays.md)

- **Type - Vesting Period in Months**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingPeriodInMonths.schema.json`
  - **Description:** Describes a period of time expressed in months (e.g. 3 months) for use in Vesting Terms.
  - **View more:** [schema/types/vesting/VestingPeriodInMonths](schema/types/vesting/VestingPeriodInMonths.md)

- **Type - Vesting Schedule Absolute Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingScheduleAbsoluteTrigger.schema.json`
  - **Description:** Describes a vesting condition satisfied on an absolute date.
  - **View more:** [schema/types/vesting/VestingScheduleAbsoluteTrigger](schema/types/vesting/VestingScheduleAbsoluteTrigger.md)

- **Type - Vesting Schedule Relative Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingScheduleRelativeTrigger.schema.json`
  - **Description:** Describes a vesting condition satisfied when a period of time, relative to another vesting condition, has elapsed.
  - **View more:** [schema/types/vesting/VestingScheduleRelativeTrigger](schema/types/vesting/VestingScheduleRelativeTrigger.md)

- **Type - Vesting Start Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingStartTrigger.schema.json`
  - **Description:** Describes a vesting condition satisfied at the security's vesting commencement date
  - **View more:** [schema/types/vesting/VestingStartTrigger](schema/types/vesting/VestingStartTrigger.md)

- **Type - Automatic Conversion on Condition Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger.schema.json`
  - **Description:** Type representation of automatic trigger on a tive or condition.
  - **View more:** [schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger](schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger.md)

- **Type - Automatic Conversion on Date Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_triggers/AutomaticConversionOnDateTrigger.schema.json`
  - **Description:** Type representation of an automatic trigger on a date.
  - **View more:** [schema/types/conversion_triggers/AutomaticConversionOnDateTrigger](schema/types/conversion_triggers/AutomaticConversionOnDateTrigger.md)

- **Type - Elective Conversion At Will**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_triggers/ElectiveConversionAtWillTrigger.schema.json`
  - **Description:** Type representation of elective trigger valid at will (so long as instrument is valid and outstanding).
  - **View more:** [schema/types/conversion_triggers/ElectiveConversionAtWillTrigger](schema/types/conversion_triggers/ElectiveConversionAtWillTrigger.md)

- **Type - Elective Conversion In Date Range Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_triggers/ElectiveConversionInDateRangeTrigger.schema.json`
  - **Description:** Type representation of elective trigger valid on or after start_date and until or before end_date.
  - **View more:** [schema/types/conversion_triggers/ElectiveConversionInDateRangeTrigger](schema/types/conversion_triggers/ElectiveConversionInDateRangeTrigger.md)

- **Type - Elective Conversion on Condition Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_triggers/ElectiveConversionOnConditionTrigger.schema.json`
  - **Description:** Type representation of elective trigger on fulfillment of a condition.
  - **View more:** [schema/types/conversion_triggers/ElectiveConversionOnConditionTrigger](schema/types/conversion_triggers/ElectiveConversionOnConditionTrigger.md)

- **Type - Unspecified Conversion Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_triggers/UnspecifiedConversionTrigger.schema.json`
  - **Description:** Use this where no structured data is available regarding what triggers the conversion of a given security.
  - **View more:** [schema/types/conversion_triggers/UnspecifiedConversionTrigger](schema/types/conversion_triggers/UnspecifiedConversionTrigger.md)

- **Type - Convertible Conversion Rights**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_rights/ConvertibleConversionRight.schema.json`
  - **Description:** Type representation of a conversion right from a convertible into another non-plan security
  - **View more:** [schema/types/conversion_rights/ConvertibleConversionRight](schema/types/conversion_rights/ConvertibleConversionRight.md)

- **Type - Stock Class Conversion Rights**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_rights/StockClassConversionRight.schema.json`
  - **Description:** Type representation of a conversion right from one Stock Class into another Stock Class
  - **View more:** [schema/types/conversion_rights/StockClassConversionRight](schema/types/conversion_rights/StockClassConversionRight.md)

- **Type - Warrant Conversion Rights**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_rights/WarrantConversionRight.schema.json`
  - **Description:** Type representation of a conversion right from a convertible into another non-plan security
  - **View more:** [schema/types/conversion_rights/WarrantConversionRight](schema/types/conversion_rights/WarrantConversionRight.md)

- **Conversion Mechanism - Custom**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_mechanisms/CustomConversionMechanism.schema.json`
  - **Description:** Sets forth inputs and conversion mechanism of a custom conversion, a conversion type that cannot be accurately modelled with any other OCF conversion mechanism type
  - **View more:** [schema/types/conversion_mechanisms/CustomConversionMechanism](schema/types/conversion_mechanisms/CustomConversionMechanism.md)

- **Conversion Mechanism - Fixed Amount**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_mechanisms/FixedAmountConversionMechanism.schema.json`
  - **Description:** Describes how a security converts into a fixed amount of a stock class
  - **View more:** [schema/types/conversion_mechanisms/FixedAmountConversionMechanism](schema/types/conversion_mechanisms/FixedAmountConversionMechanism.md)

- **Conversion Mechanism - Note**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_mechanisms/NoteConversionMechanism.schema.json`
  - **Description:** Sets forth inputs and conversion mechanism of a convertible note
  - **View more:** [schema/types/conversion_mechanisms/NoteConversionMechanism](schema/types/conversion_mechanisms/NoteConversionMechanism.md)

- **Conversion Mechanism - Percent of Capitalization**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism.schema.json`
  - **Description:** Sets forth inputs and conversion mechanism of percent of capitalization conversion (where an instrument purports to grant a percent of company capitalization at some point in time)
  - **View more:** [schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism](schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism.md)

- **Conversion Mechanism - Ratio**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_mechanisms/RatioConversionMechanism.schema.json`
  - **Description:** Sets forth inputs and conversion mechanism of a ratio conversion (primarily used to describe conversion from one stock class (e.g. Preferred) into another (e.g. Common)
  - **View more:** [schema/types/conversion_mechanisms/RatioConversionMechanism](schema/types/conversion_mechanisms/RatioConversionMechanism.md)

- **Conversion Mechanism - SAFE**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_mechanisms/SAFEConversionMechanism.schema.json`
  - **Description:** Sets forth inputs and conversion mechanism of a SAFE (mirrors the flavors and inputs of the Y Combinator SAFE)
  - **View more:** [schema/types/conversion_mechanisms/SAFEConversionMechanism](schema/types/conversion_mechanisms/SAFEConversionMechanism.md)

### Primitives

_Used for object property composition and enforcing uniform properties across parts of the schema._

- **Primitive - Vesting Condition Trigger Type**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/types/vesting/VestingConditionTrigger.schema.json`
  - **Description:** Abstract type describing fields needed in all triggers types, with a 'trigger' being a condition that must be satisfied for a VestingCondition to be met
  - **View more:** [schema/primitives/types/vesting/VestingConditionTrigger](schema/primitives/types/vesting/VestingConditionTrigger.md)

- **Primitive - Vesting Period Type**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/types/vesting/VestingPeriod.schema.json`
  - **Description:** Abstract type describing the fields common to all periods of time (e.g. 3 months, 365 days) for use in Vesting Terms
  - **View more:** [schema/primitives/types/vesting/VestingPeriod](schema/primitives/types/vesting/VestingPeriod.md)

- **Primitive - Conversion Trigger Type**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/types/conversion_triggers/ConversionTrigger.schema.json`
  - **Description:** Abstract type representation of required fields require for conversion rights types.
  - **View more:** [schema/primitives/types/conversion_triggers/ConversionTrigger](schema/primitives/types/conversion_triggers/ConversionTrigger.md)

- **Primitive - Conversion Right Type**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/types/conversion_rights/ConversionRight.schema.json`
  - **Description:** Abstract type representation of a conversion right from a non-plan security into another non-plan security
  - **View more:** [schema/primitives/types/conversion_rights/ConversionRight](schema/primitives/types/conversion_rights/ConversionRight.md)

- **Primitive - Conversion Mechanism Type**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/types/conversion_mechanisms/ConversionMechanism.schema.json`
  - **Description:** Abstract type setting forth required field(s) for ALL conversion mechanism types
  - **View more:** [schema/primitives/types/conversion_mechanisms/ConversionMechanism](schema/primitives/types/conversion_mechanisms/ConversionMechanism.md)

- **Primitive - Object**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/Object.schema.json`
  - **Description:** Abstract object to be extended by all other objects
  - **View more:** [schema/primitives/objects/Object](schema/primitives/objects/Object.md)

- **Primitive - Security Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/SecurityTransaction.schema.json`
  - **Description:** Abstract transaction object to be extended by all transaction objects that deal with individual securities
  - **View more:** [schema/primitives/objects/transactions/SecurityTransaction](schema/primitives/objects/transactions/SecurityTransaction.md)

- **Primitive - Stock Class Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/StockClassTransaction.schema.json`
  - **Description:** Abstract transaction object to be extended by all transaction objects that affect the stock class
  - **View more:** [schema/primitives/objects/transactions/StockClassTransaction](schema/primitives/objects/transactions/StockClassTransaction.md)

- **Primitive - Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/Transaction.schema.json`
  - **Description:** Abstract transaction object to be extended by all other transaction objects
  - **View more:** [schema/primitives/objects/transactions/Transaction](schema/primitives/objects/transactions/Transaction.md)

- **Primitive - Security Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/transfer/Transfer.schema.json`
  - **Description:** Abstract object describing a security transfer or secondary sale transaction
  - **View more:** [schema/primitives/objects/transactions/transfer/Transfer](schema/primitives/objects/transactions/transfer/Transfer.md)

- **Primitive - Security Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/retraction/Retraction.schema.json`
  - **Description:** Abstract object describing a security retraction transaction
  - **View more:** [schema/primitives/objects/transactions/retraction/Retraction](schema/primitives/objects/transactions/retraction/Retraction.md)

- **Primitive - Security Repurchase Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/repurchase/Repurchase.schema.json`
  - **Description:** Abstract object describing common properties to a repurchase transaction
  - **View more:** [schema/primitives/objects/transactions/repurchase/Repurchase](schema/primitives/objects/transactions/repurchase/Repurchase.md)

- **Primitive - Security Release Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/release/Release.schema.json`
  - **Description:** Abstract object describing fields common to all release transaction objects
  - **View more:** [schema/primitives/objects/transactions/release/Release](schema/primitives/objects/transactions/release/Release.md)

- **Primitive - Security Reissuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/reissuance/Reissuance.schema.json`
  - **Description:** Abstract object describing common properties to a reissuance of a security
  - **View more:** [schema/primitives/objects/transactions/reissuance/Reissuance](schema/primitives/objects/transactions/reissuance/Reissuance.md)

- **Primitive - Security Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/issuance/Issuance.schema.json`
  - **Description:** Abstract object describing fields common to all issuance objects
  - **View more:** [schema/primitives/objects/transactions/issuance/Issuance](schema/primitives/objects/transactions/issuance/Issuance.md)

- **Primitive - Security Exercise Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/exercise/Exercise.schema.json`
  - **Description:** Abstract object describing fields common to all exercise transaction objects
  - **View more:** [schema/primitives/objects/transactions/exercise/Exercise](schema/primitives/objects/transactions/exercise/Exercise.md)

- **Primitive - Security Conversion Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/conversion/Conversion.schema.json`
  - **Description:** Abstract object describing fields common to all conversion transaction objects
  - **View more:** [schema/primitives/objects/transactions/conversion/Conversion](schema/primitives/objects/transactions/conversion/Conversion.md)

- **Primitive - Security Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/cancellation/Cancellation.schema.json`
  - **Description:** Abstract object describing fields common to all cancellation transaction objects
  - **View more:** [schema/primitives/objects/transactions/cancellation/Cancellation](schema/primitives/objects/transactions/cancellation/Cancellation.md)

- **Primitive - Security Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/acceptance/Acceptance.schema.json`
  - **Description:** Abstract object describing a security acceptance transaction
  - **View more:** [schema/primitives/objects/transactions/acceptance/Acceptance](schema/primitives/objects/transactions/acceptance/Acceptance.md)

- **Object - File**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/files/File.schema.json`
  - **Description:** Abstract file to be extended by all other files
  - **View more:** [schema/primitives/files/File](schema/primitives/files/File.md)

