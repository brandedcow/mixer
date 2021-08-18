import mean from './mean'
import decToHex from './decToHex'
import hexToDec from './hexToDec'

export function mixColors(...colors) {
  if (colors.length === 1) {
    return colors[0]
  } else if (colors.length > 1) {
    return colors.reduce(mixTwoWeighted)
  }
}

function mixTwoWeighted(color1, color2) {
  const { hex: hex1, weight: weight1 } = color1
  const { hex: hex2, weight: weight2 } = color2
  const totalWeight = weight1 + weight2

  const [dec1R, dec1G, dec1B] = parseHexCode(hex1).map(value => value * weight1)
  const [dec2R, dec2G, dec2B] = parseHexCode(hex2).map(value => value * weight2)

  const r = decToHex(Math.floor((dec1R + dec2R) / totalWeight))
  const g = decToHex(Math.floor((dec1G + dec2G) / totalWeight))
  const b = decToHex(Math.floor((dec1B + dec2B) / totalWeight))

  return {
    hex: `${r}${g}${b}`,
    weight: totalWeight
  }
}

function mixTwo(hex1, hex2) {
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



