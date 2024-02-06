import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import { useState } from "react";
import Styles from "./main.module.css";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardDescription, setCardDescription] = useState("");
  const [cardImg, setCardImg] = useState("");

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
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

      {isModalOpen === true && (
        <Modal
          closeModal={closeModalHandler}
          description={cardDescription}
          img={cardImg}
        ></Modal>
      )}
    </main>
  );
};

export default Main;
