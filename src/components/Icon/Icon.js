import './Icon.css'

const iconPaths = {
  settings: '..\..\assets\icons\noun_Gear_4161169.svg',
  maximize: '..\..\assets\icons\noun_maximize_4164046.svg',
  close: '..\..\assets\icons\noun_Close_4164035.svg'
}

export default function Icon({ name }) {
  return (
    <img
      alt={name}
      src={iconPaths[name]}
    />
  )
}