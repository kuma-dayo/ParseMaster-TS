import { ConfigDefault } from "../"

export const ConfigPerfItemBase: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    categoryRatingMap: "map<PerfRatingCategory,vint[]>",
    playerCustomOption: "PlayerCustomOptionSetting",
  },
}
