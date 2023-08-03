import { EnumDefault } from "."

enum types {
  None = 0,
  Obstacle = 1,
}

export const NavType: EnumDefault = {
  __signed: true,
  types: types,
}
