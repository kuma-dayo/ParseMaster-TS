import { ConfigDefault } from "../"

export const ActivitySpiceExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    scheduleId: "vuint",
    spiceId: "vuint",
    watcherIdList: "vuint[]",
    fetterValue: "vuint",
    extraWidth: "vuint",
    preQuestID: "vuint",
  },
}
