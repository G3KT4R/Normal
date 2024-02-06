import Styles from "./card.module.css";

const Card = (props) => {
  const onClickHandler = () => {
    props.openModal();
    props.setDescription(props.description);
    props.setImg(props.img);
  };
  return (
    <div className={Styles.card}>
      <img className={Styles["card-img"]} src={props.img} />
      <h2>{props.title}</h2>
      <button onClick={onClickHandler}>Подробнее</button>
    </div>
  );
};

export default Card;
