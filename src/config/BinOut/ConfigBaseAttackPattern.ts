import { ConfigDefault } from ".."

export const ConfigBaseAttackPattern: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    triggerType: "TriggerType",
    checkHitLayerType: "CheckHitLayerType",
    hitScene: "ConfigHitScene",
    triggerCD: "float",
    filterByFrame: "bool",
    ignoreMassive: "bool",
    entityAttackFilter: "EntityAttackFilter",
    massiveAttackRatio: "float",
    born: "ConfigBornType",
  },
}
