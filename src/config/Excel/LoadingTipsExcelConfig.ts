import { ConfigDefault } from "../"

export const LoadingTipsExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    tipsTitleTextMapHash: "vuint",
    tipsDescTextMapHash: "vuint",
    stageID: "string",
    startTime: "string",
    endTime: "string",
    minLevel: "vuint",
    maxLevel: "vuint",
    limitOpenState: "string",
    preMainQuestIds: "string",
    preQuestIdList: "vuint[]",
    disableQuestIdList: "vuint[]",
    enableDungeonId: "vuint[]",
    weight: "vuint",
  },
}