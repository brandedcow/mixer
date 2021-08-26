import { useState } from "@hookstate/core";
import { useColorSets } from "../../state/useColorSets";
import Palette from "../../components/Palette/Palette";
import Slider from "../../components/Slider/Slider";
import "./EditPalette.css";

export default function EditPalette() {
  const numPans = useState(12);
  const colors = useColorSets();

  console.log(colors.getEntries());

  function handleSliderChange(e) {
    numPans.set(+e.target.value);
  }

  return (
    <div>
      <div>
        <input />
        <Slider
          min={6}
          max={24}
          step={2}
          value={numPans.get()}
          onChange={handleSliderChange}
        />
      </div>
      <Palette pans={numPans.get()} colors={[]} />
      <div></div>
    </div>
  );
}
