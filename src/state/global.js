import { createState } from "@hookstate/core";

import pages from "../enum/pages";
import getColorSets from "../lib/getColorSets";

const globalState = createState({
  currentPage: 0,
  pages,
  currentPalette: 0,
  palettes: [],
  currentTrayIdx: -1,
  trays: [],
  colors: getColorSets(),
  header: {
    isButtonVisible: false,
    buttonLabel: "",
    buttonFunction: () => {},
  },
});

export default globalState;
