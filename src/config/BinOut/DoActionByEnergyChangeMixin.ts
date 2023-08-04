import { ConfigDefault } from ".."

export const DoActionByEnergyChangeMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    type: "AvatarStageType",
    elementTypes: "ElementType[]",
    doWhenEnergyMax: "bool",
    onGainEnergyByBall: "ConfigAbilityAction[]",
    onGainEnergyByOther: "ConfigAbilityAction[]",
    onGainEnergyByAll: "ConfigAbilityAction[]",
    onGainEnergyMax: "ConfigAbilityAction[]",
  },
}
