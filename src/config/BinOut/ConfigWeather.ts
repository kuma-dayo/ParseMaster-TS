import { ConfigDefault } from "../"

export const ConfigWeather: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    dropElemBalls: "ConfigElemBall[]",
    shapeName: "string",
    position: "float[]",
    priority: "vint",
    defaultEnviro: "string",
    weatherList: "string[]",
    weatherWeightList: "float[]",
    refreshTime: "float",
  },
}