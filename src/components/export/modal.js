import "./export.scss";
import { Close } from "./svg";
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
        <h1>Hello Dubai</h1>
        <div className="modal_flex">
          <div className="modal_left"></div>
          <div className="modal_right"></div>
        </div>
        <form></form>
      </div>
    </div>
  );
};
