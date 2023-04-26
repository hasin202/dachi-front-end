import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="w-1/5 bg-slate-400 text-3xl font-bold">
      <p>DACHI</p>
      <nav className="flex flex-col">
        <Link to="/marketplace" className="">
          Marketplace
        </Link>
        <Link to="/cart" className="">
          Cart
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
