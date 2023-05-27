import classes from "./modal.module.css";
import Backdrop from "./Backdrop";

const Modal = ({ children, onClick }) => {
  return (
    <>
      <Backdrop onClick={onClick} />
      <div className={classes.modal}>{children}</div>
    </>
  );
};

export default Modal;
