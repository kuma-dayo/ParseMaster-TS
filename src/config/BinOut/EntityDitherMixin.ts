import { ConfigDefault } from "../"

export const EntityDitherMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    predicates: "ConfigAbilityPredicate[]",
    ditherValue: "float",
    cutInTime: "float",
    cutOutTime: "float",
    forceUpdateAtStart: "bool",
  },
}
