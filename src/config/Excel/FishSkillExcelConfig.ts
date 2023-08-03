import { ConfigDefault } from "../"

export const FishSkillExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    skillCategory: "FishSkillCategory",
    skillType: "FishSkillType",
    param: "float[]",
    strength: "vuint",
    forceFactor: "float",
    bonusWidth: "float[]",
    bonusDuration: "float[]",
    bonusOffset: "vuint[]",
    bonusSpeed: "float[]",
    duration: "float",
    priority: "vuint",
  },
}
