import { ConfigDefault } from ".."

export const GrapplingHookMoveMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    onArrived: "ConfigAbilityAction[]",
    upForceValue: "float",
    upForceTime: "float",
    arriveDistance: "float",
  },
}
