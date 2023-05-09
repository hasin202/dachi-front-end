import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../error";

const UserTickets = () => {
  // e748a855-f765-478b-bb92-a8cffeaba5bf
  const user_id = `e748a855-f765-478b-bb92-a8cffaba5bf`;
  const [error, setError] = useState();

  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/user/${user_id}`);
        const data = res.data;
        setFetchedData(data[0]);
      } catch (error) {
        console.log(error);
        // if (error.code === "22P02") {
        //   // setError({
        //   //   heading: "You own no tickets.",
        //   //   body: "You can either buy tickets from the marketplace or add tickets to your account from this page",
        //   // });
        // }
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
