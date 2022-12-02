import SchemaNode from "../../SchemaNode.js";
import InlineProperty from "./InlineProperty.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export interface ObjectConstJson {
  const: string;
}

export default class ObjectConstProperty extends InlineProperty {
  protected readonly json: ObjectConstJson;
  protected readonly inMdFileAtPath: string;

  constructor(
    schema: Schema,
    json: ObjectConstJson,
    inMdFileAtPath: string,
    idOverride?: string
  ) {
    super(schema, json, idOverride);
    this.json = json;
    this.inMdFileAtPath = inMdFileAtPath;
  }

  protected const = () => this.json["const"];

  protected objectTypeEnumSchemaNode = () =>
    this.schema.findSchemaNodeById(
      "https://opencaptablecoalition.com/schema/enums/ObjectType.schema.json"
    );

  markdownTableType = (inMdFileAtPath: string) =>
    `**Constant:** \`${this.const().toUpperCase()}\`</br>_Defined in [${this.objectTypeEnumSchemaNode().shortId()}.schema.json](${this.objectTypeEnumSchemaNode().relativePathToOutputDocumentation(
      inMdFileAtPath
    )})_`;

  markdownTableDescription = () => "Object type field";
}
