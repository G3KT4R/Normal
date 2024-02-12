import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

export const CardPage = () => {
  const [good, setGood] = useState();
  const { goodId } = useParams();

  const context = useUserContext();
  useEffect(() => {
    fetch(`https://654127f4f0b8287df1fdeea5.mockapi.io/goods/${goodId}`)
      .then((res) => res.json())
      .then((data) => setGood(data));
  }, []);

  return (
    <>
      {good == "" && null}
      {good && (
        <>
          <h2>{good.title}</h2>
          <img src={good.imgUrl} alt="" />
          <div>{good.description}</div>
          <div>{good.price}</div>
        </>
      )}
    </>
  );
};
