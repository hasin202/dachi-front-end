import { useRef, useState } from "react";
import { useAuth } from "../../../contexts/auth/AuthProvider";

const PostTicket = () => {
  const { user } = useAuth();
  const ticketCodeRef = useRef("");
  const eventNameRef = useRef("");
  const forSaleRef = useRef("");
  const addressRef = useRef("");
  const [formResult, setFormResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormResult(
      `Submitted ticket code: ${ticketCodeRef.current}, event name: ${eventNameRef.current}, for sale: ${forSaleRef.current}`
    );
  };

  const handleTicketCodeChange = (event) => {
    const value = event.target.value;
    const isValid = /^TIK-\d{6}$/.test(value);
    event.target.setCustomValidity(
      isValid ? "" : "Please enter a valid TIK code in the format TIK-123456"
    );
    ticketCodeRef.current = value;
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
                ref={eventNameRef}
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
                onChange={handleTicketCodeChange}
                ref={ticketCodeRef}
              />
            </div>
            <select
              id="for-sale"
              className="px-4 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              onChange={(event) => (forSaleRef.current = event.target.value)}
              ref={forSaleRef}
              required
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
            onChange={(event) => (addressRef.current = event.target.value)}
            ref={addressRef}
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
