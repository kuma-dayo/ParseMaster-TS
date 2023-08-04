import { ConfigDefault } from ".."

export const BooksCodexExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    materialId: "vuint",
    SortOrder: "vuint",
    isDisuse: "bool",
  },
}
