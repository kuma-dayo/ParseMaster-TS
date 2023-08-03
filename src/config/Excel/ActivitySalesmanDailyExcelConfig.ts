import { ConfigDefault } from "../"

export const ActivitySalesmanDailyExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    dailyConfigId: "vuint",
    costItemList: "IdCountConfig[]",
    clusPosTextMapHash: "vuint",
    npcTalkTextMapHash: "vuint",
    IntroTextMapHash: "vuint",
    tracePosition: "string",
  },
}
