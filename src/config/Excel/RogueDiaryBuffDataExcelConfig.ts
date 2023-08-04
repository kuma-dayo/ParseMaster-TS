import { ConfigDefault } from ".."

export const RogueDiaryBuffDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    descParam: "string[]",
    quality: "vuint",
    icon: "string",
    type: "RogueDiaryBuffType",
    effectType: "RogueDiaryBuffEffectType",
  },
}
