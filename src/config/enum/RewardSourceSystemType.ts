import { EnumDefault } from "."

enum types {
  None = 0,
  MPPlay = 1,
}

export const RewardSourceSystemType: EnumDefault = {
  __signed: true,
  types: types,
}