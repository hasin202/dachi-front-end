import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <p className="font-bold text-xl mb-4">Welcome to DACHI</p>
      <NavLink to="/signup">
        <button className="w-32 px-8 py-2 border border-black rounded">
          Sign up
        </button>
      </NavLink>
      <NavLink to="/login">
        <button className="w-32 px-8 py-2 border border-black rounded bg-black text-white">
          Log in
        </button>
      </NavLink>
    </div>
  );
};

export default Home;
