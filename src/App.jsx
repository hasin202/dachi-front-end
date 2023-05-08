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
import Testcom from "./components/authorised_home.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated by sending a request to the server
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:8080/api/test", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIsAuthenticated(true);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    console.log("Logged out");
  };

  return (
    <AuthProvider>
      <div className="border-box flex px-32 py-24 h-screen">
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="marketplace/:ticket_id" element={<IndividualTicket />} />
          <Route path="cart/:ticket_id" element={<IndividualTicket />} />
          <Route path="cart" element={<Cart />} />
          <Route path="my-tickets" element={<UserTickets />} />
          <Route
            path="/Testcom/*"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={<Testcom handleSignOut={handleSignOut} />}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

function ProtectedRoute({ isAuthenticated, element, ...rest }) {
  return isAuthenticated ? element : <Navigate to="/SignIn" />;
}

export default App;
