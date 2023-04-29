import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Error from "./error";
import axios from "axios";
import { formatDate, formatTime } from "../utils/formatting";

const IndividualTicket = () => {
  const { state } = useLocation();
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState();
  const [inCart, setInCart] = useState(false);
  const [startDateFormatted, setStartDateFormatted] = useState();
  const [endDateFormatted, setEndDateFormatted] = useState();
  const [startTimeFormatted, setStartTimeFormatted] = useState();
  const [endTimeFormatted, setEndTimeFormatted] = useState();

  useEffect(() => {
    const getData = async () => {
      if (!state) {
        setError({
          heading: "Not a valid ticket",
          body: "Please select one from the list of displayed tickets",
        });
      } else {
        axios
          .get(`http://localhost:3000/tickets/${state.ticket_id}`)
          .then((res) => setFetchedData(res.data[0]))
          .catch((error) => {
            if (error.response) setError(error.response.data);
          });
      }
    };
    getData();
  }, [state]);

  const { event_name, address, postcode, start, end, description, price } =
    fetchedData;

  useEffect(() => {
    setStartDateFormatted(formatDate(fetchedData.start));
    setStartTimeFormatted(formatTime(fetchedData.start));
    setEndDateFormatted(formatDate(fetchedData.end));
    setEndTimeFormatted(formatTime(fetchedData.end));

    if (localStorage.getItem("cart") && state) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart.find((ticket) => ticket.ticket_id === state.ticket_id))
        setInCart(true);
    }
  }, [fetchedData, state]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(fetchedData);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  if (error) {
    return <Error errorInfo={error} />;
  }

  return (
    event_name && (
      <div className="w-full ml-12 flex flex-col justify-between">
        <div>
          <div className="flex w-full justify-between text-5xl font-extrabold">
            <p className="mb-2 uppercase">{event_name}</p>
            <p className="text-purple-700">{`£${price}`}</p>
          </div>
          <p className="text-xl font-light text-gray-600">{`${address}, ${postcode}`}</p>
          <p className="text-xl font-light text-gray-600">{`Start: ${startDateFormatted}, ${startTimeFormatted}`}</p>
          <p className="text-xl font-light text-gray-600 mb-8">
            {!end ||
            (startDateFormatted === endDateFormatted &&
              startTimeFormatted === endTimeFormatted)
              ? ""
              : `End: ${endDateFormatted}, ${endTimeFormatted}`}
          </p>
          <p className="text-xl font-light">{description}</p>
        </div>
        {inCart ? (
          <p>already in cart</p>
        ) : (
          <button
            onClick={addToCart}
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
