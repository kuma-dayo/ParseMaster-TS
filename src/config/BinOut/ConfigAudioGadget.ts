import { ConfigDefault } from ".."

export const ConfigAudioGadget: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    paimonSpeedRtpcKey: "ConfigWwiseString",
    vehicleCollisionRtpc: "ConfigWwiseString",
    distanceTaskDict: "map<vuint,DistanceTask>",
    equipConfig: "ConfigAudioEquip",
  },
}
