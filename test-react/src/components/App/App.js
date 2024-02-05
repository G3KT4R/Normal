import Styles from "./app.module.css";

const App = () => {
  return (
    <div className={Styles.wrapper}>
      <aside>Я сайдбар</aside>
      <main>
        <div>
          <img src="" />
          <h2>Я карточка 1</h2>
          <p>Описание</p>
        </div>
      </main>
    </div>
  );
};

export default App;
