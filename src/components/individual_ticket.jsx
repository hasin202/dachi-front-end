import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Error from "./error";
import axios from "axios";

const IndividualTicket = () => {
  const { state } = useLocation();
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState();
  if (!state) {
    return (
      <Error
        errorInfo={{
          heading: "Not a valid ticket",
          body: "Please select one from the list of displayed tickets",
        }}
      />
    );
  }
  useEffect(() => {
    const getData = async () => {
      axios
        .get(`http://localhost:3000/tickets/${state.ticket_id}`)
        .then((res) => setFetchedData(res.data[0]))
        .catch((error) => {
          if (error.response) setError(error.response.data);
        });
    };
    getData();
  }, []);
  if (error) {
    return <Error errorInfo={error} />;
  }
  const { event_name, address, postcode, start, end, description, price } =
    fetchedData;

  const [startDateFormatted, setStartDateFormatted] = useState();
  const [endDateFormatted, setEndDateFormatted] = useState();
  const [startTimeFormatted, setStartTimeFormatted] = useState();
  const [endTimeFormatted, setEndTimeFormatted] = useState();
  useEffect(() => {
    const formatted_start_date = new Date(start).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const formatted_start_time = new Date(start).toLocaleTimeString("en-GB", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    const formatted_end_date = new Date(end).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const formatted_end_time = new Date(end).toLocaleTimeString("en-GB", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    setStartDateFormatted(formatted_start_date);
    setStartTimeFormatted(formatted_start_time);
    setEndDateFormatted(formatted_end_date);
    setEndTimeFormatted(formatted_end_time);
  }, [fetchedData]);

  return (
    <div className="w-full ml-12 flex flex-col justify-between">
      <div>
        <div className="flex text-5xl font-extrabold">
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
      <button className="w-full py-2 text-lg font-light bg-purple-700 text-white rounded-md focus:bg-purple-500">
        ADD TO CART
      </button>
    </div>
  );
};

export default IndividualTicket;
