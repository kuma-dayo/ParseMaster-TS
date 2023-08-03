import { ConfigDefault } from "../"

export const PlayerCustomOptionSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    settingEntry: "GraphicsSettingEntryType",
    customConfigMap: "map<string,PlayerCustomOptionConfig>",
    optionNameType: "PerfOptionTextType",
    sortType: "ConfigGraphicSettingEntrySortType",
  },
}
