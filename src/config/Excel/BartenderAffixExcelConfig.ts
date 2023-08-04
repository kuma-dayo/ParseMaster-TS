import { ConfigDefault } from ".."

export const BartenderAffixExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    orderType: "OrderingType",
    materialId: "vuint",
    materialCount: "vuint",
  },
}
