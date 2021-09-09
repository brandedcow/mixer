import Tray from "../Tray/Tray";
import AddTrayButton from "./AddTrayButton";
import "./TrayList.css";
import useWindowSize from "../../lib/useWindowSize";

export default function TrayList({
  trays,
  onSelectTray,
  onAddTray,
  onDeleteTray,
  onExpandTray,
  selectedTray,
}) {
  const numCol = Math.floor((useWindowSize().width - 280) / 350);
  const gridTemplateColumns = new Array(numCol).fill("auto").join(" ");

  return (
    <div className="tray-container" style={{ gridTemplateColumns }}>
      <AddTrayButton size={300} onClick={onAddTray} />
      {trays.map((tray, idx) => (
        <Tray
          style={{
            border: selectedTray === idx && "3px solid gray",
          }}
          key={`tray-${idx}`}
          minSize={300}
          maxSize={650}
          colors={tray}
          onDelete={() => onDeleteTray(idx)}
          onClick={() => onSelectTray(idx)}
          onExpand={() => onExpandTray(idx)}
        />
      ))}
    </div>
  );
}
