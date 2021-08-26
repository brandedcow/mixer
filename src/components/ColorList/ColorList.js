import ColorSquare from "./ColorSquare";
import "./ColorList.css";

export default function ColorList({ colors, onColorClick, squareSize }) {
  function handleColorClick(color) {
    console.log(color);
    // onColorClick(color);
  }

  return (
    <div>
      {colors.map((color, idx) => (
        <ColorSquare
          key={`color-list-square-${idx}`}
          onClick={() => handleColorClick(color)}
          size={squareSize}
          name={color.name}
          color={color.hex}
        />
      ))}
    </div>
  );
}
