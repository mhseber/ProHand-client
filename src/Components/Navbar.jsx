import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"

const Navbar = () => {

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50" >
            <div className="navbar p-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                        <li><a>Add Service</a></li>
                                        <li><a>Manage Service</a></li>
                                        <li><a>Booked-Services</a></li>
                                        <li><a>Service-To-Do</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <img className="w-16" src={Logo} alt="logo" />
                    <a className=" text-3xl font-extrabold text-orange-600 pl-5"><i>ProHand</i></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <li> <NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="services">Services</NavLink></li>
                        <li>
                            <details>
                                <summary><NavLink to="dashboard">Dashboard</NavLink></summary>
                                <ul className="p-2">
                                    <li><a>Add Service</a></li>
                                    <li><a>Manage Service</a></li>
                                    <li><a>Booked-Services</a></li>
                                    <li><a>Service-To-Do</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="login">
                        <a className="btn">Login</a>
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;