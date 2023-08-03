import { ConfigDefault } from "../"

export const TumbleweedMoveMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    interval: "float",
    attenuation: "float",
    tendToBornPosRadius: "float",
    moveToBornPosRadius: "float",
    delay: "float",
    downwardAccTime: "float",
    downwardAcc: "float",
    onDirectionChanged: "ConfigAbilityAction[]",
    onStartMove: "ConfigAbilityAction[]",
    onStopMove: "ConfigAbilityAction[]",
  },
}
