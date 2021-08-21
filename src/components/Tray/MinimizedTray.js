import { useState } from '@hookstate/core'
import classNames from 'classnames'
import { ReactComponent as CopyIcon} from '../../assets/icons/noun_clipboard_168960.svg'
import { ReactComponent as MaximizeIcon} from '../../assets/icons/noun_maximize_4164046.svg'
import { ReactComponent as DeleteIcon} from '../../assets/icons/noun_Close_4164035.svg'
import isDarkColor from '../../lib/isDarkColor'
import './MinimizedTray.css'

export default function MinimizedTray({
  hex,
  idx: trayIdx,
  colors,
  onExpand,
  onDelete,
  onSelect,
  minSize: size,
  isSelected,
}) {
  const isHovered = useState(false)
  const isDark = isDarkColor(hex)

  function onCopy () {
    navigator.clipboard.writeText(hex)
  }

  const frameClass = classNames(
    'mini-tray__frame',
    { 'mini-tray__frame--hover' : isHovered.get() },
    { 'mini-tray__frame--selected': isSelected }
  )

  const controlClass = classNames(
    'mini-tray__controls',
    { 'mini-tray__controls--hover': isHovered.get() }
  )

  const iconSize = '50px'
  const textColor = isDark ? 'white' : 'black'

  const iconProps = {
    height: iconSize,
    width: iconSize,
    color: textColor,
  }

  return (
    <div 
      className="mini-tray"
      style={{
        height: `${size}px`,
        width: `${size}px`
      }}
      onMouseEnter={() => isHovered.set(true)}
      onMouseLeave={() => isHovered.set(false)}
    >
      <div className={frameClass}
        style={{
          background: `#${hex}`
        }}
      >
        <div className={controlClass}>
          <CopyIcon {...iconProps} onClick={onCopy} />
          <MaximizeIcon {...iconProps} onClick={onExpand} />
          <DeleteIcon {...iconProps} onClick={onDelete} />
        </div>
        <div 
          className="mini-tray__content"
          style={{
            color: textColor
          }}
          onClick={onSelect}
        >
          {`#${hex}`}
        </div>
        <div className="mini-tray__samples">
          {colors.map((color, idx) => (
            <div
              key={`mini-tray-${trayIdx}-sample-${idx}`}
              style={{
                background: `#${color}`
              }}
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}