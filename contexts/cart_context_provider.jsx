import cartContext from "./cart_context";
import { useReducer } from "react";
import reducer from "./reducer";
const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(
    reducer,
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const addToCart = (ticket) => {
    dispatch({ type: "add", payload: { ticket: ticket } });
  };

  const removeFromCart = (ticket_id) => {
    dispatch({ type: "remove", payload: { ticket: ticket_id } });
  };

  const clearCart = () => {
    dispatch({ type: "clear" });
  };

  return (
    <cartContext.Provider
      value={{ addToCart, removeFromCart, clearCart, cart }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
