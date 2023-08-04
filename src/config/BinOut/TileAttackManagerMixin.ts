import { ConfigDefault } from ".."

export const TileAttackManagerMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    attackID: "string",
    interval: "float",
    campType: "TileCampType",
    fixCamp: "vuint",
    authorityHandle: "bool",
    attackInfo: "ConfigAttackInfo",
  },
}
