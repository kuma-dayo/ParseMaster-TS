import { ConfigDefault } from ".."

export const ActivityIslandPartyOverallExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    cardDisplayCountdown: "vuint",
    scoreDisplayCountdown: "vuint",
  },
}
