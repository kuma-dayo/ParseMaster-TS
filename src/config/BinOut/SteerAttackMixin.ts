import { ConfigDefault } from ".."

export const SteerAttackMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    steerStateIDs: "string[]",
    startNormalizedTime: "float",
    endNormalizedTime: "float",
    angularSpeed: "float",
    attackAngle: "float",
    attackTrigger: "string",
    attackDistance: "float",
    remoteSteerToLocalTarget: "bool",
    facingTargetTypes: "SteerAttackTargetType[]",
  },
}
