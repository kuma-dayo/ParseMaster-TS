import { EnumDefault } from "."

enum types {
  None = 0,
  Default = 1,
  Avatar_Sword = 2,
  Avatar_Pole = 3,
  Avatar_Claymore = 4,
  Avatar_Bow = 5,
  Avatar_Catalyst = 6,
  Monster_Minion = 7,
  Monster_Grunt_Humanoid = 8,
  Monster_Grunt_Other = 9,
  Monster_Demiboss_Humanoid = 10,
  Monster_Demiboss_Other = 11,
  Monster_Boss_Humanoid = 12,
  Monster_Boss_Other = 13,
  Monster_Slime = 14,
  Monster_Tartaglia = 15,
  Monster_Shougun = 16,
  Monster_Fungus_Battle = 17,
}

export const EndureType: EnumDefault = {
  __signed: true,
  types: types,
}
