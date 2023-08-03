import { EnumDefault } from "."

enum types {
  FollowOwnner = 0,
  SizeByTime = 1,
}

export const ChangeFieldType: EnumDefault = {
  __signed: true,
  types: types,
}
