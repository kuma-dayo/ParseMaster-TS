import { EnumDefault } from "."

enum types {
  QUEST_COND_NONE = 0,
  QUEST_COND_STATE_EQUAL = 1,
  QUEST_COND_STATE_NOT_EQUAL = 2,
  QUEST_COND_PACK_HAVE_ITEM = 3,
  QUEST_COND_AVATAR_ELEMENT_EQUAL = 4,
  QUEST_COND_AVATAR_ELEMENT_NOT_EQUAL = 5,
  QUEST_COND_AVATAR_CAN_CHANGE_ELEMENT = 6,
  QUEST_COND_CITY_LEVEL_EQUAL_GREATER = 7,
  QUEST_COND_ITEM_NUM_LESS_THAN = 8,
  QUEST_COND_DAILY_TASK_START = 9,
  QUEST_COND_OPEN_STATE_EQUAL = 10,
  QUEST_COND_DAILY_TASK_OPEN = 11,
  QUEST_COND_DAILY_TASK_REWARD_CAN_GET = 12,
  QUEST_COND_DAILY_TASK_REWARD_RECEIVED = 13,
  QUEST_COND_PLAYER_LEVEL_REWARD_CAN_GET = 14,
  QUEST_COND_EXPLORATION_REWARD_CAN_GET = 15,
  QUEST_COND_IS_WORLD_OWNER = 16,
  QUEST_COND_PLAYER_LEVEL_EQUAL_GREATER = 17,
  QUEST_COND_SCENE_AREA_UNLOCKED = 18,
  QUEST_COND_ITEM_GIVING_ACTIVED = 19,
  QUEST_COND_ITEM_GIVING_FINISHED = 20,
  QUEST_COND_IS_DAYTIME = 21,
  QUEST_COND_CURRENT_AVATAR = 22,
  QUEST_COND_CURRENT_AREA = 23,
  QUEST_COND_QUEST_VAR_EQUAL = 24,
  QUEST_COND_QUEST_VAR_GREATER = 25,
  QUEST_COND_QUEST_VAR_LESS = 26,
  QUEST_COND_FORGE_HAVE_FINISH = 27,
  QUEST_COND_DAILY_TASK_IN_PROGRESS = 28,
  QUEST_COND_DAILY_TASK_FINISHED = 29,
  QUEST_COND_ACTIVITY_COND = 30,
  QUEST_COND_ACTIVITY_OPEN = 31,
  QUEST_COND_DAILY_TASK_VAR_GT = 32,
  QUEST_COND_DAILY_TASK_VAR_EQ = 33,
  QUEST_COND_DAILY_TASK_VAR_LT = 34,
  QUEST_COND_BARGAIN_ITEM_GT = 35,
  QUEST_COND_BARGAIN_ITEM_EQ = 36,
  QUEST_COND_BARGAIN_ITEM_LT = 37,
  QUEST_COND_COMPLETE_TALK = 38,
  QUEST_COND_NOT_HAVE_BLOSSOM_TALK = 39,
  QUEST_COND_IS_CUR_BLOSSOM_TALK = 40,
  QUEST_COND_QUEST_NOT_RECEIVE = 41,
  QUEST_COND_QUEST_SERVER_COND_VALID = 42,
  QUEST_COND_ACTIVITY_CLIENT_COND = 43,
  QUEST_COND_QUEST_GLOBAL_VAR_EQUAL = 44,
  QUEST_COND_QUEST_GLOBAL_VAR_GREATER = 45,
  QUEST_COND_QUEST_GLOBAL_VAR_LESS = 46,
  QUEST_COND_PERSONAL_LINE_UNLOCK = 47,
  QUEST_COND_CITY_REPUTATION_REQUEST = 48,
  QUEST_COND_MAIN_COOP_START = 49,
  QUEST_COND_MAIN_COOP_ENTER_SAVE_POINT = 50,
  QUEST_COND_CITY_REPUTATION_LEVEL = 51,
  QUEST_COND_CITY_REPUTATION_UNLOCK = 52,
  QUEST_COND_LUA_NOTIFY = 53,
  QUEST_COND_CUR_CLIMATE = 54,
  QUEST_COND_ACTIVITY_END = 55,
  QUEST_COND_COOP_POINT_RUNNING = 56,
  QUEST_COND_GADGET_TALK_STATE_EQUAL = 57,
  QUEST_COND_AVATAR_FETTER_GT = 58,
  QUEST_COND_AVATAR_FETTER_EQ = 59,
  QUEST_COND_AVATAR_FETTER_LT = 60,
  QUEST_COND_NEW_HOMEWORLD_MOUDLE_UNLOCK = 61,
  QUEST_COND_NEW_HOMEWORLD_LEVEL_REWARD = 62,
  QUEST_COND_NEW_HOMEWORLD_MAKE_FINISH = 63,
  QUEST_COND_HOMEWORLD_NPC_EVENT = 64,
  QUEST_COND_TIME_VAR_GT_EQ = 65,
  QUEST_COND_TIME_VAR_PASS_DAY = 66,
  QUEST_COND_HOMEWORLD_NPC_NEW_TALK = 67,
  QUEST_COND_PLAYER_CHOOSE_MALE = 68,
  QUEST_COND_HISTORY_GOT_ANY_ITEM = 69,
  QUEST_COND_LEARNED_RECIPE = 70,
  QUEST_COND_LUNARITE_REGION_UNLOCKED = 71,
  QUEST_COND_LUNARITE_HAS_REGION_HINT_COUNT = 72,
  QUEST_COND_LUNARITE_COLLECT_FINISH = 73,
  QUEST_COND_LUNARITE_MARK_ALL_FINISH = 74,
  QUEST_COND_NEW_HOMEWORLD_SHOP_ITEM = 75,
  QUEST_COND_SCENE_POINT_UNLOCK = 76,
  QUEST_COND_SCENE_LEVEL_TAG_EQ = 77,
  QUEST_COND_PLAYER_ENTER_REGION = 78,
  QUEST_COND_ACTIVITY_SCHEDULE_OPEN_AND_COND = 79,
  QUEST_COND_ARANARA_COLLECTION_STATE_EQ = 80,
  QUEST_COND_INFERENCE_FINISH_PAGE_CONCLUSION = 81,
  QUEST_COND_SCENE_LEVEL_TAG_VALID = 82,
  QUEST_COND_NEW_HOMEWORLD_WOOD_EXCHANGE_UNLOCK = 83,
  QUEST_COND_IN_CITY = 84,
  QUEST_COND_GCG_EXP_OVERFLOW = 86,
  QUEST_COND_GCG_NPC_TYPE = 87,
  QUEST_COND_ACTIVITY_NEW_FUNGUS_CAPTURE = 88,
}

export const QuestCondType: EnumDefault = {
  __signed: true,
  types: types,
}