import Styles from "./modal.module.css";

const Modal = (props) => {
  const closeModalHandler = () => {
    props.closeModal();
  };

  return (
    <div className={Styles.modal}>
      <div className={Styles["modal__content"]}>
        <img src={props.img}></img>
        {props.children}
        {/* <p>{props.description}</p> */}
        <button onClick={closeModalHandler}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;
