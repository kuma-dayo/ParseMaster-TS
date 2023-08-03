import { ConfigDefault } from "../"

export const ServerLuaCall: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    luaCallType: "LuaCallType",
    isTarget: "bool",
    CallParamList: "vuint[]",
    funcName: "string",
    paramNum: "vuint",
    param1: "DynamicFloat",
    param2: "DynamicFloat",
    param3: "DynamicFloat",
  },
}
