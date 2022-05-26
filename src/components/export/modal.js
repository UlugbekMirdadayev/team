import "./export.scss";
import { Close } from "./svg";
import Video from "../../assets/video/bg.mp4";
import { t } from "i18next";
export const RegisterModal = ({ open, setOpen }) => {
  return (
    <div className="modal">
      <div
        onClick={() => {
          setOpen(false);
        }}
        onContextMenu={() => {
          setOpen(false);
        }}
        onCanPlayCapture={() => {
          setOpen(false);
        }}
        className="modal_overlay"
      />
      <div className="modal_container">
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="modal_close"
        >
          <Close />
        </div>
        <h1>{t('HelloDubai')}</h1>
        <div className="modal_flex">
          <div className="modal_left"></div>
          <div className="modal_right"></div>
        </div>
        <form></form>
      </div>
    </div>
  );
};
export const ModalClick = ({ open, setOpen, data }) => {
  return (
    <>
      {open && (
        <div className="modal">
          <div
            onMouseDown={() => {
              setOpen(false);
            }}
            className="modal_overlay"
          />
          <div className="modal__container">
            <div
              onClick={() => {
                setOpen(false);
              }}
              className="close"
            >
              <Close />
            </div>
            <div className="modal__content">
              <div className="modal__content-img">
                <img src={data.cardImgIs} alt="img" />
              </div>
              <div className="modal__content-title">
                <h1>{data.cardTitleIs}</h1>
                <p>{data.cardPIs}</p>
              </div>
            </div>
            <hr />
            <div className="modal_desc">
              <p>{data.modalTitle}</p>
            </div>
            <div className="modal_video">
              <video
                lazy="lazy"
                preload="none"
                loop
                muted
                pip="false"
                playsInline
                poster="https://i.vimeocdn.com/video/1072231461-bac8c4cdbb9ec924a3b785c5aa318d7b1c59479b74711d5331d7b4fd9f367e52-d?mw=1300&mh=731&q=70"
                id="headerVideo"
                controls={true}
                src={Video}
              ></video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
