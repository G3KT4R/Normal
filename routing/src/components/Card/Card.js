import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

export const Card = ({ id, title, price, description, imgUrl }) => {
  const contextData = useUserContext();

  return (
    <div key={id} style={{ border: "1px solid black", margin: "10px" }}>
      <h2>
        <Link to={`/catalog/${id}`}>{title}</Link>
      </h2>
      <img src={imgUrl} alt="" />
      <div>{description}</div>
      <div>{price}</div>
    </div>
  );
};
