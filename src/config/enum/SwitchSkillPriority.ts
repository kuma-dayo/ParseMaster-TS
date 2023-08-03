import { EnumDefault } from "."

enum types {
  Base = 0,
  AvatarCommon = 4,
  AvatarSpecial = 5,
  Playmode = 101,
  Quest = 102,
}

export const SwitchSkillPriority: EnumDefault = {
  __signed: true,
  types: types,
}
