import { ConfigDefault } from ".."

export const ConfigNormalStateIDInfo: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseStateIDInfo",
  Fields: {
    animatorStates: "map<string,string[]>",
    moveType: "MoveType",
    combatMoveOnWater: "bool",
    canDoSkill: "bool",
    canDoSkillStart: "float",
    canDoSkillEnd: "float",
    canSyncMove: "bool",
    cullingModelAlwaysAnimate: "bool",
    addEndure: "float",
    massRatio: "float",
    resetAnimatorTriggerOnEnter: "string[]",
    resetAnimatorTriggerOnExit: "string[]",
    setAnimatorBoolean: "ConfigAnimatorBoolean[]",
    setAnimatorFloat: "ConfigAnimatorFloat[]",
    enableRagDoll: "bool",
    needFaceToAnimParam: "bool",
    enableCCD: "bool",
    handleAnimatorStateImmediately: "bool",
  },
}
