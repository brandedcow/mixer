import "./PaletteCard.css";

export default function PaletteCard({ name, colors, style, onClick, onEdit }) {
  return (
    <div className="palette-card" style={{ ...style }} onClick={onClick}>
      <div className="palette-card__info">
        <div className="palette-card__name">{name}</div>
        <div className="palette-card__options">
          <div onClick={onEdit}>Edit</div>
        </div>
      </div>
      <div className="palette-card__color-list">
        {colors.map((color, idx) => (
          <div
            key={`${name}-card-color-${idx}`}
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
