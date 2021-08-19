import hexToDec from "./hexToDec"

export default function parseHexCode(hex) {
  const r = hexToDec(hex.slice(0,2))
  const g = hexToDec(hex.slice(2,4))
  const b = hexToDec(hex.slice(4))

  return [r, g, b]
}
