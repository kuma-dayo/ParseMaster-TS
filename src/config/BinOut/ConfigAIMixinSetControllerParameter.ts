import { ConfigDefault } from ".."

export const ConfigAIMixinSetControllerParameter: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    entityTypes: "EntityType[]",
    onSuccess: "ConfigAIMixinActions",
    onFail: "ConfigAIMixinActions",
  },
}
