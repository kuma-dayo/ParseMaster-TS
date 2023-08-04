import { ConfigDefault } from ".."

export const VehicleSkillDepotChangeMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    targetVehicleIDs: "vuint[]",
    skillDepotId: "vuint",
  },
}
