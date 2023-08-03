import { ConfigDefault } from "../"

export const ByGlobalPosToGlobalPosDistance: ConfigDefault = {
  attribute: [],
  baseClass: "RelationalOperationPredicate",
  Fields: {
    compareType: "TargetPosToSelfPosType",
    value: "DynamicFloat",
    positionKey1: "string",
    key1FromTarget: "bool",
    positionKey2: "string",
    key2FromTarget: "bool",
  },
}
