import { ConfigDefault } from "../"

export const DailyTaskExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    cityId: "vuint",
    poolId: "vuint",
    type: "DailyTaskType",
    rarity: "vuint",
    questId: "vuint",
    oldGroupVec: "vuint[]",
    newGroupVec: "vuint[]",
    finishType: "DailyTaskFinishType",
    finishParam1: "vuint",
    finishParam2: "vuint",
    finishProgress: "vuint",
    taskRewardId: "vuint",
    centerPosition: "string",
    enterDistance: "vuint",
    exitDistance: "vuint",
    titleTextMapHash: "vuint",
    descriptionTextMapHash: "vuint",
    targetTextMapHash: "vuint",
    radarRadius: "float",
    relatedTag: "vuint",
  },
}
