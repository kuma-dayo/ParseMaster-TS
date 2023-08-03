import { ConfigDefault } from "../"

export const ConfigFullPreload: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    platformPreloadMapping: "ConfigPlatformPreloadMapping",
    commonPreload: "ConfigPreload",
    entitiesPreload: "map<vuint,ConfigPreload>",
  },
}
