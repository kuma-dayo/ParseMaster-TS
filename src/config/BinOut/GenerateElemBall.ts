import { ConfigDefault } from "../"

export const GenerateElemBall: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    dropType: "DropElemBallType",
    configID: "vuint",
    born: "ConfigBornType",
    ratio: "DynamicFloat",
    baseEnergy: "float",
  },
}
