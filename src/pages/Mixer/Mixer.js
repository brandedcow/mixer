import Palette from "../../components/Palette/Palette";
import TrayList from "../../components/TrayList/TrayList";
import usePaletteState from "../../state/usePaletteState";
import useCurrentTray from "../../state/useCurrentTray";
import "./Mixer.css";
import useTrayListState from "../../state/useTrayList";

export default function Mixer() {
  const paletteState = usePaletteState();
  const currentTray = useCurrentTray();
  const trayList = useTrayListState();

  const { colors } = paletteState.getCurrentPalette();

  function handlePanClick(idx, color) {
    currentTray.addColor(color);
  }

  function handleAddPanClick() {
    trayList.add();
    currentTray.setLast();
  }

  return (
    <div className="mixer">
      <TrayList
        trays={trayList.get()}
        onSelectTray={currentTray.set}
        onAddTray={handleAddPanClick}
        onDeleteTray={trayList.remove}
        selectedTray={currentTray.get()}
      />
      <Palette colors={colors} onPanClick={handlePanClick} vertical />
    </div>
  );
}
