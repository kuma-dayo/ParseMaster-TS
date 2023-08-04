import { ConfigDefault } from ".."

export const VelocityForceMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    muteAll: "bool",
    useAll: "bool",
    includeForces: "VelocityForceType[]",
    excludeForces: "VelocityForceType[]",
  },
}
