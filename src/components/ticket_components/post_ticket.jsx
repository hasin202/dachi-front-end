// import { useEffect, useRef, useState } from "react";
// import { useAuth } from "../../../contexts/auth/AuthProvider";
// import axios from "axios";

// const PostTicket = () => {
//   const { user } = useAuth();
//   const ticketCodeRef = useRef("");
//   const eventNameRef = useRef("");
//   const forSaleRef = useRef("");
//   const addressRef = useRef("");
//   const postcodeRef = useRef("");
//   const descriptionRef = useRef("");
//   const [ticketInfo, setTicketInfo] = useState({});
//   const priceRef = useRef(0);
//   //   const [formResult, setFormResult] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // setFormResult(
//     //   `Submitted ticket code: ${ticketCodeRef.current}, event name: ${eventNameRef.current}, for sale: ${forSaleRef.current}`
//     // );
//     setTicketInfo({
//       ticket_owner: user.id,
//       ticket_code: ticketCodeRef.current.value,
//       event_name: eventNameRef.current.value,
//       address: addressRef.current.value,
//       postcode: postcodeRef.current.value,
//       for_sale: forSaleRef.current.value,
//       description: descriptionRef.current.value,
//       price: priceRef.current.value,
//     });
//     try {
//       const res = await axios.post(
//         "http://localhost:3012/tickets",
//         ticketInfo,
//         { headers: { "Content-Type": "application/json" } }
//       );
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleTicketCodeChange = (event) => {
//     const value = event.target.value;
//     const isValid = /^TIK-\d{6}$/.test(value);
//     event.target.setCustomValidity(
//       isValid ? "" : "Please enter a valid TIK code in the format TIK-123456"
//     );
//     ticketCodeRef.current = value;
//   };

//   return (
//     <div className="flex flex-col w-full px-4 gap-8 h-full overflow-y-scroll justify-center">
//       <form onSubmit={handleSubmit}>
//         <h1 className="text-4xl font-bold uppercase mb-4">Upload a ticket</h1>
//         <div className="flex flex-col gap-4">
//           <div className="flex w-full justify-between">
//             <input
//               className="px-4 py-2 w-1/6 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               id="event-name"
//               type="text"
//               placeholder="event name"
//               maxLength={50}
//               required
//               ref={eventNameRef}
//             />

//             <input
//               className="px-4 py-2 w-2/6 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               id="ticket-code"
//               type="text"
//               placeholder="ticket code"
//               pattern="TIK-\d{6}"
//               required
//               onChange={handleTicketCodeChange}
//               ref={ticketCodeRef}
//             />

//             <select
//               id="for-sale"
//               className="px-4 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               ref={forSaleRef}
//               required
//             >
//               <option value="">For sale?</option>
//               <option value="FALSE">False</option>
//               <option value="TRUE">True</option>
//             </select>
//             <input
//               type="number"
//               placeholder="£ Price"
//               className="px-4 w-1/6 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               min={0}
//               required
//               ref={priceRef}
//             />
//           </div>
//           <div className="flex w-full gap-4">
//             <input
//               className="px-4 py-2 w-1/2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               id="address"
//               type="text"
//               placeholder="Address"
//               required
//               ref={addressRef}
//             />
//             <input
//               className="px-4 py-2 w-1/2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               id="postcode"
//               type="text"
//               placeholder="Postcode"
//               required
//               ref={postcodeRef}
//             />
//           </div>
//           <textarea
//             id="description"
//             name="description"
//             className="px-4 py-2 w-full bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
//             ref={descriptionRef}
//             required
//           />
//         </div>
//         <button
//           className="w-full mt-4 bg-purple-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           type="submit"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PostTicket;

import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../contexts/auth/AuthProvider";
import axios from "axios";

const PostTicket = () => {
  const { user } = useAuth();
  const ticketCodeRef = useRef("");
  const eventNameRef = useRef("");
  const forSaleRef = useRef("");
  const addressRef = useRef("");
  const postcodeRef = useRef("");
  const descriptionRef = useRef("");
  const [ticketInfo, setTicketInfo] = useState({});
  const priceRef = useRef(0);

  useEffect(() => {
    console.log(ticketInfo);
    const postTicket = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3012/tickets",
          ticketInfo,
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (Object.keys(ticketInfo).length > 0) {
      postTicket();
    }
  }, [ticketInfo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTicketInfo({
      ticket_owner: user.id,
      ticket_code: ticketCodeRef.current.value,
      event_name: eventNameRef.current.value,
      address: addressRef.current.value,
      postcode: postcodeRef.current.value,
      for_sale: forSaleRef.current.value === "TRUE",
      description: descriptionRef.current.value,
      price: priceRef.current.value,
    });
  };

  //   const handleTicketCodeChange = (event) => {
  //     const value = event.target.value;
  //     const isValid = /^TIK-\d{6}$/.test(value);
  //     event.target.setCustomValidity(
  //       isValid ? "" : "Please enter a valid TIK code in the format TIK-123456"
  //     );
  //     ticketCodeRef.current = value;
  //   };

  return (
    <div className="flex flex-col w-full px-4 gap-8 h-full overflow-y-scroll justify-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold uppercase mb-4">Upload a ticket</h1>
        <div className="flex flex-col gap-4">
          <div className="flex w-full justify-between">
            <input
              className="px-4 py-2 w-1/6 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              id="event-name"
              type="text"
              placeholder="event name"
              maxLength={50}
              required
              ref={eventNameRef}
            />

            <input
              className="px-4 py-2 w-2/6 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              id="ticket-code"
              type="text"
              placeholder="ticket code"
              pattern="TIK-\d{6}"
              required
              ref={ticketCodeRef}
            />

            <select
              id="for-sale"
              className="px-4 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              ref={forSaleRef}
              required
            >
              <option value="">For sale?</option>
              <option value="FALSE">False</option>
              <option value="TRUE">True</option>
            </select>
            <input
              type="number"
              placeholder="£ Price"
              className="px-4 w-1/6 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              min={0}
              required
              ref={priceRef}
            />
          </div>
          <div className="flex w-full gap-4">
            <input
              className="px-4 py-2 w-1/2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              id="address"
              type="text"
              placeholder="Address"
              required
              ref={addressRef}
            />
            <input
              className="px-4 py-2 w-1/2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              id="postcode"
              type="text"
              placeholder="Postcode"
              required
              ref={postcodeRef}
            />
          </div>
          <textarea
            id="description"
            name="description"
            className="px-4 py-2 w-full bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            ref={descriptionRef}
            required
          />
        </div>
        <button
          className="w-full mt-4 bg-purple-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostTicket;
