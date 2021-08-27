import { useState } from "@hookstate/core";
import { useHistory } from "react-router-dom";
import pageEnum from "../../enum/pages";
import globalState from "../../state/global";
import useHeaderButton from "../../state/useHeaderButton";
import "./Header.css";

export default function Header() {
  const state = useState(globalState);
  const history = useHistory();

  const { isButtonVisible, buttonLabel, buttonFunction } =
    useHeaderButton().get();

  function handleLinkClick(e) {
    const path = e.target.getAttribute("path");
    const idx = e.target.getAttribute("idx");
    state.currentPage.set(+idx);
    history.push(path);
  }

  return (
    <div className="header">
      <h1 className="header__title">{pageEnum[state.currentPage.get()]}</h1>
      {isButtonVisible && (
        <div className="header__action-button" onClick={buttonFunction}>
          {buttonLabel}
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
