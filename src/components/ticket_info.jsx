import { useState, useEffect } from "react";
import { formatDate, formatTime } from "../utils/formatting";

const TicketInfo = ({ ticket, state }) => {
  const [startDateFormatted, setStartDateFormatted] = useState();
  const [endDateFormatted, setEndDateFormatted] = useState();
  const [startTimeFormatted, setStartTimeFormatted] = useState();
  const [endTimeFormatted, setEndTimeFormatted] = useState();
  const { event_name, address, postcode, start, end, description, price } =
    ticket;
  useEffect(() => {
    setStartDateFormatted(formatDate(ticket.start));
    setStartTimeFormatted(formatTime(ticket.start));
    setEndDateFormatted(formatDate(ticket.end));
    setEndTimeFormatted(formatTime(ticket.end));
  }, [ticket, state]);

  return (
    <div>
      <div className="flex w-full justify-between text-5xl font-extrabold">
        <p className="mb-2 uppercase">{event_name}</p>
        <p className="text-purple-700">{`£${price}`}</p>
      </div>
      <p className="text-xl font-light text-gray-600">{`${address}, ${postcode}`}</p>
      <p className="text-xl font-light text-gray-600">{`Start: ${startDateFormatted}, ${startTimeFormatted}`}</p>
      <p className="text-xl font-light text-gray-600 mb-8">
        {!end ||
        (startDateFormatted === endDateFormatted &&
          startTimeFormatted === endTimeFormatted)
          ? ""
          : `End: ${endDateFormatted}, ${endTimeFormatted}`}
      </p>
      <p className="text-xl font-light">{description}</p>
    </div>
  );
};

export default TicketInfo;
