import { createState, useState } from '@hookstate/core'

import pages from '../enum/pages'

const globalState = createState({
  currentPage: 0,
  pages,
  currentPalette: "winsor-twelve",
  trays: [
    // [ 
    //   { hex: 'ffffff', name: 'white', weight: 1 },
    //   { hex: '000000', name: 'black', weight: 1 } 
    // ],
  ],
})

const wrapState = (s) => ({
  get: () => s.trays.value,
  add: (tray) => s.trays.merge([tray])
})

export const useTrayState = () => wrapState(useState(globalState))

export default globalState