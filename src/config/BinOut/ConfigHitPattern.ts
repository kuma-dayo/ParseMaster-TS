import { ConfigDefault } from ".."

export const ConfigHitPattern: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    onHitEffectName: "string",
    hitLevel: "HitLevel",
    hitImpulseX: "DynamicFloat",
    hitImpulseY: "DynamicFloat",
    hitImpulseType: "string",
    overrideHitImpulse: "ConfigHitImpulse",
    retreatType: "RetreatType",
    hitHaltTime: "float",
    hitHaltTimeScale: "float",
    canBeDefenceHalt: "bool",
    muteHitText: "bool",
    recurring: "bool",
    forceRetreat: "bool",
  },
}
