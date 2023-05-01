import { useLocation } from "react-router-dom";
import cartContext from "../../contexts/cart_context";
import React, { useState, useEffect, useContext } from "react";
import Error from "./error";
import axios from "axios";
import TicketInfo from "./ticket_info";
import CartButton from "./cart_button";

const IndividualTicket = () => {
  const { addToCart, removeFromCart } = useContext(cartContext);
  const { state } = useLocation();
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState();
  const [inCart, setInCart] = useState(false);
  useEffect(() => {
    const getData = async () => {
      if (!state) {
        setError({
          heading: "Not a valid ticket",
          body: "Please select one from the list of displayed tickets",
        });
      } else {
        try {
          const res = await axios.get(
            `http://localhost:3000/tickets/${state.ticket_id}`
          );
          const data = res.data;
          setFetchedData(data[0]);
        } catch (error) {
          setError(error.response.data);
        }
      }
    };
    getData();
  }, [state]);

  useEffect(() => {
    if (localStorage.getItem("cart") && state) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart.find((ticket) => ticket.ticket_id === state.ticket_id))
        setInCart(true);
    } else {
      setInCart(false);
    }
  }, [fetchedData, cartContext, state]);

  if (error) {
    return <Error errorInfo={error} />;
  }
  const { event_name } = fetchedData;
  return (
    event_name && (
      <div className="w-full ml-12 flex flex-col justify-between">
        <TicketInfo ticket={fetchedData} state={state} />
        <CartButton
          inCart={inCart}
          onClick={() =>
            inCart
              ? removeFromCart(fetchedData.ticket_id)
              : addToCart(fetchedData)
          }
        />
      </div>
    )
  );
};

export default IndividualTicket;
