import { ConfigDefault } from "../"

export const CheckGrapplingHookMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    onEnterHookArea: "ConfigAbilityAction[]",
    onExitHookArea: "ConfigAbilityAction[]",
    activateSkillKey: "string",
    checkParams: "CheckGrapplingHookConfig",
  },
}
