import { EnumDefault } from "."

enum types {
  NormalHumanoidType = 0,
  StoopType = 1,
  StrongHumanoidType = 2,
  SlimeType = 3,
  OtherType = 99,
}

export const MonsterSizeType: EnumDefault = {
  __signed: true,
  types: types,
}
