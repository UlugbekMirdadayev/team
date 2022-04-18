import React from "react";
import VanillaTilt from "vanilla-tilt";
import "./home.scss";
import { ImgHome } from "../export/svg";
import { RegisterModal } from "./../export/modal";
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
    img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    name: "Сбербанк",
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

const Advantages = {
  pagination: [
    { name: "Chint", id: 1 },
    { name: "Конструктор упражнений", id: 2 },
    { name: "Ulug'bek Mirdadayev", id: 3 },
    { name: "Xurshid Muminov ", id: 4 },
    { name: "Anvarjon Hujamov", id: 5 },
    { name: "Muhriddin Saidaliyev", id: 6 },
    { name: "Farrux Turg'unpolatov", id: 7 },
    { name: "Farhod Nomonov", id: 8 },
  ],
  card: [
    {
      id: 1,

      title: "Загрузка материалов",
      list: [
        "Полноценный встроенный редактор уроков",
        "Поддержка всех популярных форматов файлов",
        "Видеохостинги и конструкторы web-страниц",
        "Защита контента от копирования и скачивания",
        "Интерактивные курсы в формате SCORM",
      ],
      img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    },
    {
      id: 2,
      title: "Конструктор упражнений",
      list: [
        "Широкий выбор видов тестирования",
        "Практические задания с ручной проверкой",
        "Продуманная система управления баллами",
        "Случайная выборка из готового банка",
        "Таймер и управление попытками сдачи",
      ],
      img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    },
    {
      id: 3,
      title: "Ulug'bek Mirdadayev",
      list: [
        "Объединение курсов в программы и каталоги",
        "Распределение пользователей по группам",
        "Гибкое управление доступом и назначениями",
        "Интеграция с вебинарными сервисами",
        "Готовые курсы от внешних провайдеров",
      ],
      img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    },
    {
      id: 4,
      title: "Xurshid Muminov",
      list: [
        "Более 20 показателей эффективности",
        "Групповые и индивидуальные отчеты",
        "Свободный импорт и экспорт данных",
        "Сбор оценок и отзывов по курсам",
        "Разработка новых отчетов на заказ",
      ],
      img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    },
    {
      id: 5,
      title: "Anvarjon Hujamov",
      list: [
        "Автоматическое назначение по должности",
        "Отдельный кабинет для руководителей",
        "Аттестации с блокировкой доступа к теории",
        "Управление дедлайнами и сроками доступа",
        "Синхронизация с кадровыми системами",
      ],
      img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    },
    {
      id: 6,
      title: "Muhriddin Saidaliyev",
      list: [
        "Привлекательный удобный интерфейс",
        "Разнообразные инструменты геймификации",
        "Персональное брендирование платформы",
        "Сертификаты по индивидуальному образцу",
        "White-label мобильное приложение",
      ],
      img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    },
    {
      id: 7,
      title: "Farrux Turg'unpolatov",
      list: [
        "Современный стек технологий",
        "Коробочная или облачная версия",
        "Безлимитное хранилище данных",
        "Разработка новых функций по запросу",
        "Открытое API для интеграций",
      ],
      img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    },
    {
      id: 8,
      title: "Farhod Nomonov",
      list: [
        "Оперативная заботливая поддержка",
        "Аудит текущей системы обучения",
        "Составление структуры материалов",
        "Заказная разработка курсов и тестов",
        "Перенос обучения с другой платформы",
      ],
      img: "https://music.youtube.com/coming-soon/images/yt-music-icon.svg?cache=4cc9770",
    },
  ],
};
function Home() {
  const [openModal, setOpenModal] = React.useState(false);
  const [active, setActive] = React.useState(1);
  const options = {
    scale: 1,
    speed: 1000,
    max: 30,
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (active !== Advantages?.pagination?.length) {
        setActive(active + 1);
      } else {
        setActive(1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [active]);

  return (
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
          poster="https://cdn.dribbble.com/users/5000931/screenshots/17114110/dribbble_2.png?compress=1&resize=320x240&vertical=top"
          id="headerVideo"
        >
          <source
            data-src="https://cdn.dribbble.com/users/5000931/screenshots/17114110/media/f0b2f713ec9fb0a32b9fb9df225a067b.mp4"
            type="video/mp4"
            src="https://cdn.dribbble.com/users/5000931/screenshots/17114110/media/f0b2f713ec9fb0a32b9fb9df225a067b.mp4"
          />
        </video>
        <div className="home-content">
          <div className="home-content-text">
            <h1>Платформа для онлайн обучения</h1>
            <p>
              Запусти обучение сотрудников сейчас, следуя простым инструкциям
            </p>
            <button>Попробовать бесплатно</button>
          </div>
        </div>
      </div>
      <div className="leaders-section">
        <div className="leaders-section-title">
          <h2>Unicraft доверяют лидеры</h2>
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
            title="Загрузи материалы"
            text="Работай с привычными форматами прямо на платформе"
          />
          <Tilt
            img={TiltImgTwo}
            imgAfter={TiltImgAfterTwo}
            index={2}
            options={options}
            title="Назначь обучение"
            text="Импортируй пользователей из других систем автоматически"
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
              Все, что нужно для полноценного управления обучением, мы уместили
              в удобные и эргономичные интерфейсы
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
