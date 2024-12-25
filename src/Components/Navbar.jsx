import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"
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
                console.log('Successful Sign Out')
            })
            .catch(error => {
                console.log('Failed to Sign Out')
            })
    };


    return (
        <nav className="bg-gray-800 shadow-md sticky top-0 z-50" >
            <div className="navbar p-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li> <NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="services">Services</NavLink></li>
                            <li>
                                <details>
                                    <summary><NavLink to="dashboard">Dashboard</NavLink></summary>
                                    <ul className="p-2">
                                        <li><Link to="allService">All Service</Link></li>
                                        <li><Link to="singleService">Single Service</Link></li>
                                        <li><Link to="AddAService">Add A Service</Link></li>
                                        <li><Link to="ManageService">Manage Service</Link></li>
                                        <li><Link to="BookedService">Booked-Service</Link></li>
                                        <li><Link to="ServiceToDo">Service-To-Do</Link></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <img className="w-16" src={Logo} alt="logo" />
                    <a className=" text-3xl font-extrabold text-orange-600 pl-5"><i>ProHand</i></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 ">
                        <li className="text-gray-300"> <NavLink to="/"> <FaHome />Home</NavLink></li>
                        <li className="text-gray-300"><NavLink to="services"> <MdManageAccounts />Services</NavLink></li>
                        <li>
                            <details>
                                <summary className="text-gray-300">Dashboard</summary>
                                <ul className="p-2 w-40">
                                    <li><Link to="addService">Add Service</Link></li>
                                    <li><Link to="allService">All Service</Link></li>
                                    <li><Link to="ManageService">Manage Service</Link></li>
                                    <li><Link to="BookedService">Booked-Service</Link></li>
                                    <li><Link to="ServiceToDo">Service-To-Do</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* dark+light */}
                    <button
                        onClick={toggleTheme}
                        className=" hidden lg:block bg-gray-800 text-white px-2 md:px-4 py-2 mr-4 rounded-full hover:bg-gray-700 border border-yellow-700"
                    >
                        {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </button>
                    {
                        user ? <>
                            <button onClick={handleSignOut}
                                className="btn bg-gradient-to-r from-gray-500 to-gray-800 font-semibold text-white ">
                                <CiLogout />
                                Log Out</button>
                        </> : <>
                            <Link to="/auth/login">
                                <a className="btn  bg-gradient-to-r from-gray-500 to-gray-800 font-semibold text-white ">
                                    <LuLogIn />
                                    Log In</a>
                            </Link>
                        </>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;