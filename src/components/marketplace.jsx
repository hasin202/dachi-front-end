import axios from "axios";
import React, { useState, useEffect } from "react";
import Ticket from "./tickets.jsx";

const Marketplace = () => {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:3012/tickets");
      setFetchedData(data.data);
    };
    getData();
  }, []);
  return (
    <div className="flex flex-col w-full px-4 gap-8 h-full overflow-y-scroll">
      {fetchedData.map((data) => (
        <Ticket key={data.ticket_id} data={data} />
      ))}
    </div>
  );
};

export default Marketplace;
