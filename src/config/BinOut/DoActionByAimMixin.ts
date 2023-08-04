import { ConfigDefault } from ".."

export const DoActionByAimMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    entityTypes: "EntityType[]",
    colliderNodeName: "string",
    cd: "DynamicFloat",
    actionQueue: "ConfigAbilityAction[]",
    onLeaveScopeActionQueue: "ConfigAbilityAction[]",
    onRemoveActionQueue: "ConfigAbilityAction[]",
    predicates: "ConfigAbilityPredicate[]",
    aimType: "AimType",
  },
}
