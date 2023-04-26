import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/nav.jsx";
import Marketplace from "./components/marketplace.jsx";
import Cart from "./components/cart.jsx";

export default function App() {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:3000/tickets");
      // console.log(data);
      setFetchedData(data.data);
    };
    getData();
  }, []);

  console.log("data");
  fetchedData.map((data) => {
    console.log(data);
  });

  return (
    <>
      {/* {fetchedData.map((data) => (
        <pre key={data.ticket_id}>{JSON.stringify(data)}</pre>
      ))} */}
      <div className="border-box flex px-16 py-24 min-h-screen">
        <Nav />
        <Routes>
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}
