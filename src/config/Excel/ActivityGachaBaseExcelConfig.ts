import { ConfigDefault } from "../"

export const ActivityGachaBaseExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    activityId: "vuint",
    materialId: "vuint",
    elemTime: "vuint",
    taskContentId: "vuint",
    unlockStageId: "vuint",
    maxConvert: "vuint",
    robotLimit: "vuint",
    robotGuarNum: "vuint",
    robotHiddenFirstGuarNum: "vuint",
    robotHiddenGuarNum: "vuint",
    robotGuarRate: "vuint",
    robotHiddenGuarRate: "vuint",
    watcherList: "vuint[]",
    questList: "vuint[]",
    reminderId: "vuint",
    exchangeTipsCond: "vuint",
    freeModeUnlockQuest: "vuint",
  },
}
