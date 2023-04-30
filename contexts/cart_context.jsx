import { createContext, useState } from "react";

export const cartContext = createContext();

const CartContextProvider = (props) => {
  const [inCart, setInCart] = useState(false);

  return (
    <cartContext.Provider value={[inCart, setInCart]}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
