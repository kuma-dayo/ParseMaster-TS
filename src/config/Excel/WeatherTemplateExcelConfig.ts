import { ConfigDefault } from "../"

export const WeatherTemplateExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    templateName: "string",
    weatherType: "ClimateType",
    sunnyProb: "float",
    cloudyProb: "float",
    rainProb: "float",
    thunderstormProb: "float",
    snowProb: "float",
    mistProb: "float",
    desertProb: "float",
  },
}