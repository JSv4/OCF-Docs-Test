:house: [Documentation Home](../../../README.md)

---

### Object - Stock Legend Template

`https://opencaptablecoalition.com/schema/objects/StockLegendTemplate.schema.json`

**Description:** _Object describing a stock legend template_

**Data Type:** `OCF Object - STOCK_LEGEND_TEMPLATE`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md) ../primitives/objects/Object.md

**Properties:**

| Property | Type                                                                                                                 | Description                                                     | Required   |
| -------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| id       | `STRING`                                                                                                             | Identifier for the object                                       | `REQUIRED` |
| comments | [`STRING`]                                                                                                           | Unstructured text comments related to and stored for the object | -          |
|          | **Constant:** `STOCK_LEGEND_TEMPLATE`</br>_Defined in [schema/enums/ObjectType.schema.json](../enums/ObjectType.md)_ | Object type field                                               | -          |
| name     | `STRING`                                                                                                             | Name for the stock legend template                              | `REQUIRED` |
| text     | `STRING`                                                                                                             | The full text of the stock legend                               | `REQUIRED` |

**Source Code:** [schema/objects/StockLegendTemplate](../../../../schema/objects/StockLegendTemplate.schema.json)

**Examples:**

```json
[
  {
    "id": "f04e7c40-0a64-4d2e-9208-8828098d73d5",
    "object_type": "STOCK_LEGEND_TEMPLATE",
    "name": "1933 Act Legend",
    "text": "THE SHARES REPRESENTED HEREBY HAVE NOT BEEN REGISTERED UNDER THE SECURITIES ACT OF 1933, AND HAVE BEEN ACQUIRED FOR INVESTMENT AND NOT WITH A VIEW TO, OR IN CONNECTION WITH, THE SALE OR DISTRIBUTION THEREOF. NO SUCH TRANSFER MAY BE EFFECTED WITHOUT AN EFFECTIVE REGISTRATION STATEMENT RELATED THERETO OR AN OPINION OF COUNSEL IN A FORM SATISFACTORY TO THE COMPANY THAT SUCH REGISTRATION IS NOT REQUIRED UNDER THE SECURITIES ACT OF 1933."
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
