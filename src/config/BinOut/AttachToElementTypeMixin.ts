import { ConfigDefault } from ".."

export const AttachToElementTypeMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    elementTypes: "ElementType[]",
    reject: "bool",
    modifierName: "string",
  },
}
