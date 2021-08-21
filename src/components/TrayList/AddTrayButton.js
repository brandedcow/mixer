import { useState } from '@hookstate/core'
import classNames from 'classnames'
import './AddTrayButton.css'

export default function AddTrayButton({ size = 600, onClick }) {
  const isHovered = useState(false)
  const isActive = useState(false)

  const addTrayButtonFrameClassName = classNames(
    'add-tray-button__frame',
    { 'add-tray-button__frame--hover': isHovered.get() },
    { 'add-tray-button__frame--active': isHovered.get() },
  )

  const addTrayButtonPlusClassName = classNames(
    'add-tray-button__plus',
    { 'add-tray-button__plus--hover': isHovered.get() },
    { 'add-tray-button__plus--active' : isActive.get() }
  )

  return (
    <div 
      className='add-tray-button'
      onClick={onClick}
      onMouseEnter={() => isHovered.set(true)}
      onMouseLeave={() => {
        isHovered.set(false)
        isActive.set(false)
      }}
      onMouseDown={() => isActive.set(true)}
      onMouseUp={() => isActive.set(false)}
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
    > 
      <div className={addTrayButtonFrameClassName}></div>
      <div 
        className={addTrayButtonPlusClassName}
        style={{
          fontSize: `${size}px`
        }}>
        +
      </div>
    </div>
  )
}