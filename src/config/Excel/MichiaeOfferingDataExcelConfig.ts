import { ConfigDefault } from ".."

export const MichiaeOfferingDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    configId: "vuint",
    level: "vuint",
    levelNewEffectDescTextMapHash: "vuint",
    levelNewEffectDescArgs: "string[]",
    levelAccEffectDescTextMapHash: "vuint",
    levelAccEffectDescArgs: "string[]",
  },
}
