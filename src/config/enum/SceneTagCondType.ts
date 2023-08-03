import { EnumDefault } from "."

enum types {
  SCENE_TAG_COND_TYPE_NONE = 0,
  SCENE_TAG_COND_TYPE_SPECIFIC_ACTIVITY_OPEN = 1,
  SCENE_TAG_COND_TYPE_QUEST_GLOBAL_VAR_EQUAL = 2,
  SCENE_TAG_COND_TYPE_ACTIVITY_CONTENT_OPEN = 4,
  SCENE_TAG_COND_TYPE_QUEST_FINISH = 5,
}

export const SceneTagCondType: EnumDefault = {
  __signed: true,
  types: types,
}
