import { useState } from '@hookstate/core'
import { Link } from 'react-router-dom'
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
          <Link to={`/${option}`}>
            <div
              className="nav__option"
              key={`nav__option--${idx}`}
            >
                {option}
            </div> 
          </Link>
        ))}
      </nav>
    </div>
  ) 
}