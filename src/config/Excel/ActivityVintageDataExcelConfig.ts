import { ConfigDefault } from "../"

export const ActivityVintageDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    rewardPreviewId: "vuint",
    firstPreChapterId: "vuint",
    secondPreChapterId: "vuint",
    weaponWatcherIds: "vuint[]",
    firstPreMainQuestId: "vuint",
    secondPreMainQuestId: "vuint",
    maxHeat: "vuint",
    isQuestIsolated: "bool",
  },
}
