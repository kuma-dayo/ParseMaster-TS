import { ConfigDefault } from ".."

export const RoguelikeCardExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    sortOrder: "vuint",
    label: "RoguelikeCardLabel",
    type: "RoguelikeCardType",
    relatedRuneList: "vuint[]",
    relatedElementList: "string[]",
    effectConfig: "RoguelikeEffectExcelConfig",
    isClearAtNextLevel: "bool",
    isDynamicShow: "bool",
    cardNameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    extraDescTextMapHash: "vuint",
    descParamList: "float[]",
    descParamSuperpositionList: "bool[]",
    descParamBaseValueList: "float[]",
  },
}
