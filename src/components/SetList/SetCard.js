import ColorSquare from "./ColorSquare";

import "./SetCard.css";

export default function SetCard({ name, colors }) {
  const gridTemplateColumns = new Array(15).fill("auto").join(" ");

  return (
    <div className="set-card">
      <div className="set-card__name">{name}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns,
          gridAutoRows: "50px",
        }}
      >
        {colors.map(({ name, hex }, idx) => (
          <ColorSquare key={`${name}-square-${idx}`} color={`#${hex}`} />
        ))}
      </div>
    </div>
  );
}
