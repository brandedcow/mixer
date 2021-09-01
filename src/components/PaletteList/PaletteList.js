import { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import useHeaderButton from "../../state/useHeaderButton";
import PaletteCard from "./PaletteCard";
import "./PaletteList.css";

export default function PaletteList({
  palettes,
  selectedPalette,
  onSelect,
  onDelete,
}) {
  const headerButton = useHeaderButton();
  const history = useHistory();
  const { url } = useRouteMatch();

  useEffect(() => {
    headerButton.set({
      visible: true,
      label: "+ Add Palette",
      func: () => history.push(`${url}/edit/new`),
    });

    return headerButton.reset;
  });

  function handleEditPalette(idx) {
    history.push(`${url}/edit/${idx}`);
  }

  function handleChartPalette(idx) {
    history.push(`${url}/chart/${idx}`);
  }

  return (
    <div className="palette-list">
      {palettes.map((palette, idx) => (
        <PaletteCard
          key={`${palette.name}-palette-card-${idx}`}
          name={palette.name}
          colors={palette.colors}
          style={{
            border: selectedPalette === idx ? ".25rem solid black" : "none",
          }}
          onClick={() => onSelect(idx)}
          onEdit={() => handleEditPalette(idx)}
          onDelete={() => onDelete(idx)}
          onChart={() => handleChartPalette(idx)}
        />
      ))}
    </div>
  );
}
