import { ConfigDefault } from "../"

export const LunaRiteBattleExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    regionType: "LunaRiteRegionType",
    consecrateID: "vuint",
    groupBundleId: "vuint",
    rewardID: "vuint",
    challengeIcon: "string",
    monsterInfo: "string",
    eliteMonsterInfo: "string",
    rulerTextMapHash: "vuint",
    recipeSourceTextMapHash: "vuint",
  },
}