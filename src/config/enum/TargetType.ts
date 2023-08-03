import { EnumDefault } from "."

enum types {
  None = 0,
  Alliance = 1,
  Enemy = 2,
  Self = 3,
  SelfCamp = 4,
  All = 5,
  AllExceptSelf = 6,
  AllianceIncludeSelf = 7,
}

export const TargetType: EnumDefault = {
  __signed: true,
  types: types,
}
