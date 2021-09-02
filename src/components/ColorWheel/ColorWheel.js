import { getLocation } from "../../lib/colorWheel";
import "./ColorWheel.css";

// Display a list of colors into the corresponding spot on a colorwheel
//

export default function ColorWheel({ colors }) {
  console.log("loaded wheel");
  const renderedColors = colors.map((color) => {
    const [x, y] = getLocation(color.hex);
    return {
      ...color,
      pos: [256 + x, 256 + y],
    };
  });

  console.log(renderedColors);

  return (
    <div
      className="color-wheel"
      style={{
        height: 511,
        width: 511,
        border: "1px solid black",
        borderRadius: 9999,
        position: "relative",
      }}
    >
      {renderedColors.map((color, idx) => (
        <div
          key={`color-wheel__color-${idx}`}
          style={{
            height: 20,
            width: 20,
            position: "absolute",
            top: color.pos[1],
            left: color.pos[0],
            background: `#${color.hex}`,
            borderRadius: 30,
          }}
        ></div>
      ))}
    </div>
  );
}
