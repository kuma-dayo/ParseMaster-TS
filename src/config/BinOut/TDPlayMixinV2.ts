import { ConfigDefault } from "../"

export const TDPlayMixinV2: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    towerType: "TDPlayTowerType",
    baseCD: "float",
    baseAttackRange: "float",
    onFireActions: "ConfigAbilityAction[]",
    bulletID: "vuint",
    born: "ConfigBornType",
    partRootNames: "string[]",
    targetType: "ControlPartTargetType",
  },
}
