import { ConfigDefault } from ".."

export const MpPlayMatchExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    playType: "MpPlayType",
    playNameTextMapHash: "vuint",
    playDescTextMapHash: "vuint",
    isAutoMatch: "bool",
    minPlayers: "vuint",
    maxPlayers: "vuint",
    isAllowInAnyTime: "bool",
    isMatchNecessary: "bool",
    settleType: "MpPlaySettleType",
    seriesId: "vuint",
    buffList: "vuint[]",
    pushTipsId: "vuint",
    bgImage: "string",
    noProgress: "bool",
  },
}
