import { useState } from '@hookstate/core'
import globalState from "./global";

const wrapState = s => ({
  getEntries: () => Object.entries(s.colors.value),
})

export const useColorSets = () => wrapState(useState(globalState))