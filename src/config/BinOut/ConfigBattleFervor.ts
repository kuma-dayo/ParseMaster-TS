import { ConfigDefault } from "../"

export const ConfigBattleFervor: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    rtpcMap: "map<string,ConfigWwiseString>",
    battleFervorSwitchRtpcKkey: "ConfigWwiseString",
    battleFervorEnableRtpcValue: "float",
    battleFervorDisableRtpcValue: "float",
    mintlvKilledMax: "float",
    deathZoneModifierName: "string",
    deathZoneGetMaxHpRatioInterval: "vint",
  },
}
