import { ConfigDefault } from "../"

export const MonsterAffixExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    affix: "string",
    comment: "string",
    abilityName: "string[]",
    isCommon: "bool",
    preAdd: "bool",
    isLegal: "string",
    iconPath: "string",
    radarHintID: "vuint",
    generalSkillIcon: "string",
  },
}
