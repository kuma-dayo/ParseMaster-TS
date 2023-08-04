import { ConfigDefault } from ".."

export const ByTargetPosToGlobalPosDistance: ConfigDefault = {
  attribute: [],
  baseClass: "RelationalOperationPredicate",
  Fields: {
    compareType: "TargetPosToSelfPosType",
    value: "DynamicFloat",
    positionKey: "string",
    keyFromTarget: "bool",
  },
}
