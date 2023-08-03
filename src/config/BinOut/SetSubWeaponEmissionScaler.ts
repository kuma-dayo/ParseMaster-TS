import { ConfigDefault } from "../"

export const SetSubWeaponEmissionScaler: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    subWeapons: "string[]",
    useDefaultColor: "bool",
    value: "float",
    duration: "float",
  },
}
