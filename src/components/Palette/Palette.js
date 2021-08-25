import PalettePan from "./PalettePan";
import "./Palette.css";
import { usePaletteState } from "../../state/palette";

export default function Palette() {
  const paletteState = usePaletteState();
  const { name, colors } = paletteState.get();

  return (
    <div className="palette">
      <div className="palette__frame">
        {colors.map(({ hex, name }, idx) => (
          <PalettePan key={`palette-pan-${idx}`} name={name} hex={hex} />
        ))}
      </div>
    </div>
  );
}
