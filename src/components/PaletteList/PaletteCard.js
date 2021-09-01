import "./PaletteCard.css";

export default function PaletteCard({
  name,
  colors,
  style,
  onClick,
  onEdit,
  onDelete,
  onChart,
}) {
  return (
    <div className="palette-card" style={{ ...style }} onClick={onClick}>
      <div className="palette-card__info">
        <div className="palette-card__name">{name}</div>
        <div className="palette-card__options">
          <div className="palette-card__button" onClick={onChart}>
            Chart
          </div>
          <div className="palette-card__button" onClick={onEdit}>
            Edit
          </div>
          <div className="palette-card__button" onClick={onDelete}>
            Delete
          </div>
        </div>
      </div>
      <div className="palette-card__color-list">
        {colors.map((color, idx) => (
          <div
            key={`${name}-card-color-${idx}`}
            style={{
              flex: 1,
              background: !!color ? `#${color.hex}` : "white",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
