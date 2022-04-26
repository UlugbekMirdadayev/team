import React from "react";
import "./footer.scss";
import Facebook from "../../assets/img/facebook.svg";
import Instagram from "../../assets/img/instagram.svg";
import Dzen from "../../assets/img/dzen.svg";
import Vk from "../../assets/img/vkontakte.svg";

function Footer() {
  return (
    <footer className="container-footer">
      <div className="footer">
        <div className="has-text-centered">
          <p>Есть вопросы? Звоните!</p>
          <a href="tel:+998 90 754-21-98">+998 90 990 99 90</a>
        </div>

        <div className="footer-docs">
          <div className="footer-docs__item">
            <a href="/docs/oferta" target={"_blank"} rel="nooperer noreferrer">
              Публичная оферта
            </a>
          </div>
          <div className="footer-docs__item">
            <a
              href="/docs/aggrement"
              target={"_blank"}
              rel="nooperer noreferrer"
            >
              Cогласие на обработку персональных данных
            </a>
          </div>
          <div className="footer-docs__item">
            <a href="/docs/policy" target={"_blank"} rel="nooperer noreferrer">
              Политика конфиденциальности
            </a>
          </div>
          <div className="footer-docs__item">
            <a
              href="/docs/courseoffer"
              target={"_blank"}
              rel="nooperer noreferrer"
            >
              Соглашение об использовании курсов
            </a>
          </div>
        </div>

        <div className="social_share_links">
          <a
            href="https://zen.yandex.ru/unicraft"
            target={"_blank"}
            rel="nooperer noreferrer"
          >
            <img src={Dzen} alt="" />
          </a>
          <a
            href="https://vk.com/public194714884"
            target={"_blank"}
            rel="nooperer noreferrer"
          >
            <img src={Vk} alt="" />
          </a>
          <a
            href="https://www.instagram.com/unicraft_org/"
            target={"_blank"}
            rel="nooperer noreferrer"
          >
            <img src={Instagram} alt="" />
          </a>
          <a
            href="https://www.facebook.com/unicraft.org"
            target={"_blank"}
            rel="nooperer noreferrer"
          >
            <img src={Facebook} alt="" />
          </a>
        </div>

        <div className="footer-copyright">
          <p>TECH DATA SOFT © 2021-2022 </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
