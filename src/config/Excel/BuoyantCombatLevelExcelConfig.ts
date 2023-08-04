import { ConfigDefault } from ".."

export const BuoyantCombatLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    galleryId: "vuint",
    groupId: "vuint",
    dayIndex: "vuint",
    rewardPreview: "vuint",
    levelRuleTextMapHash: "vuint",
    levelRuleBriefTextMapHash: "vuint",
    watcherID: "vuint[]",
    watcherScore: "vuint[]",
    recommendLevel: "vuint[]",
    iconPosition: "float[]",
  },
}
