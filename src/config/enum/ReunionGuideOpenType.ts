import { EnumDefault } from "."

enum types {
  REUNION_GUIDE_OPEN_TYPE_NONE = 0,
  REUNION_GUIDE_OPEN_TYPE_ADV_HAS_UNFINISH_QUEST = 1,
  REUNION_GUIDE_OPEN_TYPE_ADV_HAS_UNFINISH_WATCHER = 2,
  REUNION_GUIDE_OPEN_TYPE_ADV_HAS_AVAILABLE_REWARD = 3,
  REUNION_GUIDE_OPEN_TYPE_PLAYER_LEVEL_GEQ = 4,
  REUNION_GUIDE_OPEN_TYPE_PREQUEST_FINISH = 5,
}

export const ReunionGuideOpenType: EnumDefault = {
  __signed: true,
  types: types,
}
