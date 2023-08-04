import { ConfigDefault } from ".."

export const ModifyVehicleSkillCD: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    skillID: "vuint",
    cdDelta: "DynamicFloat",
    cdRatio: "DynamicFloat",
  },
}
