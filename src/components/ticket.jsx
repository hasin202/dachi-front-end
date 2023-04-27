import { useState, useEffect } from "react";

const Ticket = ({
  ticket_id,
  event_name,
  address,
  postcode,
  price,
  start,
  end,
}) => {
  const [startDateFormatted, setStartDateFormatted] = useState();
  const [endDateFormatted, setEndDateFormatted] = useState();
  const [startTimeFormatted, setStartTimeFormatted] = useState();
  const [endTimeFormatted, setEndTimeFormatted] = useState();
  useEffect(() => {
    const formatted_start_date = new Date(start).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const formatted_start_time = new Date(start).toLocaleTimeString("en-GB", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    const formatted_end_date = new Date(end).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const formatted_end_time = new Date(end).toLocaleTimeString("en-GB", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    setStartDateFormatted(formatted_start_date);
    setStartTimeFormatted(formatted_start_time);
    setEndDateFormatted(formatted_end_date);
    setEndTimeFormatted(formatted_end_time);
  }, []);

  return (
    <div className="w-full shrink-0 flex h-60 border border-gray-400 rounded-2xl px-12 py-8 items-center justify-between">
      <div className="flex h-full">
        <div className="flex flex-col h-full text-xl justify-center gap-2 border-r border-gray-400 pr-12">
          <p>{`${startDateFormatted} -`}</p>
          {!end || endDateFormatted === startDateFormatted ? null : (
            <p>{endDateFormatted}</p>
          )}
          <p className="text-gray-400 text-md">{`${startTimeFormatted} ${
            !end || endTimeFormatted === startTimeFormatted
              ? ""
              : `- ${endTimeFormatted}`
          }`}</p>
        </div>
        <div className="pl-8 flex flex-col justify-center gap-2">
          <p className="text-2xl font-bold">{event_name}</p>
          <p className="text-lg">{address}</p>
          <p className="text-lg">{postcode}</p>
        </div>
      </div>
      <p className="text-5xl text-purple-700">{`£${price}`}</p>
    </div>
  );
};

export default Ticket;
