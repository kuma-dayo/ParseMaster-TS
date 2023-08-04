import { ConfigDefault } from ".."

export const MonsterDefendMixin: ConfigDefault = {
  attribute: [],
  baseClass: "EntityDefenceMixin",
  Fields: {
    attackType: "AttackType",
    onDefendSucceded: "ConfigAbilityAction[]",
    defendAudioConfig: "MonsterDefendAudio",
    randomDirection: "bool",
    doNotTurnDirection: "bool",
  },
}
