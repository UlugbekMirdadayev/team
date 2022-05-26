import React from "react";
import VanillaTilt from "vanilla-tilt";
import "./home.scss";
import { ImgHome } from "../export/svg";
import { RegisterModal, ModalClick } from "./../export/modal";
import TeamSlide from "../teamSlide";
import BgVideo from "../../assets/video/bg.mp4";
import Nura from "../../assets/img/nura.png";
import Laravel from "../../assets/img/laravel-2.svg";
import ReactIcon from "../../assets/img/react-2.svg";
import Pyton from "../../assets/img/python-4.svg";
import NextJS from "../../assets/img/next-js.svg";
import Flutter from "../../assets/img/flutter.svg";
import ReactNative from "../../assets/img/react-native.svg";
import Portfolio from "../Portfolio";
import { NavLink } from "react-router-dom";
import AbbaCoding from "../../assets/img/abbacoding.svg";
import AbbaMedia from "../../assets/img/abbamedia.svg";

import { useTranslation } from "react-i18next";



const [
  TiltImgAfterhree,
  TiltImghree,
  TiltImgAfterTwo,
  TiltImg,
  TiltImgAfter,
  TiltImgTwo,
] = ImgHome;

const Liders = [
  {
    img: AbbaCoding,
    name: "abba tech",
  },
  {
    img: "http://chint.uz/wp-content/uploads/2019/10/logo.png",
    name: "Chint",
  },
  {
    img: Nura,
    name: "Nuragroup",
  },
  {
    img: AbbaMedia,
    name: "Abba media",
  },
];

