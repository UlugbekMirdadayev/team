import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Logo } from "./../export/svg";
import "./header.scss";

const linkData = [
  {
    name: "Главная",
    link: "/",
    dropdown: false,
  },
  {
    name: "Тарифы",
    link: "/rate",
    dropdown: [
      {
        name: "Стоимость",
        link: "/rate#price",
      },
      {
        name: "Возможности",
        link: "/rate#features",
      },
      {
        name: "Частые вопросы",
        link: "/rate#faq",
      },
    ],
  },
  {
    name: "Каталог курсов",
    link: "/catalog",
    dropdown: false,
  },
  {
    name: "Компания",
    link: "/about",
    dropdown: [
      {
        name: "О нас",
        link: "/about#about",
      },
      {
        name: "Отзывы",
        link: "/about#reviews",
      },
      {
        name: "Партнерам",
        link: "/about#partners",
      },
      {
        name: "Вакансии",
        link: "/about#vacancy",
      },
      {
        name: "Контакты",
        link: "/about#contacts",
      },
    ],
  },
  {
    name: "Поддержка",
    link: "/help",
  },
  {
    name: "Блог",
    link: "/blog",
  },
];

function Header() {
  const { hash, pathname } = useLocation();
  const [lang, setLang] = React.useState("ru");


  return (
    <div className="header-container">
      <div className="w100">
        <header className="header">
          <NavLink to={"/"} className="header__logo">
            <Logo /> <span> Unicraft — платформа для онлайн обучения </span>
          </NavLink>
          <ul>
            {linkData.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink className={"nav-link-header"} to={item.link}>
                    {item.name}
                  </NavLink>
                  {item.dropdown && (
                    <ol className="header__dropdown">
                      {item.dropdown.map((item, index) => {
                        return (
                          <NavLink
                            style={
                              pathname + hash === item?.link ? { color: "red" } : {}
                            }
                            key={index}
                            to={item.link}
                          >
                            {item.name}
                          </NavLink>
                        );
                      })}
                    </ol>
                  )}
                </li>
              );
            })}
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
