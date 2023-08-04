import { ConfigDefault } from ".."

export const AttackAttenuationExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    group: "string",
    resetCycle: "float",
    durabilitySequence: "float[]",
    enbreakSequence: "float[]",
    damageSequence: "float[]",
  },
}
