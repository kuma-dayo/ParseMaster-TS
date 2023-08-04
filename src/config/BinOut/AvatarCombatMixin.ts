import { ConfigDefault } from ".."

export const AvatarCombatMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    onEnterCombat: "ConfigAbilityAction[]",
    onExitCombat: "ConfigAbilityAction[]",
  },
}
