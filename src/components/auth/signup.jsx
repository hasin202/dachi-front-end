import Loading from "react-loading";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setMessage("");

    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("Email and password fields are required");
      return;
    }

    if (!email.endsWith("@surrey.ac.uk")) {
      setErrorMessage('Email must end with "@surrey.ac.uk"');
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    setErrorMessage("");

    try {
      const res = await axios.post("http://localhost:8080/api/signup", {
        email,
        password,
      });
      console.log(res.data);
      localStorage.setItem("token", res.data.token); // Store the JWT token
      setErrorMessage(res.data.message);
      setMessage("Please verify your account via email...");
      setTimeout(() => {
        navigate("/signin");
        setIsLoading(false);
      }, 5000);
    } catch (error) {
      console.log(error.message);
      setErrorMessage("could not connect");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <div className="border border-black rounded-xl px-8 py-4">
        <p className="text-xl font-bold mb-4">Sign up</p>
        <form
          className="w-48 flex flex-col justify-start"
          onSubmit={handleSignUp}
        >
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="border rounded px-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="border rounded px-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div>{error}</div>}
          {isLoading && <Loading />}
          {message && <div>{message}</div>}
          <button
            type="submit"
            className="w-full bg-black text-white rounded-md mt-4"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
