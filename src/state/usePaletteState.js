import { useState } from "@hookstate/core";

import globalState from "./global";

const wrapState = (s) => ({
  getList: () => s.palettes.value,
});

const usePaletteState = () => wrapState(useState(globalState));

export default usePaletteState;
