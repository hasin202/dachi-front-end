import { useContext } from "react";
import cartContext from "./cart_context";

const Reducer = () => {
  const { addToCart, cart } = useContext(cartContext);

  const displayValue = () => {
    console.log(cart);
  };
  return (
    <div className="flex w-full gap-2">
      <button
        className="w-1/2 bg-purple-700"
        onClick={() => addToCart(Math.random() * 100)}
      >
        Add
      </button>
      <button className="w-1/2 bg-purple-700" onClick={displayValue}>
        log state
      </button>
    </div>
  );
};

export default Reducer;
