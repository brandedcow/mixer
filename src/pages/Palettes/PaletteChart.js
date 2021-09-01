import { useParams } from "react-router-dom";
import usePaletteState from "../../state/usePaletteState";
import "./PaletteChart.css";

export default function PaletteChart() {
  const { id } = useParams();
  const palettes = usePaletteState();
  const palette = palettes.getPalette(id);

  return <div>Chart</div>;
}
