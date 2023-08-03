import { ConfigDefault } from "../"

export const RoguelikeCurseExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    level: "vuint",
    groupId: "vuint",
    curseNameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    effectConfig: "RoguelikeEffectExcelConfig",
    isDynamicShow: "bool",
    isClearAtNextLevel: "bool",
    descParamList: "float[]",
    descParamSuperpositionList: "bool[]",
  },
}