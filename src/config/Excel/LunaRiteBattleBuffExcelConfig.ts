import { ConfigDefault } from "../"

export const LunaRiteBattleBuffExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    regionType: "LunaRiteRegionType",
    number: "vuint",
    buffTextMapHash: "vuint",
    rewardId: "vuint",
  },
}
