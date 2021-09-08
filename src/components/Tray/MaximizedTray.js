import TraySample from "./TraySample";
import "./MaximizedTray.css";
import { useParams } from "react-router-dom";

export default function MaximizedTray({
  hex,
  colors,
  idx: trayIdx,
  onDelete,
  maxSize: size,
}) {
  const { id } = useParams();

  console.log("rendered max", id);
  return (
    <div
      className="max-tray"
      style={{
        width: `300px`,
        height: `300px`,
      }}
    >
      Max Tray
    </div>
  );
}
