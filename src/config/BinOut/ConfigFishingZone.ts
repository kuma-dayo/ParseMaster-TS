import { ConfigDefault } from "../"

export const ConfigFishingZone: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigPolygonZone",
  Fields: {
    validRadius: "float",
    fleeRadius: "float",
    disableInMultiplayer: "bool",
    bornRadius: "float",
  },
}
