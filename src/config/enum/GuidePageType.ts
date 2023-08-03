import { EnumDefault } from "."

enum types {
  Normal = 0,
  EquipPromote = 1,
  RelicPromote = 2,
  TalentInfo = 3,
  RelicInfo = 4,
  WeaponInfo = 5,
  SkillInfo = 6,
  WeaponSelect = 7,
  RelicSelect = 8,
  TheatreMechanicusBuilding = 9,
  TheatreMechanicusRebuilding = 10,
}

export const GuidePageType: EnumDefault = {
  __signed: true,
  types: types,
}
