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

export default function EditPalette({ onAdd }) {
  const headerButton = useHeaderButton();
  const history = useHistory();

  useEffect(() => {
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

  function handleClear() {
    paletteColors.set(new Array(numPans.get()).fill(null));
  }

  function handleSave() {
    // TODO: Add VALIDATION
    if (paletteName === "") return;

    const palette = {
      name: paletteName.get(),
      colors: paletteColors.get(),
    };
    onAdd(palette);
  }

  return (
    <div className="edit-palette">
      <div className="edit-palette__panel">
        <Input
          placeholder="Palette Name"
          onChange={(v) => paletteName.set(v)}
          size="2rem"
        />
        <div className="edit-palette__panel-section">
          <div className="edit-palette__palette">
            <Palette
              colors={paletteColors.get()}
              vertical
              onPanClick={(v) => selectedPan.set(v)}
              selectedPan={selectedPan.get()}
            />
          </div>
          <div className="edit-palette__options-container">
            <label className="edit-palette__label"># Wells</label>
            <Slider
              min={6}
              max={24}
              step={2}
              value={numPans.get()}
              onChange={(v) => numPans.set(v)}
              onDrop={handleSliderDrop}
            />
            <div className="edit-palette__color-options">
              <Dropdown
                options={options}
                onChange={(v) => selectedSet.set(v)}
              />
            </div>
            <div className="edit-palette__button-container">
              <button className="edit-palette__button" onClick={handleClear}>
                Clear
              </button>
              <button className="edit-palette__button" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="edit-palette__panel">
        <ColorList colors={selectedColorSet} onColorClick={handleColorClick} />
      </div>
    </div>
  );
}
