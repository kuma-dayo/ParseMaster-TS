import { ConfigDefault } from ".."

export const ConfigAudioUi: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    support: "AudioUiSupport",
    equip: "AudioUiEquip",
    openChestEvent: "ConfigWwiseString",
    joinTeamEvent: "AudioOneTimeEvent",
    elementStateKey: "ConfigWwiseString",
    elementStateDefaultValue: "ConfigWwiseString",
    elementStateValueMap: "map<string,string>",
    characterAppearEvent: "ConfigWwiseString",
    addMapPinEvent: "ConfigWwiseString",
    removeMapPinEvent: "ConfigWwiseString",
    enableElementViewEvent: "ConfigWwiseString",
    disableElementViewEvent: "ConfigWwiseString",
    dungeonVictoryEvent: "ConfigWwiseString",
    dungeonDefeatEvent: "ConfigWwiseString",
    changeWeaponEvent: "ConfigWwiseString",
    wearRelicEvent: "ConfigWwiseString",
    takeoffRelicEvent: "ConfigWwiseString",
    selectAvatarRelicEvent: "ConfigWwiseString",
    addEquipMaterialEvent: "ConfigWwiseString",
    talentUnlockEvent: "ConfigWwiseString",
    changeAvatarSuccessEvent: "ConfigWwiseString",
    changeAvatarFailedEvent: "ConfigWwiseString",
    selectMainQuestEvent: "ConfigWwiseString",
    teamAvatarHoldUp: "ConfigWwiseString",
    teamAvatarHoldDown: "ConfigWwiseString",
    teamAvatarClick: "ConfigWwiseString",
    bagDropItem: "ConfigWwiseString",
    mailDeleteEvent: "ConfigWwiseString",
    itemInCDEvent: "ConfigWwiseString",
    pickUpEvent: "ConfigWwiseString",
    playerLevelBtnEvent: "ConfigWwiseString",
    chestPickupFailEvent: "ConfigWwiseString",
    enterDungeonSuccessEvent: "ConfigWwiseString",
    openPageDefaultEvent: "ConfigWwiseString",
    closePageDefaultEvent: "ConfigWwiseString",
    openPageCustomEvents: "map<string,ConfigWwiseString>",
    closePageCustomEvents: "map<string,ConfigWwiseString>",
    videoStartDefaultEvent: "ConfigWwiseString",
    videoEndDefaultEvent: "ConfigWwiseString",
    videoStartCustomEvents: "map<string,ConfigWwiseString>",
    videoEndCustomEvents: "map<string,ConfigWwiseString>",
    defaultEnableDelayCount: "vint",
    characterSelectMusicEndEvent: "ConfigWwiseString",
    loadingEventsMap: "map<vint,ConfigWwiseString>",
  },
}
