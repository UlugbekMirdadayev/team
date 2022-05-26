import React from "react";
import { NavLink } from "react-router-dom";
// import { Logo } from "./../export/svg";
import LogoTech from "../../assets/img/logo777.png";
import "./header.scss";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n, ready } = useTranslation();
  const [lang, setLang] = React.useState("ru");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng)
  };

  const LanguageSet = () => {
    if (ready) {
      return (
        <div className="select-lang">
          <button onClick={() => changeLanguage("uz")}>UZ</button>
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("ru")}>RU</button>
        </div>
      );
    }
  };
  return (
    <div className="header-container">
      <div className="w100">
        <header className="header">
          <NavLink to={"/"} className="header__logo">
            <img className="LogoStyle" src={LogoTech} alt="" />
          </NavLink>
          <nav>
            <ul>
              <NavLink to={"/"}>{t("home")}</NavLink>
              <NavLink to={"#advantage"}>{t("Advantages")}</NavLink>
              <NavLink to={"#team"}>{t("Specialists")}</NavLink>
              <NavLink to={"#portfolio"}>{t("Portfolio")}</NavLink>
            </ul>
          </nav>
          <ul>
            <li>
              <div className="language">
                <span>{lang}</span>
                <LanguageSet />
              </div>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header;
