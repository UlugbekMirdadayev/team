import React from "react";
import Nura from "../../assets/img/nura.png";
import "./portfolio.scss";
import Buckhara from "../../assets/img/Buckhara.svg";

function Potfolio() {
  const Works = [
    {
      id: "1",
      img: "https://hsl.techdatasoft.uz/assets/img/logo.png",
      link: "https://hsl.techdatasoft.uz/",
      animation: "fade-right",
    },
    {
      id: "2",
      img: "https://therepublicoftoys.uz/img/nav/logo.svg",
      link: "https://therepublicoftoys.uz/",
      animation: "fade-right",
    },
    {
      id: "3",
      img: "http://chint.uz/wp-content/uploads/2019/10/logo.png",
      link: "https://app.chint.techdatasoft.uz/",
      animation: "fade-left",
    },
    {
      id: "4",
      img: Buckhara,
      link: "https://bnpfabric.uz/",
      animation: "fade-left",
    },

    {
      id: "6",
      img: Nura,
      link: "https://nuragroup.uz/",
      animation: "fade-right",
    },

    {
      id: "8",
      img: "https://beshr.app.techdatasoft.uz/images/1649524776slider_home_1649424305slider_home_1.png",
      link: "https://beshr.techdatasoft.uz/",
      animation: "fade-left",
    },
    {
      id: "9",
      img: "https://nipon.techdatasoft.uz/assets/img/logo.svg",
      link: "https://nipon.techdatasoft.uz/",
      animation: "fade-right",
    },

    {
      id: "10",
      img: "https://nura.new.techdatasoft.uz/static/media/logo.46712b961f9a11dd5315b94800446221.svg",
      link: "https://nura.new.techdatasoft.uz/",
      animation: "fade-right",
    },
  ];
  return (
    <div id="portfolio" className="portfolio">
      <h1>Наши работы</h1>
      <div className="d_flex">
        {Works?.map((data) => {
          return (
            <a
              data-aos-duration="1500"
              data-aos={data.animation}
              key={data.id}
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="portfolio_card">
                <div className="portfolio_logo">
                  <img src={data.img} alt="Логотип" />
                </div>
                <div className="after">
                  <p>Подробнее</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Potfolio;
