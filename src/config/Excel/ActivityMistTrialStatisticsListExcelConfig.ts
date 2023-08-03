import { ConfigDefault } from "../"

export const ActivityMistTrialStatisticsListExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    scheduleId: "vuint",
    statName: "MistTrialStatisticType",
    param: "string[]",
  },
}