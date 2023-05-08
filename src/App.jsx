import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { AuthProvider } from "../contexts/Auth/auth_context.jsx";
import Nav from "./components/nav.jsx";
import Marketplace from "./components/marketplace.jsx";
import Cart from "./components/cart.jsx";
import UserTickets from "./components/users_tickets.jsx";
import IndividualTicket from "./components/individual_ticket.jsx";
import Home from "./components/home.jsx";
import SignUp from "./components/auth/signup.jsx";
import LogIn from "./components/auth/login.jsx";
import axios from "axios";
import TicketingHome from "./components/authorised_home.jsx";

function ProtectedRoute({ element, ...rest }) {
  console.log(`Token: ${localStorage.getItem("token")}`);
  const auth = localStorage.getItem("token");
  return (
    <div className="w-full">{auth ? element : <Navigate to="/SignIn" />}</div>
  );
}

function App() {
  // useEffect(() => {
  //   console.log(`token ${localStorage.getItem("token")}`);
  // }, []);

  return (
    <AuthProvider>
      <div className="border-box w-full h-screen flex px-32 py-24 h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          {/* <Route path="marketplace" element={<Marketplace />} /> */}
          {/* <Route path="marketplace/:ticket_id" element={<IndividualTicket />} />
          <Route path="cart/:ticket_id" element={<IndividualTicket />} />
          <Route path="cart" element={<Cart />} />
          <Route path="my-tickets" element={<UserTickets />} /> */}
          <Route
            path="/Testcom/*"
            element={<ProtectedRoute element={<TicketingHome />} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
