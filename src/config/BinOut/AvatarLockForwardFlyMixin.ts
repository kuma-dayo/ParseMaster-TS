import { ConfigDefault } from "../"

export const AvatarLockForwardFlyMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    worldForward: "Vector",
    flySpeedScale: "float",
    flyBackSpeedScale: "float",
    eularRawInput: "Vector",
  },
}