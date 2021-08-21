import { none, useState } from '@hookstate/core'
import globalState from './global'

const wrapState = (s) => ({
  get: () => s.currentTrayIdx.value,
  set: (idx) => s.currentTrayIdx.set(idx),
  reset: () => s.currentTrayIdx.set(-1),
  addColor: (color) => {
    if (s.currentTrayIdx.value !== -1) {
      s.trays[s.currentTrayIdx.value].merge([color])
    }
  },
  removeColor: (idx) => s.trays[s.currentTrayIdx.value][idx].set(none),
})

export const useCurrentTrayState = () => wrapState(useState(globalState))