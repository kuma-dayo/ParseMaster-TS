import { ConfigDefault } from "../"

export const LanV2FireworksSkillDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    skillId: "vuint",
    skillType: "FireworksReformSkillType",
    staminaValueCost: "vuint",
    unlockChallengeId: "vuint",
    deltaFireElementValue: "vint",
    luckyProb: "vuint",
    factorAddValueMin: "vuint",
    factorAddValueMax: "vuint",
    effectParams: "vuint[]",
    skillTitleTextMapHash: "vuint",
    skillDescTextMapHash: "vuint",
    descArgs: "vuint[]",
  },
}
