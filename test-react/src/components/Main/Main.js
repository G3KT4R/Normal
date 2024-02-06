import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import { useState } from "react";
import Styles from "./main.module.css";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardDescription, setCardDescription] = useState("");
  const [cardImg, setCardImg] = useState("");
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const closeRegModalHandler = () => {
    setIsRegistrationSuccess(false);
  };

  return (
    <main className={Styles.main}>
      <Card
        openModal={openModalHandler}
        setDescription={setCardDescription}
        setImg={setCardImg}
        title="Я карточка 1"
        description="Подробное описание первой карточки"
        img="https://placehold.co/100"
      ></Card>
      <Card
        openModal={openModalHandler}
        setDescription={setCardDescription}
        setImg={setCardImg}
        title="Я карточка 2"
        description="Подробное описание второй карточки"
        img="https://placehold.co/200"
      ></Card>
      <Card
        openModal={openModalHandler}
        setDescription={setCardDescription}
        setImg={setCardImg}
        title="Я карточка 3"
        description="Подробное описание третьей карточки"
        img="https://placehold.co/300"
      ></Card>
      <button onClick={() => setIsModalOpen(true)}>Открыть модалку</button>
      {isModalOpen === true && (
        <Modal
          closeModal={closeModalHandler}
          // description={cardDescription}
          img={cardImg}
        ></Modal>
      )}

      <button onClick={() => setIsRegistrationSuccess(true)}>
        Тайм код: 36:47
      </button>
      {isRegistrationSuccess === true && (
        <Modal closeModal={closeRegModalHandler}>
          <div>Спасибо за регистрацию!</div>
        </Modal>
      )}
    </main>
  );
};

export default Main;
