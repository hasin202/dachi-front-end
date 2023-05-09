import cartContext from "../../../contexts/cart/cart_context";
import { useContext, useEffect, useState } from "react";
import Ticket from "../ticket_components/tickets";
import axios from "axios";
import { useAuth } from "../../../contexts/auth/AuthProvider";

const Cart = () => {
  const { cart, clearCart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  const { user } = useAuth();

  // const cart = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    let finalPrice = cart.reduce((acc, obj) => {
      return acc + obj.price;
    }, 0);
    setTotal(finalPrice);
  }, [cart]);

  const buyTickets = async () => {
    try {
      const res = await axios.put(
        "http://localhost:3012/buy",
        { cart: cart, user: user.id },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.data) {
        clearCart();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    cart && (
      <div className="w-full px-4 h-full">
        <div className="flex flex-col w-full px-4 gap-8 h-5/6 overflow-y-scroll mb-2">
          {cart.map((ticket) => (
            <Ticket key={ticket.ticket_id} data={ticket} />
          ))}
        </div>
        <div className="flex flex-col w-full border-t mx-4 border-gray-400 pt-2 pr-8 gap-2">
          <div className="flex w-full justify-between">
            <p className="text-xl font-bold">TOTAL</p>
            <p className="text-xl font-bold font-light">{`£${total}`}</p>
          </div>
          <div className="flex gap-2">
            <button
              className="border border-purple-700 text-purple-700 w-full rounded py-1 font-light"
              onClick={clearCart}
            >
              Clear cart
            </button>
            <button
              className="bg-purple-700 text-white w-full rounded py-1 font-light disabled:bg-black"
              disabled={!total}
              onClick={buyTickets}
            >
              Buy tickets
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Cart;
