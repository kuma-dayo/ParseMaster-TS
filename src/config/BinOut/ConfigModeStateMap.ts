import { ConfigDefault } from ".."

export const ConfigModeStateMap: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    states: "map<string,ConfigActionPanelState>",
    modes: "map<PlayModeType,ConfigActionPanelMode>",
  },
}
