import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { MainPage } from "./components/pages/MainPage.js";

function App() {
  return (
    <Provider store={store}>
      <MainPage></MainPage>
    </Provider>
  );
}

export default App;
