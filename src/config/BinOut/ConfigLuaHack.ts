import { ConfigDefault } from "../"

export const ConfigLuaHack: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    UILuaScriptPath: "string",
    enableLuaPatch: "bool",
    enableAllContextLuaPatch: "bool",
    UILuaPatchContextStartupList: "string[]",
    UILuaPatchContextSetupViewList: "string[]",
    UILuaPatchContextPostSetupViewList: "string[]",
    UILuaPatchContextSetActiveEnabledList: "string[]",
    UILuaPatchContextSetActiveDisabledList: "string[]",
    UILuaPatchContextDestroyList: "string[]",
    UILuaPatchContextDestroyForceList: "string[]",
    UILuaPatchContextButtonMap: "map<string,string[]>",
    UILuaPatchContextInputFieldMap: "map<string,string[]>",
    UILuaPatchContextDrowdownMap: "map<string,string[]>",
    UILuaPatchContextToggleMap: "map<string,string[]>",
    UILuaPatchContextSliderMap: "map<string,string[]>",
    UILuaPatchContextPanelMap: "map<string,string[]>",
  },
}
