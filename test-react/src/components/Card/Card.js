import Styles from "./card.module.css";

const Card = (props) => {
  const onClickHandler = () => {
    console.log(123);
  };
  return (
    <div className={Styles.card}>
      <img src={props.img} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button onClick={onClickHandler}>Подробнее</button>
    </div>
  );
};

export default Card;
