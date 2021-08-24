export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export function camelToTitle(str) {
  let startIdx = 0, endIdx = 0

  var words = []

  while (endIdx < str.length) {
    if (isUpperCase(str[endIdx])) {
      const word = titleCase(str.slice(startIdx, endIdx))
      words = [...words, word]
      startIdx = endIdx
    }
    endIdx += 1
  }

  words = [...words, titleCase(str.slice(startIdx))]

  const phrase = words.join(' ')
  return phrase[0].toUpperCase() + phrase.slice(1)
}

function isUpperCase(char) {
  return char === char.toUpperCase()
}

function titleCase(str) {
  const commonExceptions = [
    'a',
    'an',
    'the',
    'for',
    'and',
    'nor',
    'but',
    'or',
    'yet',
    'so',
    'as',
    'at',
    'by',
    'in',
    'of',
    'on',
    'to',
    'up',
  ]

  return commonExceptions.indexOf(str.toLowerCase()) !== -1 ?
    str.toLowerCase() : 
    str[0].toUpperCase() + str.slice(1)
}