import { ConfigDefault } from "../"

export const DungeonEntryExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    sceneId: "vuint",
    dungeonEntryId: "vuint",
    type: "DungunEntryType",
    isShowInAdvHandbook: "bool",
    descTextMapHash: "vuint",
    cooldownTipsDungeonId: "vuint[]",
    isDefaultOpen: "bool",
    isDailyRefresh: "bool",
    cond_comb: "LogicType",
    satisfied_cond: "DungeonEntrySatisfiedCond[]",
    picPath: "string",
    systemOpenUiId: "vuint",
    rewardDataId: "vuint",
    descriptionCycleRewardList: "vuint[][]",
  },
}
