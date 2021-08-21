import { useState } from '@hookstate/core'
import globalState from './global'

const wrapState = (s) => ({
  get: () => s.currentTrayIdx.value,
  set: (idx) => s.currentTrayIdx.set(idx),
  reset: () => s.currentTrayIdx.set(-1)
})

export const useCurrentTrayState = () => wrapState(useState(globalState))