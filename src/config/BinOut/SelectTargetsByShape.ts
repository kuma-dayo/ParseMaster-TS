import { ConfigDefault } from "../"

export const SelectTargetsByShape: ConfigDefault = {
  attribute: [],
  baseClass: "SelectTargets",
  Fields: {
    shapeName: "string",
    centerBasedOn: "AbilityTargetting",
    campTargetType: "TargetType",
    campBasedOn: "AbilityTargetting",
    sizeRatio: "DynamicFloat",
  },
}