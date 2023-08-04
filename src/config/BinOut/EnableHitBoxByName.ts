import { ConfigDefault } from ".."

export const EnableHitBoxByName: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    hitBoxNames: "string[]",
    setEnable: "bool",
  },
}
