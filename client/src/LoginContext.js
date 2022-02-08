import { createContext, useState } from "react";

export const LoginContext = createContext({
  isLoggedIn: true,
  userId: "",
  setLoginInfo: () => {},
});

const LoginContextProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const setLoginInfo = (is, id) => {
    setUserId(id);
    setIsLoggedIn(is);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, userId, setLoginInfo }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
