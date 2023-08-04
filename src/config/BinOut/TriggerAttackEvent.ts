import { ConfigDefault } from ".."

export const TriggerAttackEvent: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    attackEvent: "ConfigAttackEvent",
    targetType: "TargetType",
    entityTypes: "EntityType[]",
    isReject: "bool",
    campBasedOnID: "vuint",
  },
}
