import { ConfigDefault } from "../"

export const ActivitySummerTimeRaceExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    medalWatcher: "vuint[]",
    worldCoord: "float[]",
    medalPoint: "vuint[]",
    levelTitleTextMapHash: "vuint",
    timeFactor: "vuint",
    goldFactor: "vuint",
    activityCondId: "vuint",
    groupId: "vuint",
    openDay: "vuint",
    boatPointConfigId: "vuint",
    playerPointConfigId: "vuint",
  },
}
