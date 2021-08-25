import { createState } from "@hookstate/core";

import pages from "../enum/pages";
import getColorSets from "../lib/getColorSets";

const globalState = createState({
  currentPage: 0,
  pages,
  currentPalette: 0,
  palettes: [
    {
      name: "winsor-twelve",
      colors: [
        { name: "Lemon Yellow Hue", productNum: "346", hex: "FFF023" },
        { name: "Cadmium Yellow Hue", productNum: "109", hex: "FFD22F" },
        { name: "Cadmium Red Pale Hue", productNum: "103", hex: "EC6722" },
        { name: "Alizarin Crimson Hue", productNum: "3", hex: "E53158" },
        { name: "Ultramarine", productNum: "660", hex: "0483C6" },
        { name: "Cerulean Blue Hue", productNum: "139", hex: "009FDF" },
        { name: "Chinese White", productNum: "150", hex: "EEEBEB" },
        { name: "Burnt Umber", productNum: "76", hex: "594648" },
        { name: "Burnt Sienna", productNum: "74", hex: "C14A4C" },
        { name: "Yellow Ochre", productNum: "744", hex: "E3904A" },
        { name: "Sap Green", productNum: "599", hex: "7FA649" },
        { name: "Viridian Hue", productNum: "696", hex: "06896A" },
      ],
    },
  ],
  currentTrayIdx: -1,
  trays: [],
  colors: getColorSets(),
});

export default globalState;
