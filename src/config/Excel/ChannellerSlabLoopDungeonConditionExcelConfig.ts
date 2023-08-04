import { ConfigDefault } from ".."

export const ChannellerSlabLoopDungeonConditionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    descTextMapHash: "vuint",
    conditionType: "ChannellerSlabCondition",
    icon: "string",
    conditionParam1: "vuint",
    conditionParam2: "vuint",
    exclusiveId: "vuint",
    score: "vint",
  },
}
