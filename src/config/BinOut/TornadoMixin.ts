import { ConfigDefault } from "../"

export const TornadoMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    stageZone: "ConfigTornadoZone[]",
    predicates: "ConfigAbilityPredicate[]",
    targetType: "TargetType",
    born: "ConfigBornType",
    enviroWindStrength: "DynamicFloat",
    enviroWindRadius: "DynamicFloat",
  },
}
