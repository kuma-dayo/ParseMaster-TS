import { EnumDefault } from "."

enum types {
  SPECIAL_REWARD = 0,
  SPECIAL_MATERIAL = 1,
  SPECIAL_DROP = 2,
}

export const SalesmanSpecialRewardType: EnumDefault = {
  __signed: true,
  types: types,
}