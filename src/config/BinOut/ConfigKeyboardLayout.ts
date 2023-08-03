import { ConfigDefault } from "../"

export const ConfigKeyboardLayout: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    configKeyboardLayouts: "map<KeyboardType,ConfigKeyboardLayoutItem>",
    inputActionTypeGroups: "map<InputActionGroupType,InputActionType[]>",
  },
}
