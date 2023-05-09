import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import AuthRoute from "./components/AuthRoute";
import NavBar from "./components/nav_bars/NavBar";
import { useAuth } from "../contexts/auth/AuthProvider";
import Home from "./pages/Home";

import { AuthProvider } from "../contexts/Auth/auth_context.jsx";
import Nav from "./components/nav_bars/nav.jsx";
import Marketplace from "./components/marketplace.jsx";
import Cart from "./components/cart/cart.jsx";
import UserTickets from "./components/ticket_components/users_tickets.jsx";
import IndividualTicket from "./components/ticket_components/individual_ticket.jsx";

// export default function App() {
//   return (
//     <>
//       <div className="border-box flex px-32 py-24 h-screen">
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Reducer />} />
{
  /* <Route path="marketplace" element={<Marketplace />} /> */
}
// <Route path="marketplace/:ticket_id" element={<IndividualTicket />} />
// <Route path="cart/:ticket_id" element={<IndividualTicket />} />
// <Route path="cart" element={<Cart />} />
// <Route path="my-tickets" element={<UserTickets />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

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

// import { Container } from "react-bootstrap";
// import { Route, Routes } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import AuthRoute from "./components/AuthRoute";
// import Home from "./pages/Home";
// import NavBar from "./components/NavBar";

// import Nav from "./components/nav.jsx";
// import Marketplace from "./components/marketplace.jsx";
// import Cart from "./components/cart.jsx";
// import UserTickets from "./components/users_tickets.jsx";
// import IndividualTicket from "./components/individual_ticket.jsx";
// import Reducer from "../contexts/useReduce.jsx";

// export default function App() {
//   return (
//     <>
//       <NavBar />
//       <div className="border-box flex px-32 py-24 h-screen">
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Reducer />} />
//           <Route path="marketplace" element={<Marketplace />} />
//           <Route path="marketplace/:ticket_id" element={<IndividualTicket />} />
//           <Route path="cart/:ticket_id" element={<IndividualTicket />} />
//           <Route path="cart" element={<Cart />} />
//           <Route path="my-tickets" element={<UserTickets />} />
//         </Routes>
//       </div>
//       <Container
//         className="d-flex align-items-center justify-content-center"
//         style={{ minHeight: "100vh" }}
//       >
//         <div className="w-100" style={{ maxWidth: "400px" }}>
//           <Routes>
//             <Route element={<AuthRoute />}>
//               <Route path="/" element={<Home />} />
//               <Route path="/home" element={<Home />} />
//             </Route>
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </div>
//       </Container>
//     </>
//   );
// }
