import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Error from "./error";
import axios from "axios";
import { formatDate, formatTime } from "../utils/formatting";
import { addToCart, removerFromCart } from "../utils/cart";
import TicketInfo from "./ticket_info";

const IndividualTicket = () => {
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
    }
  }, [fetchedData, state]);

  if (error) {
    return <Error errorInfo={error} />;
  }
  const { event_name } = fetchedData;
  return (
    event_name && (
      <div className="w-full ml-12 flex flex-col justify-between">
        <TicketInfo ticket={fetchedData} state={state} />
        {inCart ? (
          <button
            onClick={(event) => removerFromCart(event, fetchedData)}
            className="w-full py-2 text-lg font-light bg-purple-700 text-white rounded-md focus:bg-purple-500"
          >
            REMOVE TO CART
          </button>
        ) : (
          <button
            onClick={(event) => addToCart(event, fetchedData)}
            className="w-full py-2 text-lg font-light bg-purple-700 text-white rounded-md focus:bg-purple-500"
          >
            ADD TO CART
          </button>
        )}
      </div>
    )
  );
};

export default IndividualTicket;
