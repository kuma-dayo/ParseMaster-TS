import { ConfigDefault } from "../"

export const OfferingLevelUpExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    offeringId: "vuint",
    level: "vuint",
    isMaxLevel: "bool",
    consumeItemConfigVec: "IdCountConfig[]",
    rewardId: "vuint",
    actionVec: "OfferingActionContent[]",
    cutSceneId: "vuint",
    isAutoTakeReward: "bool",
  },
}