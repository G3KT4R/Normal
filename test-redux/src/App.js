import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

function App() {
  return (
    <Provider store={store}>
      <div>Time cod: 34:03</div>
      <a href="https://learn.innopolis.university/Trainings/28955b4b-5657-480b-6573-08dbd53ad60f/Play?exercise=9ec33388-281f-4186-8b61-08dbffd5223c&back=%2FStudents%2FTrainings%2F28955b4b-5657-480b-6573-08dbd53ad60f%239ec33388-281f-4186-8b61-08dbffd5223c">
        Time code 34:03
      </a>
    </Provider>
  );
}

export default App;
