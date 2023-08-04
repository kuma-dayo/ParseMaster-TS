import { ConfigDefault } from ".."

export const MusicGamePreviewConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    activityID: "vuint",
    musicIDList: "vuint[]",
    startQuestID: "vuint",
    tutorialID: "vuint",
    npcMarkID: "vuint",
  },
}
