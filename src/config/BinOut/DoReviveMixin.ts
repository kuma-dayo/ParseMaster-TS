import { ConfigDefault } from ".."

export const DoReviveMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    type: "AvatarStageType",
    ignoreDieAbyss: "bool",
    ignoreDieDrawn: "bool",
    onKillActions: "ConfigAbilityAction[]",
    onReviveActions: "ConfigAbilityAction[]",
  },
}
