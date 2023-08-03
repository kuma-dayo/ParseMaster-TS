import { ConfigDefault } from "../"

export const ConfigCombatLock: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    lockShape: "string",
    denyLockOn: "bool",
    lockWeightYaxisParam: "float",
    lockWeightYaxisThreshold: "float",
    lockType: "string",
    overrideRange: "float",
    overrideNormalPri: "float",
    overrideCombatPri: "float",
  },
}
