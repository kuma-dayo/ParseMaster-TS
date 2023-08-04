import { ConfigDefault } from ".."

export const LaserMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    effectPattern: "string",
    onLaserHit: "ConfigAbilityAction[]",
    onLaserLeave: "ConfigAbilityAction[]",
  },
}
