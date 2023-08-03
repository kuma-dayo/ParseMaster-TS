import { ConfigDefault } from "../"

export const ChangeFollowDampTime: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    effectPattern: "DynamicString",
    PositionDampTime: "DynamicFloat",
    RotationDampTime: "DynamicFloat",
  },
}
