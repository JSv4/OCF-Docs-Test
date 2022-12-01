:house: [Documentation Home](../../../README.md)

---

### Object - Issuer

`https://opencaptablecoalition.com/schema/objects/Issuer.schema.json`

**Description:** _Object describing the issuer of the cap table (the company whose cap table this is)_

**Data Type:** `OCF Object - ISSUER`

**Composed From:**

- [schema/primitives/objects/Object](../../../docs/markdown/schema/primitives/objects/Object.md)

**Properties:**

| Property                         | Type                                                                                   | Description                                                                     | Required   |
| -------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------- |
| id                               | `STRING`                                                                               | Identifier for the object                                                       | `REQUIRED` |
| comments                         | [`STRING`]                                                                             | Unstructured text comments related to and stored for the object                 | -          |
|                                  | **Constant:** `ISSUER`</br>_Defined in ../enums/ObjectType.md_                         | Object type field                                                               | -          |
| legal_name                       | `STRING`                                                                               | Legal name of the issuer                                                        | `REQUIRED` |
| dba                              | `STRING`                                                                               | Doing Business As name                                                          | -          |
| formation_date                   | [schema/types/Date](../OCF-Docs-Test/docs/markdown/schema/types/Date.md)               | Date of formation                                                               | `REQUIRED` |
| country_of_formation             | [schema/types/CountryCode](../../../schema/types/CountryCode.md)                       | The country where the issuer company was legally formed (ISO 3166-1 alpha-2)    | `REQUIRED` |
| country_subdivision_of_formation | [schema/types/CountrySubdivisionCode](../../../schema/types/CountrySubdivisionCode.md) | The state, province, or subdivision where the issuer company was legally formed | -          |
| tax_ids                          | [ [schema/types/TaxID](../OCF-Docs-Test/docs/markdown/schema/types/TaxID.md) ]         | The tax ids for this issuer company                                             | -          |
| email                            | [schema/types/Email](../OCF-Docs-Test/docs/markdown/schema/types/Email.md)             | A work email that the issuer company can be reached at                          | -          |
| phone                            | [schema/types/Phone](../OCF-Docs-Test/docs/markdown/schema/types/Phone.md)             | A phone number that the issuer company can be reached at                        | -          |
| address                          | [schema/types/Address](../OCF-Docs-Test/docs/markdown/schema/types/Address.md)         | The headquarters address of the issuing company                                 | -          |

**Source Code:** [schema/objects/Issuer](../../../../../../../../schema/objects/Issuer.schema.json)

Copyright © 2022 Open Cap Table Coalition.
