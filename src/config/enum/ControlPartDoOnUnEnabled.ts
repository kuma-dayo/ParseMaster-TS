import { EnumDefault } from "."

enum types {
  Stay = 0,
  ToForwardImmediately = 1,
  RotateToForward = 2,
}

export const ControlPartDoOnUnEnabled: EnumDefault = {
  __signed: true,
  types: types,
}
