import { ConfigDefault } from ".."

export const TileComplexMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    attackID: "string",
    attachPointName: "string",
    offset: "Vector",
    shape: "TileShapeInfo",
  },
}
