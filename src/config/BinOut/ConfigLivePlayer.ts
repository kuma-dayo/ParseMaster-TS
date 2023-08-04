import { ConfigDefault } from ".."

export const ConfigLivePlayer: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigVODPlayer",
  Fields: {
    liveID: "vuint",
    turnOnRadius: "float",
    turnOffRadius: "float",
    cuePointAbilityMap: "map<vuint,string>",
  },
}
