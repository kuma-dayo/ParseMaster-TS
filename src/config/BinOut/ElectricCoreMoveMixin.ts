//Auto Generated by ConfigParser
import { ConfigDefault } from ".."

export const ElectricCoreMoveMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    stageOnceVelocity: "float",
    stageOneAccelerate: "float",
    stageTwoVelocity: "float",
    stageTwoAttenuation: "float",
    maxAbsorbTime: "float",
    toPos: "ConfigBornType",
    onCoreEnter: "ConfigAbilityAction[]",
    onInterrupted: "ConfigAbilityAction[]",
    onStartSuccess: "ConfigAbilityAction[]",
    onStartFailed: "ConfigAbilityAction[]",
  },
}
