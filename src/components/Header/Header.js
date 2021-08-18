import { useState } from '@hookstate/core'
import pageEnum from '../../enum/pages'
import globalState from '../../state/global'
import './Header.css'

export default function Header() {
  const state = useState(globalState)

  return (
    <div className="header">
      <h1 className="header__title">
      {pageEnum[state.currentPage.get()]}
      </h1>
      <nav className="nav">
        {state.pages.get().map((option, idx) => (
          <div
            className="nav__option"
            key={`nav__option--${idx}`}
          >
            {option}
          </div>
        ))}
      </nav>
    </div>
  ) 
}