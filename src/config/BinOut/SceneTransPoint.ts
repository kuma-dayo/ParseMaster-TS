import { ConfigDefault } from "../"

export const SceneTransPoint: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigScenePoint",
  Fields: {
    maxSpringVolume: "vuint",
    cutsceneList: "vuint[]",
    npcId: "vuint",
    isForbidAvatarRevive: "bool",
    isForbidAvatarAutoUseSpring: "bool",
    mapVisibility: "PointMapVisibility",
    showOnLockedArea: "bool",
    disableInteraction: "bool",
    exploreRatio: "vuint",
  },
}
