import { ConfigDefault } from "../"

export const TileComplexManagerMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    attackID: "string",
    interval: "float",
    srcCamp: "vuint",
    attackInfo: "ConfigAttackInfo",
  },
}