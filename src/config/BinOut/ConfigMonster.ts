import { ConfigDefault } from "../"

export const ConfigMonster: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigCharacter",
  Fields: {
    initialPoses: "map<string,ConfigMonsterInitialPose>",
    aibeta: "ConfigAIBeta",
    inputKeys: "ConfigKeyInput[]",
    move: "ConfigMove",
    audio: "ConfigMonsterAudio",
    emojiBubble: "ConfigEmojiBubble",
    characterRendering: "ConfigCharacterRendering",
    animal: "ConfigAnimal",
    field: "ConfigTrigger",
    captureGroup: "ConfigCaptureGroup",
    cameraAdjustMap: "map<string,ConfigSpecialCamera>",
    clothoid: "ConfigClothoid",
    uiSetting: "ConfigUISetting",
  },
}
