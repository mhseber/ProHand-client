import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { LuLogIn } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
const Navbar = () => {
  const { user, signOutUser, toggleTheme, theme } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Successful Sign Out");
      })
      .catch((error) => {
        console.log("Failed to Sign Out");
      });
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 shadow-md dark:bg-gray-900">
      <div className="p-6 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="text-white btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                {" "}
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="services">Services</NavLink>
              </li>
              <li>
                <details>
                  <summary>
                    <NavLink to="dashboard">Dashboard</NavLink>
                  </summary>
                  <ul className="p-2">
                    <li>
                      <Link to="allService">All Service</Link>
                    </li>
                    <li>
                      <Link to="ManageService">Manage Service</Link>
                    </li>
                    <li>
                      <Link to="BookedService">Booked-Service</Link>
                    </li>
                    <li>
                      <Link to="ServiceToDo">Service-To-Do</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <img className="w-16" src={Logo} alt="logo" />
          <a className="pl-5 text-4xl font-extrabold text-orange-600 ">
            <i>TechAid</i>
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="gap-6 px-1 menu menu-horizontal ">
            <li className="text-gray-300">
              {" "}
              <NavLink to="/">
                {" "}
                <FaHome />
                Home
              </NavLink>
            </li>
            <li className="text-gray-300">
              <NavLink to="services">
                {" "}
                <MdManageAccounts />
                Services
              </NavLink>
            </li>
            <li>
              <details>
                <summary className="text-gray-300">Dashboard</summary>
                <ul className="w-40 p-2">
                  <li>
                    <Link to="allService">All Service</Link>
                  </li>
                  <li>
                    <Link to="ManageService">Manage Service</Link>
                  </li>
                  <li>
                    <Link to="BookedService">Booked-Service</Link>
                  </li>
                  <li>
                    <Link to="ServiceToDo">Service-To-Do</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="flex flex-col-reverse items-end gap-2 mt-2 navbar-end lg:flex-row lg:items-center lg:mt-0">
          {/* dark+light */}
          <button
            onClick={toggleTheme}
            className="px-4 py-2 text-white bg-gray-800 border border-yellow-700 rounded-full lg:mr-4 dark:bg-gray-600 hover:bg-gray-700"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
          {user ? (
            <>
              <button
                onClick={handleSignOut}
                className="font-semibold text-white btn bg-gradient-to-r from-gray-500 to-gray-800 "
              >
                <CiLogout />
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/auth/login">
                <a className="font-semibold text-white btn bg-gradient-to-r from-gray-500 to-gray-800 ">
                  <LuLogIn />
                  Log In
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
