import { ConfigDefault } from ".."

export const HitLevelGaugeMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    fromHitLevel: "HitLevel",
    toHitLevel: "HitLevel",
    maxCharge: "float",
    minChargeDelta: "float",
    maxChargeDelta: "float",
    fadeTime: "float",
  },
}
