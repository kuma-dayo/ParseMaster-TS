import { ConfigDefault } from "../"

export const TDPlayMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    towerType: "TDPlayTowerType",
    baseCD: "float",
    baseAttackRange: "float",
    onFireActions: "ConfigAbilityAction[]",
    towerModifierName: "string",
    bulletIDs: "vuint[]",
    born: "ConfigBornType",
    partRootNames: "string[]",
    targetType: "ControlPartTargetType",
  },
}
