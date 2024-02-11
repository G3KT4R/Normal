import Styles from "./card.module.css";

const Card = (props) => {
  const { imgUrl, price, title, description } = props;

  return (
    <div className={Styles.card}>
      <img src={imgUrl} className={Styles["card-img"]} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default Card;
