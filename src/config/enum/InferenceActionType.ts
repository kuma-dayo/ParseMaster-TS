import { EnumDefault } from "."

enum types {
  INFERENCE_ACTION_NONE = 0,
  INFERENCE_ACTION_UNLOCK_WORD = 1,
}

export const InferenceActionType: EnumDefault = {
  __signed: true,
  types: types,
}
