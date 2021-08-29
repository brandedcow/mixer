import EditPalette from "./EditPalette";
import PaletteList from "../../components/PaletteList/PaletteList";
import "./Palettes.css";
import usePaletteState from "../../state/usePaletteState";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export default function Palettes() {
  const { path } = useRouteMatch();
  const palettes = usePaletteState();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <PaletteList
            palettes={palettes.getList()}
            selectedPalette={palettes.getCurrent()}
            onSelect={palettes.select}
          />
        </Route>
        <Route path={`${path}/edit`}>
          <EditPalette onAdd={palettes.add} />
        </Route>
      </Switch>
    </div>
  );
}
