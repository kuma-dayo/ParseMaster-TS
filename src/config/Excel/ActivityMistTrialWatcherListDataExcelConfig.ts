import { ConfigDefault } from "../"

export const ActivityMistTrialWatcherListDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    scheduleId: "vuint",
    challengeWatcherId: "vuint",
    dungeonShowContentType: "MistTrialClientSyncType",
    showParam: "string[]",
    progressFormatTextMapHash: "vuint",
    isNeedShowProgress: "bool",
    hintFormatTextMapHash: "vuint",
  },
}
