import { ConfigDefault } from "../"

export const IrodoriMasterExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    levelID: "vuint",
    levelType: "IrodoriMasterLevelType",
    unlockDay: "vuint",
    watcherList: "vuint[]",
    sliverChallengeID: "vuint",
    goldChallengeID: "vuint",
    goldChallengeTime: "vuint",
    condID: "vuint",
    guideCondID: "vuint",
    guideQuestID: "vuint",
    battleDescTextMapHash: "vuint",
    battleNameTextMapHash: "vuint",
  },
}