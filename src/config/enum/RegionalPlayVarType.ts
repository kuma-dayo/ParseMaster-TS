import { EnumDefault } from "."

enum types {
  MichiaeMatsuriDarkPressure = 2500,
  MichiaeMatsuriCrystalEnergy = 2501,
  LightStoneEnergy = 2600,
  DeathZoneBaseErosion = 3000,
  DeathZoneExtraErosion = 3001,
}

export const RegionalPlayVarType: EnumDefault = {
  __signed: true,
  types: types,
}
