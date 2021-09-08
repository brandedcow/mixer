import Palette from "../../components/Palette/Palette";
import MaximizedTray from "../../components/Tray/MaximizedTray";
import TrayList from "../../components/TrayList/TrayList";
import usePaletteState from "../../state/usePaletteState";
import useCurrentTray from "../../state/useCurrentTray";
import "./Mixer.css";
import useTrayListState from "../../state/useTrayList";
import { Switch, Route, useRouteMatch } from "react-router-dom";

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

  const { path } = useRouteMatch();

  return (
    <div className="mixer">
      <div>
        <Switch>
          <Route exact path={path}>
            <TrayList
              trays={trayList.get()}
              onSelectTray={currentTray.set}
              onAddTray={handleAddPanClick}
              onDeleteTray={trayList.remove}
              selectedTray={currentTray.get()}
            />
          </Route>
          <Route path={`${path}/edit/:id`}>
            <MaximizedTray />
          </Route>
        </Switch>
      </div>

      <Palette colors={colors} onPanClick={handlePanClick} vertical />
    </div>
  );
}
