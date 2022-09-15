import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext({});

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [global, setGlobal] = useState({});

  const handleSetGlobal = (data) => {
    console.log("context data", data);
    const stories = data?.data?.stories[0];
    const content = stories?.content;
    setGlobal(content);
  };

  const value = {
    global,
    handleSetGlobal,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
