import { ConfigDefault } from ".."

export const WidgetGeneralExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    materialID: "vuint",
    canUseInOtherWorld: "bool",
    canUseInRoom: "bool",
    forbiddenSceneIdList: "vuint[]",
    canUseWhenCurrentAvatarDead: "bool",
    canUseInLimitRegion: "bool",
    canUseWhenFight: "bool",
    canUseInUnNormalMoveState: "bool",
    canUseInAvatarFocus: "bool",
    canUseInDungeon: "bool",
    canUseInTower: "bool",
    canUseInHomeworld: "bool",
    FNIFIGJCBPB: "bool",
    ICMPJMFNJGH: "bool",
    vehicleLimit: "VEHICLE_LIMIT_TYPE",
    forbiddenDungeonTypeList: "vuint[]",
    forbiddenDungeonPlayTypeList: "vuint[]",
    DDDDPFDBBGC: "vuint[]",
  },
}
