import { ConfigDefault } from "../"

export const EchoShellExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    echoShellType: "EchoShellType",
    storyId: "vuint",
    voiceTitleTextMapHash: "vuint",
    voiceDescTextMapHash: "vuint",
    voiceList: "vuint[]",
    reminderList: "vuint[]",
    imagePath: "string",
    markID: "vuint",
    markPosition: "float[]",
    markTipTitleTextMapHash: "vuint",
    markTipContentTextMapHash: "vuint",
    exclusiveSceneTags: "vuint[]",
    relatedDungeonID: "vuint",
    dungeonPassedLockTipTextMapHash: "vuint",
    relatedDungeonEntryID: "vuint",
    orderID: "vuint",
    relatedDungeonEntryIDList: "vuint[]",
    relatedSubQuestID: "vuint",
  },
}
