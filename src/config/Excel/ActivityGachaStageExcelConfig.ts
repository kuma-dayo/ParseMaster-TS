import { ConfigDefault } from ".."

export const ActivityGachaStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stageId: "vuint",
    nextStageId: "vuint",
    isTech: "bool",
    type: "ActivityGachaTargetType",
    groupIdList: "vuint[]",
    groupNumList: "vuint[]",
    stageGroupIdList: "vuint[]",
    taskContentList: "vuint[]",
    condID: "vuint",
    isNeedFinish: "bool",
    watcherID: "vuint",
    openQuestID: "vuint",
  },
}
