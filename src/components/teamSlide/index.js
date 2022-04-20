import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./teamSlide.scss";
import { Autoplay } from "swiper";
import { ExportSvg } from "../export/svg";
import Farhod from "../../assets/img/farxod.jpg";
export default function TeamSlide() {
  const { AiFillHtml5, DiCss3Full, IoLogoJavascript, DiReact } = ExportSvg;

  const TeamData = [
    {
      id: 1,
      name: "Номонов Фарход",
      position: "Frontend разработчик",
      level: "Стаж работы: 3 года",
      icons: [
        <AiFillHtml5 />,
        <DiCss3Full />,
        <IoLogoJavascript />,
        <DiReact />,
      ],
    },
    {
      id: 2,
      name: "Мирдадаев Улугбек",
      position: "Frontend разработчик",
      level: "Middle",
      icons: [
        <AiFillHtml5 />,
        <DiCss3Full />,
        <IoLogoJavascript />,
        <DiReact />,
      ],
    },
    {
      id: 3,
      name: "Муминов Исмоил",
      position: "JavaScript разработчик",
      level: "Middle",
      icons: [
        <AiFillHtml5 />,
        <DiCss3Full />,
        <IoLogoJavascript />,
        <DiReact />,
      ],
    },
    {
      id: 4,
      name: "Садиков Дилшод",
      position: "Full-Stack разработчик",
      level: "Senior разработчик",
      icons: [
        <AiFillHtml5 />,
        <DiCss3Full />,
        <IoLogoJavascript />,
        <DiReact />,
      ],
    },
  ];
  return (
    <>
      <div id="team" className="team_slide">
        <h1>Наши специалисты</h1>
        {
          (window.onresize = (
            <Swiper
              slidesPerView={
                window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 3 : 5
              }
              spaceBetween={30}
              loop={true}
              modules={[Autoplay]}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {TeamData.map((item, i) => {
                return (
                  <SwiperSlide key={item?.id}>
                    <div className="card">
                      <img src={Farhod} alt="...." />
                      <h1>{item.name}</h1>
                      <h2>{item.position}</h2>
                      <p>{item.level}</p>
                      <div className="card_skills">
                        {item.icons.map((icon, index) => {
                          return (
                            <React.Fragment key={index}>{icon}</React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ))
        }
      </div>
    </>
  );
}
