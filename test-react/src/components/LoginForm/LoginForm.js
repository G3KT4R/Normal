import { useCallback, useMemo, useState } from "react";
import FormInput from "./FormImput";

export const LoginForm = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [isUserError, setIsUserError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);

  const loginHandler = (e) => {
    e.preventDefault();
    const payload = {
      user: user,
      email: email,
    };
    fetch("", { data: payload });
  };

  const setUserValue = useCallback((value) => {
    setUser(value);
  }, []);
  const setEmailValue = useCallback((value) => {
    setEmail(value);
  }, []);

  const totalSum = useMemo(() => {
    console.log("Hello from memorized");
    return arr.reduce((acc, value) => value + acc, 0);
  }, [arr]);

  return (
    <form
      style={{ width: "300px", height: "300px", border: "1px solid black" }}
      onSubmit={loginHandler}
    >
      <h2>Форма входа</h2>
      <FormInput
        name="name"
        value={user}
        setValue={setUserValue}
        isError={isUserError}
      />
      <FormInput
        name="email"
        value={email}
        setValue={setEmailValue}
        isError={isEmailError}
      />
      <button type="submit">Войти</button>
      <div>Итоговая цена: {totalSum}</div>
      <button onClick={() => setArr(() => [2, 3, 4, 5, 6])}>
        Изменение массива цен
      </button>
    </form>
  );
};
