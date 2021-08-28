import "./PaletteCard.css";

export default function PaletteCard({ name, colors, style, onClick }) {
  return (
    <div className="palette-card" style={{ ...style }} onClick={onClick}>
      <div className="palette-card__name">{name}</div>
      <div className="palette-card__color-list">
        {colors.map((color) => (
          <div
            style={{
              flex: 1,
              background: `#${color.hex}`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
