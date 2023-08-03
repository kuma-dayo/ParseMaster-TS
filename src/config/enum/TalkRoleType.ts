import { EnumDefault } from "."

enum types {
  TALK_ROLE_NONE = 0,
  TALK_ROLE_NPC = 1,
  TALK_ROLE_PLAYER = 2,
  TALK_ROLE_MATE_AVATAR = 3,
  TALK_ROLE_GADGET = 4,
  TALK_ROLE_BLACK_SCREEN = 5,
  TALK_ROLE_NEED_CLICK_BLACK_SCREEN = 6,
  TALK_ROLE_AVATAR_NPC = 7,
  TALK_ROLE_CONSEQUENT_BLACK_SCREEN = 8,
  TALK_ROLE_CONSEQUENT_NEED_CLICK_BLACK_SCREEN = 9,
}

export const TalkRoleType: EnumDefault = {
  __signed: true,
  types: types,
}
