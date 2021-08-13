import './Header.css'

export default function Header({ title, options = [] }) {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      <nav>
        {options.map((option, idx) => (
          <div
            key={`nav__option--${idx}`}
          >
            {option}
          </div>
        ))}
      </nav>
    </div>
  ) 
}