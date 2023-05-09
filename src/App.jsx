import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import AuthRoute from "./components/AuthRoute";
import NavBar from "./components/nav_bars/NavBar";
import { useAuth } from "../contexts/auth/AuthProvider";
import Home from "./pages/Home";

import Nav from "./components/nav_bars/nav.jsx";
import Marketplace from "./components/marketplace.jsx";
import Cart from "./components/cart/cart.jsx";
import UserTickets from "./components/ticket_components/users_tickets.jsx";
import IndividualTicket from "./components/ticket_components/individual_ticket.jsx";
import PostTicket from "./components/ticket_components/post_ticket.jsx";

export default function App() {
  const { auth, signOut } = useAuth();
  return (
    <>
      <NavBar />
      <div className="flex w-full px-44 h-screen items-center content-center">
        {auth ? <Nav /> : ""}
        <div className="w-full h-3/4">
          <Routes>
            <Route element={<AuthRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="marketplace" element={<Marketplace />} />
              <Route
                path="marketplace/:ticket_id"
                element={<IndividualTicket />}
              />
              <Route path="cart/:ticket_id" element={<IndividualTicket />} />
              <Route path="cart" element={<Cart />} />
              <Route path="my-tickets" element={<UserTickets />} />
              <Route path="my-tickets/post-ticket" element={<PostTicket />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
