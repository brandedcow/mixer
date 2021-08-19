import parseHexCode from "./parseHexCode";

export default function isDarkColor(hex) {
  const [r,g,b] = parseHexCode(hex)

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b

  return luma <= 127
}