function Home() {
  const { t, i18n, ready } = useTranslation();
  const [openModal, setOpenModal] = React.useState(false);
  const [openStack, setOpenStack] = React.useState(false);
  const [stackData, setStackData] = React.useState([]);
  const options = {
    scale: 1,
    speed: 1000,
    max: 30,
  };
const array = [
  {
    cardImgIs:
      "https://cdn2.hexlet.io/store/derivatives/98b6887c25e9259ec9d401d7779105c8/fill_webp-540-320.webp",
    cardTitleIs: t("Frontenddeveloper"),
    cardPIs: t('FrountendWebApp'),
    modalTitle:
      t('FrountendDevWorks'),
  },
  {
    cardImgIs: ReactIcon,
    modalTitle:
      t('ReactDevInfo'),
    cardTitleIs: t('ReactDev'),
    cardPIs: t('ReactIsWebCreaterVeb'),
  },
  {
    cardImgIs: NextJS,
    modalTitle:
      t('NextDevInfo'),
    cardTitleIs: t('NextDev'),
    cardPIs: t('NextIsWebCreaterVeb'),
  },
  {
    cardImgIs: Laravel,
    modalTitle:
      t('LaravelDevInfo'),
    cardTitleIs:t('LaravelDev'),
    cardPIs: t('LaravelIsWebCreaterVeb'),
  },
  {
    cardImgIs:
      "https://cdn2.hexlet.io/store/derivatives/5033764023c5f12fd1a911632cacd951/fill_webp-540-320.webp",

    cardTitleIs: t('NodeDev'),
    modalTitle:
      t('NodeDevInfo'),
    cardPIs: t('LaravelIsBeckCreater'),
  },
  {
    cardImgIs: Pyton,
    modalTitle:
      t('PythonDevInfo'),
    cardTitleIs: t('PythonDev'),
    cardPIs: t('PythonIsWebCreaterVeb'),
  },
  {
    cardImgIs: Flutter,
    modalTitle:
      t("FlutterDevInfo"),
    cardTitleIs: t('FlutterDev'),
    cardPIs: t('MobileApp'),
  },
  {
    modalTitle:
    t('React Native — это кроссплатформенный фреймворк с открытым исходным кодом для разработки нативных мобильных и настольных приложений на JavaScript и TypeScript, созданный Facebook, Inc.'),
    cardImgIs: ReactNative,
    cardTitleIs: t('React Native-разработчик'),
    cardPIs: t('MobileApp'),
  },
];

  return (
    <>
      <main className="home">
        {openModal && <RegisterModal open={openModal} setOpen={setOpenModal} />}
        {
          <ModalClick
            open={openStack}
            setOpen={setOpenStack}
            data={stackData}
          />
        }
        <div className="video-bg-intro">
          <div className="video-overlay" />
          <video
            lazy="lazy"
            preload="none"
            autoPlay
            loop
            muted
            pip="false"
            playsInline
            poster="https://i.vimeocdn.com/video/1072231461-bac8c4cdbb9ec924a3b785c5aa318d7b1c59479b74711d5331d7b4fd9f367e52-d?mw=1300&mh=731&q=70"
            id="headerVideo"
          >
            <source type="video/mp4" src={BgVideo} />
          </video>
          <div className="home-content">
            <div className="home-content-text">
              <h1>{t('TechDataSoftcompany')}</h1>
              <p>{t("PROGRAMMINGLEARN")}</p>
            </div>
          </div>
        </div>
        <div className="leaders-section">
          <div className="leaders-section-title">
            <h2>{t("TechDataSoftLeaders")}</h2>
          </div>
          <div className="leaders-section-content">
            {Liders.map((__res) => {
              return (
                <div
                  key={__res?.name + 1}
                  className="leaders-section-content-item"
                >
                  <div className="leaders-section-content-item-img">
                    <img src={__res?.img} alt={__res?.name} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container_section_intuitive">
          <div className="container_section_intuitive_title">
            <h2>{t("IntuitiveControls")}</h2>
          </div>
          <div className="container_section_intuitive_content">
            <Tilt
              img={TiltImg}
              imgAfter={TiltImgAfter}
              index={1}
              options={options}
              title={t("Highqualityandfast")}
              text={t("Learnatyourownpaceandatyour")}
            />
            <Tilt
              img={TiltImgTwo}
              imgAfter={TiltImgAfterTwo}
              index={2}
              options={options}
              title={t("Practiceandlearning")}
              text={t('Practiceataconvenientline')}
            />
            <Tilt
              img={TiltImghree}
              imgAfter={TiltImgAfterhree}
              index={3}
              options={options}
              title={t('Getresults')}
              text={t('Turnaspecialistinafewdays')}
            />
          </div>
        </div>
        <div id="advantage" className="container_section">
          <div className="container_section_body">
            <div className="container_section_title">
              <h2>{t("PlatformBenefits")}</h2>
              <p className="hugetext">
{t("Youwillreceiveafull")}
              </p>
            </div>
          </div>
        </div>

        <div className="container_section_row">
          <div className="row row-cols-1 row-cols-md-2">
            {array?.map((item, index) => {
              return (
                <div key={index} className="col mb-4">
                  <div className="card shadow-sm x-shadow-fade-in h-100">
                    <div
                      onClick={() => {
                        setStackData(item);
                        setOpenStack(true);
                      }}
                      className="row h-100 g-0 flex_row"
                    >
                      <div className="col-sm-5 col-md-12 col-lg-5 p-2 d-flex align-items-center justify-content-center img_card_size">
                        <img
                          className="Card_img_is"
                          src={item.cardImgIs}
                          alt=""
                        />
                      </div>
                      <div className="col">
                        <div className="card-body d-flex flex-column h-100 ps-lg-2">
                          <div className="d-flex">
                            <div className="badge bg-light text-dark me-2">
                              {t('Profession')}
                            </div>
                          </div>
                          <div className="h4 mt-2">
                            <NavLink
                              className="stretched-link text-decoration-none link-dark"
                              to="#advantage"
                            >
                              {item.cardTitleIs}
                            </NavLink>
                          </div>
                          <div className="small text-muted mb-3">
                            {item.cardPIs}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <TeamSlide />
      <Portfolio />
    </>
  );
}

function Tilt({ img, imgAfter, index, options, title, text }) {
  const tilt = React.useRef(null);

  React.useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <>
      <div className="container_section_intuitive_content_card">
        <div className="number">{index}</div>
        <div
          data-tilt
          data-tilt-axis="x"
          ref={tilt}
          className="container_section_intuitive_content_card_img"
        >
          <img src={img} alt="Сбербанк" />
          <img src={imgAfter} className="tilt-img-after" alt="" />
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Home;
