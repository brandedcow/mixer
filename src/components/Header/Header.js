import { useState } from "@hookstate/core";
import { useHistory } from "react-router-dom";
import pageEnum from "../../enum/pages";
import globalState from "../../state/global";
import "./Header.css";

export default function Header() {
  const state = useState(globalState);
  const history = useHistory();

  function handleLinkClick(e) {
    const path = e.target.getAttribute("path");
    const idx = e.target.getAttribute("idx");
    state.currentPage.set(+idx);
    history.push(path);
  }

  function handleAddPalette() {}

  return (
    <div className="header">
      <h1 className="header__title">{pageEnum[state.currentPage.get()]}</h1>
      {state.currentPage.value === 2 && (
        <div className="header__add-palette-button" onClick={handleAddPalette}>
          New Palette
        </div>
      )}
      <nav className="nav">
        {state.pages.get().map((option, idx) => (
          <div
            className="nav__option"
            key={`nav__option--${idx}`}
            path={option}
            idx={idx}
            onClick={handleLinkClick}
          >
            {option}
          </div>
        ))}
      </nav>
    </div>
  );
}
