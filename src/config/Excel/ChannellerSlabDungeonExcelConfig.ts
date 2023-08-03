import { ConfigDefault } from "../"

export const ChannellerSlabDungeonExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stageID: "vuint",
    dungeonID: "vuint",
    rewardID: "vuint",
    pointID: "vuint",
    pos: "float[]",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
  },
}
