import { ConfigDefault } from "../"

export const BonusActivityClientExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    bonusActivityType: "BonusActivityType",
    avatarConfigId: "vuint",
    voiceIndexList: "vuint[]",
    questId: "vuint",
    openPlayerLevel: "vuint",
    perfabPath: "string",
    unlockTipsTextMapHash: "vuint",
  },
}
