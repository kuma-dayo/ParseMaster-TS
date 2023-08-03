import { EnumDefault } from "."

enum types {
  AttackTarget = 0,
  AwakeTarget = 1,
  BuddyTarget = 2,
}

export const SteerAttackTargetType: EnumDefault = {
  __signed: true,
  types: types,
}