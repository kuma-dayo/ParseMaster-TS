import { EnumDefault } from "."

enum types {
  Disable = 0,
  SSAO = 1,
  HBAO = 2,
}

export const SSAOMode: EnumDefault = {
  __signed: true,
  types: types,
}