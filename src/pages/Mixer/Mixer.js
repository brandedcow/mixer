import Palette from "../../components/Palette/Palette";
import TrayList from "../../components/TrayList/TrayList";
import "./Mixer.css";

export default function Mixer() {
  return (
    <div className="mixer">
      <TrayList />
      <Palette colors={[]} />
    </div>
  );
}
