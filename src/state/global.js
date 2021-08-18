import { createState } from '@hookstate/core'

import pages from '../enum/pages'

const globalState = createState({
  currentPage: 0,
  pages,
  currentPalette: "winsor-twelve",
  trays: [],
})

export default globalState