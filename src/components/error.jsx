import errorImg from "../assets/404.png";

const Error = ({ errorInfo }) => {
  const { heading, body } = errorInfo;
  return (
    <div className="w-full flex flex-col gap-2 items-center justify-center">
      <img className="w-96 h-96" src={errorImg} />
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
