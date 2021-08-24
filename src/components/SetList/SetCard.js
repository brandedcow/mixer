import ColorSquare from './ColorSquare'

import './SetCard.css'

export default function SetCard({
  name,
  colors
}) {
  const gridTemplateColumns = new Array(10).fill('auto').join(' ')

  return (
    <div>
      <div className="set-card__name">{name}</div>
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns,
          gridAutoRows: '150px'
        }}
      >
        {colors.map(({ name, hex }, idx) => (
          <ColorSquare 
            key={`${name}-square-${idx}`}
            color={`#${hex}`}
          />
        ))}
      </div>
    </div>
  )
}