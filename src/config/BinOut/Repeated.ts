import { ConfigDefault } from "../"

export const Repeated: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    repeatTimes: "DynamicInt",
    actions: "ConfigAbilityAction[]",
  },
}