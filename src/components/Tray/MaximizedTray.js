import TraySample from "./TraySample";
import "./MaximizedTray.css";
import { useHistory, useParams } from "react-router-dom";
import useTrayList from "../../state/useTrayList";
import mixColors from "../../lib/mixColors";
import { useEffect } from "react";
import useCurrentTray from "../../state/useCurrentTray";

export default function MaximizedTray() {
  const { id } = useParams();
  const trayList = useTrayList();
  const currentTray = useCurrentTray();
  const tray = trayList.getOne(+id);
  const history = useHistory();

  function handleWheelChange(e) {
    const idx = e.target.getAttribute("idx");

    if (e.deltaY > 0) {
      console.log("down");
      currentTray.decIdx(+idx);
    } else {
      console.log("up");
      currentTray.incIdx(+idx);
    }
  }

  useEffect(() => {
    if (trayList.get().length === 0) {
      history.push("/mixer");
    } else {
      currentTray.set(+id);
    }
  }, []);

  const color = mixColors(...tray);

  return (
    <div className="max-tray">
      <div
        className="max-tray__frame"
        style={{ background: !!color ? `#${color.hex}` : "white" }}
      >
        <div className="max-tray__pan">{`#${color.hex}`}</div>
        <div className="max-tray__samples">
          {tray.map((sample, idx) => (
            <div
              key={`tray-${id}-sample${idx}`}
              className="max-tray__sample"
              idx={idx}
              style={{
                background: `#${sample.hex}`,
                flex: sample.weight,
              }}
              onWheel={handleWheelChange}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
