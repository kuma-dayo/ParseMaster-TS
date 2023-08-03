import { ConfigDefault } from "../"

export const ConfigFootprint: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    defaultEffectPatternName: "string",
    specialSurfaces: "map<SceneSurfaceType,map<EFootprintPlatform,ConfigFootprintEffect>>",
  },
}
