import { ConfigDefault } from ".."

export const CustomLevelGroupConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    groupId: "vuint",
    dungeonList: "vuint[]",
    activityDungeonList: "vuint[]",
    maxEditCount: "vuint",
    storeMaxCount: "vuint",
    coinChallengeId: "vuint",
    coinExhibitionId: "vuint",
    finishExhibitionId: "vuint",
    costAlert: "vuint",
  },
}
