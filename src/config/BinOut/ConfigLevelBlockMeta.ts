import { ConfigDefault } from "../"

export const ConfigLevelBlockMeta: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    blockID: "vuint",
    isIgnoreBlockPosition: "bool",
    blockCenterX: "vint",
    blockCenterZ: "vint",
    blockLevelMonsterDataPathHash: "vuint",
    blockLevelRouteDataPathHash: "vuint",
  },
}
