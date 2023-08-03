import { ConfigDefault } from "../"

export const ModifyBeHitDamageMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ModifyDamageMixin",
  Fields: {
    Actor_PhysicalSubHurtDelta: "DynamicFloat",
    Actor_FireSubHurtDelta: "DynamicFloat",
    Actor_ElecSubHurtDelta: "DynamicFloat",
    Actor_WaterSubHurtDelta: "DynamicFloat",
    Actor_GrassSubHurtDelta: "DynamicFloat",
    Actor_WindSubHurtDelta: "DynamicFloat",
    Actor_IceSubHurtDelta: "DynamicFloat",
    Actor_RockSubHurtDelta: "DynamicFloat",
    Actor_ElementReactionCriticalDelta: "DynamicFloat",
    Actor_ElementReactionCriticalHurtDelta: "DynamicFloat",
  },
}
