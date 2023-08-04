import { ConfigDefault } from ".."

export const ConfigInterActor: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    configID: "vuint",
    alias: "string",
    visible: "bool",
    bornPointName: "string",
    useRelativePos: "bool",
    relativePos: "Vector",
    relativeRot: "Vector",
    questID: "vuint",
    removeActorType: "RemoveActorType",
    forceCreateDaily: "bool",
    relativePosType: "ActorBornRelativePosType",
    relativePosNpcAlias: "string",
  },
}
