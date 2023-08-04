import { ConfigDefault } from ".."

export const DisplayItemExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "ItemConfig",
  Fields: {
    typeDescTextMapHash: "vuint",
    rankLevel: "vuint",
    displayType: "DisplayItemType",
    param: "vuint",
  },
}
