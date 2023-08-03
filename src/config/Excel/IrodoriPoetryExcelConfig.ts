import { ConfigDefault } from "../"

export const IrodoriPoetryExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    condID: "vuint",
    themeCondID: "vuint",
    unlockDay: "vuint",
    entityType: "IrodoriPoetryEntityType",
    scanConfigList: "IrodoriPoetryScanConfig[]",
    mainQuestID: "vuint",
    minInspirationQuestID: "vuint",
    fillPoetryQuestID: "vuint",
    reminderIDList: "vuint[]",
    watcherID: "vuint",
    cameraHintTextMapHash: "vuint",
    themeTitleTextMapHash: "vuint",
    themeDescTextMapHash: "vuint",
    poetryTitleTextMapHash: "vuint",
    existsLineIDList: "vuint[]",
  },
}
