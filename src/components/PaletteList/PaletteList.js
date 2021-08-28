import { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import useHeaderButton from "../../state/useHeaderButton";
import PaletteCard from "./PaletteCard";
import "./PaletteList.css";

export default function PaletteList({ palettes }) {
  const headerButton = useHeaderButton();
  const history = useHistory();
  const { url } = useRouteMatch();

  useEffect(() => {
    headerButton.set({
      visible: true,
      label: "+ Add Palette",
      func: () => history.push(`${url}/edit`),
    });

    return headerButton.reset;
  });

  return (
    <div className="palette-list">
      {palettes.map(({ name, colors }, idx) => (
        <PaletteCard
          key={`${name}-palette-card-${idx}`}
          name={name}
          colors={colors}
        />
      ))}
    </div>
  );
}
