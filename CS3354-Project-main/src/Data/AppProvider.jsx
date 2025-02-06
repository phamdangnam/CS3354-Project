import { createContext, useState } from "react";
import Header from "../Components/Header";
import Content from "../Components/Content";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppProvider = () => {
  const [amount, setAmount] = useState("");
  const [categories, setCategories] = useState([
    { category: "", percentage: "" },
  ]);
  return (
    <AppContext.Provider
      value={{ amount, setAmount, categories, setCategories }}
    >
      <Header></Header>
      <Content></Content>
    </AppContext.Provider>
  );
};

export default AppContext;
