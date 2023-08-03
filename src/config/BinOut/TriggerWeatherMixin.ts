import { ConfigDefault } from "../"

export const TriggerWeatherMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    type: "TriggerWeatherType",
    areaId: "vuint",
    weatherPattern: "string",
    transDuration: "float",
    duration: "float",
  },
}
