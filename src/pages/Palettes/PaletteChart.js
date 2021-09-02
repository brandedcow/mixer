import { useParams } from "react-router-dom";
import usePaletteState from "../../state/usePaletteState";
import { getLocation } from "../../lib/colorWheel";
import ColorWheel from "../../components/ColorWheel/ColorWheel";
import "./PaletteChart.css";

export default function PaletteChart() {
  const { id } = useParams();
  const palettes = usePaletteState();
  const palette = palettes.getPalette(id);

  console.log(getLocation(palette.colors[0].hex));

  return (
    <div>
      <ColorWheel colors={palette.colors} />
    </div>
  );
}
