import { NavLink } from "react-router-dom";

const Nav = () => {
  const linkNames = [
    "Home",
    "Marketplace",
    "Cart",
    "My Tickets",
    "Card Details",
  ];
  const linkPaths = [
    "/",
    "/marketplace",
    "/cart",
    "/my-tickets",
    "/card-details",
  ];

  const clear = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <div className="w-1/3 pr-12 py-8 border-r border-gray-400 h-3/4">
      <p className="text-3xl font-black mb-4">DACHI</p>
      <nav className="flex flex-col gap-1 text-xl">
        {linkNames.map((link, i) => (
          <NavLink
            to={linkPaths[i]}
            className={({ isActive }) =>
              isActive
                ? "bg-black px-2 py-1 text-white rounded font-light"
                : "px-2 py-1 font-light"
            }
            key={i}
          >
            {link}
          </NavLink>
        ))}
      </nav>
      <button
        className="border border-purple-700 text-purple-700 w-full rounded py-1 font-light"
        onClick={clear}
      >
        Clear cart
      </button>
    </div>
  );
};

export default Nav;
