import { ConfigDefault } from ".."

export const WeatherExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    areaID: "vuint",
    weatherAreaId: "vuint",
    maxHeightStr: "string",
    _HACK__3: "__HACK_",
    gadgetID: "vuint",
    isDefaultValid: "bool",
    priority: "vuint",
    profileName: "string",
    defaultClimate: "ClimateType",
    isUseDefault: "bool",
    sceneID: "vuint",
  },
}
