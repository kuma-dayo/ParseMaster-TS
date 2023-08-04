import { ConfigDefault } from ".."

export const DoActionByEventMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    type: "AvatarStageType",
    onEvent: "OnEventType",
    pickItemConfigIDs: "vuint[]",
    skillReadyID: "vuint",
    predicates: "ConfigAbilityPredicate[]",
    actions: "ConfigAbilityAction[]",
    onAbilityStateAdded: "ConfigAbilityStateToActions[]",
    onAbilityStateRemoved: "ConfigAbilityStateToActions[]",
    costEnergyDeltaName: "string",
  },
}
