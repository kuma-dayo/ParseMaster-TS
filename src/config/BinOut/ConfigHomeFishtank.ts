import { ConfigDefault } from ".."

export const ConfigHomeFishtank: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    maxFishCount: "vuint",
    waterHeight: "float",
    fishMinHeightLimit: "float",
    initialPose: "vuint",
    fishScale: "float",
    fishBornPosMap: "map<vuint,ConfigHomeCommonPos[]>",
  },
}
