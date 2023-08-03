import { ConfigDefault } from "../"

export const ConfigAudioEquipElementEnhancement: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    switchGroupName: "ConfigWwiseString",
    switchValueMap: "map<string,ConfigWwiseString>",
    setDefaultOnMismatch: "bool",
    defaultSwitchValue: "ConfigWwiseString",
    setDefaultOnOwnerDestroy: "bool",
    setDefaultOnEquipDestroy: "bool",
  },
}
