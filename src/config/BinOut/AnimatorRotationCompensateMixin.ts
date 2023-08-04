import { ConfigDefault } from ".."

export const AnimatorRotationCompensateMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    animatorStateIDs: "string[]",
    animationRotate: "float",
    angleLimit: "float",
  },
}
