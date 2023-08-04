import { ConfigDefault } from ".."

export const DungeonFogEffects: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    enable: "bool",
    cameraFogEffectName: "string",
    playerFogEffectName: "string",
    localOffset: "Vector",
  },
}
