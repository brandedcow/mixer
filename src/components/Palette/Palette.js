import PalettePan from "./PalettePan";
import "./Palette.css";

export default function Palette({
  colors,
  vertical = false,
  onPanClick,
  selectedPan,
}) {
  const columns = vertical ? 2 : colors.length / 2;

  const gridTemplateColumns = new Array(columns).fill("auto").join(" ");

  return (
    <div className="palette">
      <div
        className="palette__frame"
        style={{
          gridTemplateColumns,
        }}
      >
        {colors.map((color, idx) => (
          <PalettePan
            key={`palette-pan-${idx}`}
            hex={colors[idx] === null ? "white" : colors[idx].hex}
            onClick={() => onPanClick(idx)}
            style={{
              borderColor: selectedPan === idx ? "#AAAAAA" : "#DADADA",
            }}
          />
        ))}
      </div>
    </div>
  );
}
