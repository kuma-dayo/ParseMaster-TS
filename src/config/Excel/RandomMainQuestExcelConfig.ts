import { ConfigDefault } from ".."

export const RandomMainQuestExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    type: "QuestType",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    luaPath: "string",
    recommendLevel: "vuint",
    repeatable: "bool",
    activeMode: "PlayMode",
    suggestTrackMainQuestList: "vuint[]",
    suggestTrackOutOfOrder: "bool",
    showType: "QuestShowType",
    chapterId: "vuint",
    rewardIdList: "string",
  },
}
