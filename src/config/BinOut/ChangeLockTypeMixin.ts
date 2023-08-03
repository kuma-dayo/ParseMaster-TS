import { ConfigDefault } from "../"

export const ChangeLockTypeMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    lockType: "string",
    overrideRange: "float",
    overrideNormalPri: "float",
    overrideCombatPri: "float",
  },
}
