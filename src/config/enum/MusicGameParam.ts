import { EnumDefault } from "."

enum types {
  None = 0,
  Time = 1,
  SceneId = 2,
  AreaId = 4,
  Weather = 8,
  EnemyCount = 16,
  EnemyDistance = 32,
  QuestIdList = 64,
  LastUserCue = 128,
  Random = 256,
}

export const MusicGameParam: EnumDefault = {
  __signed: false,
  types: types,
}
