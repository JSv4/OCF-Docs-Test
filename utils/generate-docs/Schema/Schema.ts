import path from "node:path";
import { fileURLToPath } from "url";

import SchemaReader from "./SchemaReader.js";
import SchemaWriter from "./SchemaWriter.js";
import ExamplesReader from "./ExamplesReader.js";
import SupplementalsReader from "./SupplementalsReader.js";
import Supplementals from "./Supplementals.js";
import Examples, { ExampleJson } from "./Examples.js";
import TableOfContents from "./TableOfContents.js";
import SchemaNodeFactory, {
  SchemaNode,
  SchemaNodeJson,
} from "./SchemaNode/Factory.js";

export type { SchemaNodeJson };
export type { ExampleJson };

export const REPO_ROOT = path.resolve(
  fileURLToPath(import.meta.url),
  "../../../.."
);

/**
 *  Schema represents the OCF schema format.
 */
export default class Schema {
  static generateDocs = async () => {
    const schemaNodeJsons = await SchemaReader.read(
      path.join(REPO_ROOT, "schema")
    );
    const exampleJsons = await ExamplesReader.read(
      path.join(REPO_ROOT, "samples")
    );
    const supplementalMarkdowns = await SupplementalsReader.read(
      path.join(REPO_ROOT, "docs", "supplemental")
    );
    const schema = new Schema(
      schemaNodeJsons,
      exampleJsons,
      supplementalMarkdowns
    );
    await SchemaWriter.write(REPO_ROOT, schema);
    await TableOfContents.write(
      schema,
      REPO_ROOT,
      path.join("docs", "README.md")
    );
    await TableOfContents.write_index(
      schema,
      REPO_ROOT,
      path.join("docs", "markdown", "INDEX.md")
    );
  };

  readonly schemaNodes: SchemaNode[];
  readonly examples: Examples;
  readonly supplementals: Supplementals;

  constructor(
    schemaNodeJsons: SchemaNodeJson[],
    exampleJsons: ExampleJson[] = [],
    supplementalMarkdowns: string[] = []
  ) {
    this.schemaNodes = schemaNodeJsons.map((json: SchemaNodeJson) =>
      SchemaNodeFactory.build(this, json)
    );
    this.examples = new Examples(exampleJsons);
    this.supplementals = new Supplementals(supplementalMarkdowns);
  }

  findSchemaNodeById = (id: string) => {
    const schemaNode = this.schemaNodes.find((node) => node.id() === id);
    if (!schemaNode) {
      throw new Error(`Cannot find SchemaNode '${id}'`);
    }
    return schemaNode;
  };

  findExampleItemsByObjectType = (objectType: string) =>
    this.examples.findExampleItemsByObjectType(objectType);

  findSupplementalMarkdownsByShortId = (shortId: string) =>
    this.supplementals.findSupplementalMarkdownByShortId(shortId);

  filterSchemaNodesByParentType = (parentType: string) =>
    this.schemaNodes.filter(
      (schemaNode) => schemaNode.parentType() === parentType
    );
}
