import { ConfigDefault } from "../"

export const ConfigGraphicsSettingEntry: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    entryType: "GraphicsSettingEntryType",
    availableOptions: "string[]",
    perfCostRatios: "float[]",
    displayType: "SettingEntryDisplayType",
    sliderMin: "float",
    sliderMax: "float",
    sliderInterval: "float",
    shouldCloudGameShow: "bool",
    sortOption: "ConfigGraphicSettingEntrySortType",
  },
}
