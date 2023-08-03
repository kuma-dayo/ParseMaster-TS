import { EnumDefault } from "."

enum types {
  SUMO_MONSTER_WAVE_TIME = 0,
  SUMO_MONSTER_WAVE_COUNT = 1,
}

export const SumoStageMonsterWaveType: EnumDefault = {
  __signed: true,
  types: types,
}
