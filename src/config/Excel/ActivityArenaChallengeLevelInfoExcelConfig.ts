import { ConfigDefault } from "../"

export const ActivityArenaChallengeLevelInfoExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    scheduleId: "vuint",
    levelId: "vuint",
    levelNameTextMapHash: "vuint",
    monsterPreviewId: "vuint",
    monsterConfig: "string",
    levelDescTextMapHash: "vuint",
    levelDescParams: "string",
    monsterPreviewIdHardChallenge: "vuint",
    monsterConfigHardChallenge: "string",
    levelHardChallengeDescTextMapHash: "vuint",
    levelHardChallengeDescParams: "string",
    levelDetailDescTextMapHash: "vuint",
    challengeIdList: "vuint[]",
  },
}
