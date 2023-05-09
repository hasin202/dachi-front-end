import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../error";
import { useAuth } from "../../../contexts/auth/AuthProvider";

const UserTickets = () => {
  const { user } = useAuth();
  const [error, setError] = useState();

  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:3012/user/${user.id}`);
        const data = res.data;
        setFetchedData(data[0]);
      } catch (error) {
        setError(error.response.data);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-end">
        <button className="border borger-gray-500 rounded px-4 py-2 text-gray-500 transition ease-in-out delay-50 hover:border-purple-500 hover:text-purple-500">
          ADD TICKET
        </button>
      </div>
      {error ? (
        <Error errorInfo={error} />
      ) : (
        <p>{JSON.stringify(fetchedData)}</p>
      )}
    </div>
  );
};

export default UserTickets;
