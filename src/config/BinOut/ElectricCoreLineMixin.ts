import { ConfigDefault } from ".."

export const ElectricCoreLineMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    otherTargets: "SelectTargets",
    activateSkillKey: "string",
    predicates: "ConfigAbilityPredicate[]",
  },
}
