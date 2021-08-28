import { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import useHeaderButton from "../../state/useHeaderButton";
import "./PaletteList.css";

export default function PaletteList() {
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

  return <div>Palette List</div>;
}
