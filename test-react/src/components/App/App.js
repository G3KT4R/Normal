import Styles from "./app.module.css";
import Header from "../Header/Header.js";
import Aside from "../Aside/Aside.js";
import Main from "../Main/Main.js";

const App = () => {
  return (
    <div className={Styles.wrapper}>
      <Header></Header>
      <Aside></Aside>
      <Main></Main>
    </div>
  );
};

export default App;
