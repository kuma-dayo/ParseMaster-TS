import { EnumDefault } from "."

enum types {
  SIGN_IN_COND_NONE = 0,
  SIGN_IN_COND_PLAYER_LEVEL = 1,
  SIGN_IN_COND_FINISH_QUEST = 2,
  SIGN_IN_COND_FINISH_PARENT_QUEST = 3,
  SIGN_IN_COND_AVERAGE_AVATAR_LEVEL = 4,
  SIGN_IN_COND_MAX_AVATAR_LEVEL = 5,
  SIGN_IN_COND_AVATAR_NUM = 6,
}

export const SignInCondType: EnumDefault = {
  __signed: true,
  types: types,
}
