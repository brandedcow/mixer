import EditPalette from "./EditPalette";
import PaletteList from "../../components/PaletteList/PaletteList";
import "./Palettes.css";
import usePaletteState from "../../state/usePaletteState";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export default function Palettes() {
  const { path, url } = useRouteMatch();
  const palettes = usePaletteState();

  const handleAddPalette = () => {};

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <PaletteList palettes={palettes.getList()} />
        </Route>
        <Route path={`${path}/edit`}>
          <EditPalette onAdd={handleAddPalette} />
        </Route>
      </Switch>
    </div>
  );
}
