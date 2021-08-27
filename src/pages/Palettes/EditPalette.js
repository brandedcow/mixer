import { useState } from "@hookstate/core";
import { useColorSets } from "../../state/useColorSets";
import Input from "../../components/Input/Input";
import Palette from "../../components/Palette/Palette";
import Slider from "../../components/Slider/Slider";
import Dropdown from "../../components/Dropdown/Dropdown";
import ColorList from "../../components/ColorList/ColorList";
import "./EditPalette.css";
import useHeaderButton from "../../state/useHeaderButton";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function EditPalette() {
  const headerButton = useHeaderButton();
  const history = useHistory();

  useEffect(() => {
    console.log("called edit effect");
    headerButton.set({
      visible: true,
      label: "X Cancel Add",
      func: () => history.push("/palettes"),
    });

    return headerButton.reset;
  });

  const colorSets = useColorSets();
  const options = colorSets.getOptions();
  const numPans = useState(12);
  const paletteName = useState("");
  const selectedPan = useState(-1);
  const selectedSet = useState(options[0]);

  const selectedColorSet =
    selectedSet.get().value !== undefined
      ? colorSets.get(selectedSet.get().value)
      : [];

  const paletteColors = useState(new Array(numPans.get()).fill(null));

  function handleColorClick(color) {
    if (selectedPan.get() === -1) return;
    const order = selectedPan.get();

    paletteColors[order].merge({
      ...color,
      order,
    });
  }

  function handleSliderDrop() {
    const oldNum = paletteColors.get().length;
    const diff = numPans.get() - oldNum;

    if (diff > 0) {
      paletteColors.merge(new Array(diff).fill(null));
    } else {
      paletteColors.set((p) => p.slice(0, numPans.get()));
    }
  }

  return (
    <div className="edit-palette">
      <div className="edit-palette__options-container">
        <Input
          value={paletteName.get()}
          onChange={(v) => paletteName.set(v)}
          placeholder="Palette Name"
          size="2.5rem"
          style={{
            flex: 1,
          }}
        />
        <Slider
          label="# Wells"
          min={6}
          max={24}
          step={2}
          value={numPans.get()}
          onChange={(v) => numPans.set(v)}
          onDrop={handleSliderDrop}
        />
        <button>Clear</button>
        <button>Save</button>
      </div>
      <Palette
        colors={paletteColors.get()}
        onPanClick={(v) => selectedPan.set(v)}
        selectedPan={selectedPan.get()}
      />
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
