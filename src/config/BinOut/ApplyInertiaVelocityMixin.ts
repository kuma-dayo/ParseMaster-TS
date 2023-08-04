import { ConfigDefault } from ".."

export const ApplyInertiaVelocityMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    damping: "float",
    useXZ: "bool",
    useY: "bool",
  },
}
