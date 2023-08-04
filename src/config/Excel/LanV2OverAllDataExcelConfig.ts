import { ConfigDefault } from ".."

export const LanV2OverAllDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    bossDungeonId: "vuint",
    bossRewardId: "vuint",
    bossStartDay: "vuint",
    bossWatcherIdList: "vuint[]",
    bossExhibitionIdList: "vuint[]",
    bossPushTipsId: "vuint",
    clothesWatcherIdList: "vuint[]",
    clothesRewardId: "vuint",
    bossCardIdList: "vuint[]",
    activityPlayDuration: "vuint",
    hideExchangeEntry: "bool",
  },
}
