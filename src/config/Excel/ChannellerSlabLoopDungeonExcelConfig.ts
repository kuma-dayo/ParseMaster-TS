import { ConfigDefault } from ".."

export const ChannellerSlabLoopDungeonExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    openDay: "vuint",
    titleTextMapHash: "vuint",
    contentTextMapHash: "vuint",
    monsterIdVec: "vuint[]",
    limitingConditionVec: "vuint[]",
    firstPassRewardId: "vuint",
  },
}
