import { EnumDefault } from "."

enum types {
  CurTeam = 0,
  BigTeam = 1,
}

export const TeamType: EnumDefault = {
  __signed: true,
  types: types,
}
