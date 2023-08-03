import { ConfigDefault } from "../"

export const PlatformMoveMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    isLogicMove: "bool",
    moveModifiers: "string[]",
    stopModifiers: "string[]",
  },
}
