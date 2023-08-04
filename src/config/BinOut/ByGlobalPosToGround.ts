import { ConfigDefault } from ".."

export const ByGlobalPosToGround: ConfigDefault = {
  attribute: [],
  baseClass: "RelationalOperationPredicate",
  Fields: {
    globalPos: "string",
    toGroundHeight: "DynamicFloat",
    toWater: "bool",
  },
}
