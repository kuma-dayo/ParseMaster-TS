import { ConfigDefault } from ".."

export const ConfigMoveVelocityForce: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    muteAll: "bool",
    useAll: "bool",
    includeForces: "VelocityForceType[]",
    excludeForces: "VelocityForceType[]",
  },
}
