import { createContext, useContext, useState } from "react";

const context = createContext();

export const useUserContext = () => useContext(context);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: "German",
    age: 21,
  });

  return <context.Provider value={user}>{children}</context.Provider>;
};
