import { Routes, Route } from "react-router-dom";

import Nav from "./components/nav.jsx";
import Marketplace from "./components/marketplace.jsx";
import Cart from "./components/cart.jsx";
import UserTickets from "./components/users_tickets.jsx";

export default function App() {
  return (
    <>
      <div className="border-box flex px-32 py-24 h-screen">
        <Nav />
        <Routes>
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="cart" element={<Cart />} />
          <Route path="my-tickets" element={<UserTickets />} />
        </Routes>
      </div>
    </>
  );
}
