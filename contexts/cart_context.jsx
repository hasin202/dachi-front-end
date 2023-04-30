import { createContext } from "react";

export const cartContext = createContext();

const sayHi = () => {
  console.log("hi");
};

const CartContextProvider = ({ children }) => {
  return (
    <cartContext.Provider value={{ name: "hasin", age: 20, sayHi: sayHi }}>
      {children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
