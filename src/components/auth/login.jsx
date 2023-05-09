import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../../contexts/Auth/auth_context";
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

const LogIn = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const res = await axios.post("http://localhost:8080/api/signin", {
        email,
        password,
      });
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`; // Set the header if the user is authenticated
      setErrorMessage(res.data.message);
      if (res.status === 200) {
        setIsAuthenticated(true);
        if (isAuthenticated === true) {
          navigate("/testcom");
        }
      } else {
        setErrorMessage("Failed to sign in. Please try again.");
      }
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 401) {
        setErrorMessage("Invalid email or password. Please try again.");
      } else {
        setErrorMessage("Failed to sign in.");
      }
      setIsAuthenticated(false);
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <div className="border border-black rounded-xl px-8 py-4">
        <p className="text-xl font-bold mb-4">Log In</p>
        <form
          className="w-48 flex flex-col justify-start"
          onSubmit={handleSignin}
        >
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded px-1"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
              className="border rounded px-1"
            />
          </div>
          {errorMessage && <div>{errorMessage}</div>}
          <button
            type="submit"
            className="w-full bg-black text-white rounded-md mt-4"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
