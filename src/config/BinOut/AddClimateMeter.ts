import { ConfigDefault } from "../"

export const AddClimateMeter: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    climateType: "JsonClimateType",
    value: "DynamicFloat",
  },
}