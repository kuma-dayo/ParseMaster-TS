import { ConfigDefault } from ".."

export const AttackHittingSceneMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    onHittingScene: "ConfigAbilityAction[]",
    animEventIDs: "string[]",
  },
}
