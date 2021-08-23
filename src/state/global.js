import { createState } from '@hookstate/core'

import pages from '../enum/pages'
import getColorSets from '../lib/getColorSets'

const globalState = createState({
  currentPage: 0,
  pages,
  currentPalette: "winsor-twelve",
  palettes: [],
  currentTrayIdx: -1,
  trays: [],
  colors: getColorSets(),
})

export default globalState