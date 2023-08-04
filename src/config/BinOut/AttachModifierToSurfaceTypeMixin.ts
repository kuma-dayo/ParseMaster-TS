import { ConfigDefault } from ".."

export const AttachModifierToSurfaceTypeMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    surfaceType: "SceneSurfaceType",
    modifiersWithPredicates: "ModifierWithPredicates[]",
    extraEnterTriggerLevelAbility: "string",
    extraExitTriggerLevelAbility: "string",
    extraResetTriggerLevelAbility: "string",
  },
}
