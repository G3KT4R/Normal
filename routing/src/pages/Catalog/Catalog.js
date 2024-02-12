import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card.js";

export const Catalog = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    fetch("https://654127f4f0b8287df1fdeea5.mockapi.io/goods")
      .then((res) => res.json())
      .then((data) => {
        setGoods(data);
      });
  });
  return (
    <>
      <h1>Я каталог</h1>
      <Link to="/">На главную страницу</Link>
      {goods.map(({ id, title, price, description, imgUrl }) => {
        return (
          <Card
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            imgUrl={imgUrl}
          />
        );
      })}
    </>
  );
};
