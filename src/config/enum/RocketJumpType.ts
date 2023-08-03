import { EnumDefault } from "."

enum types {
  XiaoUlt = 0,
  KleeMineExplode = 1,
  GearSpring = 2,
  DungeonJump = 3,
  IttoGangPlank = 4,
  MaxValue = 5,
}

export const RocketJumpType: EnumDefault = {
  __signed: true,
  types: types,
}
