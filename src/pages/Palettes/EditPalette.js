import { useState } from "@hookstate/core";
import { useColorSets } from "../../state/useColorSets";
import Input from "../../components/Input/Input";
import Palette from "../../components/Palette/Palette";
import Slider from "../../components/Slider/Slider";
import Dropdown from "../../components/Dropdown/Dropdown.js";
import "./EditPalette.css";

export default function EditPalette() {
  const numPans = useState(12);
  const paletteName = useState("");
  const selectedPan = useState(-1);
  const selectedSet = useState(null);

  const colorSets = useColorSets();
  const options = colorSets.getOptions();

  function handleInputChange(value) {
    paletteName.set(value);
  }
  function handleSliderChange(e) {
    numPans.set(+e.target.value);
  }
  function handleSelectSet(option) {
    selectedSet.set(option);
  }

  return (
    <div>
      <div className="edit-palette__options-container">
        <Input
          value={paletteName.get()}
          onChange={handleInputChange}
          placeholder="Palette Name"
        />
        <Slider
          min={6}
          max={24}
          step={2}
          value={numPans.get()}
          onChange={handleSliderChange}
        />
      </div>
      <Palette pans={numPans.get()} colors={[]} />
      <div>
        <Dropdown onChange={handleSelectSet} options={options} />
        {/* <ColorList 
          colors={colorSets.get(selectedPan)}
        /> */}
      </div>
    </div>
  );
}
