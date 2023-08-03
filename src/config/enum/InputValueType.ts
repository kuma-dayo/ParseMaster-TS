import { EnumDefault } from "."

enum types {
  ButtonInput = 0,
  OneAxisInput = 1,
  TwoAxisInput = 2,
}

export const InputValueType: EnumDefault = {
  __signed: true,
  types: types,
}