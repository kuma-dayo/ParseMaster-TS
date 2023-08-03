import { EnumDefault } from "."

enum types {
  Default = 0,
  MarkChurch = 1,
  MarkKnights = 2,
  MarkPub = 3,
  MarkSouvenir = 4,
  MarkRestaurant = 5,
  MarkGeneralCargo = 6,
  MarkBlacksmith = 7,
  MarkTeamArranger = 8,
  MarkDailyTask = 9,
  MarkRandomTask = 10,
  MarkAdventurers = 11,
  MarkAlchemy = 12,
  MarkSeaLampGiving = 13,
  MarkInvestigationMonster = 14,
  MarkBlacksmith_liyue = 15,
  MarkSouvenir_liyue = 16,
  MarkRestaurant_liyue = 17,
  MarkReputation = 18,
  MarkReputation_liyue = 19,
  MarkReputation_Inazuma = 20,
  MarkBlacksmith_Inazuma = 21,
  MarkSouvenir_Inazuma = 22,
  MarkRestaurant_Inazuma = 23,
  MarkGroupLink = 24,
  MarkFish = 25,
  MarkFish_liyue = 26,
  MarkFish_Inazuma = 27,
  MarkGroupLink_Area = 28,
  MarkTransPoint = 100,
  MarkTransPointLocked = 101,
  MarkPortal = 102,
  MarkDungeonEntry = 103,
  MarkDungeonEntryLocked = 104,
  MarkWeeklyDungeonEntry = 105,
  MarkWeeklyDungeonEntryLocked = 106,
  MarkDailyDungeonEntry = 107,
  MarkDailyDungeonEntryLocked = 108,
  MarkTowerDungeonEntry = 109,
  MarkTowerDungeonEntryLocked = 110,
  MarkDailyDungeonEntryToBeExplored = 111,
  MarkTowerDungeonEntryToBeExplored = 112,
  MarkEffigyDungeonEntry = 113,
  MarkEffigyDungeonEntryLocked = 114,
  MarkFleurFairDungeonEntry = 115,
  MarkBlitzRushDungeonEntry = 116,
  MarkHachiDungeonEntry = 117,
  MarkMiniEldritchDungeonEntry = 118,
  MarkGoddessLocked = 199,
  MarkGoddessUnlocked = 204,
  MarkPacketAnchor = 205,
  MarkQuest = 300,
  MarkDangerousQuest = 301,
  MarkQuestArea = 302,
  MarkDangerousQuestArea = 303,
  MarkCustom = 400,
  MarkCustomBoss = 402,
  MarkCustomBox = 403,
  MarkCustomCollect = 404,
  MarkCustomCooking = 405,
  MarkCustomMainTask = 407,
  MarkCustomMonster = 408,
  MarkCustomSlime = 411,
  MarkCustomTrap = 412,
  MarkCustomWind = 413,
  MarkCustomFish = 414,
  MarkLocalAvatar = 500,
  MarkPlayer1 = 501,
  MarkPlayer2 = 502,
  MarkPlayer3 = 503,
  MarkPlayer4 = 504,
  MarkBoredMonster = 505,
  MarkRadarHint = 506,
  MarkActivity = 507,
  MarkTalk = 508,
  MarkMiscsMarvs = 509,
  MarkActivityAsterLittle = 510,
  MarkActivityAsterMiddle = 511,
  MarkRadarHintArea = 512,
  MarkActivityAsterlarge = 513,
  MarkHuntingArea = 514,
  MarkActivityAsterMiddleNPC = 515,
  MarkWidgetSeverDetectorArea = 516,
  MarkActivityFlightChallengePoint = 517,
  MarkElderTree = 518,
  MarkElderTreeEvent = 519,
  MarkWidgetTreasureMapArea = 520,
  MarkActivityTreasureMapNPC = 521,
  MarkActivityDragonSpineBoss = 522,
  MarkActivityBlessing = 523,
  MarkActivityMonsterBannerDrakePrimoRock = 524,
  MarkActivityExpeditionChallengeArea = 525,
  MarkMechanicisNPC = 526,
  MarkActivityWaterSpriteExploreArea = 527,
  MarkActivityArenaChallenge = 528,
  MarkActivityFleurFairFall = 529,
  MarkActivityFleurFairBalloon = 530,
  MarkActivityWaterSpriteBoss = 531,
  MarkActivitySummerTimeRace = 532,
  MarkActivityRegionSearch = 600,
  MarkGalleryChallenge = 601,
  MarkActivityFleurFairNPC = 602,
  MarkChannellerSlabCampLow = 603,
  MarkChannellerSlabCampMiddle = 604,
  MarkChannellerSlabCampHigh = 605,
  MarkChannellerSlabOneOffDungeon = 606,
  MarkChannellerSlabLoopDungeon = 607,
  MarkChannellerSlabNPC = 608,
  MarkActivityMiniTomoHiliWeiArea = 609,
  MarkActivityHideAndSeekNPC = 610,
  MarkHomeworldDjinn = 611,
  MarkHomeworldDjinnWeekend = 612,
  MarkHomeworldMainHouse = 613,
  MarkHideAndSeekHunter = 614,
  MarkActivityBuoyantCombatPoint = 615,
  MarkActivityBounceConjuring = 616,
  MarkHomeworldNpc = 617,
  MarkSummerIsleSignalPoint = 620,
  MarkVehicleSummonPoint = 621,
  MarkVehicleSummonPointLocked = 622,
  MarkBounceConjuringNPC = 625,
  MarkVehicleSkiff = 626,
  MarkHomeworldFurnitureSuite = 630,
  MarkHomeworldTransPoint = 631,
  MarkHomeworldSafePoint = 632,
  MarkHomeworldFarmField1 = 633,
  MarkHomeworldFarmField2 = 634,
  MarkHomeworldFarmField3 = 635,
  MarkActivityTreasureMapChallenge = 700,
  MarkActivityBlitzRushParkour = 701,
  MarkActivityPerpetualNPC = 705,
  MarkOraionokamiTree = 710,
  MarkSumoDungeon = 711,
  MarkMoonfinTrialChallenge = 712,
  MarkMoonfinTrialFinal = 713,
  MarkLunaRiteExploreArea = 720,
  MarkLunaRiteNPC = 721,
  MarkLunaRiteCrystal = 722,
  MarkLunaRiteChest = 723,
  MarkRoguelike = 730,
  MarkBugyowu = 800,
  MarkChashitsu = 801,
  MarkHomeworldPaimon = 802,
  MarkMusicGameNPC = 803,
  MarkGrowFlowersNPC = 804,
  MarkHachiStealthChallenge = 805,
  MarkHachiBattleChallenge = 806,
  MarkWinterCampSnowman = 810,
  MarkActivityWinterCampBoss = 811,
  MarkAnimalCaptureShop = 820,
  MarkAlcorTransmit = 821,
  MarkQunyugeTransmit = 822,
  MarkAshanpoNPC = 830,
  MarkPotionDungeonEntry = 840,
  MarkProjectionGameEntry = 850,
  MarkLanternRiteShipSummonPoint = 860,
  MarkLanternRiteShipSummonPointLocked = 861,
  MarkMichiaeOffering = 870,
  MarkBartenderNPC = 871,
  MarkMichiaeChest = 872,
  MarkMichiaeChallenge = 873,
  MarkCustomLevel = 874,
  MarkLuminanceStoneNPC = 2601,
  MarkCrystalLink = 2602,
  MarkQuestAcception = 2603,
  MarkIrodoriFlowerNPC = 2610,
  MarkIrodoriPhotoNPC = 2611,
  MarkIrodoriMasterNPC = 2612,
  MarkIrodoriChessNPC = 2613,
  MarkMusicGameV3NPC = 2701,
  MarkActivityGachaNPC = 2702,
  MarkRogueDiary = 2703,
  MarkCocoonSpace = 2704,
  MarkIslandPartyNPC = 2801,
  MarkSummerTimeV2WanyeDungeonEntry = 2802,
  MarkSummerTimeV2XinyanDungeonEntry = 2803,
  MarkSummerTimeV2FeixieerDungeonEntry = 2804,
  MarkSummerTimeV2MonaDungeonEntry = 2805,
  MarkSummerTimeV2BoatSummonPoint = 2806,
  MarkGearGameEntry = 2807,
  MarkEchoShellV2 = 2808,
  MarkArenaChallengeV3 = 2809,
  MarkReputation_Sumeru = 3001,
  MarkBlacksmith_Sumeru = 3002,
  MarkSouvenir_Sumeru = 3003,
  MarkRestaurant_Sumeru = 3004,
  MarkGravenInnocenceCarveNPC = 3005,
  MarkTreasureHuntExploration = 3006,
  MarkTreasureHuntExcavation = 3007,
  MarkInstableSprayDungeonEntry = 3008,
  MarkMuqadasPotionDungeonEntry = 3009,
  MarkDeshretObeliskChest = 3010,
  MarkVanasaraTree = 3011,
  MarkLibrary_Sumeru = 3012,
  MarkCafe_Sumeru = 3013,
  MarkTemple_Sumeru = 3014,
  MarkTalkMainWQ = 3015,
  MarkFish_Sumeru = 3016,
  MarkWindFieldEntry = 3101,
  MarkVintageHuntingStageOneNPC = 3102,
  MarkVintageHuntingStageTwoNPC = 3103,
  MarkVintageHuntingStageThreeNPC = 3104,
  MarkVintageMarketDeliverNPC = 3105,
  MarkVintageMarketBarginNPC = 3106,
  MarkVintageMarketStore = 3107,
  MarkPOIIndicator = 3108,
  MarkFungusFighterCultivateNPC = 3201,
  MarkEffigyV2 = 3202,
  MarkFungusFighterTrainingDungeonEntry = 3203,
  MarkFungusFighterPlotDungeonEntry = 3204,
}

export const MarkIconType: EnumDefault = {
  __signed: true,
  types: types,
}