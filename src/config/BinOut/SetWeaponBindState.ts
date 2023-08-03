import { ConfigDefault } from "../"

export const SetWeaponBindState: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    place: "bool",
    equipPartName: "string",
    born: "ConfigBornType",
  },
}
