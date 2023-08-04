import { ConfigDefault } from ".."

export const LanV2FireworksChallengeDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    challengeId: "vuint",
    titleTextMapHash: "vuint",
    icon: "string",
    factorIdList: "vuint[]",
    initFireElementValue: "vuint",
    fullScore: "vuint",
    unlockAbilityScore: "vuint",
    unlockFireworksScore: "vuint",
    watcherIdList: "vuint[]",
    addStaminaValue: "vuint",
  },
}
