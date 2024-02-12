import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h1>Главная станица</h1>
      <Link to="/contacts">На страницу контактов</Link>
      <h1></h1>
      <Link to="/catalog">В каталог</Link>
    </>
  );
};
