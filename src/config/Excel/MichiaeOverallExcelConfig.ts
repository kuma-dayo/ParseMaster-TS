import { ConfigDefault } from "../"

export const MichiaeOverallExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    offeringId: "vuint",
    statueGroupId: "vuint",
    statueConfigId: "vuint",
    bossWatcherList: "vuint[]",
    statueCd: "vuint",
    prayEffectRange: "float",
    darkChallengeRewardRange: "float",
    activitySceneId: "vuint",
    bossChallengeRewardRange: "float",
    crystalExpMaterialId: "vuint",
    radarOpenLevel: "vuint",
    allRadarOpenLevel: "vuint",
  },
}
