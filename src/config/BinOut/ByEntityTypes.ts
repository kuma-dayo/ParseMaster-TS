import { ConfigDefault } from "../"

export const ByEntityTypes: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    entityTypes: "EntityType[]",
    reject: "bool",
    useEventSource: "bool",
    isAuthority: "vint",
  },
}
