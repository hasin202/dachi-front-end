import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../error";
import { useAuth } from "../../../contexts/auth/AuthProvider";
import Ticket from "./tickets";
import { NavLink } from "react-router-dom";

const UserTickets = () => {
  const { user } = useAuth();
  console.log(user.id);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:3012/user/${user.id}`);
        const data = res.data;
        setFetchedData(data);
      } catch (error) {
        setError(error.response.data);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex justify-end pr-6">
        <NavLink to="post-ticket">
          <button className="border borger-gray-500 rounded px-4 py-2 text-gray-500 transition ease-in-out delay-50 hover:border-purple-500 hover:text-purple-500">
            ADD TICKET
          </button>
        </NavLink>
      </div>
      {error ? (
        <Error errorInfo={error} />
      ) : (
        <div className="flex flex-col w-full px-4 gap-8 h-full overflow-y-scroll">
          {fetchedData.map((data) => (
            <Ticket key={data.ticket_id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserTickets;
