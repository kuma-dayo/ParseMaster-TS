import { ConfigDefault } from "../"

export const ConfigPreload: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    effects: "map<ConfigPreloadType,string[]>",
    abilities: "map<ConfigPreloadType,string[]>",
    gadgets: "map<ConfigPreloadType,string[]>",
    cameras: "map<ConfigPreloadType,string[]>",
    animEventPatterns: "map<ConfigPreloadType,string[]>",
    skillIcons: "map<ConfigPreloadType,string[]>",
    miscObjPaths: "map<ConfigPreloadType,string[]>",
    weathers: "map<ConfigPreloadType,string[]>",
  },
}
