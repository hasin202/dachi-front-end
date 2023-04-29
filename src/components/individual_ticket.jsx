import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Error from "./error";
import axios from "axios";

const IndividualTicket = () => {
  const { state } = useLocation();
  console.log(state.ticket_id);
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState();
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
  if (!state) {
    return <Error />;
  }
  //   return (
  //     <div className="w-full ml-12 flex flex-col justify-between">
  //       <div>
  //         <p className="text-5xl font-extrabold mb-2 uppercase">{event_name}</p>
  //         <p className="text-xl font-light text-gray-600">{`${address}, ${postcode}`}</p>
  //       </div>
  //       <button className="w-full py-2 text-lg font-light bg-purple-700 text-white rounded-md focus:bg-purple-500">
  //         ADD TO CART
  //       </button>
  //     </div>
  //   );
};

export default IndividualTicket;
