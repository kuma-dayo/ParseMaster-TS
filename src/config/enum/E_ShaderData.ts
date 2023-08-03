import { EnumDefault } from "."

enum types {
  None = 0,
  CharacterFrozen = 1,
  CharacterPetrifaction = 2,
  CharacterDie = 3,
  CharacterBurningToAshes = 4,
  CharacterDissolve = 5,
  GadgetFrozen = 6,
  GadgetPetrifaction = 7,
  GadgetDie = 8,
  AvatarDie = 9,
  MonsterEquipDie = 10,
  MonsterDie = 11,
  CharacterClip = 12,
  CharacterAlphaBlend = 13,
  EremiteSandDie = 14,
  EremiteEquipDie = 15,
  MonsterInvisible = 16,
  MonolithInvisible = 17,
  WeedBurnDie = 18,
}

export const E_ShaderData: EnumDefault = {
  __signed: true,
  types: types,
}
