import { ConfigDefault } from "../"

export const OverflowTransformExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    transformType: "OverflowTransformType",
    transformId: "vuint",
    transformBaseCount: "vuint",
    transformResults: "IdCountConfig[]",
    transformItemLimitType: "ItemLimitType",
  },
}
