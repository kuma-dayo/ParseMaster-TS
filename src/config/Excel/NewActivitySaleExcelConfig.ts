import { ConfigDefault } from "../"

export const NewActivitySaleExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    saleType: "NewActivitySaleType",
    saleParam: "string[]",
    bufftipsTextMapHash: "vuint",
  },
}