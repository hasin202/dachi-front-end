import errorImg from "../assets/404.png";

const Error = ({ error }) => {
  const { heading, body } = error;
  return (
    <div className="w-full flex flex-col gap-2">
      <img src={errorImg} />
      <p className="text-5xl w-full text-center font-bold uppercase">
        {heading}
      </p>
      <p className="text-2xl w-full text-center font-light text-gray-500">
        {body}
      </p>
    </div>
  );
};
export default Error;
