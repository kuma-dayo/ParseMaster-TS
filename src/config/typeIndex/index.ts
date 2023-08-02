export interface typeIndexDefault {
  //TODO
}

export function get(name: string): typeIndexDefault {
  return <typeIndexDefault>this[name]
}
