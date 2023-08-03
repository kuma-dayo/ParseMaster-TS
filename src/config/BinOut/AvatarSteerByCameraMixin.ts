import { ConfigDefault } from "../"

export const AvatarSteerByCameraMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    stateIDs: "string[]",
    angularSpeed: "float",
    canReviveStamina: "bool",
    isCheckOnAttach: "bool",
  },
}
