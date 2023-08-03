import { ConfigDefault } from "../"

export const ConfigInterContainer: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    talkVersion: "vuint",
    luaDataPath: "string",
    isSimpleTalk: "bool",
    dontUseDefaultFinish: "bool",
    attackModeRecover: "bool",
    pauseActor: "bool",
    hidePickableEntity: "bool",
    startBlackKeepTime: "float",
    entityBan: "string",
    isKeyInteraction: "bool",
    disableNpcLod: "bool",
    isAutoBanNpc: "bool",
    isBanWidgetPet: "bool",
    BanCrowdGroupIDs: "vint[]",
    protectNpcMobileLod: "bool",
    startFade: "ConfigInterFade",
    endFade: "ConfigInterFade",
    actors: "ConfigInterActor[]",
    group: "ConfigBaseInterAction[][]",
    groupId: "ConfigInterGrpId[]",
    freeStyleDic: "map<vuint,vint[]>",
  },
}
