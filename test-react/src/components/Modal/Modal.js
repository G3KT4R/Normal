import Styles from "./modal.module.css";

const Modal = (props) => {
  const { isOpen, close } = props;

  if (isOpen === false) {
    return null;
  }

  return (
    <div className={Styles.modal}>
      <div className={Styles["modal__content"]}>
        <img src={props.img}></img>
        {props.children}
        <button onClick={() => close()}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;
