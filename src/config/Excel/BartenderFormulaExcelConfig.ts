import { ConfigDefault } from ".."

export const BartenderFormulaExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    BaseMaterial: "BartenderMaterial[]",
    ExtraMaterial: "BartenderMaterial[]",
    AvailableAffixList: "vuint[]",
    mixingState: "BartenderMixingState",
    descTextMapHash: "vuint",
    nameTextMapHash: "vuint",
    type: "vuint",
    lockType: "vuint",
    blurredDescTextMapHash: "vuint",
  },
}
