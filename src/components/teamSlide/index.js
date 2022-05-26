import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./teamSlide.scss";
import { Autoplay } from "swiper";
import { ExportSvg } from "../export/svg";
import Farhod from "../../assets/img/farxod.jpg";
import Abbosbek from "../../assets/img/Abbosbek.JPG";
import YoqubjanovShohjaxon from "../../assets/img/YoqubjanovShohjaxon.jpg";
import Ismoil from "../../assets/img/ismoil.jpg";
import { t } from "i18next";
export default function TeamSlide() {
  const { AiFillHtml5, DiCss3Full, IoLogoJavascript, DiReact } = ExportSvg;

  const TeamData = [
    {
      id: 1,
      name: t('NomonovFarhod'),
      userImg:Farhod,
      position: t('Frontenddeveloper'),
      level: t('Work3years'),
      icons: [
        <AiFillHtml5 />,
        <DiCss3Full />,
        <IoLogoJavascript />,
        <DiReact />,
      ],
    },
    {
      id: 2,
      name: t('MirdadaevUlugbek'),
      userImg:Farhod,
      position: t('Frontenddeveloper'),
      level: t('Middle'),
      icons: [
        <AiFillHtml5 />,
        <DiCss3Full />,
        <IoLogoJavascript />,
        <DiReact />,
      ],
    },
    {
      id: 3,
      name: t('MuminovIsmoil'),
      userImg:Ismoil,
      position: t('JavaScriptdeveloper'),
      level: t('Middle'),
      icons: [
        <AiFillHtml5 />,
        <DiCss3Full />,
        <IoLogoJavascript />,
        <DiReact />,
      ],
    },
    {
      id: 4,
      name: t('SadikovDilshod'),
      userImg:Farhod,
      position: t('Fullstackdeveloper'),
      level: t('Seniordeveloper'),
      icons: [
        <AiFillHtml5 />,
        <DiCss3Full />,
        <IoLogoJavascript />,
        <DiReact />,
      ],
    },  {
      id: 5,
      name: t('MirzaahmedovAbbosbey'),
      userImg:Abbosbek,
      position: t('JavaScriptdeveloper'),
      level: t('Seniordeveloper'),
      icons: [
        <AiFillHtml5 />,
        <DiCss3Full />,
        <IoLogoJavascript />,
        <DiReact />,
      ],
    }, {
      id: 6,
      name: t('YoqubjanovShohjaxon'),
      userImg:YoqubjanovShohjaxon,
      position: t('JavaScriptdeveloper'),
      level: t('Seniordeveloper'),
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
        <h1>{t('Ourspecialists')}</h1>
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
                      <img src={item.userImg} alt="...." />
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
