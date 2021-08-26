import { useState } from "@hookstate/core";
import PalettePan from "./PalettePan";
import "./Palette.css";

export default function Palette({ colors, pans, vertical = false }) {
  const selectedPan = useState(-1);

  const columns = vertical ? 2 : pans / 2;

  const gridTemplateColumns = new Array(columns).fill("auto").join(" ");

  function handlePanClick() {
    console.log("clicked");
  }

  return (
    <div className="palette">
      <div
        className="palette__frame"
        style={{
          gridTemplateColumns,
        }}
      >
        {new Array(pans).fill(null).map((color, idx) => (
          <PalettePan
            key={`palette-pan-${idx}`}
            hex={colors[idx]}
            onClick={handlePanClick}
          />
        ))}
      </div>
    </div>
  );
}
