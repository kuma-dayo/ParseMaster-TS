import { ConfigDefault } from "../"

export const SkillButtonHoldChargeMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    allowHoldLockDirection: "bool",
    skillID: "vuint",
    nextLoopTriggerID: "string",
    endHoldTrigger: "string",
    beforeStateIDs: "string[]",
    beforeHoldDuration: "float",
    chargeLoopStateIDs: "string[]",
    afterStateIDs: "string[]",
    chargeLoopDurations: "float[]",
    transientStateIDs: "string[]",
  },
}
