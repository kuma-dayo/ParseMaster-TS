import { ConfigDefault } from ".."

export const MiracleRingExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    itemId: "vuint",
    miracleValue: "vuint",
    miracleTag: "MiracleTag[]",
  },
}
