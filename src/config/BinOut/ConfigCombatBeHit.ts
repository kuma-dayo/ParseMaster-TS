import { ConfigDefault } from "../"

export const ConfigCombatBeHit: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    hitBloodEffect: "string",
    hitAutoRedirect: "bool",
    muteAllHit: "bool",
    muteAllHitEffect: "bool",
    muteAllHitText: "bool",
    ignoreMinHitVY: "bool",
    blendShake: "ConfigBeHitBlendShake",
  },
}
