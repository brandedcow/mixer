import classNames from 'classnames'
import './Overlay.css'

export default function Overlay({ isActive, onClick }) {
  const overlayClassNames = classNames(
    'overlay',
    { 'overlay--active': isActive }
  )

  return (
    <div
      className={overlayClassNames}
      onClick={onClick}
    />
 )
}