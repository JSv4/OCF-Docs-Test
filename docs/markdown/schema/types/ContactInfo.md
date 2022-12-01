:house: [Documentation Home](../../../README.md)

---

### Type - Contact Info

`https://opencaptablecoalition.com/schema/types/ContactInfo.schema.json`

_Type representation of a primary contact person for a stakeholder (e.g. a fund)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property      | Type                                                                                         | Description                           | Required   |
| ------------- | -------------------------------------------------------------------------------------------- | ------------------------------------- | ---------- |
| name          | [schema/types/Name](home/jman/source/OCF-Docs-Test/docs/markdown/schema/types/Name.md)       | Contact's name                        | `REQUIRED` |
| phone_numbers | [ [schema/types/Phone](home/jman/source/OCF-Docs-Test/docs/markdown/schema/types/Phone.md) ] | Phone numbers to reach the contact at | `REQUIRED` |
| emails        | [ [schema/types/Email](home/jman/source/OCF-Docs-Test/docs/markdown/schema/types/Email.md) ] | Emails to reach the contact at        | `REQUIRED` |

**Source Code:** [schema/types/ContactInfo](../../../../../../../../schema/types/ContactInfo.schema.json)

Copyright © 2022 Open Cap Table Coalition.
