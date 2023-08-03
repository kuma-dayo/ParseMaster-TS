import { EnumDefault } from "."

enum types {
  Normal = 0,
  Move = 1,
  CanFly = 2,
  Fly = 3,
  TryToMove = 4,
  CanPromote = 5,
  CanUpGrade = 6,
}

export const GuideAvatarState: EnumDefault = {
  __signed: true,
  types: types,
}
