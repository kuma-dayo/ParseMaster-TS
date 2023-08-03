import { ConfigDefault } from "../"

export const EnablePartControl: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    partRootNames: "string[]",
    enable: "bool",
  },
}