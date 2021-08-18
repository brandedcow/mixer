import mean from './mean'
import decToHex from './decToHex'
import hexToDec from './hexToDec'

export function mixColors(...colors) {
  return colors.length > 0 ? colors.reduce(mixTwo) : null
}

function mixTwo(hex1, hex2) {
  console.log('mix', hex1, hex2)
  const [hex1R, hex1G, hex1B] = parseHexCode(hex1)
  const [hex2R, hex2G, hex2B] = parseHexCode(hex2)



  const r = decToHex(Math.floor(mean(hex1R, hex2R)))
  const g = decToHex(Math.floor(mean(hex1G, hex2G)))
  const b = decToHex(Math.floor(mean(hex1B, hex2B)))

  return `${r}${g}${b}`
}

function parseHexCode(hex) {
  const r = hexToDec(hex.slice(0,2))
  const g = hexToDec(hex.slice(2,4))
  const b = hexToDec(hex.slice(4))

  return [r, g, b]
}



