// import Card from "../Card/Card";
// import Modal from "../Modal/Modal";
// import { useState, useEffect, useRef } from "react";
// import Styles from "./main.module.css";
// import Spinner from "../Spinner/Spinner";
// import { useFetch } from "../customHooks/useFetch";
import { LoginForm } from "../LoginForm/LoginForm";
const Main = () => {
  // const [goods, isLoading] = useFetch(
  //   "https://654127f4f0b8287df1fdeea5.mockapi.io/goods"
  // );

  return (
    <>
      <LoginForm />
      {/* <h2>Список товаров</h2>
      <main className={Styles.main}>
        {goods.length > 0 &&
          goods.map(({ imgUrl, title, price, description }, id) => {
            return (
              <Card
                key={`${id}-${title}`}
                imgUrl={imgUrl}
                title={title}
                price={price}
                description={description}
              />
            );
          })}
      </main>
      {isLoading && <Spinner />} */}
    </>
  );
};

export default Main;
