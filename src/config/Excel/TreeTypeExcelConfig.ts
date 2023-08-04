import { ConfigDefault } from ".."

export const TreeTypeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    treePattern: "string",
    treeType: "TreeType",
  },
}
