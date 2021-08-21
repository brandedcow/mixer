import { none, useState } from '@hookstate/core'

import globalState from "./global"

const wrapState = (s) => ({
  get: () => s.trays.value,
  add: (tray) => s.trays.merge([tray]),
  remove: (idx) => s.trays[idx].set(none)
})

export const useTrayListState = () => wrapState(useState(globalState))
