import React from "react";
import VanillaTilt from "vanilla-tilt";
import "./home.scss";
import { ArrowSlide, ImgHome } from "../export/svg";
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
  Noutbook,
  Farhod,
  Farrux,
  Muhriddin,
  Anvarjon,
  Ulugbek,
  Xurshid,
  AdvanSecond,
  AdvanOne,
  ProblemSix,
  ProblemFive,
  ProblemFour,
  ProblemThree,
  ProblemTwo,
  Problem,
  TiltImgAfterhree,
  TiltImghree,
  TiltImgAfterTwo,
  Sber,
  Rostelecom,
  Mts,
  Mailru,
  Ingos,
  SportMaster,
  Mondi,
  AptekaVita,
  Askona,
  Ochakovo,
  Greenway,
  Msu,
  TiltImg,
  TiltImgAfter,
  TiltImgTwo,
  Cup,
  StartPackage,
  Holon,
  RVK,
  mincomsv,
] = ImgHome;
const Liders = [
  {
    img: Sber,
    name: "Сбербанк",
  },
  {
    img: Rostelecom,
    name: "Ростелеком",
  },
  {
    img: Mts,
    name: "МТС",
  },
  {
    img: Mailru,
    name: "Mail.ru",
  },
  {
    img: Ingos,
    name: "Ингосстрах",
  },
  {
    img: SportMaster,
    name: "Спортмастер",
  },
  {
    img: Mondi,
    name: "Монди",
  },
  {
    img: AptekaVita,
    name: "Аптека Вита",
  },
  {
    img: Askona,
    name: "Askona",
  },
  {
    img: Ochakovo,
    name: "Очаково",
  },
  {
    img: Greenway,
    name: "Greenway",
  },
  {
    img: Msu,
    name: "МСУ",
  },
];

const AnyProblems = [
  {
    img: Problem,
    title: "Онлайн-обучение для клиентов",
    text: "Зарабатывайте на предоставлении доступа к курсам",
  },
  {
    img: ProblemTwo,
    title: "Потоковая адаптация персонала",
    text: "Быстро вводите в должность новых сотрудников",
  },
  {
    img: ProblemThree,
    title: "Обучение ассортименту и продажам",
    text: "Оперативно сообщайте о новинках и увеличивайте доход",
  },
  {
    img: ProblemFour,
    title: "Систематизация и масштабирование",
    text: "Расширяйте бизнес и занимайте новые территории",
  },
  {
    img: ProblemFive,
    title: "Регулярная аттестация сотрудников",
    text: "Проверяйте знания для соблюдения единых стандартов",
  },
  {
    img: ProblemSix,
    title: "Полная автоматизация HR процессов",
    text: "Решайте все кадровые задачи в одной системе",
  },
];

