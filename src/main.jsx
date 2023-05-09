// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import CartContextProvider from "../contexts/cart_context_provider.jsx";
// import AuthProvider from "../contexts/auth/AuthProvider";
// import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <CartContextProvider>
//           <App />
//         </CartContextProvider>
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../contexts/auth/AuthProvider";
import CartContextProvider from "../contexts/cart/cart_context_provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
