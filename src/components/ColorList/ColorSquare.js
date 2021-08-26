import { useState } from "@hookstate/core";
import classNames from "classnames";
import isDarkColor from "../../lib/isDarkColor";
import "./ColorSquare.css";

export default function ColorSquare({ name, color, size, onClick }) {
  const isHovered = useState(false);

  const squareClassNames = classNames("color-square__label", {
    "color-square__label--hover": isHovered.get(),
  });

  return (
    <div
      style={{
        padding: "2rem",
        display: "inline-flex",
        verticalAlign: "top",
        justifyContent: "center",
        alignItems: "center",
        background: `#${color}`,
        height: size,
        width: size,
        color: isDarkColor(color) ? "#E0E0E0" : "#373737",
      }}
      onMouseEnter={() => isHovered.set(true)}
      onMouseLeave={() => isHovered.set(false)}
      onClick={onClick}
    >
      <div className={squareClassNames}>{name}</div>
    </div>
  );
}
