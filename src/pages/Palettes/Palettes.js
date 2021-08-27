import EditPalette from "./EditPalette";
import PaletteList from "../../components/PaletteList/PaletteList";
import useCurrentPage from "../../state/useCurrentPage";
import "./Palettes.css";
import { useEffect } from "react";
import useHeaderButton from "../../state/useHeaderButton";

export default function Palettes() {
  const headerButton = useHeaderButton();

  useEffect(() => {
    headerButton.setButtonLabel("Add Palette");
    headerButton.setButtonFunction(handleAddPalette);
    headerButton.showButton();

    return headerButton.reset;
  });

  function handleAddPalette() {}

  const currentPage = useCurrentPage();

  return (
    <div>{currentPage.get() === 2 ? <PaletteList /> : <EditPalette />}</div>
  );
}
