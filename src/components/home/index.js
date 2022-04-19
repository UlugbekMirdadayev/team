import React from "react";
import VanillaTilt from "vanilla-tilt";
import "./home.scss";
import { ImgHome } from "../export/svg";
import { RegisterModal } from "./../export/modal";
import TeamSlide from "../teamSlide";
const array = [
  {
    cardImgIs:
      "https://cdn2.hexlet.io/store/derivatives/98b6887c25e9259ec9d401d7779105c8/fill_webp-540-320.webp",
    cardTitleIs: "Фронтенд-разработчик",
    cardPIs: "Разработка фронтенд-компонентов веб-приложений",
  },
  {
    cardImgIs:
      "https://cdn2.hexlet.io/store/derivatives/744c1029699b21cc531bb3eb621b5e52/fill_webp-540-320.webp",

    cardTitleIs: "Python-разработчик",
    cardPIs: "Разработка веб-приложений на Django",
  },
  {
    cardImgIs:
      "https://cdn2.hexlet.io/store/derivatives/48ba16d5318ab0c5585c785b0f513139/fill_webp-540-320.webp",
    cardTitleIs: "PHP-разработчик",
    cardPIs: "Разработка веб-приложений на Laravel",
  },
  {
    cardImgIs:
      "https://cdn2.hexlet.io/store/derivatives/5033764023c5f12fd1a911632cacd951/fill_webp-540-320.webp",

    cardTitleIs: "Node.js-разработчик",
    cardPIs: "Разработка бэкенд-компонентов веб-приложений",
  },
];

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
    img: "http://www.abbatech.com/wp-content/uploads/2018/01/logo-abba6.jpg",
    name: "abba tech",
  },
  {
    img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    name: "Ростелеком",
  },
  {
    img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    name: "МТС",
  },
  {
    img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    name: "Mail.ru",
  },
  {
    img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    name: "Ингосстрах",
  },
  {
    img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    name: "Спортмастер",
  },
  {
    img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    name: "Монди",
  },
  {
    img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    name: "Аптека Вита",
  },
  {
    img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    name: "Askona",
  },
  {
    img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    name: "Очаково",
  },
  {
    img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    name: "Greenway",
  },
  {
    img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    name: "МСУ",
  },
];

function Home() {
  const [openModal, setOpenModal] = React.useState(false);
  const options = {
    scale: 1,
    speed: 1000,
    max: 30,
  };

  return (
    <>
      <main className="home">
        {openModal && <RegisterModal open={openModal} setOpen={setOpenModal} />}
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
            <source
              data-src="https://cs120.clideo.com/p/PkAHqAo9SveOP1WduPuRvw/8890e0a993227d4ab8297fc46038f33f/pexels-diva-plavalaguna-6985519_MTGu9NZ2.mp4"
              type="video/mp4"
              src="https://cs120.clideo.com/p/PkAHqAo9SveOP1WduPuRvw/8890e0a993227d4ab8297fc46038f33f/pexels-diva-plavalaguna-6985519_MTGu9NZ2.mp4"
            />
          </video>
          <div className="home-content">
            <div className="home-content-text">
              <h1>TechDataSoft IT компапия</h1>
              <p>ПРОГРАММИРОВАНИЕ В УДОБНОЙ СРЕДЕ УЧИТЬСЯ</p>
            </div>
          </div>
        </div>
        <div className="leaders-section">
          <div className="leaders-section-title">
            <h2>TechDataSoft доверяют лидеры</h2>
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
            <h2>Интуитивное управление</h2>
          </div>
          <div className="container_section_intuitive_content">
            <Tilt
              img={TiltImg}
              imgAfter={TiltImgAfter}
              index={1}
              options={options}
              title="Обучение качественно и быстро"
              text="Учитесь со скоростью и в удобное для вас время. Это зависит от вас, чтобы добраться до финиша"
            />
            <Tilt
              img={TiltImgTwo}
              imgAfter={TiltImgAfterTwo}
              index={2}
              options={options}
              title="Практика и обучение"
              text="Практикуйтесь в удобное для вас время. Это зависит от вас, чтобы добраться до финиша"
            />
            <Tilt
              img={TiltImghree}
              imgAfter={TiltImgAfterhree}
              index={3}
              options={options}
              title="Получи результат"
              text="Преврати новичка в компетентного специалиста за несколько дней"
            />
          </div>
        </div>
        <div className="container_section">
          <div className="container_section_body">
            <div className="container_section_title">
              <h2>Преимущества платформы</h2>
              <p className="hugetext">
                Вы получите полную консультацию по всем вопросам Выберите
                подходящий вам курс и получите программу обучения в удобное
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
                    <div className="row h-100 g-0 flex_row">
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
                              Профессия
                            </div>
                          </div>
                          <div className="h4 mt-2">
                            <a
                              className="stretched-link text-decoration-none link-dark"
                              target="_blank"
                              rel="noopener"
                              href="/programs/frontend"
                            >
                              {item.cardTitleIs}
                            </a>
                          </div>
                          <div className="small text-muted mb-3">
                            {item.cardPIs}
                          </div>
                          <div className="mt-auto text-muted">
                            <span className="me-2 text-nowrap">
                              <span className="fal fa-calendar-alt fa-fw me-1"></span>
                              13 апреля
                            </span>
                            <span className="text-nowrap">
                              <span className="far fa-clock fa-fw me-1"></span>
                              10 месяцев
                            </span>
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
