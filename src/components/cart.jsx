import cartContext from "../../contexts/cart_context";
import { useContext } from "react";
import Ticket from "./tickets";

const Cart = () => {
  const { cart } = useContext(cartContext);
  // const cart = JSON.parse(localStorage.getItem("cart"));

  return (
    cart && (
      <div className="w-full px-4 h-full">
        <div className="flex flex-col w-full px-4 gap-8 h-5/6 overflow-y-scroll">
          {cart.map((ticket) => (
            <Ticket key={ticket.ticket_id} data={ticket} />
          ))}
        </div>
        <div className="border-t border-gray-400">Total</div>
      </div>
    )
  );
};

export default Cart;
