import { ConfigDefault } from ".."

export const ConfigFootprintZoneEffect: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    surfaceType: "SceneSurfaceType",
    maxWaterHeight: "float",
    defaultConfig: "map<EFootprintPlatform,ConfigFootprintEffect>",
    specialBodyTypes: "map<string,map<EFootprintPlatform,ConfigFootprintEffect>>",
  },
}
