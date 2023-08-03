import { ConfigDefault } from "../"

export const ConfigTextMapLevel: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    levelMap: "map<vint,TextMapLevelStruct>",
    platformMap: "map<TextMapPlatformType,vint>",
  },
}