import fse from "fs-extra";

import Schema from "./Schema.js";
import SchemaNode from "./SchemaNode/SchemaNode.js";

const README_INSERT_START = "## Schemas are divided into";
const README_INSERT_END = "## Developer Information";

/**
 * Uses a Schema object to create a table of contents in markdown for inserting
 * into the project's README.
 */
export default class TableOfContents {
  static write = (
    schema: Schema,
    readmePath: string,
    docIndexPath: string,
    docsUrlRoot: string,
    repoUrlRoot: string,
    addFileExtension: boolean
  ) => {
    const tableOfContents = new TableOfContents(
      schema,
      docIndexPath,
      docsUrlRoot,
      repoUrlRoot,
      addFileExtension
    );
    const readmeString = fse.readFileSync(readmePath).toString();
    return fse.writeFile(
      readmePath,
      tableOfContents.replaceTocInIndexTemplateString(readmeString)
    );
  };

  protected readonly schema: Schema;
  protected readonly repoUrlRoot: string;
  protected readonly docIndexPath: string;
  protected readonly docsUrlRoot: string;
  protected readonly addFileExtension: boolean;

  constructor(
    schema: Schema,
    docIndexPath: string,
    docsUrlRoot: string,
    repoUrlRoot: string,
    addFileExtension: boolean
  ) {
    this.schema = schema;
    this.repoUrlRoot = repoUrlRoot;
    this.docIndexPath = docIndexPath;
    this.docsUrlRoot = docsUrlRoot;
    this.addFileExtension = addFileExtension;
  }

  protected markdownFromSchemaNode = (
    schemaNode: SchemaNode
  ) => `- **${schemaNode.title()}**

  - **Id:** \`${schemaNode.id()}\`
  - **Description:** ${schemaNode
    .description()
    .replace(/\n/g, "\n  ")
    .replace(/ \n/g, "\n")}
  - **View more:** [${schemaNode.shortId()}](${schemaNode.docMdLink()})`;

  protected markdownForSchemaNodesOfParentType = (parentType: string) =>
    this.schema
      .filterSchemaNodesByParentType(parentType)
      .map(this.markdownFromSchemaNode).join(`

`);

  markdown = () => `## Schemas are divided into five folders:

### [Files](${this.repoUrlRoot}/schema/files)

_Describes the eight top-level files that hold OCF objects and are required to export or import a cap table._

${this.markdownForSchemaNodesOfParentType("files")}

### [Objects](${this.repoUrlRoot}/schema/objects)

_Describing the structure of OCF -- these contain the common object properties \`id\` and \`comments\`_

${this.markdownForSchemaNodesOfParentType("objects")}

### [Enums](${this.repoUrlRoot}/schema/enums)

_Key enumerations used throughout the schemas_

${this.markdownForSchemaNodesOfParentType("enums")}

### [Types](${this.repoUrlRoot}/schema/types)

_Used as common building blocks for properties that are more complex than primitives but don't need separate unique Ids._

${this.markdownForSchemaNodesOfParentType("types")}

### [Primitives](${this.repoUrlRoot}/schema/primitives)

_Used for object property composition and enforcing uniform properties across parts of the schema._

${this.markdownForSchemaNodesOfParentType("primitives")}

`;

  replaceTocInIndexTemplateString = (indexTemplateString: string) =>
    indexTemplateString.slice(
      0,
      indexTemplateString.indexOf(README_INSERT_START)
    ) +
    this.markdown() +
    indexTemplateString.slice(indexTemplateString.indexOf(README_INSERT_END));

  replaceHomeInReadmeString = (indexTemplateString: string) =>
    indexTemplateString.replaceAll("{{docs_index}}", this.docIndexPath);

  replaceRepoUrlInIndexTemplateString = (indexTemplateString: string) =>
    indexTemplateString.replaceAll("{{repo_root}}", this.docIndexPath);

  replaceDocUrlInIndexTemplateString = (indexTemplateString: string) =>
    indexTemplateString.replaceAll("{{docs_root}}", this.docIndexPath);
}