const Advantages = {
  pagination: [
    { name: "Загрузка материалов", id: 1 },
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
      img: AdvanOne,
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
      img: AdvanSecond,
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
      img: Ulugbek,
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
      img: Xurshid,
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
      img: Anvarjon,
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
      img: Muhriddin,
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
      img: Farrux,
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
      img: Farhod,
    },
  ],
};
function Home() {
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
          poster="https://www.unicraft.org/static/video/vh1/poster.webp"
          id="headerVideo"
        >
          <source
            data-src="https://player.vimeo.com/external/660278794.hd.mp4?s=e4deeeb47bb419b5443c34fa7f0c89b7a31642c9&profile_id=174"
            type="video/mp4"
            src="https://player.vimeo.com/external/660278794.hd.mp4?s=e4deeeb47bb419b5443c34fa7f0c89b7a31642c9&profile_id=174"
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
      <div className="container_section solve-container">
        <div className="container_section_title">
          <h2>Решим любую вашу задачу</h2>
        </div>
        <div className="container_section_content">
          {AnyProblems.map((__res, i) => {
            return (
              <div className="card__" key={i + __res?.title}>
                <div className="card__img">
                  <img src={__res?.img} alt="" />
                </div>
                <div className="__card_title">{__res?.title}</div>
                <div className="__card_text">{__res?.text}</div>
                <button>Подробнее</button>
              </div>
            );
          })}
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
          <div className="container_section_contents">
            {[Advantages].map((__res, i) => {
              return (
                <div className="card___" key={i + __res?.title}>
                  <div className="card__pagination">
                    {__res?.pagination.map((_it) => {
                      return (
                        <div
                          className={`card__pagination_item ${
                            active === _it?.id ? "active" : ""
                          }`}
                          onClick={() => setActive(_it?.id)}
                          key={_it?.id}
                        >
                          {_it?.name}
                        </div>
                      );
                    })}
                  </div>
                  <div className="card_wrapper__">
                    <button
                      className="prev__slide__btn navigation__btn"
                      onClick={() =>
                        setActive(active > 1 ? active - 1 : __res?.card?.length)
                      }
                    >
                      <ArrowSlide className="navigation__btn_prev" />
                    </button>

                    {__res?.card
                      .filter((responses) => responses?.id === active)
                      .map((__it) => {
                        return (
                          <div key={__it?.id} className={`card_container__`}>
                            <div className="card__text_left">
                              <div
                                className="index_number__"
                                data-count={active}
                              />
                              <div className="card__text_left_title">
                                {__it?.title}
                              </div>
                              <div className="card__text_left_text">
                                {__it?.list.map((_it) => {
                                  return (
                                    <div
                                      key={_it}
                                      className="card__text_left_text_item"
                                    >
                                      {_it}
                                    </div>
                                  );
                                })}
                              </div>
                              <button className="modal_opener__btn">
                                УЗНАТЬ ПОДРОБНЕЙ
                              </button>
                            </div>
                            <div className="card__img_right">
                              <div className="img__block__user">
                                <img src={__it?.img} alt="" />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    <button
                      className="next__slide__btn navigation__btn"
                      onClick={() =>
                        setActive(__res?.card?.length > active ? active + 1 : 1)
                      }
                    >
                      <ArrowSlide className="navigation__btn_next" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container_section_row">
        <div class="row row-cols-1 row-cols-md-2">
          {array?.map((item, index) => {
            return (
              <div key={index} class="col mb-4">
                <div class="card shadow-sm x-shadow-fade-in h-100">
                  <div class="row h-100 g-0 flex_row">
                    <div class="col-sm-5 col-md-12 col-lg-5 p-2 d-flex align-items-center justify-content-center img_card_size">
                      <img
                        className="Card_img_is"
                        src={item.cardImgIs}
                        alt=""
                      />
                    </div>
                    <div class="col">
                      <div class="card-body d-flex flex-column h-100 ps-lg-2">
                        <div class="d-flex">
                          <div class="badge bg-light text-dark me-2">
                            Профессия
                          </div>
                        </div>
                        <div class="h4 mt-2">
                          <a
                            class="stretched-link text-decoration-none link-dark"
                            target="_blank"
                            rel="noopener"
                            href="/programs/frontend"
                          >
                           {item.cardTitleIs}
                          </a>
                        </div>
                        <div class="small text-muted mb-3">
                         {item.cardPIs}
                        </div>
                        <div class="mt-auto text-muted">
                          <span class="me-2 text-nowrap">
                            <span class="fal fa-calendar-alt fa-fw me-1"></span>
                            13 апреля
                          </span>
                          <span class="text-nowrap">
                            <span class="far fa-clock fa-fw me-1"></span>
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
      <div className="container_section_row">
        <div className="_col___">
          <div className="container_section_title">
            <h2>Познакомьтесь поближе с Unicraft</h2>
            <p>
              Посмотрите <s>5-минутное</s> видео о преимуществах платформы
            </p>
          </div>
          <div className="getcloserlook_about">
            <b>Unicraft </b> - мощная и эффективная платформа для корпоративного
            обучения, которая подстраивается под цели компании из любой сферы
            деятельности
          </div>
        </div>
        <div className="vector__to__noutbook" />
        <div className="container_section getcloserlook">
          <iframe
            title="video"
            frameBorder={0}
            allow="autoplay; fullscreen"
            id="getcloserlook_VideoVimeo"
            src="https://player.vimeo.com/video/346229565"
          />
          <img src={Noutbook} alt="" />
        </div>
      </div>
      <div className="container_section popular">
        <div className="container_section_body">
          <div className="container_section_title">
            <h2>Популярное и признанное решение</h2>
          </div>
          <div className="container_section_contents">
            <img src={Cup} className="cup_img__" alt="" />
            <div className="container_section_contents_item">
              <img src={StartPackage} alt="" />
              <div className="container_section_contents_item_title">
                <b>Первое</b>
                <p>место</p>
              </div>
              <p>
                №1 платформа для дистанционного обучения в рейтинге сервисов для
                бизнеса
              </p>
            </div>
            <div className="container_section_contents_item">
              <img src={Holon} alt="" />
              <div className="container_section_contents_item_title">
                <b>ТОП-100</b>
                <p> EdTech</p>
              </div>
              <p>
                ТОП-100 EdTech компаний России и СНГ по версии ведущего
                аналитического агентства
              </p>
            </div>
            <div className="container_section_contents_item">
              <img src={RVK} alt="" />
              <div className="container_section_contents_item_title">
                <b>Лидерство</b>
                <p> технологий</p>
              </div>
              <p>Победитель конкурса "Глобальное технологическое лидерство"</p>
            </div>
            <div className="container_section_contents_item">
              <img src={mincomsv} alt="" />
              <div className="container_section_contents_item_title">
                <b>Включено</b>
                <p> в реестр ПО</p>
              </div>
              <p>
                Платформа дистанционного обучения Unicraft uLearn входит в
                единый реестр Российского ПО
              </p>
            </div>
          </div>
          <div className="text__small_">
            Платформа для организации и проведения дистанционного обучения,
            многократно доказавшая свою эффективность на практике
          </div>
          <div className="connecting__button__cont">
            <button className="connecting__button__">Подключиться</button>
          </div>
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
