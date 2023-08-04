import { ConfigDefault } from ".."

export const ConfigPlatformPreloadMapping: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    editor: "map<ConfigPreloadType,ConfigPreloadType[]>",
    win: "map<ConfigPreloadType,ConfigPreloadType[]>",
    android: "map<ConfigPreloadType,ConfigPreloadType[]>",
    ps4: "map<ConfigPreloadType,ConfigPreloadType[]>",
    ios: "map<ConfigPreloadType,ConfigPreloadType[]>",
  },
}
