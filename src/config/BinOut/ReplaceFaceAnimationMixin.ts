import { ConfigDefault } from ".."

export const ReplaceFaceAnimationMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    oldFaceAnimations: "string[]",
    newFaceAnimations: "string[]",
  },
}
