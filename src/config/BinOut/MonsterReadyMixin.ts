import { ConfigDefault } from ".."

export const MonsterReadyMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    onMonsterReady: "ConfigAbilityAction[]",
  },
}
