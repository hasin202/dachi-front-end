import React, { useContext, useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/auth_context";
import { useNavigate } from "react-router-dom";
import Nav from "./nav";
import Marketplace from "./marketplace";

function TicketingHome() {
  const { handleSignOut } = useContext(AuthContext);
  function ProtectedRoute({ element, ...rest }) {
    const auth = localStorage.getItem("token");
    return auth ? element : <Navigate to="/SignIn" />;
  }

  // useEffect(() => {
  //   console.log(localStorage.getItem("token"));
  // }, []);

  const navigate = useNavigate();
  return (
    <div className="w-full">
      <Nav />
      <Routes>
        {/* <Route
          path="marketplace"
          element={<ProtectedRoute element={<Marketplace />} />}
        /> */}
        <Route path="marketplace" element={<Marketplace />} />
      </Routes>

      <button onClick={() => handleSignOut(navigate)}>Sign Out</button>
    </div>
  );
}

export default TicketingHome;
