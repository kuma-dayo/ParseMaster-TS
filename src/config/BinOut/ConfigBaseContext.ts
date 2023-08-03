import { ConfigDefault } from "../"

export const ConfigBaseContext: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    actionGroups: "map<string,InputActionEvent[]>",
    stateActions: "map<vint,DeviceAction>",
    enableInputPenetrate: "bool",
    enableJoypadVirtualCursor: "bool",
  },
}