//Auto Generated by ConfigParser

import { EnumDefault } from "."

enum types {
  OPEN_STATE_NONE = 0,
  OPEN_STATE_PAIMON = 1,
  OPEN_STATE_PAIMON_NAVIGATION = 2,
  OPEN_STATE_AVATAR_PROMOTE = 3,
  OPEN_STATE_AVATAR_TALENT = 4,
  OPEN_STATE_WEAPON_PROMOTE = 5,
  OPEN_STATE_WEAPON_AWAKEN = 6,
  OPEN_STATE_QUEST_REMIND = 7,
  OPEN_STATE_GAME_GUIDE = 8,
  OPEN_STATE_COOK = 9,
  OPEN_STATE_WEAPON_UPGRADE = 10,
  OPEN_STATE_RELIQUARY_UPGRADE = 11,
  OPEN_STATE_RELIQUARY_PROMOTE = 12,
  OPEN_STATE_WEAPON_PROMOTE_GUIDE = 13,
  OPEN_STATE_WEAPON_CHANGE_GUIDE = 14,
  OPEN_STATE_PLAYER_LVUP_GUIDE = 15,
  OPEN_STATE_FRESHMAN_GUIDE = 16,
  OPEN_STATE_SKIP_FRESHMAN_GUIDE = 17,
  OPEN_STATE_GUIDE_MOVE_CAMERA = 18,
  OPEN_STATE_GUIDE_SCALE_CAMERA = 19,
  OPEN_STATE_GUIDE_KEYBOARD = 20,
  OPEN_STATE_GUIDE_MOVE = 21,
  OPEN_STATE_GUIDE_JUMP = 22,
  OPEN_STATE_GUIDE_SPRINT = 23,
  OPEN_STATE_GUIDE_MAP = 24,
  OPEN_STATE_GUIDE_ATTACK = 25,
  OPEN_STATE_GUIDE_FLY = 26,
  OPEN_STATE_GUIDE_TALENT = 27,
  OPEN_STATE_GUIDE_RELIC = 28,
  OPEN_STATE_GUIDE_RELIC_PROM = 29,
  OPEN_STATE_COMBINE = 30,
  OPEN_STATE_GACHA = 31,
  OPEN_STATE_GUIDE_GACHA = 32,
  OPEN_STATE_GUIDE_TEAM = 33,
  OPEN_STATE_GUIDE_PROUD = 34,
  OPEN_STATE_GUIDE_AVATAR_PROMOTE = 35,
  OPEN_STATE_GUIDE_ADVENTURE_CARD = 36,
  OPEN_STATE_FORGE = 37,
  OPEN_STATE_GUIDE_BAG = 38,
  OPEN_STATE_EXPEDITION = 39,
  OPEN_STATE_GUIDE_ADVENTURE_DAILYTASK = 40,
  OPEN_STATE_GUIDE_ADVENTURE_DUNGEON = 41,
  OPEN_STATE_TOWER = 42,
  OPEN_STATE_WORLD_STAMINA = 43,
  OPEN_STATE_TOWER_FIRST_ENTER = 44,
  OPEN_STATE_RESIN = 45,
  OPEN_STATE_LIMIT_REGION_FRESHMEAT = 47,
  OPEN_STATE_LIMIT_REGION_GLOBAL = 48,
  OPEN_STATE_MULTIPLAYER = 49,
  OPEN_STATE_GUIDE_MOUSEPC = 50,
  OPEN_STATE_GUIDE_MULTIPLAYER = 51,
  OPEN_STATE_GUIDE_DUNGEONREWARD = 52,
  OPEN_STATE_GUIDE_BLOSSOM = 53,
  OPEN_STATE_AVATAR_FASHION = 54,
  OPEN_STATE_PHOTOGRAPH = 55,
  OPEN_STATE_GUIDE_KSLQUEST = 56,
  OPEN_STATE_PERSONAL_LINE = 57,
  OPEN_STATE_GUIDE_PERSONAL_LINE = 58,
  OPEN_STATE_GUIDE_APPEARANCE = 59,
  OPEN_STATE_GUIDE_PROCESS = 60,
  OPEN_STATE_GUIDE_PERSONAL_LINE_KEY = 61,
  OPEN_STATE_GUIDE_WIDGET = 62,
  OPEN_STATE_GUIDE_ACTIVITY_SKILL_ASTER = 63,
  OPEN_STATE_GUIDE_COLDCLIMATE = 64,
  OPEN_STATE_DERIVATIVE_MALL = 65,
  OPEN_STATE_GUIDE_EXITMULTIPLAYER = 66,
  OPEN_STATE_GUIDE_THEATREMACHANICUS_BUILD = 67,
  OPEN_STATE_GUIDE_THEATREMACHANICUS_REBUILD = 68,
  OPEN_STATE_GUIDE_THEATREMACHANICUS_CARD = 69,
  OPEN_STATE_GUIDE_THEATREMACHANICUS_MONSTER = 70,
  OPEN_STATE_GUIDE_THEATREMACHANICUS_MISSION_CHECK = 71,
  OPEN_STATE_GUIDE_THEATREMACHANICUS_BUILD_SELECT = 72,
  OPEN_STATE_GUIDE_THEATREMACHANICUS_CHALLENGE_START = 73,
  OPEN_STATE_GUIDE_CONVERT = 74,
  OPEN_STATE_GUIDE_THEATREMACHANICUS_MULTIPLAYER = 75,
  OPEN_STATE_GUIDE_COOP_TASK = 76,
  OPEN_STATE_GUIDE_HOMEWORLD_ADEPTIABODE = 77,
  OPEN_STATE_GUIDE_HOMEWORLD_DEPLOY = 78,
  OPEN_STATE_GUIDE_CHANNELLERSLAB_EQUIP = 79,
  OPEN_STATE_GUIDE_CHANNELLERSLAB_MP_SOLUTION = 80,
  OPEN_STATE_GUIDE_CHANNELLERSLAB_POWER = 81,
  OPEN_STATE_GUIDE_HIDEANDSEEK_SKILL = 82,
  OPEN_STATE_GUIDE_HOMEWORLD_MAPLIST = 83,
  OPEN_STATE_GUIDE_RELICRESOLVE = 84,
  OPEN_STATE_GUIDE_GGUIDE = 85,
  OPEN_STATE_GUIDE_GGUIDE_HINT = 86,
  OPEN_STATE_GUIDE_CHANNELLERSLAB_EQUIP_V2 = 87,
  OPEN_STATE_GUIDE_CHANNELLERSLAB_MP_SOLUTION_V2 = 88,
  OPEN_STATE_GUIDE_CHANNELLERSLAB_POWER_V2 = 89,
  OPEN_STATE_GUIDE_QUICK_TEAMMEMBERCHANGE = 90,
  OPEN_STATE_GGUIDE_FIRSTSHOW = 91,
  OPEN_STATE_GGUIDE_MAINPAGE_ENTRY_DISAPPEAR = 92,
  OPEN_STATE_CITY_REPUATION_MENGDE = 800,
  OPEN_STATE_CITY_REPUATION_LIYUE = 801,
  OPEN_STATE_CITY_REPUATION_UI_HINT = 802,
  OPEN_STATE_CITY_REPUATION_INAZUMA = 803,
  OPEN_STATE_SHOP_TYPE_MALL = 900,
  OPEN_STATE_SHOP_TYPE_RECOMMANDED = 901,
  OPEN_STATE_SHOP_TYPE_GENESISCRYSTAL = 902,
  OPEN_STATE_SHOP_TYPE_GIFTPACKAGE = 903,
  OPEN_STATE_SHOP_TYPE_PAIMON = 1001,
  OPEN_STATE_SHOP_TYPE_CITY = 1002,
  OPEN_STATE_SHOP_TYPE_BLACKSMITH = 1003,
  OPEN_STATE_SHOP_TYPE_GROCERY = 1004,
  OPEN_STATE_SHOP_TYPE_FOOD = 1005,
  OPEN_STATE_SHOP_TYPE_SEA_LAMP = 1006,
  OPEN_STATE_SHOP_TYPE_VIRTUAL_SHOP = 1007,
  OPEN_STATE_SHOP_TYPE_LIYUE_GROCERY = 1008,
  OPEN_STATE_SHOP_TYPE_LIYUE_SOUVENIR = 1009,
  OPEN_STATE_SHOP_TYPE_LIYUE_RESTAURANT = 1010,
  OPEN_STATE_SHOP_TYPE_INAZUMA_SOUVENIR = 1011,
  OPEN_STATE_SHOP_TYPE_NPC_TOMOKI = 1012,
  OPEN_STATE_SHOP_TYPE_INAZUMA_SOUVENIR_BLACK_BAR = 1013,
  OPEN_ADVENTURE_MANUAL = 1100,
  OPEN_ADVENTURE_MANUAL_CITY_MENGDE = 1101,
  OPEN_ADVENTURE_MANUAL_CITY_LIYUE = 1102,
  OPEN_ADVENTURE_MANUAL_MONSTER = 1103,
  OPEN_ADVENTURE_MANUAL_BOSS_DUNGEON = 1104,
  OPEN_STATE_ACTIVITY_SEALAMP = 1200,
  OPEN_STATE_ACTIVITY_SEALAMP_TAB2 = 1201,
  OPEN_STATE_ACTIVITY_SEALAMP_TAB3 = 1202,
  OPEN_STATE_BATTLE_PASS = 1300,
  OPEN_STATE_BATTLE_PASS_ENTRY = 1301,
  OPEN_STATE_ACTIVITY_CRUCIBLE = 1400,
  OPEN_STATE_ACTIVITY_NEWBEEBOUNS_OPEN = 1401,
  OPEN_STATE_ACTIVITY_NEWBEEBOUNS_CLOSE = 1402,
  OPEN_STATE_ACTIVITY_ENTRY_OPEN = 1403,
  OPEN_STATE_MENGDE_INFUSEDCRYSTAL = 1404,
  OPEN_STATE_LIYUE_INFUSEDCRYSTAL = 1405,
  OPEN_STATE_SNOW_MOUNTAIN_ELDER_TREE = 1406,
  OPEN_STATE_MIRACLE_RING = 1407,
  OPEN_STATE_COOP_LINE = 1408,
  OPEN_STATE_INAZUMA_INFUSEDCRYSTAL = 1409,
  OPEN_STATE_FISH = 1410,
  OPEN_STATE_GUIDE_SUMO_TEAM_SKILL = 1411,
  OPEN_STATE_GUIDE_FISH_RECIPE = 1412,
  OPEN_STATE_HOME = 1500,
  OPEN_STATE_ACTIVITY_HOMEWORLD = 1501,
  OPEN_STATE_ADEPTIABODE = 1502,
  OPEN_STATE_HOME_AVATAR = 1503,
  OPEN_STATE_HOME_EDIT = 1504,
  OPEN_STATE_HOME_EDIT_TIPS = 1505,
  OPEN_STATE_RELIQUARY_DECOMPOSE = 1600,
  OPEN_STATE_ACTIVITY_H5 = 1700,
  OPEN_STATE_ORAIONOKAMI = 2000,
  OPEN_STATE_GUIDE_CHESS_MISSION_CHECK = 2001,
  OPEN_STATE_GUIDE_CHESS_BUILD = 2002,
  OPEN_STATE_GUIDE_CHESS_WIND_TOWER_CIRCLE = 2003,
  OPEN_STATE_GUIDE_CHESS_CARD_SELECT = 2004,
  OPEN_STATE_INAZUMA_MAINQUEST_FINISHED = 2005,
  OPEN_STATE_PAIMON_LVINFO = 2100,
  OPEN_STATE_TELEPORT_HUD = 2101,
  OPEN_STATE_GUIDE_MAP_UNLOCK = 2102,
  OPEN_STATE_GUIDE_PAIMON_LVINFO = 2103,
  OPEN_STATE_GUIDE_AMBORTRANSPORT = 2104,
  OPEN_STATE_GUIDE_FLY_SECOND = 2105,
  OPEN_STATE_GUIDE_KAEYA_CLUE = 2106,
  OPEN_STATE_CAPTURE_CODEX = 2107,
  OPEN_STATE_ACTIVITY_FISH_OPEN = 2200,
  OPEN_STATE_ACTIVITY_FISH_CLOSE = 2201,
  OPEN_STATE_GUIDE_ROGUE_MAP = 2205,
  OPEN_STATE_GUIDE_ROGUE_RUNE = 2206,
  OPEN_STATE_GUIDE_BARTENDER_FORMULA = 2210,
  OPEN_STATE_GUIDE_BARTENDER_MIX = 2211,
  OPEN_STATE_GUIDE_BARTENDER_CUP = 2212,
  OPEN_STATE_GUIDE_MAIL_FAVORITES = 2400,
  OPEN_STATE_GUIDE_POTION_CONFIGURE = 2401,
  OPEN_STATE_GUIDE_LANV2_FIREWORK = 2402,
  OPEN_STATE_LOADINGTIPS_ENKANOMIYA = 2403,
  OPEN_STATE_MICHIAE_CASKET = 2500,
  OPEN_STATE_MAIL_COLLECT_UNLOCK_RED_POINT = 2501,
  OPEN_STATE_LUMEN_STONE = 2600,
  OPEN_STATE_GUIDE_CRYSTALLINK_BUFF = 2601,
  OPEN_STATE_GUIDE_MUSIC_GAME_V3 = 2700,
  OPEN_STATE_GUIDE_MUSIC_GAME_V3_REAL_TIME_EDIT = 2701,
  OPEN_STATE_GUIDE_MUSIC_GAME_V3_TIMELINE_EDIT = 2702,
  OPEN_STATE_GUIDE_MUSIC_GAME_V3_SETTING = 2703,
  OPEN_STATE_GUIDE_ROBOTGACHA = 2704,
  OPEN_STATE_GUIDE_FRAGILE_RESIN = 2800,
  OPEN_ADVENTURE_MANUAL_EDUCATION = 2801,
}

export const OpenStateType: EnumDefault = {
  __signed: true,
  types: types,
}
