import { useLocation } from "react-router-dom";
import Error from "./error";

const IndividualTicket = () => {
  const { state } = useLocation();
  if (!state) {
    return <Error />;
  }
  const { ticket_id, event_name, address, postcode, price, start, end } =
    state.data || {};
  return <div className="w-full">{event_name}</div>;
};

export default IndividualTicket;
