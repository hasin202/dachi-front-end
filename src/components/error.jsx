import error from "../assets/404.png";

const Error = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <img src={error} />
      <p className="text-5xl w-full text-center font-bold">
        NOT A VALID TICKET!
      </p>
      <p className="text-2xl w-full text-center font-light text-gray-500">
        Please select one from the list of displayed tickets
      </p>
    </div>
  );
};
export default Error;
