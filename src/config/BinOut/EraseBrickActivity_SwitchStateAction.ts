import { ConfigDefault } from "../"

export const EraseBrickActivity_SwitchStateAction: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    index: "vint[]",
    fromStates: "EraseBrickActivity_State[]",
    toStates: "EraseBrickActivity_State[]",
    fromTypes: "EraseBrickActivity_BrickType[]",
    toTypes: "EraseBrickActivity_BrickType[]",
    reasons: "EraseBrickActivity_BrokenReason[]",
    actions: "ConfigAbilityAction[]",
  },
}
