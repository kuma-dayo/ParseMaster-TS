import { EnumDefault } from "."

enum types {
  SelfTick = 1,
  DevUI = 2,
  Task = 3,
  Navigation = 4,
}

export const PaimonRequestFrom: EnumDefault = {
  __signed: true,
  types: types,
}