import { ConfigDefault } from ".."

export const ConfigCollision: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    ccd: "ConfigCCD",
    triggerType: "ColliderTriggerType",
    triggerCD: "float",
    targetType: "TargetType",
    ignoreScene: "bool",
    ignoreWater: "bool",
    bornWithTriggerEnabled: "bool",
  },
}
