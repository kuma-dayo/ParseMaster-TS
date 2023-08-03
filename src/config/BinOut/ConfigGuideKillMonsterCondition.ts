import { ConfigDefault } from "../"

export const ConfigGuideKillMonsterCondition: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideCondition",
  Fields: {
    spawnNew: "bool",
    monsterID: "vuint",
    monsterLevel: "vuint",
    monsterPos: "Vector",
    monsterYaw: "float",
  },
}
