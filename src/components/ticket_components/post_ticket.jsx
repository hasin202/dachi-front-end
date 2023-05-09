// import { useState } from "react";
// import { useAuth } from "../../../contexts/auth/AuthProvider";

// const PostTicket = () => {
//   const { user } = useAuth();
//   const [ticketCode, setTicketCode] = useState("");
//   const [formResult, setFormResult] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setFormResult(`Submitted ticket code: ${ticketCode}`);
//   };

//   const handleTicketCodeChange = (event) => {
//     const value = event.target.value;
//     const isValid = /^TIK-\d{6}$/.test(value);
//     event.target.setCustomValidity(
//       isValid ? "" : "Please enter a valid TIK code in the format TIK-123456"
//     );
//     setTicketCode(value);
//   };

//   return (
//     <div className="flex flex-col w-full px-4 gap-8 h-full overflow-y-scroll">
//       <form onSubmit={handleSubmit}>
//         <h1 className="text-4xl font-bold uppercase mb-4">Upload a ticket</h1>
//         <div className="flex flex-col">
//           <div className="flex w-full justify-between">
//             <div>
//               <input
//                 className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="event-name"
//                 type="text"
//                 placeholder="event name"
//                 maxLength={50}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="ticket-code"
//                 type="text"
//                 placeholder="ticket code"
//                 pattern="TIK-\d{6}"
//                 required
//                 value={ticketCode}
//                 onChange={handleTicketCodeChange}
//               />
//             </div>
//             <select
//               id="for-sale"
//               className="px-4 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option selected>For sale?</option>
//               <option value="FALSE">False</option>
//               <option value="TRUE">True</option>
//             </select>
//           </div>
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           type="submit"
//         >
//           Submit
//         </button>
//       </form>
//       {formResult && <p>{formResult}</p>}
//     </div>
//   );
// };

// export default PostTicket;

import { useState } from "react";
import { useAuth } from "../../../contexts/auth/AuthProvider";

const PostTicket = () => {
  const { user } = useAuth();
  const [ticketCode, setTicketCode] = useState("");
  const [eventName, setEventName] = useState("");
  const [forSale, setForSale] = useState("");
  const [formResult, setFormResult] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormResult(
      `Submitted ticket code: ${ticketCode}, event name: ${eventName}, for sale: ${forSale}`
    );
  };

  const handleTicketCodeChange = (event) => {
    const value = event.target.value;
    const isValid = /^TIK-\d{6}$/.test(value);
    event.target.setCustomValidity(
      isValid ? "" : "Please enter a valid TIK code in the format TIK-123456"
    );
    setTicketCode(value);
  };

  return (
    <div className="flex flex-col w-full px-4 gap-8 h-full overflow-y-scroll">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold uppercase mb-4">Upload a ticket</h1>
        <div className="flex flex-col gap-4">
          <div className="flex w-full justify-between">
            <div>
              <input
                className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="event-name"
                type="text"
                placeholder="event name"
                maxLength={50}
                required
                value={eventName}
                onChange={(event) => setEventName(event.target.value)}
              />
            </div>
            <div>
              <input
                className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ticket-code"
                type="text"
                placeholder="ticket code"
                pattern="TIK-\d{6}"
                required
                value={ticketCode}
                onChange={handleTicketCodeChange}
              />
            </div>
            <select
              id="for-sale"
              className="px-4 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={forSale}
              onChange={(event) => setForSale(event.target.value)}
            >
              <option value="">For sale?</option>
              <option value="FALSE">False</option>
              <option value="TRUE">True</option>
            </select>
          </div>
          <input
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Address"
            required
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
      {formResult && <p>{formResult}</p>}
    </div>
  );
};

export default PostTicket;
