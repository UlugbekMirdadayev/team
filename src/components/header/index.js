import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Logo } from "./../export/svg";
import "./header.scss";

function Header() {
  const [lang, setLang] = React.useState("ru");

  return (
    <div className="header-container">
      <div className="w100">
        <header className="header">
          <NavLink to={"/"} className="header__logo">
            <Logo />
          </NavLink>
          <nav>
            <ul>
              <NavLink to={"/"}>Главная</NavLink>
              <NavLink to={"#advantage"}>Преимущества</NavLink>
              <NavLink to={"#team"}>Специалисты</NavLink>
              <NavLink to={"#portfolio"}>Портфолио</NavLink>
            </ul>
          </nav>
          <ul>
            <li>
              <div className="language">
                <span>{lang}</span>
                <div className="select-lang">
                  <button onClick={() => setLang("ru")}>RU</button>
                  <button onClick={() => setLang("en")}>EN</button>
                </div>
              </div>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header;
