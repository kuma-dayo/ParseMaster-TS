import { ConfigDefault } from "../"

export const ServerLuaTriggerEvent: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    luaCallType: "LuaCallType",
    isTarget: "bool",
    CallParamList: "vuint[]",
    sourceName: "string",
    paramNum: "vuint",
    param1: "DynamicFloat",
    param2: "DynamicFloat",
    param3: "DynamicFloat",
  },
}
