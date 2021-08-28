import { createState } from "@hookstate/core";

import pages from "../enum/pages";
import getColorSets from "../lib/getColorSets";

const globalState = createState({
  currentPage: 0,
  pages,
  currentPalette: 0,
  palettes: [
    {
      name: "Winsor & Newton Sketcher's Pocket Set",
      colors: [
        { name: "Viridian Hue", productNum: "696", hex: "06896A", order: 0 },
        {
          name: "Lemon Yellow Hue",
          productNum: "346",
          hex: "FFF023",
          order: 1,
        },
        { name: "Sap Green", productNum: "599", hex: "7FA649", order: 2 },
        {
          name: "Cadmium Yellow Hue",
          productNum: "109",
          hex: "FFD22F",
          order: 3,
        },
        { name: "Yellow Ochre", productNum: "744", hex: "E3904A", order: 4 },
        {
          name: "Cadmium Red Pale Hue",
          productNum: "103",
          hex: "EC6722",
          order: 5,
        },
        { name: "Burnt Sienna", productNum: "74", hex: "C14A4C", order: 6 },
        {
          name: "Alizarin Crimson Hue",
          productNum: "3",
          hex: "E53158",
          order: 7,
        },
        { name: "Burnt Umber", productNum: "76", hex: "594648", order: 8 },
        { name: "Ultramarine", productNum: "660", hex: "0483C6", order: 9 },
        { name: "Chinese White", productNum: "150", hex: "EEEBEB", order: 10 },
        {
          name: "Cerulean Blue Hue",
          productNum: "139",
          hex: "009FDF",
          order: 11,
        },
      ],
    },
  ],
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
