import { EnumDefault } from "."

enum types {
  BATTLE_PASS_MISSION_REFRESH_DAILY = 0,
  BATTLE_PASS_MISSION_REFRESH_CYCLE = 1,
  BATTLE_PASS_MISSION_REFRESH_SCHEDULE = 2,
  BATTLE_PASS_MISSION_REFRESH_CYCLE_CROSS_SCHEDULE = 3,
}

export const BattlePassMissionRefreshType: EnumDefault = {
  __signed: true,
  types: types,
}
