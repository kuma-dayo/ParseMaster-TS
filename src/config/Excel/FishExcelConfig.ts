import { ConfigDefault } from "../"

export const FishExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    monsterId: "vuint",
    itemId: "vuint",
    hp: "vuint",
    skillId: "vuint[]",
    proficientId: "vuint",
    bonusWidth: "vuint",
    bonusDuration: "float[]",
    bonusOffset: "vuint[]",
    bonusSpeed: "float[]",
    feelerTimes: "float[]",
    attractRange: "float",
    fleeRange: "float",
    rewardId: "vuint",
    dropIdList: "vuint[]",
    fishCateId: "vuint",
    biteTimeout: "vuint",
    initPose: "vuint",
    compoundId: "vuint",
  },
}