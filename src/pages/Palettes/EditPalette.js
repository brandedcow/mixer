import { useState } from "@hookstate/core";
import { useColorSets } from "../../state/useColorSets";
import Input from "../../components/Input/Input";
import Palette from "../../components/Palette/Palette";
import Slider from "../../components/Slider/Slider";
import Dropdown from "../../components/Dropdown/Dropdown";
import ColorList from "../../components/ColorList/ColorList";
import "./EditPalette.css";

export default function EditPalette() {
  const numPans = useState(12);
  const paletteName = useState("");
  const selectedPan = useState(-1);
  const selectedSet = useState({});

  const colorSets = useColorSets();
  const options = colorSets.getOptions();

  const selectedColorSet =
    selectedSet.get().value !== undefined
      ? colorSets.get(selectedSet.get().value)
      : [];

  function handleColorClick() {}

  return (
    <div className="edit-palette">
      <div className="edit-palette__options-container">
        <Input
          value={paletteName.get()}
          onChange={(v) => paletteName.set(v)}
          placeholder="Palette Name"
          size="2.5rem"
        />
        <Slider
          label="# Wells"
          min={6}
          max={24}
          step={2}
          value={numPans.get()}
          onChange={(v) => numPans.set(v)}
        />
        <button>Clear</button>
        <button>Save</button>
      </div>
      <Palette pans={numPans.get()} colors={[]} />
      <div className="edit-palette__color-picker">
        <Dropdown onChange={(v) => selectedSet.set(v)} options={options} />
        <ColorList
          colors={selectedColorSet}
          onColorClick={handleColorClick}
          squareSize="150px"
        />
      </div>
    </div>
  );
}
